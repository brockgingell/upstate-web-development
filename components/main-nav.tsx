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
    <>
      {items?.length ? (
        <nav className="hidden gap-3 sm:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <motion.div key={index} className='self-center' whileHover={{scale: 1.1}}>
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium text-foreground",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
                </motion.div>
              )
          )}
        </nav>
      ):null}
    </>
  )
}
