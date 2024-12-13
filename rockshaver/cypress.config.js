const { configurePlugin } = require('cypress-mongodb');
require('dotenv').config();

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      configurePlugin(on);
      // implement node event listeners here
    },
    baseUrl: process.env.WEB_URL,
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
  env: {
    mongodb: {
      uri: process.env.MONGODB_URI,
      database: process.env.DATABASE,
    },
    baseApi:process.env.API_URL,
  },
};
