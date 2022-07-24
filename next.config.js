/** @type {import('next').NextConfig} */
const config = {
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-US', 'en-GB', 'en-AU'],
    defaultLocale: 'en-US',
  },
  images: {
    imageSizes: [132],
    deviceSizes: [380, 640, 768, 1024, 1200],
  },
  experimental: {
    newNextLinkBehavior: true,
    images: {
      allowFutureImage: true,
    },
  },
}

module.exports = config
