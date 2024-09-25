import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor'

module.exports = defineConfig({
  chromeWebSecurity:false,
  viewportHeight:720,
  viewportWidth:1080,
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
  },
});
