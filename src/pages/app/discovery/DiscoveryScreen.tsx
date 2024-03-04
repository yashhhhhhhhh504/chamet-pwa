/* eslint-disable react/jsx-no-useless-fragment */
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';

import { ProfileScreen } from '../profile/ProfileScreen';

import { DiscoveryMenu } from '@/pages/app/discovery/discovery-menu';

export function DiscoveryScreen() {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div className="discovery h-full w-full md:flex">
      {!isDesktop && <DiscoveryMenu />}
      <div className="container relative overflow-auto p-0 pb-16 md:mt-8">
        <Outlet />
      </div>
      {isDesktop && <ProfileScreen />}
    </div>
  );
}
