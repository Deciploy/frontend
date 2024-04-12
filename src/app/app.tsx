import { AlertProvider } from '@components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { RoutesConfig } from '../config';
import { AppLauncherProvider, AuthProvider } from './providers';

const queryClient = new QueryClient();

export function App() {
  const router = createBrowserRouter(RoutesConfig.routes);

  // const handleAuthStateChange = (state: AuthState | null) => {
  //   console.log('Auth state changed', state);
  //   if (state?.token) {
  //     httpClient.interceptors.request.use((config) => {
  //       if (!config.url?.includes('auth')) {
  //         config.headers['Authorization'] = `Bearer ${state.token}`;
  //       }
  //       return config;
  //     });
  //   }
  // };

  return (
    <AppLauncherProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <AlertProvider>
            <RouterProvider router={router} />
          </AlertProvider>
        </QueryClientProvider>
      </AuthProvider>
    </AppLauncherProvider>
  );
}

export default App;
