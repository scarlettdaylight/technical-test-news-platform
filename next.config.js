require('dotenv').config();

const path = require('path');
const withSass = require('@zeit/next-sass');
const withOffline = require('next-offline');
const Dotenv = require('dotenv-webpack');

const nextConfig = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    apiKey: process.env.APIKEY, // Pass through env variables
  },
  webpack: (config) => {
    config.plugins = config.plugins || [];
    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];
    return config;
  },
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
};

module.exports = withSass(withOffline(nextConfig));
