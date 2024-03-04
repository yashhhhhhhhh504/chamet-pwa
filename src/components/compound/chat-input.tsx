import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  FaceSmileIcon,
  PaperClipIcon,
  MicIcon,
} from '@/components/ui/icons/svg-icons';
import { Input } from '@/components/ui/input';

const ChatInput = React.forwardRef<HTMLDivElement>(
  // eslint-disable-next-line no-empty-pattern
  ({}, ref) => (
    <div
      ref={ref}
      className="chat-input flex items-center justify-between px-0 py-2">
      <Button variant="link">
        <FaceSmileIcon className="h-6 w-6 text-black" />
      </Button>
      <Input
        className="flex-grow rounded-full"
        placeholder="Type a message..."
      />
      <Button variant="link">
        <PaperClipIcon className="h-6 w-6 text-black" />
      </Button>
      <Button size="icon" className="p-2">
        <MicIcon className="h-6 w-6" />
      </Button>
    </div>
  )
);

export { ChatInput };
