import * as React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  ChatBubbleRightIcon,
  HeartFilledIcon,
  ThreeDotsIcon,
} from '@/components/ui/icons/svg-icons';

type PostCardProps = {
  userName: string;
  userImage: string;
  userLocationName: string;
  postImage: string;
  postLikes: number;
  postComments: number;
  postDescription: string;
};

const PostCard = React.forwardRef<HTMLDivElement, PostCardProps>(
  (
    {
      userName,
      userImage,
      userLocationName,
      postImage,
      postLikes,
      postComments,
      postDescription,
    },
    ref
  ) => (
    <div
      ref={ref}
      className="post-card mb-4 flex h-full w-full flex-col gap-1 p-0">
      <div className="post-header flex items-center justify-between pl-4 pr-2">
        <div className="user-info flex gap-4 py-1">
          <Avatar className="ring-2 ring-red-500 ring-offset-2">
            <AvatarImage src={userImage} alt={userName} />
            <AvatarFallback>{userName}</AvatarFallback>
          </Avatar>
          <div className="user-info-text flex flex-col">
            <h3 className="text-md font-medium text-black">{userName}</h3>
            <p className="text-sm font-medium">{userLocationName}</p>
          </div>
        </div>
        <div className="post-action-button">
          <ThreeDotsIcon className="h-5 w-5" />
        </div>
      </div>
      <div className="post-image p-0">
        <img
          src={postImage}
          alt={userName}
          className="h-[55vh] w-full rounded-none object-cover"
        />
      </div>
      <div className="post-buttons flex gap-4 px-4">
        <div className="likes flex flex-col items-center justify-center">
          <Button variant="link" className="p-0">
            <HeartFilledIcon className="h-6 w-6 fill-red-500" />
          </Button>
          <span className="text-md font-medium text-black">{postLikes}</span>
        </div>
        <div className="comments flex flex-col items-center justify-center">
          <Button variant="link" className="p-0">
            <ChatBubbleRightIcon className="h-6 w-6 " />
          </Button>
          <span className="text-md font-medium text-black">{postComments}</span>
        </div>
      </div>
      <div className="post-description px-4">
        <p className="text-black">
          <span className="mr-2 font-semibold text-black">{userName}</span>{' '}
          {`${postDescription}...`}
          <Button variant="link" className="p-0">
            <span className="text-md font-semibold text-accent">more</span>
          </Button>
        </p>
      </div>
    </div>
  )
);

export { PostCard };
