import { Meta, StoryObj } from '@storybook/react'

import { CheckBox, CheckBoxProps } from "./CheckBox"
import { Text } from './Text'

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <div className='flex items-center gap-2'>
        { Story() }
        <Text size="sm">Remember me</Text>
      </div>
    )
  ]
} as Meta<CheckBoxProps>

export const Default: StoryObj<CheckBoxProps> = {}
