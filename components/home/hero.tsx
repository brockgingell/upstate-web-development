"use client"
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'   
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="mt-20 flex w-full justify-center overflow-hidden">
      <video src={'techbackground.mov'} autoPlay={true} loop muted className="z-[-1] h-[500px] w-full object-cover tablet:h-96 xs:h-80" />
      <div className="absolute top-0 h-full w-full bg-black opacity-60"></div>
      <div className="absolute top-20 mx-4 mt-4 flex flex-col items-center p-2 xs:mx-6 sm:mx-10 md:mx-14 lg:max-w-[60%]">
        <h1 className="mb-1 w-fit bg-gradient-to-r from-babyblue via-royalpurple to-neworange bg-clip-text text-center text-lg font-bold tracking-tighter text-transparent duration-500 animate-in zoom-in sm:text-2xl lg:text-3xl 2xl:text-4xl">
          Web Solutions, Simplified
        </h1>
        <h1 className="text-left text-4xl font-bold tracking-tighter 2xl:text-5xl">
          Your Hassle-Free Path to a Stunning Website for Your Business
        </h1>
        <p className="my-4 font-medium leading-7 sm:text-lg xl:text-2xl">
          We craft exceptional websites, so you don&apos;t have to. Experience the ease of having a dedicated team managing your online presence.
        </p>
        <div className='mt-3 flex w-full flex-col px-8 md:px-16'>
          <motion.div   whileHover={{ scale: 1.1, transition: { duration: 1 }}} whileTap={{ scale: 0.8, transition: { duration: 1 } }} >
            <Link href={siteConfig.mainNav[2].href} className={`w-full ${buttonVariants({variant: "default"})}`}>
              Book a Free Consultation →
            </Link>
          </motion.div>
        </div>
        </div>
      </div>
  )
}
