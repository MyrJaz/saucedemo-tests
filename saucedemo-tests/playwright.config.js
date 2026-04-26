const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  reporter: [
    ['list'],
    ['playwright-qase-reporter', {
      mode: 'testops',
      debug: false,
      testops: {
        api: {
          token: 'a476e5178b6114d842b1a079010b12f31a6bd8862534523c6e2c92e6633dd8ac',
        },
        project: 'SAUCE',
        run: {
          complete: true,
        },
      },
    }],
  ],
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,
  },
});

