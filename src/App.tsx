import { useState } from 'react'
import '../src/tokens/variables.css'
import { TenantsTable } from './stories/TenantsTable'
import { TenantPageHeader } from './stories/TenantPageHeader'
import { PaymentBanner } from './stories/PaymentBanner'
import { TenantInfoCard } from './stories/TenantInfoCard'
import { MultiUnitBanner } from './stories/MultiUnitBanner'
import { CommunicationsPanel } from './stories/CommunicationsPanel'
import { UnitDetailsCard } from './stories/UnitDetailsCard'
import { Navbar, Sidebar } from './stories/AppNav'
import type { NavId } from './stories/AppNav'

// ─── Types ────────────────────────────────────────────────────────────────────

type View = 'tenants' | 'tenant-detail' | 'renewal'
type ActiveTab = 'overview' | 'billing' | 'documents' | 'access' | 'renewal'

interface TenantRecord {
  id: string
  name: string
  email: string
  phone: string
  unit: string
  balance: string
  balanceOverdue: boolean
  paymentStatus: 'balance-due' | 'good-standing' | 'move-out' | 'updated'
  unitStatus: 'overdue' | 'normal' | 'move-out'
  moveInDate: string
  leaseEnd: string
  autopay: boolean
  cardBrand?: string
  cardLast4?: string
}

// ─── Sample data ──────────────────────────────────────────────────────────────

const TENANTS: TenantRecord[] = [
  {
    id: '1',
    name: 'Stephanie Anderson',
    email: 's.anderson@email.com',
    phone: '(555) 248-1190',
    unit: '147',
    balance: '$345.00',
    balanceOverdue: true,
    paymentStatus: 'balance-due',
    unitStatus: 'overdue',
    moveInDate: 'Apr 29, 2023',
    leaseEnd: 'Jun 30, 2025',
    autopay: false,
  },
  {
    id: '2',
    name: 'John Smith',
    email: 'j.smith@email.com',
    phone: '(555) 391-2047',
    unit: '052',
    balance: '$0.00',
    balanceOverdue: false,
    paymentStatus: 'good-standing',
    unitStatus: 'normal',
    moveInDate: 'Jan 15, 2023',
    leaseEnd: 'Jan 14, 2026',
    autopay: true,
    cardBrand: 'Visa',
    cardLast4: '4242',
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    email: 's.johnson@email.com',
    phone: '(555) 774-3301',
    unit: '281',
    balance: '$132.00',
    balanceOverdue: true,
    paymentStatus: 'move-out',
    unitStatus: 'move-out',
    moveInDate: 'Mar 1, 2022',
    leaseEnd: 'Apr 30, 2025',
    autopay: false,
  },
  {
    id: '4',
    name: 'Michael Brown',
    email: 'm.brown@email.com',
    phone: '(555) 509-8812',
    unit: '021',
    balance: '$89.00',
    balanceOverdue: true,
    paymentStatus: 'balance-due',
    unitStatus: 'overdue',
    moveInDate: 'Jun 10, 2024',
    leaseEnd: 'Jun 9, 2025',
    autopay: false,
  },
  {
    id: '5',
    name: 'Emily Davis',
    email: 'e.davis@email.com',
    phone: '(555) 122-6630',
    unit: '319',
    balance: '$0.00',
    balanceOverdue: false,
    paymentStatus: 'good-standing',
    unitStatus: 'normal',
    moveInDate: 'Aug 22, 2023',
    leaseEnd: 'Aug 21, 2025',
    autopay: true,
    cardBrand: 'Mastercard',
    cardLast4: '8731',
  },
]


// ─── Stats bar ────────────────────────────────────────────────────────────────

