/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/.well-known/:file',
        destination: '/api/.well-known/:file',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
