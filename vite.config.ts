import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': resolve(__dirname, './src/assets/'),
      '@components': resolve(__dirname, './src/components/'),
      '@libs': resolve(__dirname, './src/libs/'),
    },
  },
  // HACK: STORYBOOK environment variable is not working, so set
  // https://github.com/storybookjs/storybook/pull/12997
  define: {
    'process.env.STORYBOOK': true,
  },
})