function StatsBar() {
  const stats = [
    { label: 'Total Tenants', value: '5', sub: '4 active units' },
    { label: 'Overdue Balance', value: '$566', sub: '3 tenants', color: 'var(--ds-color-error)' },
    { label: 'Autopay Enrolled', value: '2', sub: '40% of tenants', color: 'var(--ds-color-success)' },
    { label: 'Move-Outs This Month', value: '1', sub: 'Unit 281', color: 'var(--ds-color-warning)' },
  ]

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16,
      marginBottom: 24,
    }}>
      {stats.map(stat => (
        <div key={stat.label} style={{
          background: 'white',
          border: '1px solid var(--ds-color-border)',
          borderRadius: 'var(--ds-border-radius-lg)',
          padding: '16px 20px',
        }}>
          <div style={{ fontSize: 12, color: 'var(--ds-color-text-muted)', marginBottom: 6 }}>{stat.label}</div>
          <div style={{ fontSize: 24, fontWeight: 700, color: stat.color || 'var(--ds-color-text-primary)', lineHeight: 1 }}>{stat.value}</div>
          <div style={{ fontSize: 12, color: 'var(--ds-color-text-muted)', marginTop: 4 }}>{stat.sub}</div>
        </div>
      ))}
    </div>
  )
}

// ─── Renewal tab ──────────────────────────────────────────────────────────────

