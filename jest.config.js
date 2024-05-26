module.exports = {
  verbose: true,
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/src/**/?(*.)+(spec|test).ts?(x)'],
  modulePathIgnorePatterns: ['<rootDir>/.history/'],
  moduleDirectories: ["node_modules", "<rootDir>/"],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  }
}