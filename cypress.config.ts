import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'

module.exports = defineConfig({
  pageLoadTimeout:10000,
  chromeWebSecurity:false,
  viewportHeight:1080,
  viewportWidth:1440,
  experimentalInteractiveRunEvents:true,
  screenshotOnRunFailure:false,
  reporter:'cypress-multi-reporters',
  reporterOptions:{
    configFile:'config-report-chrome.json'
  },
  e2e: {
    specPattern:['cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
    setupNodeEvents(on, config) {
      on('file:preprocessor', createBundler())
      // implement node event listeners here
      return config
    },
    baseUrl:'https://www.ebay.com/'
  },
});
