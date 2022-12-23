import { StorybookConfig } from '@storybook/react-vite'
const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    // Todo 起動エラー修正待ち
    // '@storybook/addon-essentials',
    // '@storybook/addon-interactions',
    // Todo exportエラー修正待ち
    // 'storybook-addon-next-router',
  ],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/react-vite',
    options: {
      fastRefresh: true,
      strictMode: true,
    },
  },
  docs: {
    docsPage: true,
  },
}
export default config
