import React from 'react'

// Badge components — Figma nodes 8104:353226, 8104:353330, 8104:353419, 8104:353453
// Monument Design System

export type BadgeSize = 'lg' | 'sm'
export type BadgeContrast = 'high' | 'low'

// ─── General Badge ─────────────────────────────────────────────────────────────

export type GeneralStatus = 'active' | 'inactive' | 'in-progress' | 'secondary' | 'error' | 'archive'

export interface BadgeProps {
  status: GeneralStatus
  size?: BadgeSize
  contrast?: BadgeContrast
  label?: string
}

const GENERAL_COLORS: Record<GeneralStatus, { high: string[]; low: string[] }> = {
  // [bg, text]
  'active':      { high: ['#08875D', '#ffffff'], low: ['#E5F5E9', '#08875D'] },
  'inactive':    { high: ['#B25E09', '#ffffff'], low: ['#FFF8EB', '#B25E09'] },
  'in-progress': { high: ['#7D52F8', '#ffffff'], low: ['#F5F0FF', '#7D52F8'] },
  'secondary':   { high: ['#548BF7', '#ffffff'], low: ['#D1DFFF', '#356DDE'] },
  'error':       { high: ['#E02D3C', '#ffffff'], low: ['#FEE1E3', '#E02D3C'] },
  'archive':     { high: ['#5F6C85', '#ffffff'], low: ['#E1E6EF', '#161616'] },
}

const GENERAL_LABELS: Record<GeneralStatus, string> = {
  'active':      'Active',
  'inactive':    'Inactive',
  'in-progress': 'In Progress',
  'secondary':   'Secondary',
  'error':       'Error',
  'archive':     'Archive',
}

// ─── Unit Status Badge ─────────────────────────────────────────────────────────

export type UnitStatus =
  | 'delinquent' | 'occupied' | 'overdue' | 'overlock' | 'in-progress'
  | 'vacant' | 'waitlisted' | 'reserved' | 'lien' | 'auction' | 'pending'
  | 'owner-occupied' | 'unrentable' | 'maintenance' | 'paused' | 'transferring' | 'tax-exempt'

export interface UnitBadgeProps {
  status: UnitStatus
  size?: BadgeSize
  contrast?: BadgeContrast
}

const UNIT_COLORS: Record<UnitStatus, { high: string; low: string[] }> = {
  // high: bg only (text always #fff); low: [bg, text]
  'delinquent':     { high: '#E02D3C', low: ['#FEE1E3', '#E02D3C'] },
  'occupied':       { high: '#548BF7', low: ['#D1DFFF', '#356DDE'] },
  'overdue':        { high: '#E02D3C', low: ['#FEE1E3', '#E02D3C'] },
  'overlock':       { high: '#981B25', low: ['#FEC8CD', '#981B25'] },
  'in-progress':    { high: '#548BF7', low: ['#D1DFFF', '#356DDE'] },
  'vacant':         { high: '#08875D', low: ['#E5F5E9', '#08875D'] },
  'waitlisted':     { high: '#7D52F8', low: ['#F5F0FF', '#7D52F8'] },
  'reserved':       { high: '#7D52F8', low: ['#F5F0FF', '#7D52F8'] },
  'lien':           { high: '#E02D3C', low: ['#FEE1E3', '#E02D3C'] },
  'auction':        { high: '#981B25', low: ['#FEE1E3', '#981B25'] },
  'pending':        { high: '#5F6C85', low: ['#CBD2E1', '#161616'] },
  'owner-occupied': { high: '#5F6C85', low: ['#CBD2E1', '#161616'] },
  'unrentable':     { high: '#E02D3C', low: ['#FEE1E3', '#E02D3C'] },
  'maintenance':    { high: '#B25E09', low: ['#FFF8EB', '#B25E09'] },
  'paused':         { high: '#FFA928', low: ['#FEE5B3', '#DB7712'] },
  'transferring':   { high: '#1B1F27', low: ['#F1F3F9', '#1B1F27'] },
  'tax-exempt':     { high: '#2152B5', low: ['#EBF1FF', '#2152B5'] },
}

const UNIT_LABELS: Record<UnitStatus, string> = {
  'delinquent':     'Delinquent',
  'occupied':       'Occupied',
  'overdue':        'Overdue',
  'overlock':       'Overlock',
  'in-progress':    'In Progress',
  'vacant':         'Vacant',
  'waitlisted':     'Waitlisted',
  'reserved':       'Reserved',
  'lien':           'Lien',
  'auction':        'Auction',
  'pending':        'Pending',
  'owner-occupied': 'Owner Occupied',
  'unrentable':     'Unrentable',
  'maintenance':    'Maintenance',
  'paused':         'Paused',
  'transferring':   'Transferring',
  'tax-exempt':     'Tax Exempt',
}

// ─── Communication Status Badge ────────────────────────────────────────────────

export type CommStatus = 'delivered' | 'bounced' | 'deferred' | 'blocked'

export interface CommBadgeProps {
  status: CommStatus
  size?: BadgeSize
  contrast?: BadgeContrast
}

const COMM_COLORS: Record<CommStatus, { high: string; low: string[] }> = {
  'delivered': { high: '#08875D', low: ['#E5F5E9', '#08875D'] },
  'bounced':   { high: '#B25E09', low: ['#FFF8EB', '#B25E09'] },
  'deferred':  { high: '#5F6C85', low: ['#CBD2E1', '#161616'] },
  'blocked':   { high: '#E02D3C', low: ['#FEE1E3', '#E02D3C'] },
}

const COMM_LABELS: Record<CommStatus, string> = {
  'delivered': 'Delivered',
  'bounced':   'Bounced',
  'deferred':  'Deferred',
  'blocked':   'Blocked',
}

// ─── Shared pill renderer ──────────────────────────────────────────────────────

function BadgePill({ label, bg, color, size = 'lg' }: { label: string; bg: string; color: string; size?: BadgeSize }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: size === 'lg' ? 24 : 16,
        padding: size === 'lg' ? '4px 10px' : '2px 6px',
        borderRadius: 100,
        background: bg,
        color,
        fontFamily: 'Inter, sans-serif',
        fontSize: size === 'lg' ? 14 : 12,
        fontWeight: 600,
        whiteSpace: 'nowrap',
        lineHeight: 1,
        boxSizing: 'border-box',
      }}
    >
      {label}
    </span>
  )
}

// ─── Exported components ───────────────────────────────────────────────────────

export const Badge: React.FC<BadgeProps> = ({ status, size = 'lg', contrast = 'high', label }) => {
  const [bg, color] = GENERAL_COLORS[status][contrast]
  return <BadgePill label={label ?? GENERAL_LABELS[status]} bg={bg} color={color} size={size} />
}

export const UnitBadge: React.FC<UnitBadgeProps> = ({ status, size = 'lg', contrast = 'high' }) => {
  const c = UNIT_COLORS[status]
  const [bg, color] = contrast === 'high' ? [c.high, '#ffffff'] : c.low
  return <BadgePill label={UNIT_LABELS[status]} bg={bg} color={color} size={size} />
}

export const CommBadge: React.FC<CommBadgeProps> = ({ status, size = 'lg', contrast = 'high' }) => {
  const c = COMM_COLORS[status]
  const [bg, color] = contrast === 'high' ? [c.high, '#ffffff'] : c.low
  return <BadgePill label={COMM_LABELS[status]} bg={bg} color={color} size={size} />
}

export default Badge
