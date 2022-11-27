import type { StoryObj, Meta } from '@storybook/react'
import { Header } from './header'

export default {
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Header>

export const LoggedIn: StoryObj<typeof Header> = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
}

export const LoggedOut: StoryObj<typeof Header> = {
  args: {},
}
