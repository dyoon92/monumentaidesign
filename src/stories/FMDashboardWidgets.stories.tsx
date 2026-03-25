import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import {
  FMKPIRow,
  PriorityTasksPanel,
  RecentCommunicationsPanel,
  GoalTrackerPanel,
  DelinquenciesPanel,
  GoogleReviewsPanel,
  PromotionsPanel,
} from './FMDashboardWidgets'

const meta: Meta = {
  title: 'FM Dashboard',
  parameters: {
    layout: 'padded',
  },
}
export default meta

export const KPIRow: StoryObj = {
  name: 'KPI Row',
  render: () => <div style={{ minWidth: 900 }}><FMKPIRow /></div>,
}

export const PriorityTasks: StoryObj = {
  name: 'Priority Tasks Panel',
  render: () => <div style={{ width: 420 }}><PriorityTasksPanel /></div>,
}

export const RecentCommunications: StoryObj = {
  name: 'Recent Communications Panel',
  render: () => <div style={{ width: 420 }}><RecentCommunicationsPanel /></div>,
}

export const GoalTracker: StoryObj = {
  name: 'Goal Tracker Panel',
  render: () => <div style={{ width: 420 }}><GoalTrackerPanel /></div>,
}

export const Delinquencies: StoryObj = {
  name: 'Delinquencies Panel',
  render: () => <div style={{ width: 420 }}><DelinquenciesPanel /></div>,
}

export const GoogleReviews: StoryObj = {
  name: 'Google Reviews Panel',
  render: () => <div style={{ width: 420 }}><GoogleReviewsPanel /></div>,
}

export const Promotions: StoryObj = {
  name: 'Promotions Panel',
  render: () => <div style={{ width: 420 }}><PromotionsPanel /></div>,
}
