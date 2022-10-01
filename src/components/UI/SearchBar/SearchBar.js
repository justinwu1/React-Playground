import style from './SearchBar.module.css'
import { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('')
  const handleInput = (event) => {
    setSearchInput(event.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault()
    onSearch(searchInput)
  }
  return (
    <>
      <label className={style['search-label']}>Search for Products</label>
      <input
        onChange={handleInput}
        className={style['search-input']}
        type='text'
        value={searchInput}
      />
      <button
        className={style['search-button']}
        type='submit'
        onClick={handleSearch}
      >
        Search
      </button>
    </>
  )
}

export default SearchBar
