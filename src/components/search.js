import React, { PropTypes } from 'react'

const Search = ({ handleSearch, searchDisable }) => (
  <div className='search'>
    <input
      disabled={searchDisable}
      type='search'
      placeholder='Digite o nome do usuario no GitHub'
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  searchDisable: PropTypes.bool.isRequired
}

export default Search
