import React, { useState } from 'react'

export interface Tenant {
  id: string
  name: string
  unit: string
  status: 'overdue' | 'good-standing' | 'move-out' | 'past'
  moveInDate: string
  balance: string
  recServices: boolean
}

export interface TenantsTableProps {
  tab?: 'current' | 'past'
  tenants?: Tenant[]
  onTabChange?: (tab: string) => void
  onAddTenant?: () => void
  onRowClick?: (id: string) => void
}

const currentTenants: Tenant[] = [
  { id: '1', name: 'Stephanie Anderson', unit: '147', status: 'overdue', moveInDate: 'Apr 29, 2023', balance: '$345.00', recServices: true },
  { id: '2', name: 'John Smith', unit: '052', status: 'good-standing', moveInDate: 'Jan 15, 2023', balance: '$0.00', recServices: false },
  { id: '3', name: 'Sarah Johnson', unit: '281', status: 'move-out', moveInDate: 'Mar 1, 2022', balance: '$132.00', recServices: true },
  { id: '4', name: 'Michael Brown', unit: '021', status: 'overdue', moveInDate: 'Jun 10, 2024', balance: '$89.00', recServices: false },
  { id: '5', name: 'Emily Davis', unit: '319', status: 'good-standing', moveInDate: 'Aug 22, 2023', balance: '$0.00', recServices: false },
]

const pastTenants: Tenant[] = [
  { id: '6', name: 'David Wilson', unit: '112', status: 'past', moveInDate: 'Feb 10, 2021', balance: '$0.00', recServices: false },
  { id: '7', name: 'Jennifer Martinez', unit: '205', status: 'past', moveInDate: 'Sep 5, 2020', balance: '$50.00', recServices: true },
  { id: '8', name: 'Robert Taylor', unit: '318', status: 'past', moveInDate: 'Nov 1, 2019', balance: '$0.00', recServices: false },
  { id: '9', name: 'Lisa Thomas', unit: '407', status: 'past', moveInDate: 'Jul 20, 2022', balance: '$200.00', recServices: false },
  { id: '10', name: 'James Jackson', unit: '509', status: 'past', moveInDate: 'Jan 3, 2021', balance: '$0.00', recServices: true },
]

const statusBadgeStyle = (status: Tenant['status']): React.CSSProperties => {
  const map: Record<string, React.CSSProperties> = {
    overdue: {
      background: 'var(--ds-color-error-light)',
      color: 'var(--ds-color-error)',
    },
    'good-standing': {
      background: 'var(--ds-color-success-light)',
      color: 'var(--ds-color-success)',
    },
    'move-out': {
      background: 'var(--ds-color-warning-light)',
      color: 'var(--ds-color-warning)',
    },
    past: {
      background: 'var(--ds-color-surface-muted)',
      color: 'var(--ds-color-text-muted)',
    },
  }
  return {
    ...map[status],
    fontSize: 12,
    fontWeight: 500,
    borderRadius: 4,
    padding: '3px 8px',
    whiteSpace: 'nowrap',
    fontFamily: 'Inter, sans-serif',
  }
}

const statusLabel = (status: Tenant['status']): string => {
  const map: Record<string, string> = {
    overdue: 'Overdue',
    'good-standing': 'Good Standing',
    'move-out': 'Move Out',
    past: 'Past Tenant',
  }
  return map[status]
}

const balanceColor = (tenant: Tenant): string => {
  if (tenant.balance === '$0.00') return 'var(--ds-color-success)'
  if (tenant.status === 'overdue') return 'var(--ds-color-error)'
  return 'var(--ds-color-text-primary)'
}

const tableTabs = [
  { key: 'current', label: 'Current', count: 24 },
  { key: 'past', label: 'Past', count: 8 },
  { key: 'applicants', label: 'Applicants', count: 3 },
  { key: 'waitlist', label: 'Waitlist', count: 2 },
]

const thStyle: React.CSSProperties = {
  fontFamily: 'Inter, sans-serif',
  fontSize: 12,
  fontWeight: 600,
  color: 'var(--ds-color-text-muted)',
  textAlign: 'left',
  padding: '10px 16px',
  borderBottom: '1px solid var(--ds-color-border)',
  whiteSpace: 'nowrap',
  background: 'var(--ds-color-surface-subtle)',
}

const tdStyle: React.CSSProperties = {
  fontFamily: 'Inter, sans-serif',
  fontSize: 14,
  color: 'var(--ds-color-text-primary)',
  padding: '12px 16px',
  borderBottom: '1px solid var(--ds-color-border)',
  verticalAlign: 'middle',
}

