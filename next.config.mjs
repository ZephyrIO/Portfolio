/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    output: "export",
    images: {
        loader: "akamai",
        path: "",
    },
    assetPrefix: 'https://zephyrio.github.io/Portfolio/',
};

export default nextConfig;