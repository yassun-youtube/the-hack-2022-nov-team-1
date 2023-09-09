import SideNewsTextComponent from './index'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SideNewsTextComponent> = {
  component: SideNewsTextComponent,
}
export default meta

export const Primary: StoryObj<typeof SideNewsTextComponent> = {
  args: {
    text: '億の上に億を継ぐ。アメリカで最も裕福な相続人たち',
  },
}
