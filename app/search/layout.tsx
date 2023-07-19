import type { Metadata } from 'next'
import { Suspense } from 'react'
import Loading from './loading'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 border">
      <div className="container grow-[1] flex flex-col items-center gap-4 ">
        <h1 className=" font-bold text-2xl">SEARCH GIPHY</h1>

        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    </main>
  )
}
