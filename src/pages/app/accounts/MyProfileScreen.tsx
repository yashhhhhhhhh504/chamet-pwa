import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/extensions
import profile from '@/assets/woman-profile.png';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AddWhiteIcon, ChevronLeftIcon } from '@/components/ui/icons/svg-icons';

export function MyProfileScreen() {
  const navigate = useNavigate();

  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div
      style={{
        backgroundImage: `url(${profile})`,
      }}
      className="w-full bg-cover bg-center md:bg-no-repeat">
      <div className="back-button py-4">
        <Button variant="link" onClick={() => navigate(-1)}>
          <ChevronLeftIcon className="h-5 w-5 stroke-white" />
        </Button>
      </div>
      <div className="flex h-[90vh] flex-col justify-end bg-cover bg-center md:h-[100vh] md:items-center md:justify-center md:gap-8 md:bg-cover md:bg-no-repeat">
        <div className="flex w-full flex-col items-center justify-end rounded-t-3xl bg-white px-8 py-4 md:w-1/3 md:rounded-xl md:bg-white/20 md:py-16">
          {!isDesktop && (
            <div className="horizontal-separator h-[2px] w-24 bg-black" />
          )}
          <div className="w-full py-8">
            <div className="user-info flex w-full items-center justify-between gap-4 py-1">
              <Avatar className="h-20 w-20 ring-2 ring-red-500 ring-offset-2">
                <AvatarImage src="/images/woman-profile.png" alt="woman" />
                <AvatarFallback>Woman</AvatarFallback>
              </Avatar>
              <div className="user-info-text flex flex-col">
                <h3 className="text-lg font-medium text-black">Username</h3>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Button size="icon">
                  <AddWhiteIcon className="h-8 w-8" />
                </Button>
                <span>Follow</span>
              </div>
            </div>
          </div>
          <div className="badges-section flex w-full items-center justify-start gap-8 px-4 py-6">
            <Badge className="rounded-full bg-white">
              <img
                src="/images/flag-india.png"
                alt="flag-india"
                className="h-4 w-4"
              />
              <span className="ml-1 text-black">India</span>
            </Badge>
            <Badge className="rounded-full bg-white">
              <img
                src="/images/g-translate-icon.png"
                alt="flag-india"
                className="h-4 w-4"
              />
              <span className="ml-1 text-black">English</span>
            </Badge>
          </div>
          <div className="account-stats flex w-full items-center justify-between px-4 py-6">
            <div className="stat flex flex-col items-center">
              <p className="text-2xl font-medium text-black">0</p>
              <p className="text-sm font-medium text-black">Friends</p>
            </div>
            <div className="stat flex flex-col items-center">
              <p className="text-2xl font-medium text-black">0</p>
              <p className="text-sm font-medium text-black">Followers</p>
            </div>
            <div className="stat flex flex-col items-center">
              <p className="text-2xl font-medium text-black">0</p>
              <p className="text-sm font-medium text-black">Following</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
