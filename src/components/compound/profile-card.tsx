import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  VideoHomeActiveIcon,
  AudioCallIcon,
} from '@/components/ui/icons/svg-icons';

type profileCardProps = {
  userName: string;
  userImage: string;
  userLocationIcon: string;
  userLocationName: string;
  onUserNameTap: () => void;
  onCallActionTap: () => void;
};

const ProfileCard = React.forwardRef<HTMLDivElement, profileCardProps>(
  (
    {
      userName,
      userImage,
      userLocationIcon,
      userLocationName,
      onCallActionTap,
      onUserNameTap,
    },
    ref
  ) => (
    <div
      ref={ref}
      className="profile-card relative flex h-72 w-full flex-col items-center justify-center drop-shadow-xl ">
      <div className="live-lable absolute left-2 top-2 flex items-center justify-center">
        <VideoHomeActiveIcon className="h-6 w-6" />
        <span className="text-md px-1 font-semibold text-primary">Live</span>
      </div>
      <img
        src={userImage}
        alt={userName}
        className="h-full w-full rounded-md object-cover object-top xl:w-[16vw]"
      />
      <div className="profile-card-footer absolute bottom-2 flex w-full items-end justify-between px-2">
        <div className="user-info">
          <Button variant="link" onClick={onUserNameTap} className="p-0">
            <span className="py-2 text-lg font-medium text-white">
              {userName}
            </span>
          </Button>
          <p className="user-info-location flex items-center gap-2">
            <img
              className="location-icon h-6"
              src={userLocationIcon}
              alt={userLocationName}
            />
            <span className="loaction-name text-md font-medium text-white">
              {userLocationName}
            </span>
          </p>
        </div>
        <div className="action-buttons flex flex-col">
          <Button size="icon" onClick={onCallActionTap}>
            {' '}
            <AudioCallIcon className="h-4 w-4 stroke-2" />{' '}
          </Button>
        </div>
      </div>
    </div>
  )
);

const ProfileCardLarge = React.forwardRef<HTMLDivElement, profileCardProps>(
  (
    {
      userName,
      userImage,
      userLocationIcon,
      userLocationName,
      onCallActionTap,
      onUserNameTap,
    },
    ref
  ) => (
    <div
      ref={ref}
      className="profile-card-large relative mb-4 flex h-full w-full flex-col items-center justify-center drop-shadow-xl sm:h-[85vh] sm:w-[40vw]">
      <div className="live-lable absolute left-2 top-2 flex items-center justify-center">
        <VideoHomeActiveIcon className="h-6 w-6" />
        <span className="text-md px-1 font-semibold text-primary">Live</span>
      </div>
      <img
        src={userImage}
        alt={userName}
        className="h-full w-full rounded-md object-cover"
      />
      <div className="profile-card-footer absolute bottom-2 flex w-full items-end justify-between px-4">
        <div className="user-info">
          <Button variant="link" className="p-0" onClick={onUserNameTap}>
            <span className="py-2 text-xl font-medium text-white">
              {userName}
            </span>
          </Button>
          <p className="user-info-location flex items-center gap-2">
            <img
              className="location-icon"
              src={userLocationIcon}
              alt={userLocationName}
            />
            <span className="loaction-name text-lg font-medium text-white">
              {userLocationName}
            </span>
          </p>
        </div>
        <div className="action-buttons flex flex-col gap-8">
          <Button size="icon" onClick={onCallActionTap}>
            {' '}
            <AudioCallIcon className="h-8 w-8" />{' '}
          </Button>
          <Button size="icon" onClick={onCallActionTap}>
            {' '}
            <VideoHomeActiveIcon className="h-8 w-8 fill-primary stroke-accent stroke-2" />{' '}
          </Button>
        </div>
      </div>
    </div>
  )
);

export { ProfileCard, ProfileCardLarge };
