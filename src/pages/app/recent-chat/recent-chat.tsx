import { ChatInput } from '@/components/compound/chat-input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  ThreeDotsIcon,
  VideoHomeActiveIcon,
} from '@/components/ui/icons/svg-icons';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TypingIndicator } from '@/components/ui/typing-indicator';

export function RecentChat() {
  return (
    <div className="recent-chat md:w-[30vw] xl:w-[35vw]">
      <div className="chat-title flex items-center justify-between px-4">
        <div className="user-info flex items-center gap-6">
          <Avatar className="h-16 w-16">
            <AvatarImage src="/images/chat-user.png" alt="userName" />
            <AvatarFallback>Username</AvatarFallback>
          </Avatar>
          <div className="user-name">
            <p className="font-semibold">Username</p>
            <p>Online</p>
          </div>
        </div>
        <div className="action-buttons flex items-center gap-6">
          <VideoHomeActiveIcon className="h-5 w-5 fill-primary stroke-accent stroke-2" />{' '}
          <ThreeDotsIcon className="h-5 w-5 fill-accent stroke-accent" />
        </div>
      </div>
      <ScrollArea className="h-full w-full">
        <div className="chat-messages w-full px-4 py-6 md:py-2">
          <div className="message">
            <div className="received-message rounded-md bg-accent/20 px-4 py-2">
              <p className="text-orange-400">Username</p>
              <p className="py-4 text-black">
                Hello guys, We have discussed about post corona activation plan
                and our decision is to go to Bali. We will have a very big party
                after this corona ends! These are some images about our
                destination.
              </p>
              <p className="text-right text-black/30">16:04</p>
            </div>
            <div className="media-message flex items-end gap-2 rounded-md px-2 py-2">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/images/chat-user.png" alt="sfkjsd" />
                <AvatarFallback>Username</AvatarFallback>
              </Avatar>
              <div className="media grid grid-cols-2 gap-2">
                <img
                  src="/images/scenery-1.png"
                  alt="scenery-1"
                  className="col-span-2"
                />
                <img src="/images/scenery-2.png" alt="scenery-2" />
                <img src="/images/scenery-3.png" alt="scenery-3" />
              </div>
            </div>
            <div className="message">
              <div className="sent-message flex items-center justify-end gap-2 px-4 py-2">
                <TypingIndicator />
                <p className="text-black">Username is typing</p>
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/images/woman-profile.png" alt="userName" />
                  <AvatarFallback>Username</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
          <div className="message">
            <div className="received-message rounded-md bg-accent/20 px-4 py-2">
              <p className="text-orange-400">Username</p>
              <p className="py-4 text-black">
                Hello guys, We have discussed about post corona activation plan
                and our decision is to go to Bali. We will have a very big party
                after this corona ends! These are some images about our
                destination.
              </p>
              <p className="text-right text-black/30">16:04</p>
            </div>
            <div className="media-message flex items-end gap-2 rounded-md px-2 py-2">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/images/chat-user.png" alt="sfkjsd" />
                <AvatarFallback>Username</AvatarFallback>
              </Avatar>
              <div className="media grid grid-cols-2 gap-2">
                <img
                  src="/images/scenery-1.png"
                  alt="scenery-1"
                  className="col-span-2"
                />
                <img src="/images/scenery-2.png" alt="scenery-2" />
                <img src="/images/scenery-3.png" alt="scenery-3" />
              </div>
            </div>
            <div className="message">
              <div className="sent-message flex items-center justify-end gap-2 px-4 py-2">
                <TypingIndicator />
                <p className="text-black">Username is typing</p>
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/images/woman-profile.png" alt="userName" />
                  <AvatarFallback>Username</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
          <div className="message">
            <div className="received-message rounded-md bg-accent/20 px-4 py-2">
              <p className="text-orange-400">Username</p>
              <p className="py-4 text-black">
                Hello guys, We have discussed about post corona activation plan
                and our decision is to go to Bali. We will have a very big party
                after this corona ends! These are some images about our
                destination.
              </p>
              <p className="text-right text-black/30">16:04</p>
            </div>
            <div className="media-message flex items-end gap-2 rounded-md px-2 py-2">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/images/chat-user.png" alt="sfkjsd" />
                <AvatarFallback>Username</AvatarFallback>
              </Avatar>
              <div className="media grid grid-cols-2 gap-2">
                <img
                  src="/images/scenery-1.png"
                  alt="scenery-1"
                  className="col-span-2"
                />
                <img src="/images/scenery-2.png" alt="scenery-2" />
                <img src="/images/scenery-3.png" alt="scenery-3" />
              </div>
            </div>
            <div className="message">
              <div className="sent-message flex items-center justify-end gap-2 px-4 py-2">
                <TypingIndicator />
                <p className="text-black">Username is typing</p>
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/images/woman-profile.png" alt="userName" />
                  <AvatarFallback>Username</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
          <div className="message">
            <div className="received-message rounded-md bg-accent/20 px-4 py-2">
              <p className="text-orange-400">Username</p>
              <p className="py-4 text-black">
                Hello guys, We have discussed about post corona activation plan
                and our decision is to go to Bali. We will have a very big party
                after this corona ends! These are some images about our
                destination.
              </p>
              <p className="text-right text-black/30">16:04</p>
            </div>
            <div className="media-message flex items-end gap-2 rounded-md px-2 py-2">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/images/chat-user.png" alt="sfkjsd" />
                <AvatarFallback>Username</AvatarFallback>
              </Avatar>
              <div className="media grid grid-cols-2 gap-2">
                <img
                  src="/images/scenery-1.png"
                  alt="scenery-1"
                  className="col-span-2"
                />
                <img src="/images/scenery-2.png" alt="scenery-2" />
                <img src="/images/scenery-3.png" alt="scenery-3" />
              </div>
            </div>
            <div className="message">
              <div className="sent-message flex items-center justify-end gap-2 px-4 py-2">
                <TypingIndicator />
                <p className="text-black">Username is typing</p>
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/images/woman-profile.png" alt="userName" />
                  <AvatarFallback>Username</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
      <div className="chat-input md:border-rounded-md fixed bottom-0 left-0 z-[100] w-full border-t-2 border-accent bg-background p-1 drop-shadow-2xl md:left-auto md:w-[30vw] xl:w-[35vw]">
        <ChatInput />
      </div>
    </div>
  );
}
