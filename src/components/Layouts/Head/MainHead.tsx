import { SITE_URL } from 'configs';
import Head from 'next/head';
import { FC } from 'react';
import { MetaItemProps } from 'types';

type MainHeadProps = {
  meta: MetaItemProps;
};

export const MainHead: FC<MainHeadProps> = ({ meta }) => {
  const baseURL = SITE_URL;
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="株式会社Scrumy" />
      <meta
        property="og:type"
        content={meta.href === '/' ? 'website' : 'article'}
      />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta
        property="og:image"
        content={`${baseURL}/thumbnails/thumbnail.jpg`}
      />
      <meta property="og:url" content={`${baseURL}${meta.href}`} />
      <link rel="canonical" href={`${baseURL}${meta.href}`} />
    </Head>
  );
};
