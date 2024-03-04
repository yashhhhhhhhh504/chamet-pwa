import { useMediaQuery } from 'react-responsive';

import { LoginForm } from './LoginForm';
import { LoginScreenDesktop } from './LoginScreenDesktop';
import { LoginScreenMobile } from './LoginScreenMobile';

export function LoginScreen() {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  if (isDesktop) {
    return (
      <LoginScreenDesktop>
        <LoginForm />
      </LoginScreenDesktop>
    );
  }

  return (
    <LoginScreenMobile>
      <LoginForm />
    </LoginScreenMobile>
  );
}
