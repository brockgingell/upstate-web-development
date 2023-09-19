import * as React from "react"
import Link from "next/link"
import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { motion }from "framer-motion"

interface MainNavProps {
  items?: NavItem[]
}

export default function NavLinks({ items }: MainNavProps) {
  return (
    <div className="flex">
      {items?.length ? (
        <nav className="flex gap-3 md:gap-5 lg:gap-6"> 
          {items?.map((item, index) => item.href && (
            <motion.div key={index} className='self-center' whileHover={{scale: 1.1}}>
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center text-sm font-medium text-muted-foreground",
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
  )
}