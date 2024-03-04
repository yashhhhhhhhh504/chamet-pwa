import { PropsWithChildren } from 'react';

import { Helmet } from 'react-helmet';

type PageProps = {
  title?: string;
};
export function Page({ children, title }: PropsWithChildren<PageProps>) {
  return (
    <>
      <Helmet>
        <title>{title ? `${title} | Chamet` : 'Chamet'}</title>
      </Helmet>
      {children}
    </>
  );
}
