/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/.well-known/apple-app-site-association',
        destination: '/api/.well-known/apple-app-site-association',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
