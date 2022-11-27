import type { StoryObj, Meta } from '@storybook/react'
import { Button } from './button'

export default {
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Button>

export const Primary: StoryObj<typeof Button> = {
  args: {
    primary: true,
    label: 'Button',
  },
}

export const Secondary: StoryObj<typeof Button> = {
  args: {
    label: 'Button',
  },
}

export const Large: StoryObj<typeof Button> = {
  args: {
    size: 'large',
    label: 'Button',
  },
}

export const Small: StoryObj<typeof Button> = {
  args: {
    size: 'small',
    label: 'Button',
  },
}
