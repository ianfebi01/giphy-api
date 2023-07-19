import { GiphyFetch } from '@giphy/js-fetch-api'
import SearchGiphy from '@/components/Pages/SearchGiphy'

export default async function SearchPage() {
  const gf = new GiphyFetch(process.env.NEXT_PUBLIC_API_KEY as string)

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
