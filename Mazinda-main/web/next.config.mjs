/** @type {import('next').NextConfig} */
const nextConfig = {};
export default {
    webpack(config) {
      config.resolve.fallback = {
        fs: false,  // Mock fs in the frontend
      };
      return config;
    }
  };
  
// default nextConfig;
