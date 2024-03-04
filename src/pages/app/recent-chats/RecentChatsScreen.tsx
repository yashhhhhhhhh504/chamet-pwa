/* eslint-disable react/jsx-no-useless-fragment */

import { useMediaQuery } from 'react-responsive';

import { RecentChatScreen } from '../recent-chat/RecentChatScreen';

import { ScrollArea } from '@/components/ui/scroll-area';
import { RecentChats } from '@/pages/app/recent-chats/recent-chats';
import { RecentChatsMenu } from '@/pages/app/recent-chats/recent-chats-menu';

export function RecentChatsScreen() {
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div className="overflow-hidden md:flex md:h-screen md:w-full md:gap-8 md:pl-10 xl:gap-16">
      <div className="recent-chats overflow-auto pb-16">
        {!isDesktop && <RecentChatsMenu />}
        <div className="container relative px-1 py-4">
          <ScrollArea className="h-full w-full">
            <RecentChats />
          </ScrollArea>
        </div>
      </div>
      {isDesktop && (
        <div className="overflow-auto">
          <RecentChatScreen />
        </div>
      )}
    </div>
  );
}
