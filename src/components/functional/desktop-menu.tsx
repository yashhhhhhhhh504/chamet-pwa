import React, { useState } from 'react';
import { AvatarImage } from '@radix-ui/react-avatar';
import { BellIcon, PersonIcon, ImageIcon } from '@radix-ui/react-icons';
import { NavLink, useNavigate } from 'react-router-dom';

import { Badge } from '../ui/badge';
import ChatBubble1ActiveIcon from '@/assets/chat-bubble1-active.png';
import ChatBubble1Icon from '@/assets/chat-bubble1.png';
import DocumentIcon from '@/assets/document.png';
import FolderIcon from '@/assets/folder.png';
import InfoCircleIcon from '@/assets/infocircle.png';
import VersionIcon from '@/assets/v.png';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  VideoHomeActiveIcon,
  VideoHomeIcon,
  LiveStream1Icon,
  LiveStream1ActiveIcon,
  LogoutIcon,
  SettingsIcon,
} from '@/components/ui/icons/svg-icons';

export function DesktopMenu() {
  const navigate = useNavigate();
  const [isLive, setIsLive] = useState(false);
  const [receivedCoins, setReceivedCoins] = useState(0);
  const [receivedStickers, setReceivedStickers] = useState(0);
  const [notification, setNotification] = useState('');

  const handleGoLiveClick = () => {
    setIsLive(!isLive); // Toggle live status
  };

  const handleReceiveCoins = () => {
    setReceivedCoins(receivedCoins + 1); // Increment received coins count
    setNotification('You have received coins');
    setTimeout(() => {
      setNotification('');
    }, 3000); // Clear notification after 3 seconds
  };

  const handleReceiveStickers = () => {
    setReceivedStickers(receivedStickers + 1); // Increment received stickers count
    setNotification('You have received stickers');
    setTimeout(() => {
      setNotification('');
    }, 3000); // Clear notification after 3 seconds
  };
  
  return (
    <div className="block w-[20vw] py-4">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-4 text-lg font-semibold tracking-tight">
            <Avatar className="ring-2 ring-red-500 ring-offset-2">
              <AvatarImage
                src="/images/woman-post.png"
                alt="woman"
                className="object-cover"
              />
            </Avatar>
          </h2>
          <div className="flex flex-col gap-4 space-y-1">
            <NavLink to="/app/home/discovery">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-lg font-semibold hover:bg-primary/10">
                      <VideoHomeActiveIcon className="h-8 w-8" />
                      <span>Home</span>
                    </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-lg font-semibold text-secondary hover:bg-primary/10">
                      <VideoHomeIcon className="h-8 w-8" />
                      <span>Home</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>
            <NavLink to="/app/home/live-feeds">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-lg font-semibold hover:bg-primary/10">
                      <LiveStream1ActiveIcon className="h-8 w-8" />
                      <span>Live</span>
                    </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-lg font-semibold text-secondary hover:bg-primary/10">
                      <LiveStream1Icon className="h-8 w-8" />
                      <span>Live</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/app/home/feeds">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-lg font-semibold hover:bg-primary/10">
                      <ImageIcon className="h-8 w-8" />
                      <span>Feeds</span>
                    </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-lg font-semibold text-secondary text-secondary hover:bg-primary/10">
                      <ImageIcon className="h-8 w-8" />
                      <span>Feeds</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/app/home/recent-chats">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-lg font-semibold hover:bg-primary/10">
                      <img
                        src={ChatBubble1ActiveIcon}
                        alt="chat-bubble-active"
                      />
                      <span>Chats</span>
                    </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-lg font-semibold text-secondary hover:bg-primary/10">
                      <img src={ChatBubble1Icon} alt="chat bubble" />
                      <span>Chats</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/app/home/notifications">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-lg font-semibold hover:bg-primary/10">
                      <BellIcon className="h-8 w-8" />
                      <span>Notifications</span>
                    </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2 py-1 text-lg font-semibold text-secondary hover:bg-primary/10">
                      <BellIcon className="h-8 w-8" />
                      <span>Notifications</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>

            <NavLink to="/app/home/my-profile-detailed">
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <p className="flex items-center gap-4 rounded-full bg-primary/20 px-2 py-1 text-lg font-semibold hover:bg-primary/10">
                      <PersonIcon className="h-8 w-8" />
                      <span>My Profile</span>
                    </p>
                  ) : (
                    <p className="flex items-center gap-4 rounded-full px-2  py-1 text-lg text-lg font-semibold font-semibold text-secondary hover:bg-primary/10">
                      <PersonIcon className="h-8 w-8" />
                      <span>My Profile</span>
                    </p>
                  )}
                </>
              )}
            </NavLink>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="flex items-center gap-4 rounded-full px-2  py-1 text-lg text-lg font-semibold font-semibold text-secondary hover:bg-primary/10"
                  onClick={(event) => event.stopPropagation()}>
                  More
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                sideOffset={-150}
                avoidCollisions
                className="w-56">
                <DropdownMenuLabel>
                  <div className="user-info relative inline-flex p-1">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src="/images/chat-user.png"
                        alt="chat user"
                      />
                      <AvatarFallback>Chat User</AvatarFallback>
                    </Avatar>
                    <div className="absolute bottom-3 right-2 h-2 w-2 rounded-full bg-green-400 ring-1 ring-white ring-offset-2" />
                  </div>
                  <p className="font-semibold text-black">Username</p>
                  <div className="badges-section flex w-full items-center gap-2 py-2">
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
                  <div className="account-stats flex w-full items-center justify-between">
                    <div className="stat flex flex-col items-center">
                      <p className="text-sm font-semibold text-black">0</p>
                      <p className="text-sm font-semibold text-black">
                        Friends
                      </p>
                    </div>
                    <div className="stat flex flex-col items-center">
                      <p className="text-sm font-semibold text-black">0</p>
                      <p className="text-sm font-semibold text-black">
                        Followers
                      </p>
                    </div>
                    <div className="stat flex flex-col items-center">
                      <p className="text-sm font-semibold text-black">0</p>
                      <p className="text-sm font-semibold text-black">
                        Following
                      </p>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="py-2">
                  <DropdownMenuItem className="text-md my-1 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10">
                    <span>Nearby</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-md my-1 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10">
                    <span>Popular</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-md my-1 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10">
                    <span>Nearby Lives</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="py-2">
                  <DropdownMenuItem
                    className="text-md my-1 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10"
                    onClick={() => navigate('/app/home/wallet')}>
                    <img
                      src="/images/rupee.png"
                      alt="Rupee"
                      className="h-5 w-5"
                    />
                    <span>My Wallet</span>
                  </DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger
                      className="text-md my-1 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10 hover:text-primary"
                      onClick={() => navigate('/app/home/settings')}>
                      <SettingsIcon className="h-5 w-5" />
                      <span>Settings</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        <DropdownMenuItem
                          className="text-md my-1 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10"
                          onClick={() =>
                            navigate('/app/home/settings/privacy-policy')
                          }>
                          <img
                            src={DocumentIcon}
                            className="h-5 w-5"
                            alt="document"
                          />
                          <span>Privacy Policy</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-md my-1 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10"
                          onClick={() =>
                            navigate('/app/home/settings/about-us')
                          }>
                          <img
                            src={InfoCircleIcon}
                            className="inline-flex h-5 w-5"
                            alt="About us"
                          />
                          <span>About Us</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-md my-1 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10"
                          onClick={() =>
                            navigate('/app/home/settings/user-agreement')
                          }>
                          <img
                            src={FolderIcon}
                            className="inline-flex h-5 w-5"
                            alt="folder"
                          />

                          <span>User Agreement</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-md my-1 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10">
                          <img
                            src={VersionIcon}
                            className="inline-flex h-5 w-5"
                            alt="version"
                          />

                          <span>Version</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuItem
                    className="text-md my-1 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10"
                    onClick={() =>
                      navigate('/app/home/settings/invite-friends')
                    }>
                    <PersonIcon className="h-5 w-5" />
                    <span>Refer a Friend</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-md my-3 flex items-center gap-4  rounded-full px-2 py-1 text-lg font-semibold font-semibold text-secondary hover:bg-primary/10">
                  <LogoutIcon className="h-6 w-6" />
                  <span className="font-medium text-black">Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-4">
        <Button
          size="lg"
          className="w-3/4 rounded-full bg-green-600 hover:bg-green-700 py-6 text-white shadow-lg drop-shadow-xl animate-pulse"
          onClick={handleGoLiveClick}>
          {isLive ? 'Stop Live' : 'Go Live'}
        </Button>
      </div>
      <div className="w-full flex justify-center mt-4">
        <Button
          size="lg"
          className="w-3/4 rounded-full bg-yellow-400 hover:bg-yellow-500 py-6 text-white shadow-lg drop-shadow-xl animate-pulse"
          onClick={handleReceiveCoins}>
          Receive Coins ({receivedCoins})
        </Button>
      </div>
      <div className="w-full flex justify-center mt-4">
        <Button
          size="lg"
          className="w-3/4 rounded-full bg-blue-500 hover:bg-blue-600 py-6 text-white shadow-lg drop-shadow-xl animate-pulse"
          onClick={handleReceiveStickers}>
          Receive Stickers ({receivedStickers})
        </Button>
      </div>
      {notification && (
        <div className="w-full flex justify-center mt-4">
          <p className="text-center text-sm text-gray-500">{notification}</p>
        </div>
      )}
    </div>
  );
}
