/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["loremflickr.com"],
  },
  i18n: {
    locales: ["id"],
    defaultLocale: "id",
  },
};

module.exports = nextConfig;
