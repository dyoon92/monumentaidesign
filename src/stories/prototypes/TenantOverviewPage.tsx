import React, { useState } from 'react'
import { TenantPageHeader } from '../TenantPageHeader'
import { PaymentBanner } from '../PaymentBanner'
import { TenantInfoCard } from '../TenantInfoCard'

// ─── Icons ────────────────────────────────────────────────────────────────────

const PushpinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M9 1L13 5L10 8L10.5 12L7 9L3.5 12.5L4 8L1 5L5 5L9 1Z"
      fill="var(--ds-color-warning)" stroke="var(--ds-color-warning)" strokeWidth="0.5" strokeLinejoin="round" />
  </svg>
)

const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="2" y="6" width="10" height="7" rx="1.5" stroke="var(--ds-color-text-primary)" strokeWidth="1.2" />
    <path d="M4.5 6V4.5a2.5 2.5 0 015 0V6" stroke="var(--ds-color-text-primary)" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="7" cy="9.5" r="1" fill="var(--ds-color-text-primary)" />
  </svg>
)

const EnvelopeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="1" y="3" width="12" height="8" rx="1" stroke="#e07b39" strokeWidth="1.2" />
    <path d="M1 4l6 4 6-4" stroke="#e07b39" strokeWidth="1.2" />
  </svg>
)

const PaperclipIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M10 5.5L5.5 10a3 3 0 01-4.243-4.243l5-5a2 2 0 012.829 2.829L4.586 8.086a1 1 0 01-1.414-1.414L8 1.842"
      stroke="var(--ds-color-text-muted)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const FilterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1.5 3.5h11M3.5 7h7M5.5 10.5h3" stroke="var(--ds-color-text-muted)" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)

const InfoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6" stroke="var(--ds-color-primary)" strokeWidth="1.2" />
    <path d="M7 6v4M7 4.5v.5" stroke="var(--ds-color-primary)" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 6l3 3 5-5" stroke="var(--ds-color-success)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const UpArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M6 10V2M2 6l4-4 4 4" stroke="var(--ds-color-success)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M3 4.5l3 3 3-3" stroke="var(--ds-color-text-muted)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// ─── UnitDetailsCard ──────────────────────────────────────────────────────────

