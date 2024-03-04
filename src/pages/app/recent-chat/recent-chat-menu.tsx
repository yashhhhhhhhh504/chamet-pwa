import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { ChevronLeftIcon } from '@/components/ui/icons/svg-icons';

export function RecentChatMenu() {
  const navigate = useNavigate();

  return (
    <nav className="flex min-w-full border-b bg-background px-0 pb-2 pt-4">
      <ul className="flex w-full items-center justify-between">
        <li>
          <Button variant="link" onClick={() => navigate(-1)}>
            <ChevronLeftIcon className="h-5 w-5 text-black" />
          </Button>
        </li>
        <li>
          <h1 className="text-center text-xl font-medium text-black">
            Recent Chats
          </h1>
        </li>
        <li className="h-1 w-1/4" />
      </ul>
    </nav>
  );
}
