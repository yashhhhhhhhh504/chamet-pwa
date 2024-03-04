import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { ChevronLeftIcon } from '@/components/ui/icons/svg-icons';
import { ScrollArea } from '@/components/ui/scroll-area';

export function AboutUsScreen() {
  const navigate = useNavigate();

  return (
    <div className="privacy policy md:w-2/3">
      <nav className="flex min-w-full border-b bg-background px-0 pb-2 pt-4">
        <ul className="flex w-full items-center justify-between">
          <li>
            <Button variant="link" onClick={() => navigate(-1)}>
              <ChevronLeftIcon className="h-5 w-5" />
            </Button>
          </li>
          <li>
            <h1 className="text-center text-xl font-medium text-black">
              About Us
            </h1>
          </li>
          <li className="h-1 w-1/4" />
        </ul>
      </nav>
      <ScrollArea>
        <div className="content flex h-[90vh] flex-col justify-between">
          <div className="top">
            <p className="px-4 py-10 text-justify font-medium text-black">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className="bottom flex flex-col items-center justify-center">
            <img src="/funclub-logo.png" alt="Chamet Logo" />
            <p className="px-4 pt-8 text-black">
              Copyright © Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
