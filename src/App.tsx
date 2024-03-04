import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallbackComponent } from '@/components/functional';
import { Toaster } from '@/components/ui/toaster';
import { AppRouter } from '@/router/AppRouter';

import './App.css';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
      <AppRouter />
      <Toaster />
    </ErrorBoundary>
  );
}

export { App };
