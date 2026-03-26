import type { Meta, StoryObj } from '@storybook/react-vite'
import { CallCenterPage } from './CallCenterPage'

const meta: Meta<typeof CallCenterPage> = {
  title: '🧪 Prototypes / Call Center Page',
  component: CallCenterPage,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof CallCenterPage>

export const Default: Story = {}
