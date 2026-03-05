import { Link } from '@tanstack/react-router'
import React from 'react'
import './Journal.css'

function Journal({ journal }) {
  const dateUpdated = new Date(journal.updatedAt).toDateString()
  return (
    <Link to="/MyJournals/journal-in-detail/$journalId" 
    params={{ journalId: journal.id }}>
      <div className='single-journal-wrapper'>
        <p>{dateUpdated}</p>
        <h1>{journal.title}</h1>
        <p>{journal.content.text}</p>
      </div>
    </Link>

  )
}

export default Journal