// Custom checkbox matching Figma node 3478-11956 — square outline, no fill when unchecked
const CheckboxIcon = ({ checked, indeterminate = false, onChange }: { checked: boolean; indeterminate?: boolean; onChange: () => void }) => (
  <div
    onClick={e => { e.stopPropagation(); onChange() }}
    style={{ width: 20, height: 20, cursor: 'pointer', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  >
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      {checked ? (
        <>
          <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill="var(--ds-color-primary)" />
          <path d="M4 8l2.5 2.5L12 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : indeterminate ? (
        <>
          <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" fill="var(--ds-color-primary)" />
          <path d="M4.5 8h7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </>
      ) : (
        <rect x="0.5" y="0.5" width="15" height="15" rx="2.5" stroke="rgba(22,22,22,0.8)" strokeWidth="1" fill="none" />
      )}
    </svg>
  </div>
)

const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="4.5" stroke="var(--ds-color-text-muted)" strokeWidth="1.2" />
    <path d="M9.5 9.5l2.5 2.5" stroke="var(--ds-color-text-muted)" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)

const SettingsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="2" stroke="var(--ds-color-text-muted)" strokeWidth="1.2" />
    <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="var(--ds-color-text-muted)" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)

export const TenantsTable: React.FC<TenantsTableProps> = ({
  tab = 'current',
  tenants,
  onTabChange,
  onAddTenant,
  onRowClick,
}) => {
  const [selectedTab, setSelectedTab] = useState(tab)
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())
  const [searchValue, setSearchValue] = useState('')

  const handleTabChange = (key: string) => {
    setSelectedTab(key as 'current' | 'past')
    onTabChange?.(key)
  }

  const displayTenants = tenants ?? (selectedTab === 'current' ? currentTenants : pastTenants)

  const toggleRow = (id: string) => {
    setSelectedRows((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const toggleAll = () => {
    if (selectedRows.size === displayTenants.length) {
      setSelectedRows(new Set())
    } else {
      setSelectedRows(new Set(displayTenants.map((t) => t.id)))
    }
  }

  const filterSelect: React.CSSProperties = {
    fontFamily: 'Inter, sans-serif',
    fontSize: 13,
    color: 'var(--ds-color-text-primary)',
    border: '1px solid var(--ds-color-border)',
    borderRadius: 6,
    padding: '6px 10px',
    background: 'var(--ds-color-white)',
    cursor: 'pointer',
    outline: 'none',
  }

  return (
    <div
      style={{
        background: 'var(--ds-color-white)',
        width: '100%',
        minHeight: '100vh',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 24px 0',
        }}
      >
        <span style={{ fontSize: 28, fontWeight: 700, color: 'var(--ds-color-text-primary)' }}>Tenants</span>
        <button
          onClick={onAddTenant}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 14,
            fontWeight: 500,
            background: 'var(--ds-color-primary)',
            color: 'var(--ds-color-white)',
            border: 'none',
            borderRadius: 6,
            padding: '9px 16px',
            cursor: 'pointer',
          }}
        >
          + Add Tenant
        </button>
      </div>

      {/* Tab bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          padding: '0 24px',
          marginTop: 16,
          borderBottom: '1px solid var(--ds-color-border)',
          gap: 0,
        }}
      >
        {tableTabs.map((t) => {
          const isActive = selectedTab === t.key
          return (
            <button
              key={t.key}
              onClick={() => handleTabChange(t.key)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 14,
                fontWeight: isActive ? 700 : 500,
                color: isActive ? 'var(--ds-color-primary)' : 'var(--ds-color-text-primary)',
                background: 'none',
                border: 'none',
                borderBottom: isActive ? '2px solid var(--ds-color-primary)' : '2px solid transparent',
                cursor: 'pointer',
                padding: '8px 16px',
                marginBottom: -1,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              {t.label}
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  background: isActive ? 'var(--ds-color-primary-light)' : 'var(--ds-color-surface-muted)',
                  color: isActive ? 'var(--ds-color-primary)' : 'var(--ds-color-text-muted)',
                  borderRadius: 10,
                  padding: '1px 7px',
                }}
              >
                {t.count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Filter bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '14px 24px',
          borderBottom: '1px solid var(--ds-color-border)',
          flexWrap: 'wrap',
        }}
      >
        {/* Search */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            border: '1px solid var(--ds-color-border)',
            borderRadius: 6,
            padding: '6px 10px',
            background: 'var(--ds-color-white)',
            flex: '1 1 200px',
            maxWidth: 280,
          }}
        >
          <SearchIcon />
          <input
            type="text"
            placeholder="Search tenants..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            style={{
              border: 'none',
              outline: 'none',
              fontFamily: 'Inter, sans-serif',
              fontSize: 13,
              color: 'var(--ds-color-text-primary)',
              background: 'transparent',
              flex: 1,
              minWidth: 0,
            }}
          />
        </div>

        <select style={filterSelect}>
          <option>Status</option>
          <option>Overdue</option>
          <option>Good Standing</option>
          <option>Move Out</option>
        </select>

        <select style={filterSelect}>
          <option>Move-Out Date</option>
        </select>

        <select style={filterSelect}>
          <option>Unit Type</option>
        </select>

        <div style={{ marginLeft: 'auto' }}>
          <button
            style={{
              background: 'none',
              border: '1px solid var(--ds-color-border)',
              borderRadius: 6,
              padding: '6px 10px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SettingsIcon />
          </button>
        </div>
      </div>

      {/* Bulk action bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '10px 24px',
          background: 'var(--ds-color-surface-subtle)',
          borderBottom: '1px solid var(--ds-color-border)',
        }}
      >
        <span style={{ fontSize: 13, color: 'var(--ds-color-text-muted)' }}>
          {selectedRows.size} unit(s) selected
        </span>
        <div style={{ display: 'flex', gap: 8, marginLeft: 8 }}>
          <button
            style={{
              background: 'none',
              border: '1px solid var(--ds-color-border)',
              borderRadius: 6,
              padding: '4px 10px',
              cursor: 'pointer',
              fontSize: 12,
              fontFamily: 'Inter, sans-serif',
              color: 'var(--ds-color-text-primary)',
            }}
          >
            Send Notice
          </button>
          <button
            style={{
              background: 'none',
              border: '1px solid var(--ds-color-border)',
              borderRadius: 6,
              padding: '4px 10px',
              cursor: 'pointer',
              fontSize: 12,
              fontFamily: 'Inter, sans-serif',
              color: 'var(--ds-color-text-primary)',
            }}
          >
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ ...thStyle, width: 36 }}>
                <CheckboxIcon
                  checked={selectedRows.size === displayTenants.length && displayTenants.length > 0}
                  indeterminate={selectedRows.size > 0 && selectedRows.size < displayTenants.length}
                  onChange={toggleAll}
                />
              </th>
              <th style={thStyle}>Tenant Name</th>
              <th style={thStyle}>Unit</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Move-In Date</th>
              <th style={thStyle}>Balance</th>
              <th style={thStyle}>Rec. Services</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayTenants.map((tenant) => (
              <tr
                key={tenant.id}
                onClick={() => onRowClick?.(tenant.id)}
                style={{
                  background: selectedRows.has(tenant.id) ? 'var(--ds-color-primary-light)' : 'var(--ds-color-white)',
                  cursor: onRowClick ? 'pointer' : 'default',
                }}
                onMouseEnter={e => { if (onRowClick) e.currentTarget.style.background = 'var(--ds-color-surface-subtle)' }}
                onMouseLeave={e => { e.currentTarget.style.background = selectedRows.has(tenant.id) ? 'var(--ds-color-primary-light)' : 'var(--ds-color-white)' }}
              >
                <td style={{ ...tdStyle, width: 36 }}>
                  <CheckboxIcon
                    checked={selectedRows.has(tenant.id)}
                    onChange={() => toggleRow(tenant.id)}
                  />
                </td>
                <td style={tdStyle}>
                  <span style={{ fontWeight: 500, color: 'var(--ds-color-primary)', cursor: 'pointer' }}>
                    {tenant.name}
                  </span>
                </td>
                <td style={tdStyle}>{tenant.unit}</td>
                <td style={tdStyle}>
                  <span style={statusBadgeStyle(tenant.status)}>{statusLabel(tenant.status)}</span>
                </td>
                <td style={tdStyle}>{tenant.moveInDate}</td>
                <td style={{ ...tdStyle, fontWeight: 600, color: balanceColor(tenant) }}>
                  {tenant.balance}
                </td>
                <td style={tdStyle}>
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 500,
                      color: tenant.recServices ? 'var(--ds-color-success)' : 'var(--ds-color-text-muted)',
                      background: tenant.recServices ? 'var(--ds-color-success-light)' : 'var(--ds-color-surface-muted)',
                      borderRadius: 4,
                      padding: '2px 8px',
                    }}
                  >
                    {tenant.recServices ? 'Enrolled' : 'Not Enrolled'}
                  </span>
                </td>
                <td style={tdStyle}>
                  <button
                    style={{
                      background: 'none',
                      border: '1px solid var(--ds-color-border)',
                      borderRadius: 6,
                      padding: '4px 10px',
                      cursor: 'pointer',
                      fontSize: 12,
                      fontFamily: 'Inter, sans-serif',
                      color: 'var(--ds-color-text-primary)',
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TenantsTable
