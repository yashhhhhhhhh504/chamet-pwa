import { Link, useNavigate } from 'react-router-dom';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  LogoutIcon,
  ProfileIcon,
  SettingsIcon,
  VideoHomeActiveIcon,
} from '@/components/ui/icons/svg-icons';
import { ScrollArea } from '@/components/ui/scroll-area';

export function AccountScreen() {
  const navigate = useNavigate();

  return (
    <div className="account w-full">
      <div
        className="absolute left-0 top-0 z-[-10] h-32 w-full overflow-hidden bg-cover bg-bottom md:h-48 md:w-[100vw]"
        style={{
          backgroundImage: "url('/images/ellipse-bg-1.svg')",
        }}
      />
      <div
        className="absolute left-0 top-0 z-[-20] h-48 w-full overflow-hidden bg-cover bg-bottom md:h-64 md:w-[100vw]"
        style={{
          backgroundImage: "url('/images/ellipse-bg-2.svg')",
        }}
      />
      <div
        className="absolute left-0 top-0 z-[-30] h-64 w-full overflow-hidden bg-cover bg-bottom md:h-80 md:w-[100vw]"
        style={{
          backgroundImage: "url('/images/ellipse-bg-3.svg')",
        }}
      />
      <ScrollArea>
        <div className="content flex h-screen flex-col justify-between">
          <div className="top">
            <div className="account-menu flex items-center justify-between py-2 pr-2">
              <div className="back-button">
                <Button variant="link" onClick={() => navigate(-1)}>
                  <ChevronLeftIcon className="h-5 w-5" />
                </Button>
                <div className="h-8" />
              </div>
              <div className="user-info">
                <p className="text-2xl font-medium text-black">Username</p>
              </div>
              <div className="profile-icon">
                <img
                  src="/images/account-icon.png"
                  alt="account-icon"
                  className="h-20 w-20"
                />
              </div>
            </div>
            <div className="badges-section flex w-full items-center justify-end gap-8 px-4 py-4">
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
            <div className="account-stats flex w-full items-center justify-between px-12 py-4">
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
            <div className="container p-0">
              <div className="account-menu flex flex-col gap-8 px-8 py-8">
                <div className="account-menu-item flex w-full items-center justify-between">
                  <div className="flex items-center">
                    <VideoHomeActiveIcon className="h-8 w-8" />
                    <span className="px-8 text-lg font-medium text-black">
                      Home
                    </span>
                  </div>
                </div>
                <Link to="/app/wallet">
                  <div className="account-menu-item flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src="/images/rupee.png"
                        alt="Rupee"
                        className="h-8 w-8"
                      />
                      <span className="px-8 text-lg font-medium text-black">
                        My Balance
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/rupee.png"
                        alt="Rupee"
                        className="h-6 w-6"
                      />
                      <span className="text-lg font-medium text-black">
                        500
                      </span>
                      <ChevronRightIcon className="/60 h-5 w-5" />
                    </div>
                  </div>
                </Link>
                <Link to="/app/my-profile">
                  <div className="account-menu-item flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <ProfileIcon className="inline-flex h-8 w-8" />
                      <span className="px-8 text-lg font-medium text-black">
                        Profile
                      </span>
                    </div>
                    <ChevronRightIcon className="/60 h-5 w-5" />
                  </div>
                </Link>
                <Link to="/app/settings">
                  <div className="account-menu-item flex w-full items-center justify-between">
                    <div className="flex items-center">
                      <SettingsIcon className="inline-flex h-8 w-8" />
                      <span className="px-8 text-lg font-medium text-black">
                        Settings
                      </span>
                    </div>
                    <ChevronRightIcon className="/60 h-5 w-5" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="middle">
            <Link to="/app/invite-friends" className="refer-link">
              <div className="flex items-center gap-10 bg-gradient-to-b from-[#3087ec]/30 to-[#3830d7]/30 px-6 py-1">
                <img
                  src="/images/gift-box.png"
                  alt="gift-box"
                  className="h-16 w-16"
                />
                <span className="text-lg font-semibold text-primary">
                  Refer a friend
                </span>
              </div>
            </Link>
          </div>
          <div className="bottom">
            <div className="flex min-w-full items-center gap-4 bg-background px-8 py-4">
              <LogoutIcon className="h-8 w-8" />
              <span className="font-medium text-black">Sign Out</span>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
