/* eslint-disable react/jsx-no-useless-fragment */
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  ChevronLeftIcon,
  LocationIcon,
  MenuIcon,
  NotesIcon,
} from '@/components/ui/icons/svg-icons';
import { Input } from '@/components/ui/input';

export function AddPostScreen() {
  const navigate = useNavigate();

  return (
    <div className="live-feeds pb-16">
      <nav className="flex min-w-full items-center justify-between bg-background px-2 py-4">
        <ul className="flex items-center justify-between gap-2">
          <li>
            <Button variant="link" onClick={() => navigate(-1)}>
              <ChevronLeftIcon className="h-5  w-5 " />
            </Button>
          </li>
          <li>
            <span className="text-xl font-medium text-black">Add Post</span>
          </li>
        </ul>
        <ul className="flex items-center gap-6">
          <li>
            <Link to="/app/account">
              <MenuIcon className="h-8 w-8" />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container relative p-0">
        <div className="h-full w-full md:w-[40vw]">
          <div className="image-placeholder flex h-[50vh] items-center justify-center bg-secondary">
            <img src="/images/image-placeholder.png" alt="placeholder" />
          </div>
          <div className="post-inputs px-4 py-6">
            <div className=" flex items-center gap-2 py-4">
              <LocationIcon className="h-8 w-8" />
              <Input
                placeholder="Add Location"
                className="rounded-none  border-0 border-b border-black focus:border-0 focus:outline-0 focus:ring-0"
                disabled
              />
            </div>
            <div className="flex items-center gap-2 py-4">
              <NotesIcon className="h-8 w-8" />
              <Input
                placeholder="Add Description"
                className="rounded-none  border-0 border-b border-black"
                disabled
              />
            </div>
          </div>
          <div className="submit-button px-6">
            <Button
              size="lg"
              className="w-full rounded-full bg-primary bg-opacity-90 py-6 text-white shadow-lg drop-shadow-xl hover:bg-primary/90"
              onClick={() => {
                navigate('/app/home/feeds');
              }}>
              {' '}
              Post{' '}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
