import React from 'react'

const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center p-4 border">
      <div className="container grow-[1] flex flex-col items-center justify-center gap-8">
        <div className="h-[44px] max-w-[400px] w-full animate-pulse bg-gray-300"></div>

        <div className="h-[64px] max-w-[250px] w-full animate-pulse bg-gray-300"></div>
        <div className="flex flex-col gap-4 h-full w-full items-center text-blue-600 font-semibold mt-6">
          <div className="h-[28px] max-w-[150px] w-full animate-pulse bg-gray-300"></div>
          <div className="h-[28px] max-w-[150px] w-full animate-pulse bg-gray-300"></div>
        </div>
      </div>
    </div>
  )
}

export default Loading
