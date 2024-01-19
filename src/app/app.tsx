import { AlertProvider } from '@components';
import { httpClient } from '@http-client';
import { AuthProvider } from 'react-auth-utils';
import { AuthState } from 'react-auth-utils/src/lib/types';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { RoutesConfig } from '../config';
import AppLauncherProvider from './providers/AppLauncherProvider';

export function App() {
  const router = createBrowserRouter(RoutesConfig.routes);

  const handleAuthStateChange = (state: AuthState | null) => {
    if (state?.token) {
      httpClient.interceptors.request.use((config) => {
        if (!config.url?.includes('auth')) {
          config.headers['Authorization'] = `Bearer ${state.token}`;
        }
        return config;
      });
    }
  };

  return (
    <AppLauncherProvider>
      <AuthProvider onAuthStateChange={handleAuthStateChange}>
        <AlertProvider>
          <RouterProvider router={router} />
        </AlertProvider>
      </AuthProvider>
    </AppLauncherProvider>
  );
}

export default App;
