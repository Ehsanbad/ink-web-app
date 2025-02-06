import { withSentryConfig } from "@sentry/nextjs";
import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";
import { env } from "@/env";
import { clientEnv } from "@/env-client";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  transpilePackages: ["three"],
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["*"],
      bodySizeLimit: "6mb", // 5mb max image size + 1mb buffer for other form data
    },
  },
};

export default withSentryConfig(withNextIntl(nextConfig), {
  // For all available options, see node_modules/@sentry/nextjs/build/types/config/types.d.ts

  org: "payward-inc",
  project: "ink-web-app",
  authToken: env.SENTRY_AUTH_TOKEN,
  silent: true,

  // Sourcemaps config
  sourcemaps: {
    // Send source maps to Sentry, but do not include them in the client bundle
    deleteSourcemapsAfterUpload: true,
  },

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: "/monitoring",

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,
});
