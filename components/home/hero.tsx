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
        <h1 className='mx-2 text-center text-4xl xs:text-5xl lg:text-6xl'>
          Forge Your Digital Summit<br className='hidden xs:flex'/> with Upstate Excellence
        </h1>
        <p className={`mx-4 max-w-[560px] text-center text-xl tablet:text-2xl xs:text-3xl lg:max-w-[70%] lg:text-4xl ${crimsonSemi.className}`}>
          Avoid the digital hassle; let us pave your pathway to online success while you focus on what you do best-running your business.
        </p>
        <motion.div   whileHover={{ scale: 1.1, transition: { duration: 1 }}} whileTap={{ scale: 0.8, transition: { duration: 1 } }} >
          <Link href={siteConfig.mainNav[2].href} className={`w-full ${buttonVariants({size:"lg", variant: "default"})}`}>
            Book a Free Consultation →
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
