import { Meta, StoryObj } from '@storybook/react'
import SideNewsLabelComponent from './index'

export default {
  component: SideNewsLabelComponent,
} as Meta<typeof SideNewsLabelComponent>

export const Primary: StoryObj<typeof SideNewsLabelComponent> = {
  args: {
    label: 'Business',
  },
}
