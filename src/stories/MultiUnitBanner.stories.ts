import type { Meta, StoryObj } from '@storybook/react-vite'
import { MultiUnitBanner } from './MultiUnitBanner'

const meta: Meta<typeof MultiUnitBanner> = {
  title: 'Tenants/MultiUnitBanner',
  component: MultiUnitBanner,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof MultiUnitBanner>

const defaultArgs = {
  balanceAmount: '$345.00',
  dueDate: 'Jul 29, 2024',
  paidThrough: 'Jun 29, 2024',
  lastPayment: 'May 2, 2024',
}

export const RedesignOverdue: Story = {
  name: 'Redesign-Overdue',
  args: {
    ...defaultArgs,
    state: 'overdue',
  },
}

export const PastTenants: Story = {
  name: 'Past Tenants',
  args: {
    ...defaultArgs,
    state: 'past-tenant',
  },
}

export const GoodStanding: Story = {
  name: 'Good Standing',
  args: {
    ...defaultArgs,
    state: 'good-standing',
    balanceAmount: '$0.00',
  },
}

export const BalanceExists: Story = {
  name: 'Balance Exists',
  args: {
    ...defaultArgs,
    state: 'balance-exists',
  },
}

export const MoveOuts: Story = {
  name: 'Move Outs',
  args: {
    ...defaultArgs,
    state: 'move-out',
    moveOutDate: 'Apr 25, 2025',
  },
}

export const Transfers: Story = {
  name: 'Transfers',
  args: {
    ...defaultArgs,
    state: 'transfer',
    transferToUnit: 'A-500',
    transferAmount: '$117.00',
  },
}

export const UpdatedDefault: Story = {
  name: 'Updated Default',
  args: {
    ...defaultArgs,
    state: 'updated-default',
  },
}

export const Default: Story = {
  name: 'Default',
  args: {
    ...defaultArgs,
    state: 'default',
  },
}
