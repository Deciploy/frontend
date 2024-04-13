import { AlertProvider } from '@components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { RoutesConfig } from '../config';
import { AppLauncherProvider, AuthProvider } from './providers';

const queryClient = new QueryClient();

export function App() {
  const router = createBrowserRouter(RoutesConfig.routes);

  return (
    <AppLauncherProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <AlertProvider>
            <RouterProvider router={router} />
            <ToastContainer />
          </AlertProvider>
        </QueryClientProvider>
      </AuthProvider>
    </AppLauncherProvider>
  );
}

export default App;
