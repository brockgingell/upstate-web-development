import * as React from "react"
import Link from "next/link"
import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { motion }from "framer-motion"
import { Roboto_Slab } from "next/font/google"

const roboto = Roboto_Slab({ subsets: ['latin'] })
interface MainNavProps {
  items?: NavItem[]
}

export default function NavLinks({ items }: MainNavProps) {
  return (
    <main className={roboto.className}>
      <div className='flex'>
      {items?.length ? (
        <nav className="mr-6 flex gap-3 sm:gap-5 lg:gap-8"> 
          {items?.map((item, index) => item.href && (
            <motion.div key={index} whileHover={{scale: 1.1}}>
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center text-foreground md:text-lg md:font-medium lg:text-xl",
                  item.disabled && "cursor-not-allowed opacity-80"
                )}
              >
                {item.title}
              </Link>
          </motion.div>
          ))}
        </nav>
      ) : null}
    </div>
    </main>
  )
}