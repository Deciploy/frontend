import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RoutesConfig } from '../config';
import AppLauncherProvider from './providers/AppLauncherProvider';
import { UserAuthProvider } from '@user-auth';

export function App() {
  const router = createBrowserRouter(RoutesConfig.routes);

  return (
    <AppLauncherProvider>
      <UserAuthProvider>
        <RouterProvider router={router} />
      </UserAuthProvider>
    </AppLauncherProvider>
  );
}

export default App;
