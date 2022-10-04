module.exports = {
  root: true,
  plugins: ["eslint-plugin-cypress"],
  extends: ["kentcdodds", "kentcdodds/import", "plugin:cypress/recommend"],
  env: { "cypress/globals": true },
};
