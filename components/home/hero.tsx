"use client"
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'   
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section>
      <div class='air air1'></div>
      <div class='air air2'></div>
      <div class='air air3'></div>
      <div class='air air4'></div>
      <div className="realtive mx-8 mt-[160px] flex flex-col items-center">
        <h1 className="text-left text-4xl font-bold tracking-tighter 2xl:text-5xl">
          Elevate Your Business with the Premium Website it Deserves
        </h1>
        <p className="my-4 font-semibold leading-7 sm:text-lg xl:text-2xl">
          We specialize in creating websites specifically designed for local businesses. By integrating AI into our design process, we&apos;re able to deliver faster than our competitors, offering unmatched value at a fraction of the cost.
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
