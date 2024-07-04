/** @type {import('next').NextConfig} */ 
import createNextIntlPlugin from 'next-intl/plugin';
const withNextIntl = createNextIntlPlugin();


const nextConfig = {
  i18n: {
    locales: ["ru", "en"],
    defaultLocale: "ru",
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  sassOptions: {
    includePaths: ["/src/app/*/*.scss", "/src/pages/*.scss"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.eurasia.crocos.kz",
        port: "",
        pathname: "/storage/whats-new/**",
      },
    ],
  },
};

export default nextConfig;
