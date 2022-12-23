import { Meta, StoryObj } from '@storybook/react'
import SideNewsLabelComponent from './index'

const meta: Meta<typeof SideNewsLabelComponent> = { component: SideNewsLabelComponent }
export default meta

export const Business: StoryObj<typeof SideNewsLabelComponent> = {
  args: {
    label: 'Business',
  },
}

export const Technology: StoryObj<typeof SideNewsLabelComponent> = {
  args: {
    label: 'Technology',
  },
}
