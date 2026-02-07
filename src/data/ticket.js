const tickets = [
  {
    id: 'TKT-001',
    title: 'Login failing for multiple users',
    requester: 'Arpit',
    status: 'open',
    priority: 'High',
    created: '2026-02-01',
    messages: [
      { from: 'Arpit', text: 'Cannot login since morning.' },
      { from: 'System', text: 'We are investigating.' }
    ]
  },
  {
    id: 'TKT-002',
    title: 'Email delivery delayed',
    requester: 'Divyansh',
    status: 'in-progress',
    priority: 'Medium',
    created: '2026-02-02',
    messages: [
      { from: 'Divyansh', text: 'Some emails stuck in queue.' }
    ]
  },
  {
    id: 'TKT-003',
    title: 'Add new AI agent to helpdesk',
    requester: 'Shubh',
    status: 'resolved',
    priority: 'Low',
    created: '2026-01-28',
    messages: [
      { from: 'Subh', text: 'Please add agent Arpit.' },
      { from: 'Agent', text: 'Agent IronMan added and verified by Arpit.' }
    ]
  },
  {
    id: 'TKT-004',
    title: 'Payment gateway timeout',
    requester: 'Himanshu',
    status: 'open',
    priority: 'High',
    created: '2026-02-03',
    messages: [
      { from: 'Himanshu', text: 'Transactions failing at the time of Payment.' }
    ]
  },
  {
    id: 'TKT-005',
    title: 'UI glitch on dashboard Components',
    requester: 'Shivam',
    status: 'in-progress',
    priority: 'Low',
    created: '2026-02-04',
    messages: [
      { from: 'Shivam', text: 'elements overlapping on small screens.' }
    ]
  }
]

export default tickets
