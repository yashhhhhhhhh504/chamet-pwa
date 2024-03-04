import { useNavigate } from 'react-router-dom';

import { ProfileCard } from '@/components/compound/profile-card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useCallCardStore } from '@/stores/call-card-store';

export function NearbyLives() {
  const { toggleCallCardVisibility } = useCallCardStore();

  const navigate = useNavigate();

  return (
    <div className="livefeeds-nearby">
      <div className="w-fullflex h-full items-center justify-center p-0">
        <div className="profiles-scroll-container h-full w-full p-0">
          <ScrollArea className="h-full w-full rounded-md px-4">
            <div className="neraby-profiles grid h-full w-full grid-cols-2 gap-4 md:w-[40vw]">
              <ProfileCard
                userName="UserName"
                userImage="/images/woman-profile.png"
                userLocationIcon="/images/flag-india.png"
                userLocationName="IND"
                onCallActionTap={toggleCallCardVisibility}
                onUserNameTap={() => navigate('/app/profile')}
              />
              <ProfileCard
                userName="UserName"
                userImage="/images/man-profile.png"
                userLocationIcon="/images/flag-usa.png"
                userLocationName="USA"
                onCallActionTap={toggleCallCardVisibility}
                onUserNameTap={() => navigate('/app/profile')}
              />
              <ProfileCard
                userName="UserName"
                userImage="/images/woman-profile.png"
                userLocationIcon="/images/flag-india.png"
                userLocationName="IND"
                onCallActionTap={toggleCallCardVisibility}
                onUserNameTap={() => navigate('/app/profile')}
              />
              <ProfileCard
                userName="UserName"
                userImage="/images/man-profile.png"
                userLocationIcon="/images/flag-usa.png"
                userLocationName="USA"
                onCallActionTap={toggleCallCardVisibility}
                onUserNameTap={() => navigate('/app/profile')}
              />
              <ProfileCard
                userName="UserName"
                userImage="/images/woman-profile.png"
                userLocationIcon="/images/flag-india.png"
                userLocationName="IND"
                onCallActionTap={toggleCallCardVisibility}
                onUserNameTap={() => navigate('/app/profile')}
              />
              <ProfileCard
                userName="UserName"
                userImage="/images/man-profile.png"
                userLocationIcon="/images/flag-usa.png"
                userLocationName="USA"
                onCallActionTap={toggleCallCardVisibility}
                onUserNameTap={() => navigate('/app/profile')}
              />
              <ProfileCard
                userName="UserName"
                userImage="/images/woman-profile.png"
                userLocationIcon="/images/flag-india.png"
                userLocationName="IND"
                onCallActionTap={toggleCallCardVisibility}
                onUserNameTap={() => navigate('/app/profile')}
              />
              <ProfileCard
                userName="UserName"
                userImage="/images/man-profile.png"
                userLocationIcon="/images/flag-usa.png"
                userLocationName="USA"
                onCallActionTap={toggleCallCardVisibility}
                onUserNameTap={() => navigate('/app/profile')}
              />
              <ProfileCard
                userName="UserName"
                userImage="/images/woman-profile.png"
                userLocationIcon="/images/flag-india.png"
                userLocationName="IND"
                onCallActionTap={toggleCallCardVisibility}
                onUserNameTap={() => navigate('/app/profile')}
              />
              <ProfileCard
                userName="UserName"
                userImage="/images/man-profile.png"
                userLocationIcon="/images/flag-usa.png"
                userLocationName="USA"
                onCallActionTap={toggleCallCardVisibility}
                onUserNameTap={() => navigate('/app/profile')}
              />
              <ProfileCard
                userName="UserName"
                userImage="/images/woman-profile.png"
                userLocationIcon="/images/flag-india.png"
                userLocationName="IND"
                onCallActionTap={toggleCallCardVisibility}
                onUserNameTap={() => navigate('/app/profile')}
              />
              <ProfileCard
                userName="UserName"
                userImage="/images/man-profile.png"
                userLocationIcon="/images/flag-usa.png"
                userLocationName="USA"
                onCallActionTap={toggleCallCardVisibility}
                onUserNameTap={() => navigate('/app/profile')}
              />
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
