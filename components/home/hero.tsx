"use client"
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'   
import heroimg from '@/public/Asset 1.svg'
import { Container } from '@/components/ui/Container'
import { motion } from "framer-motion";
import SiteBackground from '@/components/ui/site-background'

export default function Hero() {
    return (
      <>
        <div className="flex min-h-screen w-screen flex-col px-3 md:flex-row md:px-6 2xl:px-8">
          <div className="flex flex-col items-start justify-start self-center md:w-[600px] lg:w-[790px]">
            <h1 className="w-fit bg-gradient-to-r from-babyblue via-royalpurple to-neworange bg-clip-text text-center text-sm font-bold tracking-tighter text-transparent duration-500 animate-in zoom-in tablet:text-base xl:text-lg 2xl:text-2xl">
              Modern Web Solutions<br className="mobile:hidden"/> Tailored to Your Audience.
            </h1>
            <h1 className="mt-2 text-left text-2xl font-bold tracking-tighter tablet:text-3xl 2xl:text-5xl">
              A New Era of Web Development:<br/>Experience the Power of AI
            </h1>
            <p className="my-2 font-medium leading-7 xl:text-lg 2xl:text-xl">
              We specialize in creating websites specifically designed for local businesses. By integrating AI into our design process, we&apos;re able to deliver faster than our competitors, offering unmatched value at a fraction of the cost.
            </p>
            <div className='my-6 flex w-full flex-col px-8 md:px-0 md:pr-8 '>
              <motion.div   whileHover={{ scale: 1.1, transition: { duration: 1 }}} whileTap={{ scale: 0.8, transition: { duration: 1 } }} >
                <Link href={siteConfig.mainNav[2].href} className={`w-full max-w-[640px] ${buttonVariants({variant: "default"})}`}>
                  Book a Free Consultation →
                </Link>
              </motion.div>
            </div>
          </div>
          <Image src={heroimg} alt="App screenshot" className="h-full w-full self-center"/>
        </div>
      </>
    )
}
