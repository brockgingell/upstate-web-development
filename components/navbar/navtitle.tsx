"use client"
import Image from 'next/image'
import Link from 'next/link'
import { CompanyIcon } from '@/components/ui/company-icon'

export default function NavTitle() {
  return (
    <>
      <Link href="/" className="flex items-center">
        <CompanyIcon className='mr-1 h-[62px]' />
        <h1 className="inline-block text-lg font-bold leading-5 sm:text-xl sm:leading-5">Upstate<br/>Digital <br/>Solutions</h1>
      </Link>
    </>
  )
}