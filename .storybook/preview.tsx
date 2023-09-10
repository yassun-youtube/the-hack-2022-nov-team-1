import NextImage from 'next/image'

import { withThemeByClassName } from '@storybook/addon-styling'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { initialize, mswDecorator } from 'msw-storybook-addon'

import type { Preview } from '@storybook/react'
import type { ImageProps } from 'next/image'

import '../src/styles/globals.css'

initialize()
const preview: Preview = {
  decorators: [
    mswDecorator,
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    nextjs: {
      router: {
        basePath: '',
      },
    },
    layout: 'centered',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    backgrounds: {
      default: 'white',
      values: [
        {
          name: 'white',
          value: '#fff',
        },
        {
          name: 'black',
          value: '#000',
        },
        {
          name: 'gray',
          value: '#f3f4f6',
        },
      ],
    },
  },
}

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props: ImageProps) => (
    <NextImage
      {...props}
      unoptimized
    />
  ),
})

export default preview
