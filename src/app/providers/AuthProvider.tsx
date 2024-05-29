import { User } from '@types';
import axios from 'axios';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface AuthContextValue {
  token: string | null;
  login: (newToken: string, expiration?: number | Date, user?: User) => void;
  logout: () => void;
  expiresAt: Date | null;
  userData: User | null;
}

const AuthContext = createContext<AuthContextValue>({
  expiresAt: null,
  userData: null,
  token: null,
  logout: () => {},
  login: () => {},
});

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  // State to hold the authentication token
  const [token, setToken_] = useState<string | null>(
    localStorage.getItem('token')
  );
  const [expiresAt, setExpiresAt] = useState<Date | null>(null);
  const [userData, setUserData] = useState<User | null>(null);

  // Function to set the authentication token with optional expiration and user data
  const login = (newToken: string, expiration?: number | Date, user?: User) => {
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

  const logout = () => {
    setToken_(null);
    setExpiresAt(null);
    setUserData(null);
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
      expiresAt,
      userData,
      login,
      logout,
    }),
    [token, expiresAt, userData]
  );

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  const isAuthenticated = !!authContext.token;
  return { ...authContext, isAuthenticated };
};
