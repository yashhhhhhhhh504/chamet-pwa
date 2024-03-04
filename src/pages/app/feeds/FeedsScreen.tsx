/* eslint-disable react/jsx-no-useless-fragment */

import { FeedsMenu } from './feeds-menu';

import { Feeds } from '@/pages/app/feeds/Feeds';

export function FeedsScreen() {
  return (
    <div className="live-feeds flex h-full overflow-hidden md:pl-10">
      <div className="container relative overflow-auto p-0 pb-16">
        <FeedsMenu />
        <Feeds />
      </div>
    </div>
  );
}
