import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';

import { LoginScreenDesktop } from '../login/LoginScreenDesktop';
import { LoginScreenMobile } from '../login/LoginScreenMobile';

export function PhoneLoginScreen() {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  if (isDesktop) {
    return (
      <LoginScreenDesktop>
        <div className="flex w-5/6 flex-col items-center justify-end rounded-t-3xl bg-white px-0 py-0">
          <Outlet />
        </div>
      </LoginScreenDesktop>
    );
  }

  return (
    <LoginScreenMobile>
      <div className="flex w-full flex-col justify-end rounded-t-3xl bg-white px-0 py-4 md:w-1/2">
        <Outlet />
      </div>
    </LoginScreenMobile>
  );
}
