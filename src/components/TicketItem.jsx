import React from 'react'

export default function TicketItem({ticket, onClick, active}) {
  return (
    <div
      className={`tkt-item ${active ? 'active' : ''}`}
      onClick={onClick}
      role="listitem"
      tabIndex={0}
      onKeyDown={(e)=>{ if(e.key === 'Enter') onClick() }}
    >
      <div className="left">
        <div className="id">{ticket.id}</div>
        <div className="title">{ticket.title}</div>
        <div className="meta">
          <span className="requester">{ticket.requester}</span>
          <span className="created">{ticket.created}</span>
        </div>
      </div>
      <div className="right">
        <div className={`status ${ticket.status.replace(' ','-')}`}>{ticket.status}</div>
        <div className="priority">{ticket.priority}</div>
      </div>
    </div>
  )
}
