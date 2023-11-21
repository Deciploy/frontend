import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RoutesConfig } from '../config';
import AppLauncherProvider from './providers/AppLauncherProvider';
import { AuthData, UserAuthProvider } from '@user-auth';
import { httpClient } from '@http-client';

export function App() {
  const router = createBrowserRouter(RoutesConfig.routes);

  const handleAuthStateChange = (authData: AuthData | null) => {
    if (authData?.token) {
      httpClient.interceptors.request.use((config) => {
        console.log(config.url?.includes('auth'));
        if (!config.url?.includes('auth')) {
          config.headers['Authorization'] = `Bearer ${authData.token}`;
        }
        return config;
      });
    }
  };

  return (
    <AppLauncherProvider>
      <UserAuthProvider
        onAuthStateChange={(authData) => handleAuthStateChange(authData)}
      >
        <RouterProvider router={router} />
      </UserAuthProvider>
    </AppLauncherProvider>
  );
}

export default App;
