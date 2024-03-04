/* eslint-disable react/jsx-no-useless-fragment */

import { RecentChat } from '@/pages/app/recent-chat/recent-chat';
import { RecentChatMenu } from '@/pages/app/recent-chat/recent-chat-menu';

export function RecentChatScreen() {
  return (
    <div className="live-feeds pb-16 md:h-screen md:pb-0">
      <RecentChatMenu />
      <div className="container relative px-1 py-4 md:block md:bg-primary/10 md:px-0 md:pb-0">
        <RecentChat />
      </div>
    </div>
  );
}
