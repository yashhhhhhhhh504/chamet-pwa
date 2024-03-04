import { BellIcon, EyeNoneIcon, PersonIcon } from '@radix-ui/react-icons';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ChevronLeftIcon } from '@/components/ui/icons/svg-icons';

export function NotificationSettingsScreen() {
  const navigate = useNavigate();

  return (
    <div className="privacy policy">
      <nav className="flex min-w-full border-b bg-background px-0 pb-2 pt-4">
        <ul className="flex w-full items-center justify-between">
          <li>
            <Button variant="link" onClick={() => navigate(-1)}>
              <ChevronLeftIcon className="h-5 w-5" />
            </Button>
          </li>
          <li>
            <h1 className="md:text-md text-center text-xl font-medium text-black">
              Notification Settings
            </h1>
          </li>
          <li className="h-1 w-1/4" />
        </ul>
      </nav>

      <div className="content flex h-[90vh] flex-col justify-between">
        <Card className="border-0">
          <CardHeader className="pb-3">
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Choose what you want to be notified about.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-1">
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <BellIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Everything</p>
                <p className="text-sm text-muted-foreground">
                  Email digest, mentions & all activity.
                </p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md bg-accent p-2 text-accent-foreground transition-all">
              <PersonIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Available</p>
                <p className="text-sm text-muted-foreground">
                  Only mentions and comments.
                </p>
              </div>
            </div>
            <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
              <EyeNoneIcon className="mt-px h-5 w-5" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Ignoring</p>
                <p className="text-sm text-muted-foreground">
                  Turn off all notifications.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
