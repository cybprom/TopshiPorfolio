/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    domains: [
      "www.google.com",
      "encrypted-tbn0.gstatic.com",
      "cdn.sanity.io",
      "localhost",
    ], // Add the necessary domains here
  },
};
