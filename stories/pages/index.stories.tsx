import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { HomePage } from '../../pages/index'

export default {
  title: 'Pages/Home',
  component: HomePage,
} as Meta

const Template: Story = (args) => <HomePage {...args} />

export const Default = Template.bind({})
Default.args = {}
