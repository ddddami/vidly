import * as Sentry from "@sentry/react";
function init() {
  Sentry.init({
    dsn: "https://6a15d1bb600242ca8f01e6151d0272d2@o4504804551557120.ingest.sentry.io/4505531382759424",
    // integrations: [
    //   new Sentry.BrowserTracing({
    //     // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
    //     tracePropagationTargets: ["localhost"],
    //   }),
    //   new Sentry.Replay(),
    // ],
    // // Performance Monitoring
    // tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
    // // Session Replay
    // replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    // replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  });
}

function log(error) {
  Sentry.captureException(error);
}
export default { init, log };
