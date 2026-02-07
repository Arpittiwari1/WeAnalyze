import React, { useState, useEffect } from 'react'

export default function TicketDetail({ticket, onUpdate}) {
  const [note, setNote] = useState('')
  useEffect(()=>{ setNote('') }, [ticket?.id])
  if(!ticket) return <div className="tkt-detail empty">Select a ticket to view details</div>
  function addNote(){
    if(!note.trim()) return
    const newMessages = [...ticket.messages, { from: 'Agent', text: note }]
    onUpdate(ticket.id, { messages: newMessages })
    setNote('')
  }
  function changeStatus(e){
    onUpdate(ticket.id, { status: e.target.value })
  }
  return (
    <div className="tkt-detail" aria-live="polite">
      <div className="detail-header">
        <div>
          <h2 className="detail-title">{ticket.title}</h2>
          <div className="detail-sub">Requested by <strong>{ticket.requester}</strong> • <span className="id">{ticket.id}</span></div>
        </div>
        <div className="meta-controls">
          <select value={ticket.status} onChange={changeStatus} aria-label="Change status">
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
      </div>
      <div className="messages">
        {ticket.messages.map((m,i)=>(
          <div key={i} className={`message ${m.from === 'Agent' ? 'agent' : 'user'}`}>
            <div className="from">{m.from}</div>
            <div className="text">{m.text}</div>
          </div>
        ))}
      </div>
      <div className="composer">
        <input value={note} onChange={e=>setNote(e.target.value)} placeholder="Write a note..." aria-label="Write a note" />
        <button className="btn" onClick={addNote}>Send</button>
      </div>
    </div>
  )
}
