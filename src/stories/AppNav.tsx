import React, { useState, useEffect } from 'react'

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return width
}

// ─── Monument Logo ─────────────────────────────────────────────────────────────

const MonumentLogo = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.1592 11.7899L25.3745 3.50002V24.3542H17.1592V11.7899Z" fill="#7D52F8"/>
    <path d="M2.625 15.3637V3.50002L17.1597 18.3296L11.4367 24.3542L2.625 15.3637Z" fill="#7D52F8"/>
    <path d="M2.625 19.9305H7.04861V24.3541H2.625V19.9305Z" fill="#7D52F8"/>
  </svg>
)

// ─── Nav Icons ────────────────────────────────────────────────────────────────

const DashboardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3"/>
    <rect x="9" y="1" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3"/>
    <rect x="1" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3"/>
    <rect x="9" y="9" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.3"/>
  </svg>
)

const UnitsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1.5" y="4" width="13" height="10" rx="1" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M5 4V2.5a1 1 0 011-1h4a1 1 0 011 1V4" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M1.5 8h13" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M6.5 8v6" stroke="currentColor" strokeWidth="1.3"/>
  </svg>
)

const TenantsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="6" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M1 13.5c0-2.485 2.239-4.5 5-4.5s5 2.015 5 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M11 7.5c1.38 0 2.5 1.12 2.5 2.5v2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M13.5 4.5a1.5 1.5 0 110 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
)

const LeadsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.3"/>
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M8 1.5v2M8 12.5v2M1.5 8h2M12.5 8h2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
)

const CommunicationsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 3a1 1 0 011-1h10a1 1 0 011 1v7a1 1 0 01-1 1H9l-3 2v-2H3a1 1 0 01-1-1V3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
  </svg>
)

const DelinquenciesIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 1.5L14.5 13H1.5L8 1.5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
    <path d="M8 6v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <circle cx="8" cy="11.5" r="0.75" fill="currentColor"/>
  </svg>
)

const RevenueIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 12L6 8l3 3 5-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const InsightsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="2" y="9" width="3" height="5" rx="0.5" stroke="currentColor" strokeWidth="1.3"/>
    <rect x="6.5" y="5.5" width="3" height="8.5" rx="0.5" stroke="currentColor" strokeWidth="1.3"/>
    <rect x="11" y="2" width="3" height="12" rx="0.5" stroke="currentColor" strokeWidth="1.3"/>
  </svg>
)

const ReportsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M8 1.5V8l4.5 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
)

const BillingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M8 4.5v7M6 6c0-.83.895-1.5 2-1.5s2 .67 2 1.5S9.105 7.5 8 7.5 6 8.17 6 9s.895 1.5 2 1.5 2-.67 2-1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M8 1.5v1M8 13.5v1M1.5 8h1M13.5 8h1M3.4 3.4l.7.7M11.9 11.9l.7.7M3.4 12.6l.7-.7M11.9 4.1l.7-.7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
)

const LogoutIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M6 2H3a1 1 0 00-1 1v10a1 1 0 001 1h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M10.5 5L14 8l-3.5 3M14 8H6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
)

const AddUserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="6.5" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M1 13.5c0-2.485 2.239-4.5 5.5-4.5s5.5 2.015 5.5 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
    <path d="M13 7v4M11 9h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
)

const TasksIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="2" y="2" width="12" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
    <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// ─── Types ────────────────────────────────────────────────────────────────────

export type NavId = 'dashboard' | 'units' | 'tenants' | 'leads' | 'communications' | 'delinquencies' | 'revenue' | 'insights' | 'reports' | 'billing' | 'settings'

export interface AppNavProps {
  activeNav?: NavId
  onNav?: (id: NavId) => void
  facilityName?: string
  userName?: string
  userEmail?: string
  tasksCount?: number
}

// ─── Nav items config ─────────────────────────────────────────────────────────

const NAV_ITEMS: { id: NavId; label: string; icon: React.ReactNode }[] = [
  { id: 'dashboard',       label: 'Dashboard',       icon: <DashboardIcon /> },
  { id: 'units',           label: 'Units',           icon: <UnitsIcon /> },
  { id: 'tenants',         label: 'Tenants',         icon: <TenantsIcon /> },
  { id: 'leads',           label: 'Leads',           icon: <LeadsIcon /> },
  { id: 'communications',  label: 'Communications',  icon: <CommunicationsIcon /> },
  { id: 'delinquencies',   label: 'Delinquencies',   icon: <DelinquenciesIcon /> },
  { id: 'revenue',         label: 'Revenue',         icon: <RevenueIcon /> },
  { id: 'insights',        label: 'Insights',        icon: <InsightsIcon /> },
  { id: 'reports',         label: 'Reports',         icon: <ReportsIcon /> },
  { id: 'billing',         label: 'Billing',         icon: <BillingIcon /> },
]

