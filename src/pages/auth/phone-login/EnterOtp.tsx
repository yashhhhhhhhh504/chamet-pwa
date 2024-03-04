import { useRef } from 'react';

import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { PencilIcon } from '@/components/ui/icons/misc-icons';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { useTimer } from '@/hooks/useTimer';
import { setAccessToken } from '@/lib/token';

export function EnterOtp() {
  const navigate = useNavigate();
  const { seconds, resetTimer } = useTimer();
  const { toast } = useToast();

  const formattedTime = format(new Date(0, 0, 0, 0, 0, seconds), 'mm:ss');

  const otpDigit1Ref = useRef<HTMLInputElement>(null);
  const otpDigit2Ref = useRef<HTMLInputElement>(null);
  const otpDigit3Ref = useRef<HTMLInputElement>(null);
  const otpDigit4Ref = useRef<HTMLInputElement>(null);

  return (
    <div className="phone px-2">
      <h1 className="heading text-2xl font-semibold text-black">Enter OTP</h1>
      <div className="phone py-2">
        <p className="py-1 text-xl font-medium text-black">
          Verification Code sent to
        </p>
        <p className="flex items-end gap-2 py-0 text-lg font-semibold text-black">
          <span className="py-0">+919876832214</span>
          <Button className="p-0" variant="link" onClick={() => navigate(-1)}>
            <PencilIcon className="" />
          </Button>
        </p>

        <div className="mt-6 flex items-center gap-8 md:gap-4">
          <Input
            className="rounded-2xl border-none bg-secondary/50 py-8 text-center text-xl tracking-widest text-black outline-[none] focus:border-none focus:outline-[none] "
            type="number"
            ref={otpDigit1Ref}
            min={0}
            max={9}
            maxLength={1}
            onChange={() => {
              otpDigit2Ref.current?.focus();
            }}
          />
          <Input
            className="rounded-2xl border-none bg-secondary/50 py-8 text-center text-xl tracking-widest text-black outline-[none] focus:border-none focus:outline-[none]"
            type="number"
            ref={otpDigit2Ref}
            min={0}
            max={9}
            maxLength={1}
            onChange={() => {
              otpDigit3Ref.current?.focus();
            }}
          />
          <Input
            className="rounded-2xl border-none bg-secondary/50 py-8 text-center text-xl tracking-widest text-black outline-[none] focus:border-none focus:outline-[none]"
            type="number"
            ref={otpDigit3Ref}
            min={0}
            max={9}
            maxLength={1}
            onChange={() => {
              otpDigit4Ref.current?.focus();
            }}
          />
          <Input
            className="rounded-2xl border-none bg-secondary/50 py-8 text-center text-xl tracking-widest text-black outline-[none] focus:border-none focus:outline-[none]"
            type="number"
            ref={otpDigit4Ref}
            min={0}
            max={9}
            maxLength={1}
            onChange={() => {
              otpDigit4Ref.current?.blur();
            }}
          />
        </div>
        <div className="resend-code flex items-center justify-between pt-4">
          <p>{formattedTime} sec</p>
          <Button
            disabled={false}
            variant="link"
            className="p-0 text-lg font-medium text-black/60"
            onClick={() => {
              toast({
                description: 'Otp has been sent to your number.',
              });
              resetTimer();
            }}>
            Resend
          </Button>
        </div>
        <div className="submit-button pt-6">
          <Button
            size="lg"
            className="w-full rounded-full bg-indigo-700 bg-opacity-90 py-6 shadow-lg drop-shadow-xl hover:bg-indigo-700/90"
            onClick={() => {
              setAccessToken(crypto.randomUUID());
              navigate('/app/home');
            }}>
            {' '}
            Submit{' '}
          </Button>
        </div>
      </div>
    </div>
  );
}
