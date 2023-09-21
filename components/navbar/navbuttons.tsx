"use client"

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { ThemeToggle } from "@/components/navbar/theme-toggle"
import { manifest } from "@/config/site"


export default function NavButtons() {
  return (
      <div className="flex items-center">
        <Link href={manifest.links.instagram} target="_blank" rel="noreferrer">
          <div className={`hidden tablet:flex ${buttonVariants({variant: "ghost"})}`}>
            <Icons.instagram />
            <span className="sr-only">Instagram</span>
          </div>
        </Link>
        <Link href={manifest.links.twitter} target="_blank" rel="noreferrer">
          <div className={`hidden tablet:flex ${buttonVariants({variant: "ghost"})}`}>
            <Icons.twitter/>
            <span className="sr-only">Twitter</span>
          </div>
        </Link>
        <ThemeToggle />
      </div>
  )
}