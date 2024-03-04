import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  ChevronLeftWhiteIcon,
  CopyIcon,
} from '@/components/ui/icons/svg-icons';
import { ScrollArea } from '@/components/ui/scroll-area';

export function InviteFriendsScreen() {
  const navigate = useNavigate();

  return (
    <div className="invite-friends-screen relative bg-primary">
      <div
        className="absolute left-0 top-0  h-72 w-72 overflow-hidden bg-contain bg-no-repeat"
        style={{
          backgroundImage: "url('/images/ellipse-76-rf.svg')",
        }}
      />
      <div
        className="absolute right-0 top-28 h-72 w-32 overflow-hidden bg-contain bg-no-repeat"
        style={{
          backgroundImage: "url('/images/ellipse-76-lf.svg')",
        }}
      />

      <ScrollArea className="">
        <div className="flex h-[10vh] w-2/3 items-center justify-between py-2 md:w-full md:justify-start">
          <div className="back-button">
            <Button variant="link" onClick={() => navigate(-1)}>
              <ChevronLeftWhiteIcon className="stroke-white" />
            </Button>
          </div>
          <div className="user-info md:mx-auto">
            <p className="text-2xl font-medium text-white">Invite Friends</p>
          </div>
        </div>
        <div className="content flex h-[90vh] flex-col justify-between md:w-full md:items-center md:justify-start md:px-4">
          <div className="invite-image flex flex-col items-center gap-4 md:w-full">
            <img
              src="/images/invite-box.png"
              className="h-96 w-auto object-contain"
              alt="invite-box"
            />
            <p className="text-3xl font-bold tracking-wide text-white">
              {' '}
              Invite Friends!
            </p>
          </div>
          <div className="flex flex-col justify-end rounded-t-3xl border-t-2 bg-white px-6 py-8 md:w-full">
            <p className="mb-4 text-xl font-medium text-black">
              Share your invite link
            </p>
            <p className=" flex items-center justify-between border-b border-black py-2">
              <span className="text-xl font-semibold">
                https://chatapp.invite...
              </span>
              <CopyIcon className="h-8 w-8" />
            </p>
            <div className="submit-button pt-10">
              <Button
                size="lg"
                className="w-full rounded-full bg-indigo-700 bg-opacity-90 py-6 shadow-lg drop-shadow-xl hover:bg-indigo-700/90"
                onClick={() => {
                  navigate('/auth/login-using-phone/enter-otp');
                }}>
                {' '}
                Invite Friends{' '}
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
