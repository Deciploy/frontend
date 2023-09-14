import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RoutesConfig } from '../config';

export function App() {
  const router = createBrowserRouter(RoutesConfig.routes);

  return <RouterProvider router={router} />;
}

export default App;
