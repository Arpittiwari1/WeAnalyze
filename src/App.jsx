import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import CapacityCard from './components/CapacityCard'
import TicketList from './components/TicketList'
import TicketDetail from './components/TicketDetails'
import initialTickets from './data/ticket'

export default function App() {
  const [tickets, setTickets] = useState(initialTickets)
  const [query, setQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [selectedId, setSelectedId] = useState(tickets[0]?.id || null)
  const filtered = tickets.filter(t => {
    const q = query.trim().toLowerCase()
    const matchesQuery = !q || (t.title + t.requester + t.id).toLowerCase().includes(q)
    const matchesStatus = statusFilter === 'all' ? true : t.status === statusFilter
    return matchesQuery && matchesStatus
  })

  function updateTicket(id, patch) {
    setTickets(prev => prev.map(t => t.id === id ? { ...t, ...patch } : t))
  }

  const selectedTicket = tickets.find(t => t.id === selectedId)
  return (
    <div className="app">
      <Sidebar />
      <main className="main">
        <Header query={query} setQuery={setQuery} />
        <section className="top-cards">
          <CapacityCard title="Open Tickets" value={tickets.filter(t=>t.status==='open').length}/>
          <CapacityCard title="In Progress" value={tickets.filter(t=>t.status==='in-progress').length} />
          <CapacityCard title="Resolved" value={tickets.filter(t=>t.status==='resolved').length}/>
          <CapacityCard title="Capacity" value="72%"/>
        </section>
        <section className="content">
          <TicketList
            tickets={filtered}
            onSelect={setSelectedId}
            selectedId={selectedId}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />
          <TicketDetail ticket={selectedTicket} onUpdate={updateTicket} />
        </section>
      </main>
    </div>
  )
}
