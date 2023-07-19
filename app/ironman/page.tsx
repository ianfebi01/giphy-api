import GiphyList from '@/components/GiphyList'
import NotFound from '@/components/NotFound'
import SearchGiphy from '@/components/Pages/SearchGiphy'
import { IGiphy } from '@/types/Giphy'
import { GiphyFetch } from '@giphy/js-fetch-api'
import Image from 'next/image'

export default async function Ironman() {
  const gf = new GiphyFetch('dc6kYmlEbN8Asw5bbJflIqSABc3wYlIu')

  const getDatas = async () => {
    try {
      const { data: gifs } = await gf.search('iron man', {
        sort: 'relevant',
        lang: 'id',
        limit: 9,
        type: 'stickers',
      })

      return gifs
    } catch (error) {
      console.log(error)
      return []
    }
  }

  const datas = await getDatas()

  return <>{datas.length > 0 ? <GiphyList datas={datas} /> : <NotFound />}</>
}
