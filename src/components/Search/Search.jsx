import React from 'react'
import icons from '../../constants/icons'
import './Search.css'

function Search() {
  return (
    <div className='search-input '>
      <input type="search" name="search" id="search" placeholder='Search Feel Journal' aria-label="search"/>
      <i>{icons.searchIcon()}</i>
    </div>
  )
}

export default Search
