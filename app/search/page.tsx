import { GiphyFetch } from '@giphy/js-fetch-api'
import Image from 'next/image'
import Search from '@/components/Search'
import SearchGiphy from '@/components/Pages/SearchGiphy'

export default async function SearchPage() {
  const gf = new GiphyFetch('dc6kYmlEbN8Asw5bbJflIqSABc3wYlIu')

  const gg = async (search: string) => {
    const { data: gifs } = await gf.search(search, {
      sort: 'relevant',
      lang: 'id',
      limit: 9,
      type: 'stickers',
    })

    return gifs
  }

  const huaa = await gg('trending')

  return (
    <>
      <SearchGiphy datas={huaa} />
    </>
  )
}
