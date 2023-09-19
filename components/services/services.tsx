import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { buttonVariants } from '@/components/ui/button'

export default function Hero() {
    return (
      <div className="relative isolate px-6">
        <div className="flex h-screen flex-col justify-center text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Services Page - Coming Soon
          </h2>
        </div>
      </div>
    )
}