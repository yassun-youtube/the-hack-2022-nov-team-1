import { Meta, StoryObj } from '@storybook/react'
import SideNewsTextComponent from './index'

const meta: Meta<typeof SideNewsTextComponent> = { component: SideNewsTextComponent }
export default meta

export const Primary: StoryObj<typeof SideNewsTextComponent> = {
  args: {
    text: '億の上に億を継ぐ。アメリカで最も裕福な相続人たち',
  },
}
