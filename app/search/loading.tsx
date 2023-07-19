import Loader from '@/components/Loader'
import React from 'react'

const Loading = () => {
  return (
    <>
      <div className="h-[44px] max-w-[400px] w-full bg-gray-100 animate-pulse"></div>
      <Loader />
    </>
  )
}

export default Loading
