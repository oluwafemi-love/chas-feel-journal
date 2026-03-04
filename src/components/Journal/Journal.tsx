import React from 'react'
import ALL_JOURNALS from '../../data/AllJournals'

const currentJournal = ALL_JOURNALS[2]
const dateUpdated = new Date(currentJournal.updatedAt).toDateString()


function Journal() {
  return (
    <div>
      <p>{dateUpdated}</p>
      <h1>{currentJournal.title}</h1>
      <p>{currentJournal.content.text}</p>
    </div>
  )
}

export default Journal
