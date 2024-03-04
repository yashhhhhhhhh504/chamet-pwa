import { createBrowserRouter, Navigate } from 'react-router-dom';

import { RequireAuth, Page } from '@/components/functional';
import { AboutUsScreen } from '@/pages/app/accounts/AboutUsScreen';
import { AccountScreen } from '@/pages/app/accounts/AccountScreen';
import { InviteFriendsScreen } from '@/pages/app/accounts/InviteFriendsScreen';
import { MyProfileScreen } from '@/pages/app/accounts/MyProfileScreen';
import { MyProfileScreenDetailed } from '@/pages/app/accounts/MyProfileScreenDetailed';
import { NotificationSettingsScreen } from '@/pages/app/accounts/NotificationSettingsScreen';
import { NotificationsScreen } from '@/pages/app/accounts/NotificationsScreen';
import { PrivacyPolicyScreen } from '@/pages/app/accounts/PrivacyPolicyScreen';
import { SettingsScreen } from '@/pages/app/accounts/SettingsScreen';
import { UserAgreementScreen } from '@/pages/app/accounts/UserAgreementScreen';
import { WalletScreen } from '@/pages/app/accounts/WalletScreen';
import { AppLayout } from '@/pages/app/AppLayout';
import { AudioCallScreen } from '@/pages/app/call/AudioCallScreen';
import { VideoCallScreen } from '@/pages/app/call/VideoCallScreen';
import { Discover } from '@/pages/app/discovery/Discover';
import { DiscoveryScreen } from '@/pages/app/discovery/DiscoveryScreen';
import { Nearby } from '@/pages/app/discovery/Nearby';
import { Popular } from '@/pages/app/discovery/Popular';
import { AddPostScreen } from '@/pages/app/feeds/AddPostScreen';
import { FeedsScreen } from '@/pages/app/feeds/FeedsScreen';
import { HomeScreen } from '@/pages/app/HomeScreen';
import { LiveFeeds } from '@/pages/app/live-feeds/LiveFeeds';
import { LiveFeedsScreen } from '@/pages/app/live-feeds/LiveFeedsScreen';
import { Page404 } from '@/pages/app/misc/Page404';
import { ProfileScreen } from '@/pages/app/profile/ProfileScreen';
import { ProfileScreenDetailed } from '@/pages/app/profile/ProfileScreenDetailed';
import { RecentChatScreen } from '@/pages/app/recent-chat/RecentChatScreen';
import { RecentChatsScreen } from '@/pages/app/recent-chats/RecentChatsScreen';
import { AuthLayout } from '@/pages/auth/AuthLayout';
import { LoginScreen } from '@/pages/auth/login/LoginScreen';
import { OnboardScreen } from '@/pages/auth/onboard/OnboardScreen';
import { EnterOtp } from '@/pages/auth/phone-login/EnterOtp';
import { Phone } from '@/pages/auth/phone-login/Phone';
import { PhoneLoginScreen } from '@/pages/auth/phone-login/PhoneLoginScreen';

