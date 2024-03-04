import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Overlay } from '@/components/compound/overlay';
import { Button } from '@/components/ui/button';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@/components/ui/icons/svg-icons';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export function WalletScreen() {
  const navigate = useNavigate();

  const [showPaymentOptions, togglePaymentOptions] = useState<boolean>(false);

  return (
    <div className="wallet-screen w-full md:pl-10">
      <nav className="flex min-w-full border-b bg-background px-0 pb-2 pt-4">
        <ul className="flex w-full items-center justify-between">
          <li>
            <Button variant="link" onClick={() => navigate(-1)}>
              <ChevronLeftIcon className="h-5 w-5 text-black" />
            </Button>
          </li>
          <li>
            <h1 className="text-center text-xl font-medium text-black">
              My Balance
            </h1>
          </li>
          <li className="h-1 w-1/4" />
        </ul>
      </nav>
      <div className="money-section flex flex-col items-center gap-8 py-12">
        <img
          src="/images/rupee.png"
          className="h-20 w-20 object-contain"
          alt="rupee"
        />
        <p className="text-xl font-semibold text-black">Balance: Rs. 500</p>
        <Button
          variant="link"
          onClick={() => togglePaymentOptions((prev) => !prev)}>
          <span className="text-lg font-medium text-red-600">Add Money</span>
          <ChevronRightIcon className="h-4 w-4 stroke-red-600" />
        </Button>
      </div>
      {showPaymentOptions && (
        <Overlay>
          <div className="payment-options flex h-full w-full flex-col justify-end md:items-center md:justify-center">
            <div className="flex w-full flex-col justify-end rounded-t-3xl bg-white px-0 py-8 md:w-1/3 md:items-center md:rounded-xl">
              <div className="options px-6">
                <RadioGroup
                  defaultValue="upi"
                  defaultChecked
                  className="text-black">
                  <div className="option flex items-center gap-4 py-4">
                    <RadioGroupItem
                      value="upi"
                      id="r1"
                      className="border-black p-2 text-white focus:border-none focus:bg-primary focus:ring-2 focus:ring-black focus:ring-offset-1"
                    />
                    <Label htmlFor="r1">UPI</Label>
                  </div>
                  <div className="option flex items-center gap-4 py-4">
                    <RadioGroupItem
                      value="card"
                      id="r2"
                      className="border-black border-black p-2 p-2 text-white text-white focus:border-none focus:bg-primary focus:ring-2 focus:ring-black focus:ring-offset-1"
                    />
                    <Label htmlFor="r2">
                      Credit or Debit Card (VISA / MasterCard / MIR){' '}
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="action-buttons flex justify-end gap-10 px-6 py-6">
                <Button
                  size="sm"
                  onClick={() => togglePaymentOptions((prev) => !prev)}
                  className="bg-secondary px-6 font-bold">
                  Cancel
                </Button>

                <Button
                  size="sm"
                  onClick={() => togglePaymentOptions((prev) => !prev)}
                  className="bg-primary px-6 font-bold">
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </Overlay>
      )}
    </div>
  );
}
