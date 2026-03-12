// import React from 'react'
// import icons from '../../constants/icons'
// import './ViewQuotes.css'

// // Todo:
// // This wil show quotes: fetch the quote of the day, save it. and throughout that they keep showing it. The following day, it does the same thing.
// // It will also have a button-link to link back to Quotes page, where user can view previous quotes and add personal quotes.

// function ViewQuotes() {
//   return (
//     <button className='view-quote-trigger'>
//       <div className='button-content-quote'>
//         {icons.quoteIcon()}
//         <span className='visually-hidden'>View Quotes</span>
//       </div>
//     </button>
//   )
// }

// export default ViewQuotes


import React from 'react'
import { Link } from '@tanstack/react-router'
import icons from '../../constants/icons'
import './ViewQuotes.css'

function ViewQuotes() {
  return (
    <Link to="/QuotesPage" className='view-quote-trigger'>
      <div className='button-content-quote'>
        {icons.quoteIcon()}
        <span className='visually-hidden'>View Quotes</span>
      </div>
    </Link>
  )
}

export default ViewQuotes