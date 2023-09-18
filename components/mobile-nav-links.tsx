import * as React from "react"
import Link from "next/link"
import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { SiteFooter } from "@/components/site-footer"

interface MainNavProps {
  items?: NavItem[]
}

export default function MobileNavLinks({ items }: MainNavProps) {
  return (
    <div className="realtive mt-2">
      {items?.length ? (
        <nav className="flex flex-col">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "m-0 mx-2 mb-1 flex items-center rounded-xl p-4 text-center text-xl font-medium ring-2",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
      <SiteFooter />
    </div>
  )
}