import ImageComponent from '.'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof ImageComponent> = { component: ImageComponent }
export default meta

export const Primary: StoryObj<typeof ImageComponent> = {
  args: {
    src: 'https://storage.googleapis.com/afs-prod/media/867e7ddc5d684e5fbb41fc8539fe5bd9/400.jpeg',
    alt: '',
  },
}
