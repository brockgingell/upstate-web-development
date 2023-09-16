"use client"
import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
import Image from "next/image"
import iconblack from "public/finaliconblack.svg"
import iconwhite from "public/finaliconwhite.svg"

import { usePathname } from "next/navigation"
import { motion }from "framer-motion"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const path = usePathname()
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center gap-[3px] dark:flex">
        <Image src={iconwhite} alt="icon" className="w-[64px]"/>
        <span className="inline-block text-sm font-bold leading-4">Upstate <br/> Deisgn & <br/> Development</span>
      </Link>
      <Link href="/" className="flex items-center gap-[3px] dark:hidden">
        <Image src={iconblack} alt="icon" className="w-[64px]"/>
        <span className="inline-block text-sm font-bold leading-4">Upstate <br/> Deisgn & <br/> Development</span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 xs:flex">
          {items?.map(
            (item, index) =>
              item.href && (
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
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
