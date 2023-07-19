'use client'
import React from 'react'

const Loader = () => {
  const mockArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  return (
    <>
      <div className="grid grid-cols-3 gap-4 w-full">
        {mockArray?.map((item, i) => (
          <div key={i} className="h-52 w-full bg-gray-100 animate-pulse "></div>
        ))}
      </div>
    </>
  )
}

export default Loader
