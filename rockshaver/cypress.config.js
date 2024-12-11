const { configurePlugin } = require('cypress-mongodb');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      configurePlugin(on);
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    viewportWidth: 1920,
    viewportHeight: 1080,
  },
  env: {
    mongodb: {
      uri: "mongodb://cypress:skills@localhost:27017",
      database: "rockshaver",
    },
  },
};
