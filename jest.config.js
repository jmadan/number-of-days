/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "\\.(ts|tsx)$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      compiler: "ttypescript",
    },
  },
  setupFiles: [],
  testRegex: ["/tests/.*\\.(ts)$", "/src/.*\\.spec\\.(ts)$"],
  moduleNameMapper: {},
};
