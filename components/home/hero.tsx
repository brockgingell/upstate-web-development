"use client"
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'   
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="mt-20 flex w-full justify-center overflow-hidden">
      <video src={'backgroundvid.mp4'} autoplay loop muted className="z-[-1] h-full w-full object-cover" />
      <div className="absolute top-0 h-full w-full bg-black opacity-60"></div>
      <div className="absolute top-20 mt-6 flex flex-col items-center p-2">
        <h1 className="w-fit bg-gradient-to-r from-babyblue via-royalpurple to-neworange bg-clip-text text-center font-bold tracking-tighter text-transparent duration-500 animate-in zoom-in sm:text-lg lg:text-2xl">
          Hassle-Free Web Solutions for Your Business
        </h1>
        <h1 className="text-center text-2xl font-bold tracking-tighter tablet:text-3xl 2xl:text-5xl">
          We build premium websites so you can focus on what you do best - running your business.
        </h1>
        <p className="mx-10 my-3 font-medium leading-7 md:text-lg xl:text-xl">
          We specialize in providing web solutions tailored for local businesses. By integrating AI into our design process, we&apos;re able to deliver faster than our competitors, offering unmatched value at a fraction of the cost.
        </p>
        <div className=' flex w-full flex-col px-8'>
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
