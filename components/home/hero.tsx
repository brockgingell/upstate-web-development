"use client"
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'   
import { motion } from "framer-motion"
import { HeroBG } from '@/components/ui/herobg'

export default function Hero() {
  return (
    <section className="absolute top-[72px] mx-0 flex h-full w-screen justify-center overflow-hidden">
      <div className="absolute top-0 z-[-1] h-[60vh] w-full bg-gradient-to-b from-heroone from-10% via-herotwo via-50% to-herothree to-100% opacity-40"/>
      <div className="realtive mx-4 mt-4 flex flex-col items-center p-2 xs:mx-6 sm:mx-10 md:mx-14">
        <h1 className="mb-1 w-fit bg-gradient-to-r from-babyblue via-royalpurple to-neworange bg-clip-text text-center text-lg font-bold tracking-tighter text-transparent duration-500 animate-in zoom-in sm:text-2xl lg:text-3xl 2xl:text-4xl">
          Welcome to Upstate Digital Solutions
        </h1>
        <h1 className="text-left text-4xl font-bold tracking-tighter 2xl:text-5xl">
          Elevate Your Business with the Premium Website it Deserves
        </h1>
        <p className="my-4 font-semibold leading-7 sm:text-lg xl:text-2xl">
          We handle the web so you can handle your business. Headache-free web solutions with 24/7 support.
        </p>
        <motion.div   whileHover={{ scale: 1.1, transition: { duration: 1 }}} whileTap={{ scale: 0.8, transition: { duration: 1 } }} >
          <Link href={siteConfig.mainNav[2].href} className={`w-full ${buttonVariants({variant: "default"})}`}>
            Book a Free Consultation →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
