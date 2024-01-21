import { Meta, StoryObj } from '@storybook/react'
import Info from '.'
import { InfoProps } from './types'

const meta: Meta<InfoProps> = {
  title: 'Components/Atoms/Info',
  component: Info,
  args: {
    children: 'This is a tooltip',
  },
}

export default meta
type Story = StoryObj<InfoProps>

export const Default: Story = {}
