import { PostCard } from '@/components/compound/post-card';
import { ScrollArea } from '@/components/ui/scroll-area';

export function Feeds() {
  return (
    <div className="flex items-center justify-center p-0">
      <div className="posts-scroll-container h-full w-full p-0">
        <ScrollArea className="h-full w-full md:w-[40vw]">
          <PostCard
            userName="Lorem Ipsum"
            userImage="/images/woman-post.png"
            userLocationName="Delhi"
            postImage="/images/woman-post.png"
            postLikes={100}
            postComments={45}
            postDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis"
          />
          <PostCard
            userName="Lorem Ipsum"
            userImage="/images/woman-post.png"
            userLocationName="Delhi"
            postImage="/images/woman-post.png"
            postLikes={100}
            postComments={45}
            postDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis"
          />
          <PostCard
            userName="Lorem Ipsum"
            userImage="/images/woman-post.png"
            userLocationName="Delhi"
            postImage="/images/woman-post.png"
            postLikes={100}
            postComments={45}
            postDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis"
          />
          <PostCard
            userName="Lorem Ipsum"
            userImage="/images/woman-post.png"
            userLocationName="Delhi"
            postImage="/images/woman-post.png"
            postLikes={100}
            postComments={45}
            postDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis"
          />
          <PostCard
            userName="Lorem Ipsum"
            userImage="/images/woman-post.png"
            userLocationName="Delhi"
            postImage="/images/woman-post.png"
            postLikes={100}
            postComments={45}
            postDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam facilisis"
          />
        </ScrollArea>
      </div>
    </div>
  );
}
