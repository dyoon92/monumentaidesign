import React from 'react'
import { PinnedNotes } from './PinnedNotes'
export type { PinnedNote } from './PinnedNotes'

const LockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="2" y="6" width="10" height="7" rx="1.5" stroke="var(--ds-color-text-primary)" strokeWidth="1.2" />
    <path d="M4.5 6V4.5a2.5 2.5 0 015 0V6" stroke="var(--ds-color-text-primary)" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="7" cy="9.5" r="1" fill="var(--ds-color-text-primary)" />
  </svg>
)

const NoteIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="2" y="1.5" width="10" height="11" rx="1.5" stroke="var(--ds-color-warning)" strokeWidth="1.2" />
    <path d="M4.5 5h5M4.5 7.5h5M4.5 10h3" stroke="var(--ds-color-warning)" strokeWidth="1.1" strokeLinecap="round" />
  </svg>
)

const EmailIcon = () => (
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

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 6l3 3 5-5" stroke="var(--ds-color-success)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ChevronDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M3 4.5l3 3 3-3" stroke="var(--ds-color-text-muted)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

// ─── Types ────────────────────────────────────────────────────────────────────

export interface LockMessage {
  type: 'lock'
  time: string
  lockName: string
  unitName: string
  code: string
}

export interface NoteMessage {
  type: 'note'
  time: string
  text: string
  sentBy?: string
}

export interface EmailMessage {
  type: 'email'
  time: string
  subject: string
  body: string
  attachments?: string[]
  sentBy?: string
  delivered?: boolean
}

export type CommunicationMessage = LockMessage | NoteMessage | EmailMessage

export interface CommunicationsPanelProps {
  pinnedNotes?: PinnedNote[]
  messages?: CommunicationMessage[]
  onAddNote?: () => void
  onSendMessage?: () => void
}

// ─── Defaults ─────────────────────────────────────────────────────────────────

const DEFAULT_MESSAGES: CommunicationMessage[] = [
  {
    type: 'lock',
    time: '6/25/25, 9:15 AM',
    lockName: 'Lock',
    unitName: 'Wilburton Unit 102',
    code: '5930',
  },
  {
    type: 'note',
    time: '6/25/25, 9:01 AM',
    text: 'Unit 204 has been marked as Unrentable due to a roof leak that caused significant water damage on the back wall and floor. A task has been opened with the maintenance team!',
    sentBy: 'David Peterson',
  },
  {
    type: 'email',
    time: '6/25/25, 8:45 AM',
    subject: 'Rent Due Reminder for Unit150',
    body: 'Just a quick reminder that rent for your unit150 is now due. To avoid late fees or any access interruptions, we kindly ask that you submit your payment at your earliest convenience.\n\nIf you\'ve already made your payment—thank you, and please disregard this message.',
    attachments: ['TX Self Storage.pdf  150KB', 'Terms and co...pdf  150KB'],
    sentBy: 'David Peterson',
    delivered: true,
  },
  {
    type: 'note',
    time: '6/24/25, 4:30 PM',
    text: 'Tenant called about access hours. Updated gate code and informed tenant of new extended schedule...',
  },
]

// ─── Component ────────────────────────────────────────────────────────────────

export const CommunicationsPanel: React.FC<CommunicationsPanelProps> = ({
  pinnedNotes = DEFAULT_PINNED_NOTES,
  messages = DEFAULT_MESSAGES,
  onAddNote,
  onSendMessage,
}) => {
  const mostRecentTime = messages[0]?.time

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', background: 'white', border: '1px solid var(--ds-color-border)', borderRadius: 16, overflow: 'hidden' }}>

      {/* Pinned notes — PinnedNotes component, Figma node 17392-4568 */}
      {pinnedNotes.length > 0 && (
        <PinnedNotes notes={pinnedNotes} />
      )}

      {/* Filter bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontFamily: 'Inter, sans-serif',
            fontSize: 13,
            fontWeight: 500,
            color: 'var(--ds-color-text-primary)',
            background: 'white',
            border: '1px solid var(--ds-color-border)',
            borderRadius: 'var(--ds-border-radius-md)',
            padding: '6px 12px',
            cursor: 'pointer',
          }}
        >
          Date Range <ChevronDownIcon />
        </button>
        <button
          style={{
            width: 32,
            height: 32,
            background: 'white',
            border: '1px solid var(--ds-color-border)',
            borderRadius: 'var(--ds-border-radius-md)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FilterIcon />
        </button>
        <div style={{ flex: 1 }} />
        <button
          onClick={onAddNote}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 13,
            fontWeight: 500,
            color: 'var(--ds-color-text-primary)',
            background: 'white',
            border: '1px solid var(--ds-color-border)',
            borderRadius: 'var(--ds-border-radius-md)',
            padding: '6px 14px',
            cursor: 'pointer',
          }}
        >
          Add Note
        </button>
        <button
          onClick={onSendMessage}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 13,
            fontWeight: 500,
            color: 'white',
            background: 'var(--ds-color-primary)',
            border: 'none',
            borderRadius: 'var(--ds-border-radius-md)',
            padding: '6px 14px',
            cursor: 'pointer',
          }}
        >
          Send Message
        </button>
      </div>

      {/* Most recent label */}
      {mostRecentTime && (
        <div style={{ textAlign: 'center', marginBottom: 12 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: 'var(--ds-color-text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: 6,
            }}
          >
            Most recent
          </div>
          <span
            style={{
              fontSize: 12,
              color: 'var(--ds-color-text-muted)',
              background: 'var(--ds-color-surface-subtle)',
              borderRadius: 'var(--ds-border-radius-sm)',
              padding: '3px 10px',
            }}
          >
            {mostRecentTime}
          </span>
        </div>
      )}

      {/* Messages */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {messages.map((msg, i) => {
          const iconBg =
            msg.type === 'lock' ? 'var(--ds-color-surface-muted)'
            : msg.type === 'note' ? 'var(--ds-color-warning-light)'
            : '#fff3eb'

          const msgBg =
            msg.type === 'lock' ? 'var(--ds-color-surface-subtle)'
            : msg.type === 'note' ? 'var(--ds-color-warning-subtle)'
            : 'white'

          const icon =
            msg.type === 'lock' ? <LockIcon />
            : msg.type === 'note' ? <NoteIcon />
            : <EmailIcon />

          return (
            <div
              key={i}
              style={{
                background: msgBg,
                border: '1px solid var(--ds-color-border)',
                borderRadius: 'var(--ds-border-radius-lg)',
                padding: '12px 14px',
                display: 'flex',
                gap: 10,
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  background: iconBg,
                  border: '1px solid var(--ds-color-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: 1,
                }}
              >
                {icon}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11, color: 'var(--ds-color-text-muted)', marginBottom: 4 }}>{msg.time}</div>
                {msg.type === 'lock' && (
                  <span style={{ fontSize: 13 }}>
                    <strong>Lock Combination</strong>
                    <br />
                    {msg.lockName} added to {msg.unitName} with code <strong>{msg.code}</strong>.
                  </span>
                )}
                {msg.type === 'note' && (
                  <div>
                    <p style={{ margin: '0 0 6px', fontSize: 13, lineHeight: 1.5 }}>{msg.text}</p>
                    {msg.sentBy && (
                      <span style={{ fontSize: 12, color: 'var(--ds-color-text-muted)' }}>
                        Sent by {msg.sentBy}
                      </span>
                    )}
                  </div>
                )}
                {msg.type === 'email' && (
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>{msg.subject}</div>
                    <p style={{ margin: '0 0 10px', fontSize: 13, lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                      Hi,{'\n'}{msg.body}
                    </p>
                    {msg.attachments && msg.attachments.length > 0 && (
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
                        {msg.attachments.map(att => (
                          <div
                            key={att}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: 6,
                              background: 'var(--ds-color-surface-subtle)',
                              border: '1px solid var(--ds-color-border)',
                              borderRadius: 'var(--ds-border-radius-sm)',
                              padding: '5px 10px',
                            }}
                          >
                            <PaperclipIcon />
                            <span style={{ fontSize: 12 }}>{att}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      {msg.sentBy && (
                        <span style={{ fontSize: 12, color: 'var(--ds-color-text-muted)' }}>
                          Sent by {msg.sentBy}
                        </span>
                      )}
                      {msg.delivered && (
                        <>
                          <CheckIcon />
                          <span style={{ fontSize: 12, color: 'var(--ds-color-success)' }}>Delivered</span>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CommunicationsPanel
