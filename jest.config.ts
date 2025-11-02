import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  roots: ['<rootDir>/tests'],

  testMatch: [
    '<rootDir>/tests/**/*.test.[jt]s?(x)',
    '<rootDir>/tests/**/*.spec.[jt]s?(x)',
  ],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/lib/(.*)$': '<rootDir>/lib/$1',
    '^@/hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@/app/(.*)$': '<rootDir>/app/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },

  transform: {
    '^.+\\.(t|j)sx?$': ['ts-jest', { useESM: true }],
  },

  transformIgnorePatterns: [
    '/node_modules/(?!(next-auth|@auth|motion)/)',
    '^.+\\.module\\.(css|sass|scss)$',
  ],

  extensionsToTreatAsEsm: ['.ts', '.tsx'],

  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
}

export default createJestConfig(config)