export const routes = createBrowserRouter([
  {
    path: '',
    element: (
      <RequireAuth>
        <Navigate to="/app/home/" />
      </RequireAuth>
    ),
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login" />,
      },
      {
        path: 'login',
        element: (
          <Page title="Login">
            <LoginScreen />
          </Page>
        ),
      },
      {
        path: 'login-using-phone',
        element: (
          <Page title="Login using phone">
            <PhoneLoginScreen />
          </Page>
        ),
        children: [
          {
            index: true,
            element: <Navigate to="/auth/login-using-phone/enter-phone" />,
          },
          {
            path: 'enter-phone',
            element: <Phone />,
          },
          {
            path: 'enter-otp',
            element: <EnterOtp />,
          },
        ],
      },
      {
        path: 'onboarding',
        element: (
          <Page title="onboard">
            <OnboardScreen />
          </Page>
        ),
      },
    ],
  },
  {
    path: '/app',
    element: <AppLayout />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        element: <Navigate to="/app/home" />,
      },
      {
        path: 'home',
        element: (
          <Page title="Home">
            {' '}
            <HomeScreen />{' '}
          </Page>
        ),
        children: [
          {
            index: true,
            element: <Navigate to="/app/home/discovery/" />,
          },
          {
            path: 'discovery',
            element: (
              <Page title="Discover">
                <DiscoveryScreen />
              </Page>
            ),
            children: [
              {
                index: true,
                element: <Navigate to="/app/home/discovery/discover" />,
              },
              {
                path: 'discover',
                element: <Discover />,
              },
              {
                path: 'nearby',
                element: <Nearby />,
              },
              {
                path: 'popular',
                element: <Popular />,
              },
            ],
          },
          {
            path: 'live-feeds',
            element: (
              <Page title="Live Feeds">
                <LiveFeedsScreen />
              </Page>
            ),
            children: [
              {
                index: true,
                element: <Navigate to="/app/home/live-feeds/lives" />,
              },
              {
                path: 'lives',
                element: <LiveFeeds />,
              },
              {
                path: 'nearby-lives',
                element: <Nearby />,
              },
            ],
          },
          {
            path: 'feeds',
            element: (
              <Page title="Feeds">
                <FeedsScreen />
              </Page>
            ),
          },
          {
            path: 'add-post',
            element: (
              <Page title="Add Post">
                <AddPostScreen />
              </Page>
            ),
          },
          {
            path: 'recent-chats',
            element: (
              <Page title="Recent Chats">
                <RecentChatsScreen />
              </Page>
            ),
          },
          {
            path: 'recent-chat',
            element: (
              <Page title="Recent Chat">
                <RecentChatScreen />
              </Page>
            ),
          },
          {
            path: 'audio-call',
            element: (
              <Page title="Audio call">
                <AudioCallScreen />
              </Page>
            ),
          },
          {
            path: 'my-profile-detailed',
            element: (
              <Page title="Profile">
                <MyProfileScreenDetailed />
              </Page>
            ),
          },
          {
            path: 'profile-detailed',
            element: (
              <Page title="Profile">
                <ProfileScreenDetailed />
              </Page>
            ),
          },
          {
            path: 'wallet',
            element: (
              <Page title="Wallet">
                <WalletScreen />
              </Page>
            ),
          },
          {
            path: 'settings',
            element: (
              <Page title="Settings">
                <SettingsScreen />
              </Page>
            ),
            children: [
              {
                path: 'privacy-policy',
                element: (
                  <Page title="Privacy Policy">
                    <PrivacyPolicyScreen />
                  </Page>
                ),
              },
              {
                path: 'user-agreement',
                element: (
                  <Page title="User Agreement">
                    <UserAgreementScreen />
                  </Page>
                ),
              },
              {
                path: 'about-us',
                element: (
                  <Page title="About Us">
                    <AboutUsScreen />
                  </Page>
                ),
              },
              {
                path: 'invite-friends',
                element: (
                  <Page title="Invite Friends">
                    <InviteFriendsScreen />
                  </Page>
                ),
              },
            ],
          },
          {
            path: 'notifications',
            element: (
              <Page title="notifications">
                <NotificationsScreen />
              </Page>
            ),
            children: [
              {
                path: 'notification-settings',
                element: (
                  <Page title="Notification Settings">
                    <NotificationSettingsScreen />
                  </Page>
                ),
              },
            ],
          },
        ],
      },
      {
        path: 'account',
        element: (
          <Page title="Account">
            <AccountScreen />
          </Page>
        ),
      },
      {
        path: 'wallet',
        element: (
          <Page title="Wallet">
            <WalletScreen />
          </Page>
        ),
      },
      {
        path: 'my-profile',
        element: (
          <Page title="Profile">
            <MyProfileScreen />
          </Page>
        ),
      },
      {
        path: 'my-profile-detailed',
        element: (
          <Page title="Profile">
            <MyProfileScreenDetailed />
          </Page>
        ),
      },
      {
        path: 'settings',
        element: (
          <Page title="Settings">
            <SettingsScreen />
          </Page>
        ),
      },
      {
        path: 'profile',
        element: (
          <Page title="Profile">
            <ProfileScreen />
          </Page>
        ),
      },
      {
        path: 'profile-detailed',
        element: (
          <Page title="Profile">
            <ProfileScreenDetailed />
          </Page>
        ),
      },
      {
        path: 'privacy-policy',
        element: (
          <Page title="Privacy Policy">
            <PrivacyPolicyScreen />
          </Page>
        ),
      },
      {
        path: 'user-agreement',
        element: (
          <Page title="User Agreement">
            <UserAgreementScreen />
          </Page>
        ),
      },
      {
        path: 'about-us',
        element: (
          <Page title="About Us">
            <AboutUsScreen />
          </Page>
        ),
      },
      {
        path: 'invite-friends',
        element: (
          <Page title="Invite Friends">
            <InviteFriendsScreen />
          </Page>
        ),
      },
      {
        path: 'audio-call',
        element: (
          <Page title="Audio call">
            <AudioCallScreen />
          </Page>
        ),
      },

      {
        path: 'video-call',
        element: (
          <Page title="Video call">
            <VideoCallScreen />
          </Page>
        ),
      },
      {
        path: 'recent-chat',
        element: (
          <Page title="Recent Chat">
            <RecentChatScreen />
          </Page>
        ),
      },
    ],
  },
]);
