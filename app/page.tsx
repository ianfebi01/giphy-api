import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 border">
      <div className="container grow-[1] flex flex-col items-center justify-center gap-8">
        <h1 className=" font-bold text-4xl">WELCOME TO YOUR GIPHY</h1>

        <Image
          src="/Illustration/giphy-logo.svg"
          width={300}
          height={100}
          alt="Giphy Logo"
          priority
        />
        <div className="flex flex-col items-center text-blue-600 font-semibold mt-6">
          <Link href="/ironman">
            <h6>IRON MAN GIPHY</h6>
          </Link>
          <Link href="/search">
            <h6>SEARCH YOUR GIPHY</h6>
          </Link>
        </div>
      </div>
    </main>
  )
}
