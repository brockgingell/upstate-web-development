import Image from 'next/image'
import Link from 'next/link'
import iconblack from "@/public/IconBlack.svg"
import iconwhite from "@/public/IconWhite.svg"

export default function NavLogo() {
  return (
    <>
      <Link href="/" className="hidden items-center dark:flex">
        <Image src={iconwhite} alt="icon" className="h-16 p-[2px]"/>
        <span className="inline-block text-lg font-bold leading-5 sm:text-xl sm:leading-5">Upstate <br/> Web <br/> Design</span>
      </Link>
      <Link href="/" className="flex items-center dark:hidden">
        <Image src={iconblack} alt="icon" className="h-16 p-[2px]"/>
        <span className="inline-block text-lg font-bold leading-5 sm:text-xl sm:leading-5">Upstate <br/> Web <br/> Design</span>
      </Link>
    </>
  )
}