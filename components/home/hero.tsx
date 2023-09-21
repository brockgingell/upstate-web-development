"use client"
import Image from 'next/image'
import Link from 'next/link'
import { manifest } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'   
import { motion } from "framer-motion"
import  BackgroundVect from '@/components/ui/backgroundvect'

export default function Hero() {
  return (
    <section className="mt-20 flex h-full w-full justify-center overflow-hidden">
      <BackgroundVect />
      <div className="mx-4 mt-4 flex flex-col items-center p-2 xs:mx-6 sm:mx-10 md:mx-14 lg:max-w-[66%]">
        <h1 className="mb-1 w-fit bg-gradient-to-r from-babyblue via-royalpurple to-neworange bg-clip-text text-center text-lg font-bold tracking-tighter text-transparent duration-500 animate-in zoom-in sm:text-2xl lg:text-3xl 2xl:text-4xl">
          Web Solutions, Simplified
        </h1>
        <h1 className="text-left text-4xl font-bold tracking-tighter 2xl:text-5xl">
          Your Hassle-Free Path to a Stunning Website for Your Business
        </h1>
        <p className="my-4 font-semibold leading-7 sm:text-lg xl:text-2xl">
          We craft exceptional websites, so you don&apos;t have to. Experience the ease of having a dedicated team managing your online presence.
        </p>
        <motion.div   whileHover={{ scale: 1.1, transition: { duration: 1 }}} whileTap={{ scale: 0.8, transition: { duration: 1 } }} >
          <Link href={manifest.mainNav[2].href} className={`w-full ${buttonVariants({variant: "default"})}`}>
            Book a Free Consultation →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
