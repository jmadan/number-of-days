module.exports = {
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'node',
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      compiler: 'ttypescript',
    },
  },
  setupFiles: [],
  testRegex: ['/tests/.*\\.(ts)$', '/src/.*\\.spec\\.(ts)$'],
  moduleNameMapper: {},
};
