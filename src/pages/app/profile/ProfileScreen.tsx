import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/extensions
import profile from '@/assets/woman-profile.png';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  AddWhiteIcon,
  AudioCallIcon,
  ChevronLeftIcon,
  VideoHomeActiveIcon,
} from '@/components/ui/icons/svg-icons';

export function ProfileScreen() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundImage: `url(${profile})`,
      }}
      className="flex flex-col border bg-cover bg-center md:bg-no-repeat">
      <div className="back-button py-4">
        <Button variant="link" onClick={() => navigate(-1)}>
          <ChevronLeftIcon className="h-5 w-5 stroke-white" />
        </Button>
      </div>
      <div className="flex h-full flex-col justify-end bg-cover bg-center ">
        <div className="flex w-full flex-col items-center justify-end rounded-t-3xl bg-white px-8 py-4">
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
          <div className="badges-section flex items-center justify-start gap-8 px-4 py-6">
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
          <div className="py-4">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => navigate('/app/home/profile-detailed')}>
              View Profile
            </Button>
          </div>
          <div className="action-buttons flex items-center justify-center gap-8 pt-24 md:flex-wrap md:py-12">
            <Button
              variant="outline"
              onClick={() => {}}
              className="rounded-full px-6 py-6">
              {' '}
              <span className="flex items-center gap-6">
                <AudioCallIcon className="h-5 w-5 stroke-accent" />{' '}
                <span className="flex flex-col">
                  <span>Voice Call</span>
                  <span className="text-black/60">
                    <img
                      src="/images/rupee.png"
                      alt="rupeee"
                      className="mr-2 inline-flex h-4 w-4"
                    />
                    {' 100/min'}
                  </span>
                </span>
              </span>
            </Button>
            <Button onClick={() => {}} className="rounded-full px-6 py-6">
              {' '}
              <span className="flex items-center gap-6">
                <VideoHomeActiveIcon className="h-5 w-5 fill-primary stroke-accent" />{' '}
                <span className="flex flex-col">
                  <span>Video Call</span>
                  <span className="text-white">
                    <img
                      src="/images/rupee.png"
                      alt="rupeee"
                      className="mr-2 inline-flex h-4 w-4"
                    />
                    {' 200/min'}
                  </span>
                </span>
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
