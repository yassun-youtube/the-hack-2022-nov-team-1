import type { Meta, StoryObj } from '@storybook/react'
import SideNewsItem from './index'

const meta: Meta<typeof SideNewsItem> = { component: SideNewsItem }
export default meta

export const Primary: StoryObj<typeof SideNewsItem> = {
  args: {
    url: '/',
    label: 'Business',
    text: '億の上に億を継ぐ。アメリカで最も裕福な相続人たち',
  },
}
