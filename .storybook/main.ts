import { resolve } from 'node:path'

import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: [
    '../src/app/**/*.stories.tsx',
    '../src/components/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: {
          implementation: require.resolve('postcss'),
        },
      },
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: { nextConfigPath: '../next.config.js' },
  },
  features: { storyStoreV7: true },
  docs: { autodocs: 'tag' },
  staticDirs: ['../public'],
  logLevel: 'error',
  core: { disableTelemetry: true },
  webpackFinal: async (config) => {
    if (!config.resolve) return config
    config.resolve.modules = [resolve(__dirname, '..'), 'node_modules']
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': resolve(__dirname, '../src/'),
    }
    return config
  },
}
export default config
