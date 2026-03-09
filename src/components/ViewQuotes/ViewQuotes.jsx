import React from 'react'
import icons from '../../constants/icons'
import './ViewQuotes.css'

function ViewQuotes() {
  return (
    <button className='view-quote-trigger'>
      <div className='button-content-quote'>
        {icons.quoteIcon()}
        <span className='visually-hidden'>View Quotes</span>
      </div>
    </button>
  )
}

export default ViewQuotes
