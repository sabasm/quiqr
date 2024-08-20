import { AppProps } from 'next/app';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { Auth0Provider } from '@auth0/auth0-react';
import { LoggerService } from '../services/LoggerService';

const logger = new LoggerService();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Auth0Provider
        domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN!}
        clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!}
        redirectUri={typeof window !== 'undefined' ? window.location.origin : undefined}
        onRedirectCallback={(appState) => {
          logger.info('Auth0 redirect callback', { appState });
        }}
      >
        <Component {...pageProps} />
      </Auth0Provider>
    </ErrorBoundary>
  );
}

export default MyApp;


