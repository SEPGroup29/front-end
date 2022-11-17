const { defineConfig } = require('cypress')

module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    admin_password: 'Admin@123',
    vo_email: 'norealuserhere@gmail.com',
  }
});

