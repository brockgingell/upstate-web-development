"use client"
import Image from 'next/image'
import background from '@/public/herobg.png'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'   
import { motion } from "framer-motion"
import { Crimson_Text } from "next/font/google"

const crimsonBold = Crimson_Text({ weight: ['700'], subsets: ['latin'] })
const crimsonSemi = Crimson_Text({ weight: ['600'], subsets: ['latin'] })

export default function Hero() {
  return (
    <main className={`dark:text-black ${crimsonBold.className}`}>
      <Image className='' src={background} alt="hero background" layout="fill" objectFit="cover" quality={100} />
      <div className="absolute mt-[120px] flex w-screen flex-col items-center gap-4">
        <h1 className='text-center text-4xl'>
          Forge Your Digital Summit<br/> with Upstate Excellence
        </h1>
        <p className={`text-center text-xl ${crimsonSemi.className}`}>
          Avoid the digital hassle; let us pave your pathway to online success while you focus on what you do best-running your business.
        </p>
        <motion.div   whileHover={{ scale: 1.1, transition: { duration: 1 }}} whileTap={{ scale: 0.8, transition: { duration: 1 } }} >
          <Link href={siteConfig.mainNav[2].href} className={`w-full ${buttonVariants({variant: "default"})}`}>
            Book a Free Consultation →
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
