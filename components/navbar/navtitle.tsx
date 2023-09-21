"use client"
import Image from 'next/image'
import Link from 'next/link'
import { CompanyIcon } from '@/components/ui/company-icon'
import { Rokkitt } from "next/font/google"

const rokkitt = Rokkitt({ subsets: ['latin'] })
interface MainNavProps {
  items?: NavItem[]
}

export default function NavTitle() {
  return (
    <section className={rokkitt.className}>
      <Link href="/" className="flex items-center">
        <CompanyIcon className='mr-1 h-[62px]' />
        <h1 className="inline-block text-xl font-bold leading-5 sm:text-2xl sm:leading-5">Upstate<br/>Digital <br/>Solutions</h1>
      </Link>
    </section>
  )
}