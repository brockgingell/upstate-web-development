import Image from 'next/image'
import Link from 'next/link'
import iconblack from "@/public/finaliconblack.svg"
import iconwhite from "@/public/finaliconwhite.svg"

export default function NavLogo() {
  return (
    <>
      <Link href="/" className="hidden items-center dark:flex">
        <Image src={iconwhite} alt="icon" className="h-16 p-1"/>
        <span className="inline-block font-bold leading-5 tablet:text-lg tablet:leading-5 sm:text-xl sm:leading-5">Upstate <br/> Web <br/> Design</span>
      </Link>
      <Link href="/" className="flex items-center dark:hidden">
        <Image src={iconblack} alt="icon" className="h-16 p-1"/>
        <span className="inline-block font-bold leading-[18px] tablet:text-lg tablet:leading-5 sm:text-xl sm:leading-5">Upstate <br/> Web <br/> Design</span>
      </Link>
    </>
  )
}