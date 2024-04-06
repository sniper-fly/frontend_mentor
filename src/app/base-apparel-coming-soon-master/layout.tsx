import { ReactNode } from "react"
import { Josefin_Sans } from "next/font/google"

const josefin_sans = Josefin_Sans({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
})

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={`${josefin_sans.className}`}>
      {children}
    </div>
  )
}
