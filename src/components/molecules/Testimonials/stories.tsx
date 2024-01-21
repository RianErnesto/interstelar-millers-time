import { Meta, StoryObj } from '@storybook/react'
import Testimonials from '.'

const meta: Meta = {
  title: 'Components/Molecules/Testimonials',
  component: Testimonials,
  args: {
    author: 'Rian Ernesto',
    quote: 'Labore irure minim dolor et ex incididunt incididunt commodo.',
  },
}

export default meta
type Story = StoryObj

export const Default: Story = {}
