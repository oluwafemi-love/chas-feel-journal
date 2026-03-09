import React from 'react'
import AddJournalBySpeech from '../AddJournalBySpeech/AddJournalBySpeech'
import AddJournalByText from '../AddJournalByText/AddJournalByText'
import ViewQuotes from '../ViewQuotes/ViewQuotes'
import './FloatingButtons.css'


function FloatingButtons() {
  return (
    <div className='floating-buttons-wrapper'>
      <AddJournalByText />
      <AddJournalBySpeech />
      <ViewQuotes />
    </div>
  )
}

export default FloatingButtons
