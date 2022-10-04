const path = require('path')

module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleNameMapper: {
    "\\.css$": require.resolve("./test/style-mock.js"),
    "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": require.resolve("./test/style-mock.js"),
  },
  moduleDirectories: ["node_modules", path.join(__dirname, 'src'), 'shared'],
//   coverageThreshold: {
//     global: {
//       statements: 30,
//       branches: 25,
//       functions: 25,
//       lines: 20,
//     },
//   },
  collectCoverageFrom: ["**/src/**/*.js", "**/src/**/*.tsx", "**/src/**/*.ts"],
//   transform: {
//     "\\.tsx?$": "ts-jest",
//     "\\.jsx?$": "babel-jest", // if you have jsx tests too
//   },
//   globals: {
//     "ts-jest": {
//       tsconfig: "<rootDir>/tsconfig.json",
//     },
//   },
//   transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\](?!lodash-es/).+\\.js$"],
};
