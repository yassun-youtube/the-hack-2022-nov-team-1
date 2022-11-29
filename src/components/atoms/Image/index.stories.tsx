import type { StoryObj, Meta } from '@storybook/react'
import ImageComponent from '@components/atoms/Image/index'

export default {
  component: ImageComponent,
} as Meta<typeof ImageComponent>

export const Primary: StoryObj<typeof ImageComponent> = {
  args: {
    src: 'https://storage.googleapis.com/afs-prod/media/867e7ddc5d684e5fbb41fc8539fe5bd9/400.jpeg',
    alt: '',
  },
}
