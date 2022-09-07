import React, { FC } from 'react';

type GoogleAnalyticsProps = {
  GA_ID: any;
  existsGaId: any;
};

export const GoogleAnalytics: FC<GoogleAnalyticsProps> = ({
  GA_ID,
  existsGaId,
}) => {
  return (
    existsGaId && (
      <>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
              });`,
          }}
        />
      </>
    )
  );
};
