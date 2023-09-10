import ListText from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ListText> = {
  component: ListText,
}

export default meta
type Story = StoryObj<typeof ListText>

export const Primary: Story = {
  render: () => <ListText>test</ListText>,
}