function UnitDetailsCard() {
  const [menuOpen, setMenuOpen] = useState(false)

  const detailRows: { label: string; value: React.ReactNode }[] = [
    { label: 'Size', value: '10 × 10 × 8 (10 ft)' },
    { label: 'Type', value: 'Climate-Controlled' },
    { label: 'Unit Group', value: <span style={{ color: 'var(--ds-color-primary)', cursor: 'pointer' }}>10 × 10</span> },
    { label: 'Tier', value: 'Premium' },
    { label: 'Facility', value: <span style={{ color: 'var(--ds-color-primary)', cursor: 'pointer' }}>West End</span> },
    { label: 'Floor', value: '1st floor' },
    { label: 'Move-In Date', value: 'Apr 29, 2023' },
    {
      label: 'Protection',
      value: (
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ background: 'var(--ds-color-success-light)', color: 'var(--ds-color-success)', fontSize: 11, fontWeight: 600, borderRadius: 'var(--ds-border-radius-sm)', padding: '2px 6px' }}>
            Enrolled
          </span>
          <span style={{ fontSize: 13 }}>$12 | $2,000 Coverage</span>
        </span>
      ),
    },
    {
      label: 'Rec. Services',
      value: (
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ fontSize: 13 }}>Early Ext. Access Hours</span>
          <span style={{ background: 'var(--ds-color-primary-light)', color: 'var(--ds-color-primary)', fontSize: 11, fontWeight: 600, borderRadius: 'var(--ds-border-radius-sm)', padding: '2px 6px' }}>+3</span>
        </span>
      ),
    },
  ]

  const rentCards = [
    { label: 'Previous', amount: '$110.00', date: 'Dec 29, 2023', isCurrent: false, increase: null, streetRate: null },
    { label: 'Current', amount: '$115.00', date: 'Apr 29, 2024', isCurrent: true, increase: '+$5.00', streetRate: '$130' },
    { label: 'Next', amount: '$120.00', date: 'Jun 29, 2024', isCurrent: false, increase: '+$5.00', streetRate: null },
  ]

  return (
    <div style={{ background: 'white', border: '1px solid var(--ds-color-border)', borderRadius: 'var(--ds-border-radius-lg)', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--ds-color-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 26, fontWeight: 700, color: 'var(--ds-color-text-primary)' }}>147</span>
          <span style={{ background: 'var(--ds-color-error-light)', color: 'var(--ds-color-error)', fontSize: 12, fontWeight: 600, borderRadius: 'var(--ds-border-radius-sm)', padding: '3px 8px' }}>
            Overdue
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, position: 'relative' }}>
          <button style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500, background: 'white', color: 'var(--ds-color-text-primary)', border: '1px solid var(--ds-color-border)', borderRadius: 'var(--ds-border-radius-md)', padding: '6px 14px', cursor: 'pointer' }}>
            Move Out
          </button>
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setMenuOpen(v => !v)}
              style={{ width: 32, height: 32, borderRadius: 'var(--ds-border-radius-md)', background: 'white', border: '1px solid var(--ds-color-border)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: 'var(--ds-color-text-primary)' }}
            >⋮</button>
            {menuOpen && (
              <div style={{ position: 'absolute', top: 36, right: 0, background: 'white', border: '1px solid var(--ds-color-border)', borderRadius: 'var(--ds-border-radius-md)', boxShadow: '0 4px 16px rgba(0,0,0,0.10)', minWidth: 160, zIndex: 100, overflow: 'hidden' }}>
                {['Move Out', 'Transfer', 'New Unit', 'Edit Unit', 'Apply Promotion'].map(item => (
                  <button key={item} onClick={() => setMenuOpen(false)}
                    style={{ display: 'block', width: '100%', textAlign: 'left', padding: '10px 16px', background: 'none', border: 'none', fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'var(--ds-color-text-primary)', cursor: 'pointer' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--ds-color-surface-subtle)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'none')}
                  >{item}</button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Detail rows */}
      <div style={{ padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {detailRows.map((row, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ds-color-text-primary)', minWidth: 110, flexShrink: 0 }}>{row.label}</span>
            <span style={{ fontSize: 13, color: 'var(--ds-color-text-primary)' }}>{row.value}</span>
          </div>
        ))}

        <div style={{ height: 1, background: 'var(--ds-color-border)', margin: '8px 0' }} />

        {/* Rent section */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ds-color-text-primary)' }}>Rent</span>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ds-color-primary)', fontSize: 13, fontWeight: 500, fontFamily: 'Inter, sans-serif', padding: 0 }}>Edit</button>
        </div>

        <div style={{ background: 'var(--ds-color-primary-light)', borderRadius: 'var(--ds-border-radius-md)', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <InfoIcon />
          <span style={{ fontSize: 12, color: 'var(--ds-color-primary)', fontWeight: 500 }}>Excluded from rent increases</span>
        </div>

        <div style={{ display: 'flex', gap: 8 }}>
          {rentCards.map(card => (
            <div key={card.label} style={{
              flex: 1,
              border: card.isCurrent ? '2px solid var(--ds-color-primary)' : '1px solid var(--ds-color-border)',
              borderRadius: 'var(--ds-border-radius-md)',
              padding: '12px 10px',
              position: 'relative',
              background: card.isCurrent ? 'var(--ds-color-primary-light)' : 'white',
            }}>
              {card.isCurrent && (
                <span style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', background: 'var(--ds-color-primary)', color: 'white', fontSize: 10, fontWeight: 700, borderRadius: 'var(--ds-border-radius-sm)', padding: '2px 8px', whiteSpace: 'nowrap' }}>
                  Current
                </span>
              )}
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ds-color-text-muted)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{card.label}</div>
              {card.increase && !card.isCurrent && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginBottom: 2 }}>
                  <UpArrowIcon />
                  <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--ds-color-success)' }}>{card.increase}</span>
                </div>
              )}
              <div style={{ fontSize: 14, fontWeight: 700, color: card.isCurrent ? 'var(--ds-color-primary)' : 'var(--ds-color-text-primary)', marginBottom: 2 }}>{card.amount}<span style={{ fontSize: 11, fontWeight: 400 }}>/Mo</span></div>
              <div style={{ fontSize: 11, color: 'var(--ds-color-text-muted)' }}>{card.date}</div>
              {card.streetRate && (
                <div style={{ fontSize: 11, color: 'var(--ds-color-text-muted)', marginTop: 2 }}>
                  Street rate <span style={{ fontWeight: 600, color: 'var(--ds-color-text-primary)' }}>{card.streetRate}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── CommunicationsPanel ──────────────────────────────────────────────────────

const pinnedNotes = [
  {
    meta: 'Pinned on 6/25/25 at 6:00PM by Jane Doe · Created on 5/14/25 at 9:00AM by David Peterson',
    message: 'Unit 204 has been marked as Unrentable due to a roof leak that caused significant water damage on the back wall and floor. A task has been opened with the maintenance team!',
    readMore: false,
  },
  {
    meta: 'Pinned on 6/25/25 at 6:00PM by Jane Doe · Created on 5/14/25 at 9:00AM by David Peterson',
    message: 'Unit 204 has been marked as Unrentable due to a roof leak that caused significant water damage on the back wall and floor. A task has been opened with the maintenance team!',
    readMore: false,
  },
  {
    meta: 'Pinned on 6/25/25 at 6:00PM by Jane Doe · Created on 5/14/25 at 9:00AM by David Peterson',
    message: 'Unit 204 has been marked as Unrentable due to a roof leak that caused significant water damage on the back wall and floor. A task has been opened with the maintenance team!',
    readMore: true,
  },
]

type MsgType = 'lock' | 'note' | 'email'

function CommunicationsPanel() {
  const messages: { type: MsgType; time: string; content: React.ReactNode }[] = [
    {
      type: 'lock',
      time: '6/25/25, 9:15 AM',
      content: <span style={{ fontSize: 13 }}><strong>Lock Combination</strong><br />Lock added to Wilburton Unit 102 with code <strong>5930</strong>.</span>,
    },
    {
      type: 'note',
      time: '6/25/25, 9:01 AM',
      content: (
        <div>
          <p style={{ margin: '0 0 6px', fontSize: 13, lineHeight: 1.5 }}>
            Unit 204 has been marked as Unrentable due to a roof leak that caused significant water damage on the back wall and floor. A task has been opened with the maintenance team!
          </p>
          <span style={{ fontSize: 12, color: 'var(--ds-color-text-muted)' }}>Sent by David Peterson</span>
        </div>
      ),
    },
    {
      type: 'email',
      time: '6/25/25, 8:45 AM',
      content: (
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Rent Due Reminder for Unit150</div>
          <p style={{ margin: '0 0 10px', fontSize: 13, lineHeight: 1.6 }}>
            Hi,<br />
            Just a quick reminder that rent for your <strong>unit150</strong> is now due. To avoid late fees or any access interruptions, we kindly ask that you submit your payment at your earliest convenience.<br /><br />
            If you've already made your payment—thank you, and please disregard this message.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' as const, marginBottom: 8 }}>
            {['TX Self Storage.pdf  150KB', 'Terms and co...pdf  150KB'].map(att => (
              <div key={att} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--ds-color-surface-subtle)', border: '1px solid var(--ds-color-border)', borderRadius: 'var(--ds-border-radius-sm)', padding: '5px 10px' }}>
                <PaperclipIcon />
                <span style={{ fontSize: 12 }}>{att}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <span style={{ fontSize: 12, color: 'var(--ds-color-text-muted)' }}>Sent by David Peterson</span>
            <CheckIcon />
            <span style={{ fontSize: 12, color: 'var(--ds-color-success)' }}>Delivered</span>
          </div>
        </div>
      ),
    },
    {
      type: 'note',
      time: '6/24/25, 4:30 PM',
      content: <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5 }}>Tenant called about access hours. Updated gate code and informed tenant of new extended schedule...</p>,
    },
  ]

  const iconBg: Record<MsgType, string> = {
    lock: 'var(--ds-color-surface-muted)',
    note: 'var(--ds-color-warning-light)',
    email: '#fff3eb',
  }
  const msgBg: Record<MsgType, string> = {
    lock: 'var(--ds-color-surface-subtle)',
    note: 'var(--ds-color-warning-subtle)',
    email: 'white',
  }
  const icons: Record<MsgType, React.ReactNode> = {
    lock: <LockIcon />,
    note: <PushpinIcon />,
    email: <EnvelopeIcon />,
  }

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Pinned notes */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
        {pinnedNotes.map((note, i) => (
          <div key={i} style={{ background: 'var(--ds-color-warning-subtle)', border: '1px solid var(--ds-color-warning-light)', borderRadius: 'var(--ds-border-radius-lg)', padding: '12px 14px' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6 }}>
              <PushpinIcon />
              <span style={{ fontSize: 11, color: 'var(--ds-color-text-muted)', lineHeight: 1.4 }}>{note.meta}</span>
            </div>
            <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: 'var(--ds-color-text-primary)' }}>
              {note.message}
              {note.readMore && <> <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ds-color-primary)', fontSize: 13, fontFamily: 'Inter, sans-serif', padding: 0, fontWeight: 500 }}>Read More</button></>}
            </p>
          </div>
        ))}
      </div>

      {/* Filter bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
        <button style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500, color: 'var(--ds-color-text-primary)', background: 'white', border: '1px solid var(--ds-color-border)', borderRadius: 'var(--ds-border-radius-md)', padding: '6px 12px', cursor: 'pointer' }}>
          Date Range <ChevronDownIcon />
        </button>
        <button style={{ width: 32, height: 32, background: 'white', border: '1px solid var(--ds-color-border)', borderRadius: 'var(--ds-border-radius-md)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FilterIcon />
        </button>
        <div style={{ flex: 1 }} />
        <button style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500, color: 'var(--ds-color-text-primary)', background: 'white', border: '1px solid var(--ds-color-border)', borderRadius: 'var(--ds-border-radius-md)', padding: '6px 14px', cursor: 'pointer' }}>
          Add Note
        </button>
        <button style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500, color: 'white', background: 'var(--ds-color-primary)', border: 'none', borderRadius: 'var(--ds-border-radius-md)', padding: '6px 14px', cursor: 'pointer' }}>
          Send Message
        </button>
      </div>

      {/* Most recent label + date */}
      <div style={{ textAlign: 'center', marginBottom: 12 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ds-color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>Most recent</div>
        <span style={{ fontSize: 12, color: 'var(--ds-color-text-muted)', background: 'var(--ds-color-surface-subtle)', borderRadius: 'var(--ds-border-radius-sm)', padding: '3px 10px' }}>6/25/25, 9:01 AM</span>
      </div>

      {/* Messages */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ background: msgBg[msg.type], border: '1px solid var(--ds-color-border)', borderRadius: 'var(--ds-border-radius-lg)', padding: '12px 14px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', background: iconBg[msg.type], border: '1px solid var(--ds-color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
              {icons[msg.type]}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11, color: 'var(--ds-color-text-muted)', marginBottom: 4 }}>{msg.time}</div>
              {msg.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const TABS = ['Overview', 'Billing History', 'Documents', 'Access'] as const
type Tab = typeof TABS[number]

export function TenantOverviewPage() {
  const [activeTab, setActiveTab] = useState<Tab>('Overview')

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: 'var(--ds-color-surface-subtle)', minHeight: '100vh', width: '100%' }}>

      <TenantPageHeader
        name="Stephanie Anderson"
        email="stephaniea@gmail.com"
        phone="(714) 948-2639"
        balance="$132.00"
        balanceOverdue={true}
        unitStatus="overdue"
        activeTab="overview"
        numberOfUnits="single"
        gateIntegrated={true}
        accessCode="430388"
        hideTabs={true}
        onBack={() => {}}
      />

      {/* Tab bar */}
      <div style={{ background: 'white', borderBottom: '1px solid var(--ds-color-border)', padding: '0 24px', display: 'flex' }}>
        {TABS.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{
            fontFamily: 'Inter, sans-serif',
            padding: '12px 16px',
            fontSize: 14,
            fontWeight: activeTab === tab ? 600 : 400,
            color: activeTab === tab ? 'var(--ds-color-primary)' : 'var(--ds-color-text-muted)',
            background: 'none',
            border: 'none',
            borderBottom: activeTab === tab ? '2px solid var(--ds-color-primary)' : '2px solid transparent',
            cursor: 'pointer',
            marginBottom: -1,
          }}>{tab}</button>
        ))}
      </div>

      {/* PaymentBanner — full width above columns */}
      <div style={{ padding: '20px 24px 0' }}>
        <PaymentBanner
          status="balance-due"
          balanceAmount="$132.00"
          dueDate="Jul 29, 2024"
          paidThrough="Jun 29, 2024"
          lastPayment="May 2, 2024"
          cardBrand="Mastercard"
          cardLast4="8425"
          cardExpiry="Dec, 2025"
          autopay={true}
          monthlyRent="$115"
        />
      </div>

      {/* Two-column content */}
      <div style={{ display: 'flex', gap: 20, padding: '16px 24px 24px', alignItems: 'flex-start', boxSizing: 'border-box', width: '100%' }}>

        {/* Left */}
        <div style={{ flex: '0 0 520px', display: 'flex', flexDirection: 'column', gap: 16, minWidth: 0 }}>
          <UnitDetailsCard />
          <TenantInfoCard
            details={[
              { label: 'Account Type', value: 'Business' },
              { label: 'Business Name', value: 'Business Name' },
              { label: 'Tax ID', value: '123456789' },
              { label: 'Name', value: 'Stephanie Anderson' },
              { label: 'Email', value: 'stephaniea@gmail.com' },
              { label: 'Email Enrollment', value: 'No' },
              { label: 'Phone (Mobile)', value: '(714) 948-2639' },
              { label: 'SMS Enrollment', value: 'Yes' },
              { label: 'Address', value: '4834 N State Highway 16, Suite 500, Fredericksburg, TX 78624' },
              { label: "Driver's License", value: '123456' },
              { label: 'Issued State', value: 'Texas' },
            ]}
          />
        </div>

        {/* Right */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <CommunicationsPanel />
        </div>

      </div>
    </div>
  )
}
