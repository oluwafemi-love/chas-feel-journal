import React from 'react'
import icons from '../../constants/icons'

function AddJournalBySpeech() {
  return (
    <button className="add-journal-trigger">
      {icons.micIcon()}
      <span className='visually-hidden'>Add Journal By Speech</span>
    </button>
  )
}

export default AddJournalBySpeech
