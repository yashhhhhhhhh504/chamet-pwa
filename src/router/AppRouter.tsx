import { RouterProvider } from 'react-router-dom';

import { routes } from '@/router/Routes';

export function AppRouter() {
  return <RouterProvider router={routes} />;
}
