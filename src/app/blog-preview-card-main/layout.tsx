import { ReactNode } from "react"
import { Figtree } from "next/font/google"

const figtree = Figtree({
  weight: ['500', '800'],
  subsets: ['latin'],
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <body className={`${figtree.className} bg-yellow-400`}>
      {children}
    </body>
  )
}
