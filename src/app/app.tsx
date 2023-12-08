import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RoutesConfig } from '../config';
import AppLauncherProvider from './providers/AppLauncherProvider';
import { httpClient } from '@http-client';
import { AuthState } from 'react-auth-utils/src/lib/types';
import { AuthProvider } from 'react-auth-utils';

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
        <RouterProvider router={router} />
      </AuthProvider>
    </AppLauncherProvider>
  );
}

export default App;
