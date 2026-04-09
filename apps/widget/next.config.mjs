/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui", "@workspace/backend"],
  experimental: {
    externalDir: true,
  },
}

export default nextConfig