function RenewalTab({ tenant }: { tenant: TenantRecord }) {
  const [decision, setDecision] = useState<'accepted' | 'declined' | null>(null)

  if (decision === 'accepted') {
    return (
      <div style={{ margin: '24px 0', padding: '32px', background: 'var(--ds-color-success-light)', borderRadius: 'var(--ds-border-radius-lg)', border: '1px solid var(--ds-color-success)', textAlign: 'center' }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>✓</div>
        <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--ds-color-success)' }}>Lease renewal accepted</div>
        <div style={{ fontSize: 14, color: 'var(--ds-color-text-muted)', marginTop: 6 }}>
          New lease begins Jul 1, 2025 · $1,520 / mo · 12-month term
        </div>
      </div>
    )
  }

  if (decision === 'declined') {
    return (
      <div style={{ margin: '24px 0', padding: '32px', background: 'var(--ds-color-error-subtle)', borderRadius: 'var(--ds-border-radius-lg)', border: '1px solid var(--ds-color-error)', textAlign: 'center' }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>✕</div>
        <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--ds-color-error)' }}>Renewal declined</div>
        <div style={{ fontSize: 14, color: 'var(--ds-color-text-muted)', marginTop: 6 }}>
          Move-out date: Jun 30, 2025 · Notice sent to {tenant.name.split(' ')[0]}
        </div>
      </div>
    )
  }

  return (
    <div style={{ margin: '24px 0' }}>
      <div style={{ background: 'white', borderRadius: 'var(--ds-border-radius-lg)', border: '1px solid var(--ds-color-border)', overflow: 'hidden' }}>
        <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--ds-color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--ds-color-text-primary)' }}>Lease Renewal Offer</div>
            <div style={{ fontSize: 13, color: 'var(--ds-color-text-muted)', marginTop: 2 }}>Offer expires May 31, 2025</div>
          </div>
          <span style={{ fontSize: 12, fontWeight: 500, padding: '4px 10px', borderRadius: 'var(--ds-border-radius-full)', background: 'var(--ds-color-warning-subtle)', color: 'var(--ds-color-warning)' }}>
            Awaiting response
          </span>
        </div>
        <div style={{ padding: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {[
            { label: 'Current lease end', value: tenant.leaseEnd },
            { label: 'New lease term', value: 'Jul 1, 2025 – Jun 30, 2026' },
            { label: 'Current monthly rent', value: '$1,450 / mo' },
            { label: 'Proposed new rate', value: '$1,520 / mo' },
          ].map(item => (
            <div key={item.label}>
              <div style={{ fontSize: 12, color: 'var(--ds-color-text-muted)', marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--ds-color-text-primary)' }}>{item.value}</div>
            </div>
          ))}
        </div>
        <div style={{ margin: '0 20px 20px', padding: '12px 16px', background: 'var(--ds-color-primary-light)', borderRadius: 'var(--ds-border-radius-md)', display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 13, color: 'var(--ds-color-text-primary)' }}>Rate increase</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ds-color-primary)' }}>+$70 / mo (4.8%)</span>
        </div>
        <div style={{ padding: '16px 20px', borderTop: '1px solid var(--ds-color-border)', display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
          <button onClick={() => setDecision('declined')} style={{ padding: '9px 20px', borderRadius: 'var(--ds-border-radius-md)', border: '1px solid var(--ds-color-border)', background: 'white', color: 'var(--ds-color-text-primary)', fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>
            Decline
          </button>
          <button onClick={() => setDecision('accepted')} style={{ padding: '9px 20px', borderRadius: 'var(--ds-border-radius-md)', border: 'none', background: 'var(--ds-color-primary)', color: 'white', fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>
            Accept Renewal
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Tenant detail view ───────────────────────────────────────────────────────

function TenantDetail({ tenant, onBack }: { tenant: TenantRecord; onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview')
  const tabs: ActiveTab[] = ['overview', 'billing', 'documents', 'access', 'renewal']

  return (
    <div style={{ minHeight: '100vh', width: '100%', background: 'var(--ds-color-surface-subtle)' }}>
      <TenantPageHeader
        name={tenant.name}
        email={tenant.email}
        phone={tenant.phone}
        balance={tenant.balance}
        balanceOverdue={tenant.balanceOverdue}
        unitStatus={tenant.unitStatus}
        activeTab="overview"
        numberOfUnits="single"
        hideTabs={true}
        onBack={onBack}
      />

      {/* Single tab bar with Renewal injected */}
      <div style={{ background: 'white', borderBottom: '1px solid var(--ds-color-border)', padding: '0 24px', display: 'flex' }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '12px 16px',
              fontSize: 14,
              fontWeight: activeTab === tab ? 600 : 400,
              color: activeTab === tab ? 'var(--ds-color-primary)' : 'var(--ds-color-text-muted)',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === tab ? '2px solid var(--ds-color-primary)' : '2px solid transparent',
              cursor: 'pointer',
              textTransform: 'capitalize',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
            }}
          >
            {tab}
            {tab === 'renewal' && (
              <span style={{ background: 'var(--ds-color-warning)', color: 'white', fontSize: 10, fontWeight: 700, padding: '1px 5px', borderRadius: 'var(--ds-border-radius-full)' }}>
                NEW
              </span>
            )}
          </button>
        ))}
      </div>

      {/* PaymentBanner — full width */}
      {activeTab !== 'renewal' && (
        <div style={{ padding: '20px 24px 0' }}>
          <PaymentBanner
            status={tenant.paymentStatus}
            balanceAmount={tenant.balance}
            dueDate="Mar 1, 2025"
            monthlyRent="$1,450"
            autopay={tenant.autopay}
            cardBrand={tenant.cardBrand}
            cardLast4={tenant.cardLast4}
          />
        </div>
      )}

      {/* Content */}
      <div style={{ padding: '16px 24px 24px' }}>
        {activeTab === 'overview' && (
          <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
            {/* Left column */}
            <div style={{ flex: '0 0 520px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <UnitDetailsCard
                unitNumber={tenant.unit}
                status={tenant.unitStatus}
                moveInDate={tenant.moveInDate}
              />
              <TenantInfoCard
                details={[
                  { label: 'Name', value: tenant.name },
                  { label: 'Email', value: tenant.email },
                  { label: 'Phone', value: tenant.phone },
                  { label: 'Lease end', value: tenant.leaseEnd },
                ]}
              />
            </div>
            {/* Right column — Communications */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <CommunicationsPanel />
            </div>
          </div>
        )}

        {activeTab === 'billing' && (
          <div style={{ padding: 24, background: 'white', borderRadius: 'var(--ds-border-radius-lg)', border: '1px solid var(--ds-color-border)', color: 'var(--ds-color-text-muted)', fontSize: 14 }}>
            Billing history coming soon
          </div>
        )}

        {activeTab === 'documents' && (
          <div style={{ padding: 24, background: 'white', borderRadius: 'var(--ds-border-radius-lg)', border: '1px solid var(--ds-color-border)', color: 'var(--ds-color-text-muted)', fontSize: 14 }}>
            Documents coming soon
          </div>
        )}

        {activeTab === 'access' && (
          <div style={{ padding: 24, background: 'white', borderRadius: 'var(--ds-border-radius-lg)', border: '1px solid var(--ds-color-border)', color: 'var(--ds-color-text-muted)', fontSize: 14 }}>
            Access log coming soon
          </div>
        )}

        {activeTab === 'renewal' && <RenewalTab tenant={tenant} />}
      </div>
    </div>
  )
}

// ─── Tenants list view ────────────────────────────────────────────────────────

type TenantsTab = 'current' | 'past' | 'leads'

const PAYMENT_STATUS_CONFIG = {
  'balance-due': { label: 'Overdue', bg: 'var(--ds-color-error-light)', color: 'var(--ds-color-error)' },
  'good-standing': { label: 'Paid', bg: 'var(--ds-color-success-light)', color: 'var(--ds-color-success)' },
  'move-out': { label: 'Move-Out', bg: 'var(--ds-color-warning-light)', color: 'var(--ds-color-warning)' },
  'updated': { label: 'Updated', bg: 'var(--ds-color-error-light)', color: 'var(--ds-color-error)' },
}

const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="6" cy="6" r="4.5" stroke="var(--ds-color-text-muted)" strokeWidth="1.2"/>
    <path d="M10 10l2.5 2.5" stroke="var(--ds-color-text-muted)" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

const FilterIcon2 = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1.5 3.5h11M3.5 7h7M5.5 10.5h3" stroke="var(--ds-color-text-muted)" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

function TenantsView({ onSelectTenant }: { onSelectTenant: (id: string) => void }) {
  const [activeTab, setActiveTab] = useState<TenantsTab>('current')
  const [search, setSearch] = useState('')

  const tabs: { id: TenantsTab; label: string; count?: number }[] = [
    { id: 'current', label: 'Current', count: TENANTS.filter(t => t.paymentStatus !== 'move-out').length },
    { id: 'past', label: 'Past' },
    { id: 'leads', label: 'Leads' },
  ]

  const filtered = TENANTS.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.email.toLowerCase().includes(search.toLowerCase()) ||
    t.unit.includes(search)
  )

  const COLS = 'minmax(180px,2fr) 120px 140px 100px 120px 110px'

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Page header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, color: 'var(--ds-color-text-primary)', margin: 0 }}>Tenants</h1>
        <button style={{ padding: '8px 16px', background: 'var(--ds-color-primary)', color: 'white', border: 'none', borderRadius: 'var(--ds-border-radius-md)', fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
          + Add Tenant
        </button>
      </div>

      <MultiUnitBanner status="overdue" unitCount={5} overdueCount={3} totalBalance="$566" />

      <div style={{ marginTop: 16 }}>
        <StatsBar />
      </div>

      {/* Tab bar */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--ds-color-border)', marginBottom: 0, background: 'white', borderRadius: '8px 8px 0 0' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              padding: '12px 16px',
              fontSize: 14,
              fontWeight: activeTab === tab.id ? 600 : 400,
              color: activeTab === tab.id ? 'var(--ds-color-primary)' : 'var(--ds-color-text-muted)',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === tab.id ? '2px solid var(--ds-color-primary)' : '2px solid transparent',
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              marginBottom: -1,
            }}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span style={{ background: 'var(--ds-color-surface-muted)', color: 'var(--ds-color-text-muted)', fontSize: 11, fontWeight: 600, borderRadius: 'var(--ds-border-radius-full)', padding: '1px 6px' }}>
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Filter bar */}
      <div style={{ background: 'white', borderBottom: '1px solid var(--ds-color-border)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'var(--ds-color-surface-subtle)', border: '1px solid var(--ds-color-border)', borderRadius: 'var(--ds-border-radius-md)', padding: '6px 10px', flex: '0 0 260px' }}>
          <SearchIcon />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search tenants..."
            style={{ border: 'none', background: 'transparent', fontSize: 13, color: 'var(--ds-color-text-primary)', outline: 'none', width: '100%', fontFamily: 'Inter, sans-serif' }}
          />
        </div>
        <button style={{ width: 32, height: 32, background: 'var(--ds-color-surface-subtle)', border: '1px solid var(--ds-color-border)', borderRadius: 'var(--ds-border-radius-md)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FilterIcon2 />
        </button>
      </div>

      {/* Table */}
      <div style={{ background: 'white', borderRadius: '0 0 8px 8px', border: '1px solid var(--ds-color-border)', borderTop: 'none', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: COLS, gap: 0, padding: '10px 16px', borderBottom: '1px solid var(--ds-color-border)', background: 'var(--ds-color-surface-subtle)' }}>
          {['Name', 'Payment Status', 'Contact Info', 'Units', 'Total Mo. Rent', 'Balance'].map(col => (
            <span key={col} style={{ fontSize: 12, fontWeight: 600, color: 'var(--ds-color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.03em' }}>{col}</span>
          ))}
        </div>

        {/* Rows */}
        {filtered.map(tenant => {
          const status = PAYMENT_STATUS_CONFIG[tenant.paymentStatus]
          return (
            <div
              key={tenant.id}
              onClick={() => onSelectTenant(tenant.id)}
              style={{ display: 'grid', gridTemplateColumns: COLS, gap: 0, padding: '12px 16px', borderBottom: '1px solid var(--ds-color-border)', alignItems: 'center', cursor: 'pointer' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--ds-color-surface-subtle)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'white')}
            >
              {/* Name */}
              <div>
                <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--ds-color-text-primary)' }}>{tenant.name}</div>
                <div style={{ fontSize: 12, color: 'var(--ds-color-text-muted)', marginTop: 2 }}>Personal</div>
              </div>
              {/* Payment Status */}
              <div>
                <span style={{ fontSize: 12, fontWeight: 500, padding: '3px 8px', borderRadius: 'var(--ds-border-radius-full)', background: status.bg, color: status.color }}>
                  {status.label}
                </span>
                <div style={{ fontSize: 12, color: 'var(--ds-color-text-muted)', marginTop: 3 }}>{tenant.email}</div>
              </div>
              {/* Contact */}
              <div style={{ fontSize: 13, color: 'var(--ds-color-text-primary)' }}>{tenant.phone}</div>
              {/* Units */}
              <div style={{ fontSize: 13, color: 'var(--ds-color-text-primary)' }}>#{tenant.unit}</div>
              {/* Total Monthly Rent */}
              <div style={{ fontSize: 13, color: 'var(--ds-color-text-primary)' }}>$1,450</div>
              {/* Balance */}
              <div style={{ fontSize: 13, fontWeight: tenant.balanceOverdue ? 600 : 400, color: tenant.balanceOverdue ? 'var(--ds-color-error)' : 'var(--ds-color-text-primary)' }}>
                {tenant.balance}
              </div>
            </div>
          )
        })}

        {filtered.length === 0 && (
          <div style={{ padding: 32, textAlign: 'center', color: 'var(--ds-color-text-muted)', fontSize: 14 }}>
            No tenants found
          </div>
        )}
      </div>
    </div>
  )
}

// ─── App shell ────────────────────────────────────────────────────────────────

export default function App() {
  const [nav, setNav] = useState<NavId>('tenants')
  const [selectedTenantId, setSelectedTenantId] = useState<string | null>(null)

  const selectedTenant = TENANTS.find(t => t.id === selectedTenantId)

  const handleNav = (id: NavId) => {
    setNav(id)
    setSelectedTenantId(null)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100vh', fontFamily: 'Inter, system-ui, sans-serif', overflow: 'hidden' }}>
      {/* Top navbar */}
      <Navbar facilityName="Sunrise Self Storage" userName="DY" tasksCount={24} />

      {/* Below navbar: sidebar + content — fills remaining height */}
      <div style={{ display: 'flex', flex: 1, minHeight: 0 }}>
        <Sidebar activeNav={nav} onNav={handleNav} userName="Dave Yoon" userEmail="dave@monumentai.com" />

        <main style={{ flex: 1, minWidth: 0, background: 'var(--ds-color-surface-subtle)', overflowY: 'auto' }}>
          {selectedTenant ? (
            <TenantDetail tenant={selectedTenant} onBack={() => setSelectedTenantId(null)} />
          ) : nav === 'tenants' ? (
            <div style={{ padding: '32px' }}>
              <TenantsView onSelectTenant={setSelectedTenantId} />
            </div>
          ) : (
            <div style={{ color: 'var(--ds-color-text-muted)', fontSize: 14, marginTop: 40, textAlign: 'center' }}>
              Select <strong>Tenants</strong> from the sidebar to see the demo
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
