import React from "react"
import Journal from '../../components/Journal/Journal';
import ALL_JOURNALS from '../../data/AllJournals'
import './DisplayMyJournals.css'

function DisplayMyJournals() {
  return (
    <div className='my-journals-wrapper'>
      {ALL_JOURNALS.map((journal) => (
        <Journal key={journal.id} journal={journal} />
      )
      )}
    </div>
  )
}

export default DisplayMyJournals