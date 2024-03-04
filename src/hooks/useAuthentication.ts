import { useMemo } from 'react';

import { getAccessToken } from '@/lib/token';

export const useAuthentication = () => {
  const accessToken = getAccessToken();
  const isLoggedIn = !!accessToken;

  return useMemo(
    () => ({
      isLoggedIn,
    }),
    [isLoggedIn]
  );
};
