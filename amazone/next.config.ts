import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    buildActivity: false, // hides the spinner/indicator in dev
  },
}
export default nextConfig;
