/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [{ source: '/', destination: '/root' }];
  },
  images: {
    domains: ['images.microcms-assets.io'],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
