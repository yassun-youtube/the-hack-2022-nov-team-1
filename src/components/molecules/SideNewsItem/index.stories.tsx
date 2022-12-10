import {Meta, StoryObj} from "@storybook/react";
import SideNewsItem from './index';

export default {
  component: SideNewsItem,
} as Meta <typeof SideNewsItem>

export const Primary: StoryObj<typeof SideNewsItem> = {
  args: {
    url: '/',
    label: 'Business',
    text: '億の上に億を継ぐ。アメリカで最も裕福な相続人たち',
  }
}