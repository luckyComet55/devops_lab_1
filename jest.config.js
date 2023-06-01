process.env.NODE_ENV = 'UNITTEST';
module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.ts'
  ],
  coverageDirectory: './src/tests',
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  preset: 'ts-jest'
};

