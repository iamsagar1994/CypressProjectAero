const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    baseUrl: 'https://www.goibibo.com/', // Replace with your base URL
    specPattern:'cypress/e2e/**/*.cy.js', // Pattern to find test file
    supportFile: 'cypress/support/e2e.js', // Path to the support file
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false, // Disable video recording if not needed
    retries: {
      runMode: 2,
      openMode: 0,
    },
    chromeWebSecurity: false,
    testIsolation: false
  },
});
