/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [{ source: '/', destination: '/root' }];
  },
  images: {
    domains: ['images.microcms-assets.io'],
  },
  async headers() {
    return [
      {
        source: '/images/about/about_spacer.jpg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
