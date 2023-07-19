'use client'
import React, { FunctionComponent, useEffect, useState } from 'react'
import Search from '../Search'
import Image from 'next/image'
import { ISearchGiphy } from '@/types/components/SearchGiphy'
import { GiphyFetch } from '@giphy/js-fetch-api'
import Loader from '../Loader'
import { debounce } from 'lodash'
import NotFound from '../NotFound'
import GiphyList from '../GiphyList'

const SearchGiphy: FunctionComponent<ISearchGiphy> = ({ datas }) => {
  const [giphyDatas, setGiphyDatas] = useState(datas)
  const [loading, setLoading] = useState<boolean>(false)

  const gf = new GiphyFetch('dc6kYmlEbN8Asw5bbJflIqSABc3wYlIu')

  const getDatas = async (search: string = 'trend') => {
    try {
      if (search === '') {
        const { data: gifs } = await gf.search('trending', {
          sort: 'relevant',
          lang: 'id',
          limit: 9,
          type: 'stickers',
        })

        return gifs
      } else {
        const { data: gifs } = await gf.search(search, {
          sort: 'relevant',
          lang: 'id',
          limit: 9,
          type: 'stickers',
        })

        return gifs
      }
    } catch (error) {
      console.log(error)
      return false
    }
  }

  const handleChange = debounce(async (search: string) => {
    setLoading(true)
    const res = await getDatas(search)
    if (res) setGiphyDatas(res)
    setLoading(false)
  }, 500)

  return (
    <>
      <Search handleChange={(e: string) => handleChange(e)} />
      {loading ? (
        <Loader />
      ) : giphyDatas.length > 0 ? (
        <GiphyList datas={giphyDatas} />
      ) : (
        <NotFound />
      )}
    </>
  )
}
export default SearchGiphy
