import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';

export function LoginForm() {
  const navigate = useNavigate();

  return (
    <div className="flex w-full flex-col justify-end px-8">
      <div className="action-buttons flex min-h-full flex-col items-center justify-end">
        <div className="w-11/12 py-2">
          <Button
            size="lg"
            className="w-full rounded-full bg-red-600 bg-opacity-90 py-6 text-white shadow-lg drop-shadow-xl hover:bg-red-600/90"
            onClick={() => {
              navigate('/auth/login-using-phone');
            }}>
            {' '}
            Gmail{' '}
          </Button>
        </div>
        <div className="w-11/12 py-2">
          <Button
            size="lg"
            className="w-full rounded-full bg-indigo-700 bg-opacity-90 py-6 shadow-lg drop-shadow-xl hover:bg-indigo-700/90"
            onClick={() => {
              navigate('/auth/login-using-phone');
            }}>
            {' '}
            Phone{' '}
          </Button>
        </div>
      </div>
      <div className="footnote mt-16 md:mt-4">
        <p className="py-0 text-center text-lg font-medium text-white md:text-primary">
          By Signing in, you agree to the
        </p>
        <div className="links flex items-end justify-center py-0">
          <Button
            variant="link"
            className="px-2 py-1 text-center text-lg font-medium text-white underline md:text-primary">
            User Agreement
          </Button>
          <span className="px-0 py-1 text-white md:text-primary">{' & '}</span>
          <Button
            variant="link"
            className="px-2 py-1 text-center text-lg font-medium text-white underline md:text-primary">
            Privacy Policy
          </Button>
        </div>
      </div>
    </div>
  );
}
