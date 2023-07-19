'use client'
import React, { FunctionComponent } from 'react'

const Search: FunctionComponent<ISearchInput> = ({ handleChange }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      className="border-[2px] border-gray-300 shadow-gg rounded-[4px] h-[44px] w-full max-w-[400px] px-4 focus:outline-none"
      onChange={(e) => handleChange(e.target.value)}
    />
  )
}

export default Search
