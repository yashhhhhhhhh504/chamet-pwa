import { useLocation, Navigate } from 'react-router-dom';

import { useAuthentication } from '@/hooks/useAuthentication';

export function RequireAuth({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const { isLoggedIn } = useAuthentication();
  if (isLoggedIn === false) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  }

  return children;
}