const BOTTOM_ITEMS: { id: NavId; label: string; icon: React.ReactNode }[] = [
  { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
]

// ─── Navbar (top bar) ─────────────────────────────────────────────────────────

export const Navbar: React.FC<Pick<AppNavProps, 'facilityName' | 'userName' | 'tasksCount'> & { darkMode?: boolean; onToggleDarkMode?: () => void }> = ({
  facilityName = 'Sunrise Self Storage',
  userName = 'DY',
  tasksCount = 0,
  darkMode = false,
  onToggleDarkMode,
}) => {
  const isMobile = useWindowWidth() < 768
  return (
  <div style={{
    height: 64,
    background: 'var(--ds-color-surface)',
    borderBottom: '1px solid var(--ds-color-border)',
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px',
    gap: 12,
    flexShrink: 0,
    fontFamily: 'Inter, sans-serif',
    position: 'sticky',
    top: 0,
    zIndex: 50,
  }}>
    {/* Logo */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
      <MonumentLogo />
    </div>

    {/* Facility dropdown */}
    <button style={{
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      background: 'var(--ds-color-surface-subtle)',
      border: '1px solid var(--ds-color-border)',
      borderRadius: 'var(--ds-border-radius-md)',
      padding: '6px 12px',
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--ds-color-text-primary)',
      cursor: 'pointer',
      fontFamily: 'Inter, sans-serif',
      flexShrink: 0,
    }}>
      {facilityName}
      <ChevronDownIcon />
    </button>

    {/* Search */}
    {isMobile ? (
      <button style={{ width: 32, height: 32, borderRadius: 'var(--ds-border-radius-md)', background: 'var(--ds-color-surface-muted)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ds-color-text-primary)', flexShrink: 0 }}>
        <SearchIcon />
      </button>
    ) : (
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        background: 'var(--ds-color-surface-muted)',
        borderRadius: 40,
        padding: '8px 12px',
        maxWidth: 560,
      }}>
        <span style={{ color: 'var(--ds-color-text-muted)', display: 'flex' }}><SearchIcon /></span>
        <span style={{ fontSize: 13, color: 'var(--ds-color-text-muted)' }}>
          Search units, tenants, leads, invoices, or phone numbers...
        </span>
      </div>
    )}

    <div style={{ flex: 1 }} />

    {/* Quick actions */}
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      {/* Dark mode toggle */}
      <button
        onClick={onToggleDarkMode}
        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        style={{ width: 32, height: 32, borderRadius: 'var(--ds-border-radius-md)', background: 'var(--ds-color-surface-muted)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ds-color-text-primary)' }}
      >
        {darkMode ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.3"/>
            <path d="M8 1.5V3M8 13v1.5M1.5 8H3M13 8h1.5M3.4 3.4l1.06 1.06M11.54 11.54l1.06 1.06M3.4 12.6l1.06-1.06M11.54 4.46l1.06-1.06" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M14 8.53A6 6 0 117.47 2 4.5 4.5 0 0014 8.53z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      <button style={{ width: 32, height: 32, borderRadius: 'var(--ds-border-radius-md)', background: 'var(--ds-color-surface-muted)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ds-color-text-primary)' }}>
        <AddUserIcon />
      </button>

      {/* Tasks with badge */}
      <div style={{ position: 'relative' }}>
        <button style={{ width: 32, height: 32, borderRadius: 'var(--ds-border-radius-md)', background: 'var(--ds-color-surface-muted)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ds-color-text-primary)' }}>
          <TasksIcon />
        </button>
        {tasksCount > 0 && (
          <span style={{
            position: 'absolute',
            top: -4,
            right: -4,
            background: 'var(--ds-color-error)',
            color: 'white',
            fontSize: 10,
            fontWeight: 700,
            borderRadius: 'var(--ds-border-radius-full)',
            padding: '1px 5px',
            lineHeight: 1.4,
          }}>{tasksCount}</span>
        )}
      </div>

      {/* Divider */}
      <div style={{ width: 1, height: 24, background: 'var(--ds-color-border)', margin: '0 4px' }} />

      {/* Avatar */}
      <div style={{
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: 'var(--ds-color-primary)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        fontWeight: 600,
        cursor: 'pointer',
        position: 'relative',
      }}>
        {userName}
        <span style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: 'var(--ds-color-success)',
          border: '1.5px solid var(--ds-color-surface)',
        }} />
      </div>
    </div>
  </div>
  )
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

