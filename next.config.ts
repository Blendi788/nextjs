import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    MONGODB_URI:
    "mongodb+srv://dev-api:Blendi1700@myapplication.yy6jdqd.mongodb.net ",
    NEXTAUTH_SECRET:"vVuj8RK6IjWJfU+SLLr+A9dCx8QhC9b8NvUE6HSCIkw=",

  },
};

export default nextConfig;
