/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images:{
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.eurasia.crocos.kz',
        port: '',
        pathname: '/storage/whats-new/**',
      },
    ],
  
  }
};

export default nextConfig;
