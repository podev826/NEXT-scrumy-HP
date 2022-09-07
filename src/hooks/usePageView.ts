import * as gtag from 'libraries/google-analytics/gtag';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const usePageView = ({ existsGaId, GA_ID }: any) => {
  const router = useRouter();
  useEffect(() => {
    if (!existsGaId) {
      return;
    }

    const handleRouteChange = (path: any, { shallow }: any) => {
      if (!shallow) {
        gtag.pageview(GA_ID, path);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [GA_ID, existsGaId, router.events]);
};
