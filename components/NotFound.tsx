import Image from 'next/image'
import React from 'react'

const NotFound = () => {
  return (
    <div className="h-full grow-[1] w-full flex justify-center items-center">
      <Image src="/Illustration/404.svg" alt="404" width={400} height={300} />
    </div>
  )
}

export default NotFound
