import React from 'react'
import icons from '../../constants/icons'
import './EditJournal.css'

function EditJournal() {
  return (
    <form className='edit-journal'>
      <button>{icons.pencilIcon()}</button>
    </form>
  )
}

// absolute left-0 bottom-0 m-[18px]

export default EditJournal
