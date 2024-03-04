// eslint-disable-next-line import/extensions
import { ReactNode } from 'react';

// eslint-disable-next-line import/extensions
import loginBg from '@/assets/login-bg.jpeg';

type MobileLoginScreenProps = {
  children: ReactNode;
};

export function LoginScreenMobile({ children }: MobileLoginScreenProps) {
  return (
    <div>
      <div
        className="login-screen flex min-h-screen flex-col items-center justify-between bg-[#3087ec] bg-cover bg-center bg-blend-darken md:flex-col-reverse md:justify-center md:gap-8 md:bg-cover md:bg-no-repeat md:bg-blend-normal"
        style={{
          backgroundImage: `url(${loginBg})`,
        }}>
        <div className="logo-container">
          <img
            src="/funclub-logo.png"
            className="mx-auto h-[45vh] w-full object-contain py-6"
            alt="Chamet Logo"
          />
        </div>
        {children}
      </div>
    </div>
  );
}
