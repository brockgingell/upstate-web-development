"use client"
import Image from 'next/image'
import background from '@/public/herobg.png'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'   
import { motion } from "framer-motion"


export default function Hero() {
  return (
    <main>
      <div className="absolute mt-20 flex h-screen w-screen flex-col items-center justify-around gap-1">
        <div className='flex w-screen flex-col items-center'>
          <h1 className='mx-6 text-center text-2xl font-bold tablet:text-4xl xs:text-5xl lg:text-6xl'>
            Upgrade to a Website That Captures <br className='hidden md:flex'/> Your Business Excellence.
          </h1>
          <p className="mx-4 mt-2 max-w-[330px] text-center text-lg font-medium tablet:max-w-[560px] tablet:text-xl xs:text-2xl md:text-3xl lg:max-w-[940px] lg:text-4xl">
            We create websites specifically designed to help your business dominate your local market. Headache-free web solutions with 24/7 support.
          </p>
          <motion.div   whileHover={{ scale: 1.1, transition: { duration: 1 }}} whileTap={{ scale: 0.8, transition: { duration: 1 } }} >
            <Link href={siteConfig.mainNav[2].href} className={`mt-8 w-full ${buttonVariants({size:"sm", variant: "default"})}`}>
              Book a Free Consultation →
            </Link>
          </motion.div>
        </div>
        <svg className='lucide lucide-chevron-down-circle mb-[10vh] flex animate-bounce mobile:mb-[15vh] sm:mb-[10vh]' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m16 10-4 4-4-4"/></svg>
      </div>
    </main>
  )
}
