import React from 'react'

export default function Header({query, setQuery}){
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="title">Ticketing Capacity</h1>
        <div className="subtitle">Overview of current ticket load and capacity</div>
      </div>
      <div className="header-actions">
        <input
          className="search"
          placeholder="Search tickets, request Maker, id..."
          value={query}
          onChange={e=>setQuery(e.target.value)}
          aria-label="Search tickets"
        />
        <button className="btn primary">New Ticket</button>
      </div>
    </header>
  )
}
