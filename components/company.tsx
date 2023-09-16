import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'

export default function Hero() {
    return (
      <div className="relative isolate px-6">
        <div className="flex h-screen flex-col justify-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Company Page - Coming Soon
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8">
            We handle the web so you can handle your business. Headache-free web solutions with 24/7 support.
          </p>
          <div className='my-8 flex flex-row justify-evenly'>
                <Link href={siteConfig.mainNav[1].href} className={`${buttonVariants({variant: "default"})}`}>
                  Request a Quote →
                </Link>
                <Link href={siteConfig.mainNav[2].href} className={`${buttonVariants({variant: "secondary"})}`}>
                  About Us →
                </Link>
              </div>
        </div>
      </div>
    )
}