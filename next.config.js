/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [{ source: '/', destination: '/root' }];
  },
  images: {
    domains: [
      'images.microcms-assets.io',
      'develop-dot-scrumy-hp.an.r.appspot.com',
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
