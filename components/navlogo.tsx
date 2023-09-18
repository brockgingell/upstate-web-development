import Image from 'next/image'
import Link from 'next/link'
import iconblack from "@/public/finaliconblack.svg"
import iconwhite from "@/public/finaliconwhite.svg"

export default function NavLogo() {
  return (
    <>
      <Link href="/" className="hidden items-center dark:flex">
        <Image src={iconwhite} alt="icon" className="w-[64px] p-1 sm:w-[88px] sm:p-2"/>
        <span className="inline-block font-bold leading-5 sm:text-xl sm:leading-6">Upstate Web <br/> Development</span>
      </Link>
      <Link href="/" className="flex items-center dark:hidden">
        <Image src={iconblack} alt="icon" className="w-[64px] p-1 sm:w-[88px] sm:p-2"/>
        <span className="inline-block font-bold leading-5 sm:text-xl sm:leading-6">Upstate Web <br/> Development</span>
      </Link>
    </>
  )
}