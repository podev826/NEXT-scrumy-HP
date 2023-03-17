import { createClient } from 'microcms-js-sdk';

export const Newsclient = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN1,
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY1,
});

// export const Blogclient = createClient({
//   serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN2,
//   apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY2,
// });
