import { Meta, StoryObj } from '@storybook/react'
import SideNewsTextComponent from './index'

export default {
  component: SideNewsTextComponent,
} as Meta<typeof SideNewsTextComponent>

export const Primary: StoryObj<typeof SideNewsTextComponent> = {
  args: {
    text: '億の上に億を継ぐ。アメリカで最も裕福な相続人たち',
  },
}
