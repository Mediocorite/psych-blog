/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // TODO: Fix the deprecated configurations
    domains: ["source.unsplash.com", "images.unsplash.com"],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: "/",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
