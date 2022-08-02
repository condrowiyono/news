/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.idntimes.com", "loremflickr.com"],
  },
}

module.exports = nextConfig