export const Sidebar: React.FC<AppNavProps> = ({
  activeNav = 'tenants',
  onNav,
  userName = 'Dave Yoon',
  userEmail = 'dave@monumentai.com',
}) => {
  const [collapsed, setCollapsed] = useState(false)
  const width = collapsed ? 56 : 240

  return (
    <aside style={{
      width,
      height: '100%',
      flexShrink: 0,
      transition: 'width 0.2s ease',
      fontFamily: 'Inter, sans-serif',
      position: 'relative',
    }}>
      {/* Edge collapse toggle — circle straddling the sidebar border */}
      <button
        onClick={() => setCollapsed(v => !v)}
        title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        style={{
          position: 'absolute',
          right: -12,
          top: 20,
          width: 24,
          height: 24,
          borderRadius: '50%',
          background: 'var(--ds-color-surface)',
          border: '1px solid var(--ds-color-border)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--ds-color-text-muted)',
          zIndex: 10,
          flexShrink: 0,
          boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: collapsed ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}>
          <path d="M8 2L4 6l4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Inner container handles overflow clipping during collapse animation */}
      <div style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        background: 'var(--ds-color-surface)',
        borderRight: '1px solid var(--ds-color-border)',
        display: 'flex',
        flexDirection: 'column',
      }}>

      {/* Main nav items */}
      <nav style={{ flex: 1, padding: '4px 8px 12px', display: 'flex', flexDirection: 'column', gap: 2, overflowY: 'auto', overflowX: 'hidden' }}>
        {NAV_ITEMS.map(item => {
          const active = activeNav === item.id
          return (
            <button
              key={item.id}
              onClick={() => onNav?.(item.id)}
              title={collapsed ? item.label : undefined}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                width: '100%',
                padding: '9px 12px',
                borderRadius: 'var(--ds-border-radius-md)',
                border: 'none',
                background: active ? 'var(--ds-color-primary-light)' : 'transparent',
                color: active ? 'var(--ds-color-primary)' : 'var(--ds-color-text-muted)',
                fontSize: 13,
                fontWeight: active ? 600 : 400,
                cursor: 'pointer',
                textAlign: 'left',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                fontFamily: 'Inter, sans-serif',
                flexShrink: 0,
              }}
            >
              <span style={{ flexShrink: 0, display: 'flex' }}>{item.icon}</span>
              {!collapsed && item.label}
            </button>
          )
        })}
      </nav>

      {/* Bottom items */}
      <div style={{ padding: '8px 8px 0', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {BOTTOM_ITEMS.map(item => {
          const active = activeNav === item.id
          return (
            <button
              key={item.id}
              onClick={() => onNav?.(item.id)}
              title={collapsed ? item.label : undefined}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                width: '100%',
                padding: '9px 12px',
                borderRadius: 'var(--ds-border-radius-md)',
                border: 'none',
                background: active ? 'var(--ds-color-primary-light)' : 'transparent',
                color: active ? 'var(--ds-color-primary)' : 'var(--ds-color-text-muted)',
                fontSize: 13,
                fontWeight: active ? 600 : 400,
                cursor: 'pointer',
                textAlign: 'left',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              <span style={{ flexShrink: 0, display: 'flex' }}>{item.icon}</span>
              {!collapsed && item.label}
            </button>
          )
        })}

        {/* Logout */}
        <button
          title={collapsed ? 'Logout' : undefined}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            width: '100%',
            padding: '9px 12px',
            borderRadius: 'var(--ds-border-radius-md)',
            border: 'none',
            background: 'transparent',
            color: 'var(--ds-color-text-muted)',
            fontSize: 13,
            cursor: 'pointer',
            textAlign: 'left',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          <span style={{ flexShrink: 0, display: 'flex' }}><LogoutIcon /></span>
          {!collapsed && 'Logout'}
        </button>
      </div>

      {/* User footer */}
      <div style={{
        padding: '12px 12px',
        borderTop: '1px solid var(--ds-color-border)',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        overflow: 'hidden',
      }}>
        <div style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: 'var(--ds-color-primary)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 12,
          fontWeight: 600,
          flexShrink: 0,
        }}>
          {userName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
        </div>
        {!collapsed && (
          <div style={{ overflow: 'hidden' }}>
            <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--ds-color-text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{userName}</div>
            <div style={{ fontSize: 11, color: 'var(--ds-color-text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{userEmail}</div>
          </div>
        )}
      </div>

      </div>{/* end inner overflow container */}
    </aside>
  )
}

export default Sidebar
