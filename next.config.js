require('dotenv').config();

const path = require('path');
const withSass = require('@zeit/next-sass');
const withOffline = require('next-offline');
const Dotenv = require('dotenv-webpack');

const nextConfig = {
  ...withOffline(),
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
};

module.exports = withOffline(withSass(nextConfig));
