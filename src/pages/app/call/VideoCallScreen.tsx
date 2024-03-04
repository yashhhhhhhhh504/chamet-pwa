// eslint-disable-next-line import/extensions
import { useMediaQuery } from 'react-responsive';

// eslint-disable-next-line import/extensions
import womanProfile from '@/assets/woman-profile.png';
import { Button } from '@/components/ui/button';
import {
  MicIcon,
  SunshineIcon,
  SwitchCameraIcon,
  CloseIcon,
} from '@/components/ui/icons/svg-icons';

export function VideoCallScreen() {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div>
      <div
        className="flex min-h-screen flex-col items-center justify-between bg-cover bg-center md:w-screen md:gap-8 md:rounded-none md:bg-center md:bg-no-repeat"
        style={{
          backgroundImage: `url(${womanProfile})`,
        }}>
        <div className="user-container w-full px-4 md:w-screen">
          <div className="user flex w-full items-start justify-between py-6">
            <div className="user-info py-2">
              <p className="text-xl text-white"> Username</p>
              <p className="text-lg text-white">02:35</p>
            </div>
            <div className="user-image">
              <img
                src="/images/video-call-user.png"
                className="h-32 w-32"
                alt="video-call"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-between rounded-t-3xl bg-white/10 px-0 pb-8 md:w-screen md:items-center md:rounded-t-none">
          <div className="mb-8 mt-4 h-1 w-16 rounded-md bg-secondary/30 md:m-0 md:rounded-none" />
          <div className="action-buttons-I flex w-full items-center justify-between px-2 py-2 md:w-1/4 md:py-4">
            {!isDesktop && (
              <div className="action-item flex flex-col items-center gap-2">
                <Button size="icon" className="bg-secondary/30">
                  {' '}
                  <SunshineIcon className="h-12 w-12 fill-white" />
                </Button>
                <span className="text-white">Effects</span>
              </div>
            )}
            <div className="action-item flex flex-col items-center gap-2">
              <Button size="icon" className="bg-secondary/30">
                {' '}
                <MicIcon className="h-12 w-12 fill-white" />{' '}
              </Button>
              <span className="text-white">Mute</span>
            </div>
            {!isDesktop && (
              <div className="action-item flex flex-col items-center gap-2">
                <Button size="icon" className="bg-secondary/30">
                  {' '}
                  <SwitchCameraIcon className="h-12 w-12 fill-white" />{' '}
                </Button>
                <span className="text-white">Flip</span>
              </div>
            )}
            <div className="action-item flex flex-col items-center gap-2">
              <Button size="icon" className="bg-red-600">
                {' '}
                <CloseIcon className="h-12 w-12 fill-white" />{' '}
              </Button>
              <span className="text-white">Cancel</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
