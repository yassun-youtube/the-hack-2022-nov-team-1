import { Config } from '@jest/types'
import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './src',
})

/** @type {import('jest').Config} */
const customJestConfig: Config.InitialOptions = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@libs/(.*)$': '<rootDir>/src/libs/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
