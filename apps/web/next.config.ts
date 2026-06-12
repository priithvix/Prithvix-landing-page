import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the workspace root so Next ignores stray lockfiles elsewhere on disk
  // and traces files from the PrithviX monorepo root.
  turbopack: {
    root: path.join(__dirname, "..", ".."),
  },
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  allowedDevOrigins: ["192.168.29.8", "10.21.49.92", "localhost", "192.168.1.115"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self' 'unsafe-inline' 'unsafe-eval' https: wss: data: blob:;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
