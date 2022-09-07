import { GoogleAnalytics } from 'components/Elements';
import {
  existsGaIdPrimary,
  existsGaIdSecondary,
  GA_ID_PRIMARY,
  GA_ID_SECONDARY,
} from 'configs/Common/GoogleAnalytics';
import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="ja">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;0,800;1,700&family=Noto+Sans+JP:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/favicons/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/favicons/apple-touch-icon-180x180.png"
        />
        <link rel="icon" type="image/png" href="/favicons/icon-192x192.png" />
        <GoogleAnalytics existsGaId={existsGaIdPrimary} GA_ID={GA_ID_PRIMARY} />
        <GoogleAnalytics
          existsGaId={existsGaIdSecondary}
          GA_ID={GA_ID_SECONDARY}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
