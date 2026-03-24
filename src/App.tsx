import { useState } from 'react'

// ─── Placeholder ──────────────────────────────────────────────────────────────
// Used when a component has not yet been designed in Figma + added to src/stories/

function Placeholder({ name }: { name: string }) {
  return (
    <div style={{
      padding: '20px 24px',
      background: 'var(--ds-color-surface-subtle)',
      border: '2px dashed var(--ds-color-border)',
      borderRadius: 'var(--ds-border-radius-lg)',
      fontFamily: 'Inter, sans-serif',
    }}>
      <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ds-color-text-muted)', marginBottom: 4 }}>
        ⚠️ Missing component: {name}
      </div>
      <div style={{ fontSize: 12, color: 'var(--ds-color-text-muted)' }}>
        This needs to be designed in Figma first before it can be built.
        Next step: file a design request so it can be added to the component library.
      </div>
    </div>
  )
}
import '../src/tokens/variables.css'
import { TenantsTable } from './stories/TenantsTable'
import { TenantPageHeader } from './stories/TenantPageHeader'
import { PaymentBanner } from './stories/PaymentBanner'
import { TenantInfoCard } from './stories/TenantInfoCard'
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




// ─── Tenant detail view ───────────────────────────────────────────────────────

function TenantDetail({ tenant, onBack }: { tenant: TenantRecord; onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview')
  const tabs: ActiveTab[] = ['overview', 'billing', 'documents', 'access', 'renewal']

  return (
    <div style={{ padding: '20px 20px 24px' }}>
      {/* Header card */}
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

      {/* Tab bar — on page bg, no white behind it */}
      <div style={{ display: 'flex', borderBottom: '1px solid var(--ds-color-border)', margin: '16px 0' }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '8px 16px',
              fontSize: 14,
              fontWeight: activeTab === tab ? 600 : 400,
              color: activeTab === tab ? 'var(--ds-color-primary)' : 'var(--ds-color-text-muted)',
              background: 'none',
              border: 'none',
              borderBottom: activeTab === tab ? '2px solid var(--ds-color-primary)' : '2px solid transparent',
              marginBottom: -1,
              cursor: 'pointer',
              textTransform: 'capitalize',
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: 'Inter, sans-serif',
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

      {/* PaymentBanner */}
      {activeTab !== 'renewal' && (
        <div style={{ marginBottom: 16 }}>
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
      <div>
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

        {activeTab === 'renewal' && <Placeholder name="RenewalTab" />}
      </div>
    </div>
  )
}

// ─── Tenants list view ────────────────────────────────────────────────────────

function TenantsView({ onSelectTenant }: { onSelectTenant: (id: string) => void }) {
  const mappedTenants = TENANTS.map(t => ({
    id: t.id,
    name: t.name,
    unit: t.unit,
    status: (t.paymentStatus === 'balance-due' || t.paymentStatus === 'updated'
      ? 'overdue'
      : t.paymentStatus === 'move-out'
      ? 'move-out'
      : 'good-standing') as 'overdue' | 'good-standing' | 'move-out' | 'past',
    moveInDate: t.moveInDate,
    balance: t.balance,
    recServices: t.autopay,
  }))

  return (
    <TenantsTable
      tenants={mappedTenants}
      onRowClick={onSelectTenant}
      onAddTenant={() => {}}
    />
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

        <main style={{ flex: 1, minWidth: 0, background: '#F1F3F9', overflowY: 'auto' }}>
          {selectedTenant ? (
            <TenantDetail tenant={selectedTenant} onBack={() => setSelectedTenantId(null)} />
          ) : nav === 'tenants' ? (
            <div style={{ padding: '20px 20px 24px' }}>
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
