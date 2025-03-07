// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

import { clientEnv } from "../env-client";

Sentry.init({
  dsn: clientEnv.NEXT_PUBLIC_SENTRY_DSN,
  enabled: clientEnv.NEXT_PUBLIC_ENVIRONMENT !== "ci",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 0.05,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  // Uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // spotlight: env.NODE_ENV === 'development',
});
