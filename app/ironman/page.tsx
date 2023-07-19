import GiphyList from '@/components/GiphyList'
import NotFound from '@/components/NotFound'
import { GiphyFetch } from '@giphy/js-fetch-api'

export default async function Ironman() {
  const gf = new GiphyFetch(process.env.NEXT_PUBLIC_API_KEY as string)

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
