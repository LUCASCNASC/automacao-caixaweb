const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://10.7.0.87/#/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 5000,
    screenshotOnRunFailure: true, // Captura de screenshot somente quando o teste falhar
    screenshotsFolder: 'cypress/screenshots', // Diretório onde as screenshots serão salvas
    video: true, //Gravar vídeo do teste
    videosFolder: 'cypress/videos' // Diretório onde os vídeos serão salvos
  },
});
