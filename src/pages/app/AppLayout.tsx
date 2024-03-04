import { Outlet } from 'react-router-dom';

import { RequireAuth } from '@/components/functional/require-auth';

export function AppLayout() {
  return (
    <RequireAuth>
      <div className="App bg-background-light m-0 h-screen w-screen p-0">
        <div className="m-0 flex justify-start p-0">
          <Outlet />
        </div>
      </div>
    </RequireAuth>
  );
}
