/* eslint-disable import/extensions */
/* eslint-disable react/jsx-no-useless-fragment */
import { ImageIcon } from '@radix-ui/react-icons';
import { NavLink } from 'react-router-dom';

import ChatBubble1ActiveIcon from '@/assets/chat-bubble1-active.png';
import ChatBubble1Icon from '@/assets/chat-bubble1.png';
import {
  VideoHomeActiveIcon,
  VideoHomeIcon,
  LiveStream1Icon,
  LiveStream1ActiveIcon,
} from '@/components/ui/icons/svg-icons';

export function MobileMenu() {
  return (
    <nav className="fixed bottom-0 left-0 z-[100] min-w-full border-t-2 border-accent bg-background p-1 drop-shadow-2xl">
      <ul className="mx-auto flex items-center justify-between px-4 py-2">
        <li>
          <NavLink to="/app/home/discovery">
            {({ isActive }) => (
              <>
                {isActive ? (
                  <VideoHomeActiveIcon className="h-8 w-8" />
                ) : (
                  <VideoHomeIcon className="h-8 w-8" />
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/home/live-feeds">
            {({ isActive }) => (
              <>
                {isActive ? (
                  <LiveStream1ActiveIcon className="h-8 w-8" />
                ) : (
                  <LiveStream1Icon className="h-8 w-8" />
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/home/feeds">
            {({ isActive }) => (
              <>
                {isActive ? (
                  <ImageIcon className="h-8 w-8" />
                ) : (
                  <ImageIcon className="h-8 w-8 text-secondary" />
                )}
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/app/home/recent-chats">
            {({ isActive }) => (
              <>
                {isActive ? (
                  <img
                    src={ChatBubble1ActiveIcon}
                    alt="chat-bubble-active"
                    className="h-8 w-8"
                  />
                ) : (
                  <img
                    src={ChatBubble1Icon}
                    alt="chat-bubble-active"
                    className="h-8 w-8"
                  />
                )}
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
