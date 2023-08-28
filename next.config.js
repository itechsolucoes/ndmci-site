/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  images: {
    domains: [
      'images-telemedicina.s3.us-west-2.amazonaws.com',
      'cdn-icons-png.flaticon.com',
      'dummyimage.com'
    ],
  },
  // compiler: {
  //   reactRemoveProperties: true,
  //   reactRemoveProperties: { properties: ['^data-custom$'] },
  //   removeConsole: true,
  //   swcMinify: true,
  // },
  env: {
    BASE_URL_API: process.env.BASE_URL_API,
    TOKEN_API: process.env.TOKEN_API,
    API_AMBIENTE: process.env.API_AMBIENTE,
  },
}

module.exports = nextConfig
