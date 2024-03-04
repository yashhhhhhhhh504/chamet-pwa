import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className="auth-wrapper bg-background-light m-0 h-screen w-screen p-0">
      <Outlet />
    </div>
  );
}
