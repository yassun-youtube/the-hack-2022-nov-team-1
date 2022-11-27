import { StoryObj, Meta } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'
import { Page } from './page'

export default {
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof Page>

export const LoggedIn: StoryObj<typeof Page> = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const loginButton = await canvas.getByRole('button', { name: /Log in/i })
    await userEvent.click(loginButton)
  },
}

export const LoggedOut: StoryObj<typeof Page> = {
  args: {},
}
