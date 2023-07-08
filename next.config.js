/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "image.tmdb.org",
      "rb.gy",
      "images.unsplash.com",
      "source.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
