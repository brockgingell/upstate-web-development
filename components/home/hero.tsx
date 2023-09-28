"use client"
import Image from 'next/image'
import background from '@/public/herobg.png'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'   
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <>
      <Image src={background} alt="hero background" layout="fill" objectFit="cover" quality={100} />
      <div className="absolute mx-8 mt-[120px] flex flex-col items-center">
        <h1 className="text-left text-4xl font-bold tracking-tighter 2xl:text-5xl">
          Forge Your Digital Summit with Upstate Excellence
        </h1>
        <p className="my-4 font-semibold leading-7 sm:text-lg xl:text-2xl">
          Avoid the digital hassle; let us pave your pathway to online success while you focus on what you do best-running your business.
        </p>
        <motion.div   whileHover={{ scale: 1.1, transition: { duration: 1 }}} whileTap={{ scale: 0.8, transition: { duration: 1 } }} >
          <Link href={siteConfig.mainNav[2].href} className={`w-full ${buttonVariants({variant: "default"})}`}>
            Book a Free Consultation →
          </Link>
        </motion.div>
      </div>
    </>
  )
}
