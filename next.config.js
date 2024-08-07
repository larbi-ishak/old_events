/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        // when using external images
        domains: ["images.unsplash.com"],
    },
};

module.exports = nextConfig;

// when making changes to this file you must restart the server
