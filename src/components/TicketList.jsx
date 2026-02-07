import React from 'react'
import TicketItem from './TicketItem'

export default function TicketList({tickets, onSelect, selectedId, statusFilter, setStatusFilter}) {
  return (
    <aside className="ticket-list" aria-label="Ticket list">
      <div className="list-header">
        <h3>All Tickets</h3>
        <div className="meta-controls">
          <select value={statusFilter} onChange={e=>setStatusFilter(e.target.value)} aria-label="Filter by status">
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
      </div>
      <div className="list-body" role="list">
        {tickets.map(t => (
          <TicketItem key={t.id} ticket={t} onClick={()=>onSelect(t.id)} active={t.id===selectedId} />
        ))}
        {tickets.length === 0 && <div className="empty-list">No tickets found</div>}
      </div>
    </aside>
  )
}
