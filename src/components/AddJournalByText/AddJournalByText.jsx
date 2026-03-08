import React from 'react'
import icons from '../../constants/icons'

function AddJournalByText({size, backgroundColor, color, outline}) {
  return (
    <button>
      {icons.writeTextIcon}
      <span className='visually-hidden'>Add Journal By Text</span>
    </button>
  )
}

export default AddJournalByText
