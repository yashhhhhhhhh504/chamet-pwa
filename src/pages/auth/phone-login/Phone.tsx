import { useRef } from 'react';

import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { ChevronDownIcon } from '@/components/ui/icons/svg-icons';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function Phone() {
  const navigate = useNavigate();

  const phoneNumberRef = useRef<HTMLInputElement>(null);

  return (
    <div className="phone px-2">
      <h1 className="heading text-2xl font-semibold text-black">Welcome</h1>
      <div className="phone py-4 md:py-0 md:pl-0">
        <p className="my-4 text-xl font-medium text-black">
          Enter Your Mobile Number
        </p>
        <div className="mt-6 flex items-center bg-transparent">
          <Label
            htmlFor="country-input"
            className="flex items-center gap-2 rounded-l-full bg-secondary/30 px-2 focus:outline-primary">
            <img
              className="location-icon h-6"
              src="/images/flag-india.png"
              alt="India flag"
            />
            <span className="text-xl text-black">+91</span>
            <ChevronDownIcon className="h-12 w-12 " />
          </Label>

          <Input
            className="rounded-r-full border-none bg-secondary/50 py-[1.45rem] text-xl tracking-widest text-black outline-[none] focus:border-none focus:outline-[none]"
            type="number"
            ref={phoneNumberRef}
            placeholder="9876832214"
            onChange={() => {
              if (phoneNumberRef.current?.value.length === 10) {
                phoneNumberRef.current?.blur();
              }
            }}
          />
        </div>
        <div className="submit-button pt-6">
          <Button
            size="lg"
            className="w-full rounded-full bg-indigo-700 bg-opacity-90 py-6 shadow-lg drop-shadow-xl hover:bg-indigo-700/90"
            onClick={() => {
              navigate('/auth/login-using-phone/enter-otp');
            }}>
            {' '}
            Next{' '}
          </Button>
        </div>
      </div>
    </div>
  );
}
