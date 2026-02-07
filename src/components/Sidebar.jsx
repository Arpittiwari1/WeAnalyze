import React from 'react'

export default function Sidebar(){
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="logo">TH</div>
        <div className="brand-text">Ticketing Helpdesk</div>
      </div>
      <nav className="nav">
        <button className="nav-item active">Dashboard</button>
        <button className="nav-item">Tickets</button>
         <button className="nav-item">Due</button>
        <button className="nav-item">High Priority</button>
        <button className='nav-item'>Unassigned</button>
        <button className="nav-item" >Settings</button>
      </nav>
    </aside>
  )
}
