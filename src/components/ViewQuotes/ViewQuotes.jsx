import React from 'react'
import icons from '../../constants/icons'

function ViewQuotes() {
  return (
    <button>
      <div>
        {icons.quoteIcon()}
        <span className='visually-hidden'>View Quotes</span>
      </div>
    </button>
  )
}

export default ViewQuotes
