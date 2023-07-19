import { IGiphyList } from '@/types/components/GiphyList'
import Image from 'next/image'
import React, { FunctionComponent } from 'react'

const GiphyList: FunctionComponent<IGiphyList> = ({ datas }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
      {datas?.map((item, i) => (
        <div
          key={i}
          className="h-52 w-full  overflow-hidden border border-gray-300 "
        >
          <div className="relative w-full h-full overflow-hidden">
            {item.images.preview_gif ? (
              <Image
                src={item.images.preview_gif.url as string}
                alt={item.title as string}
                fill
                priority
                className="w-full h-full object-cover"
                sizes="(max-width: 100%)"
              />
            ) : (
              ''
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default GiphyList
