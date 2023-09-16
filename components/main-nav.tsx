import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/icons"
import Image from "next/image"
import iconblack from "public/finaliconblack.svg"
import iconwhite from "public/finaliconwhite.svg"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center gap-[3px] dark:flex">
        <Image src={iconwhite} alt="icon" className=""/>
        <span className="inline-block font-bold leading-5">Upstate <br/> Deisgn & <br/> Development</span>
      </Link>
      <Link href="/" className="flex items-center gap-[3px] dark:hidden">
        <Image src={iconblack} alt="icon" className=""/>
        <span className="inline-block font-bold leading-5">Upstate <br/> Deisgn & <br/> Development</span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 xs:flex">
          {items?.map(
            (item, index) =>
              item.href && (
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
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
