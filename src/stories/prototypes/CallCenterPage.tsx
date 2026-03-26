import { useState } from 'react'
import { Tabs } from '../Tabs'
import { Button } from '../Button'
import { Badge } from '../Badge'

// ─── Placeholder ───────────────────────────────────────────────────────────────

const Placeholder = ({ name, height = 200 }: { name: string; height?: number }) => (
  <div style={{
    height,
    background: 'white',
    border: '2px dashed var(--ds-color-border)',
    borderRadius: 'var(--ds-border-radius-md)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    color: 'var(--ds-color-text-muted)',
    fontFamily: 'Inter, sans-serif',
  }}>
    <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
      Missing Component
    </span>
    <span style={{ fontSize: 14, color: 'var(--ds-color-text-default)' }}>
      {name}
    </span>
  </div>
)

// ─── Missing component warnings ────────────────────────────────────────────────
//
// ⚠️  Missing component: CallQueueTable
// This needs to be designed in Figma first before it can be built.
// Next step: file a design request so it can be added to the component library.
//
// ⚠️  Missing component: ActiveCallPanel
// This needs to be designed in Figma first before it can be built.
// Next step: file a design request so it can be added to the component library.
//
// ⚠️  Missing component: CallerInfoCard
// This needs to be designed in Figma first before it can be built.
// Next step: file a design request so it can be added to the component library.
//
// ⚠️  Missing component: CallTimerBadge
// This needs to be designed in Figma first before it can be built.
// Next step: file a design request so it can be added to the component library.

// ─── Page ──────────────────────────────────────────────────────────────────────

const QUEUE_TABS = [
  { key: 'all', label: 'All Calls', count: 12 },
  { key: 'inbound', label: 'Inbound', count: 8 },
  { key: 'outbound', label: 'Outbound', count: 3 },
  { key: 'missed', label: 'Missed', count: 1 },
]

export function CallCenterPage() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: '20px 20px 40px' }}>

      {/* Page header — matches dashboard pattern */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 28, fontWeight: 700, color: 'var(--ds-color-text-primary)' }}>
            Phone Numbers
          </span>
          {/* ✅ Badge — exists in design system */}
          <Badge status="active" label="Live" size="sm" />
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {/* ✅ Button — exists in design system */}
          <Button variant="secondary" size="sm" label="Call Log" />
          <Button variant="primary" size="sm" label="New Call" />
        </div>
      </div>

      {/* Queue tabs — ✅ Tabs exists in design system */}
      <div style={{ background: 'var(--ds-color-surface)', borderRadius: 'var(--ds-border-radius-lg)', border: '1px solid var(--ds-color-border)', marginBottom: 16, padding: '0 8px' }}>
        <Tabs
          tabs={QUEUE_TABS}
          activeKey={activeTab}
          onTabChange={setActiveTab}
        />
      </div>

      {/* Two-column layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 16, alignItems: 'flex-start' }}>

        {/* Left — call queue */}
        {/* ❌ CallQueueTable — needs Figma design */}
        <Placeholder name="CallQueueTable" height={480} />

        {/* Right — active call sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>

          {/* ❌ ActiveCallPanel — needs Figma design */}
          <Placeholder name="ActiveCallPanel" height={180} />

          {/* ❌ CallerInfoCard — needs Figma design */}
          <Placeholder name="CallerInfoCard" height={200} />

          {/* ❌ CallTimerBadge — needs Figma design */}
          <Placeholder name="CallTimerBadge" height={56} />

          {/* ✅ Buttons — exist in design system */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Button variant="primary" size="md" label="Answer" />
            <Button variant="secondary" size="md" label="Transfer" />
            <Button variant="danger" size="md" label="End Call" />
          </div>
        </div>

      </div>
    </div>
  )
}
