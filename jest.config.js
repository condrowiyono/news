const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  roots: ["<rootDir>"],
  verbose: true,
  preset: "ts-jest",
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@modules/(.*)$': '<rootDir>/modules/$1',
    '^@pages/(.*)$': '<rootDir>/pages/$1',
    '^@utils/(.*)$': '<rootDir>/utils/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["**/__tests__/*.spec.*"],
  collectCoverageFrom: ["<rootDir>/components/**/*.{ts,tsx}","<rootDir>/modules/**/*.{ts,tsx}","<rootDir>/utils/**/*.{ts,tsx}", "!**/node_modules/**", "!**/.next/**"],
  coverageReporters: ["lcov", "text-summary", "cobertura"],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)