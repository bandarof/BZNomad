/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
        ],
      },
    ];
  },
}

// Only add dev tools if package is installed
try {
  const { withDevTools } = require('@builder.io/dev-tools/next');
  module.exports = withDevTools(nextConfig);
} catch {
  module.exports = nextConfig;
}
