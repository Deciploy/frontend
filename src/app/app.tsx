import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RoutesConfig } from '../config';
import AppLauncherProvider from './providers/AppLauncherProvider';

export function App() {
  const router = createBrowserRouter(RoutesConfig.routes);

  return (
    <AppLauncherProvider>
      <RouterProvider router={router} />
    </AppLauncherProvider>
  );
}

export default App;
