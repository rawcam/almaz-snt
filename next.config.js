/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/almaz-snt',
  assetPrefix: '/almaz-snt',
  images: {
    unoptimized: true
  }
}
module.exports = nextConfig
