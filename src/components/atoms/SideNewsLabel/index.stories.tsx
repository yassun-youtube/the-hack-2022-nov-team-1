import SideNewsLabelComponent from './index'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SideNewsLabelComponent> = {
  component: SideNewsLabelComponent,
}
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
