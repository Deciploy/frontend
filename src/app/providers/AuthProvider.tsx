import axios from 'axios';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { User } from 'src/data';

interface AuthContextValue {
  token: string | null;
  setToken: (newToken: string, expiration?: number | Date, user?: User) => void;
  expiresAt: Date | null;
  userData: User | null;
}

const AuthContext = createContext<AuthContextValue>({
  token: null,
  setToken: () => {},
  expiresAt: null,
  userData: null,
});

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken_] = useState<string | null>(
    localStorage.getItem('token')
  );
  const [expiresAt, setExpiresAt] = useState<Date | null>(null);
  const [userData, setUserData] = useState<User | null>(null);

  // Function to set the authentication token with optional expiration and user data
  const setToken = (
    newToken: string,
    expiration?: number | Date,
    user?: User
  ) => {
    setToken_(newToken);
    if (expiration) {
      const expiresIn =
        typeof expiration === 'number'
          ? new Date(Date.now() + expiration * 1000)
          : expiration;
      setExpiresAt(expiresIn);
    } else {
      setExpiresAt(null);
    }
    setUserData(user ?? null);
  };

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
    localStorage.setItem('token', token || '');

    // Check for expired token on mount and on token change
    const isExpired = expiresAt && expiresAt < new Date();
    if (isExpired) {
      setToken_(null); // Clear token and potentially refresh or handle expiration
    }
  }, [token, expiresAt]);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      expiresAt,
      userData,
    }),
    [token, expiresAt, userData]
  );

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
