import { BellIcon } from '@radix-ui/react-icons';
import { useMediaQuery } from 'react-responsive';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@/components/ui/icons/svg-icons';
import { ScrollArea } from '@/components/ui/scroll-area';

export function NotificationsScreen() {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div className="flex gap-8 md:pl-10">
      <div className="privacy policy">
        <nav className="flex min-w-full border-b bg-background px-0 pb-2 pt-4">
          <ul className="flex w-full items-center justify-between">
            <li>
              <Button variant="link" onClick={() => navigate(-1)}>
                <ChevronLeftIcon className="h-5 w-5" />
              </Button>
            </li>
            <li>
              <h1 className="text-center text-xl font-medium text-black">
                Notifications
              </h1>
            </li>
            <li className="h-1 w-1/4" />
          </ul>
        </nav>
        <ScrollArea>
          <div className="content flex h-[90vh] flex-col justify-between">
            <Card className="h-full border-0 pt-12">
              <CardContent className="grid gap-1">
                <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                  <p className="text-sm text-muted-foreground">
                    Email digest, mentions & all activity.
                  </p>
                </div>
                <div className="-mx-2 flex items-start space-x-4 rounded-md bg-accent p-2 text-accent-foreground transition-all">
                  <p className="text-sm text-muted-foreground">
                    lorem ipsum lorem ipsum drmit shemit esparagoue
                  </p>
                </div>
                <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
                  <p className="text-sm text-muted-foreground">
                    Lorem ipsum dermit
                  </p>
                </div>
              </CardContent>
            </Card>
            <div className="account-menu flex flex-col gap-8 px-8 py-12">
              <Link to="/app/home/notifications/notification-settings">
                <div className="account-menu-item flex w-full items-center justify-between">
                  <div className="flex items-center">
                    <BellIcon className="mt-px h-5 w-5" />
                    <span className="px-8 text-lg font-medium text-black">
                      Notification settings
                    </span>
                  </div>
                  <ChevronRightIcon className="/60 h-5 w-5" />
                </div>
              </Link>
            </div>
          </div>
        </ScrollArea>
      </div>
      {isDesktop && <Outlet />}
    </div>
  );
}
