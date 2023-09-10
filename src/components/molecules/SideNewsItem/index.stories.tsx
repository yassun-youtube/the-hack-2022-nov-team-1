import SideNewsItem from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SideNewsItem> = { component: SideNewsItem }
export default meta
type Story = StoryObj<typeof SideNewsItem>

export const Primary: Story = {
  render: () => (
    <SideNewsItem
      url='/'
      label='Business'
      text='億の上に億を継ぐ。アメリカで最も裕福な相続人たち'
    />
  ),
}
