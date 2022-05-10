/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [{ source: '/', destination: '/root' }];
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
