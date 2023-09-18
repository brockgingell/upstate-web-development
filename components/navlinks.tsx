import * as React from "react"
import Link from "next/link"
import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

interface MainNavProps {
  items?: NavItem[]
}

export default function NavLinks({ items }: MainNavProps) {
  return (
    <div className="flex">
      {items?.length ? (
        <nav className="flex gap-3 md:gap-5 lg:gap-6"> 
          {items?.map((item, index) => item.href && (
            <Link key={index} href={item.href} className={cn( "flex items-center text-sm font-medium text-muted-foreground xs:font-semibold sm:text-base lg:text-lg", item.disabled && "cursor-not-allowed opacity-80")}>
              {item.title}
            </Link>
          ))}
        </nav>
      ) : null}
    </div>
  )
}