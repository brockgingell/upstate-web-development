import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/ui/icons"
import { Phone, Menu } from 'lucide-react';
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background px-2">
      <div className="flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-[3px]">
          <nav className="hidden items-center space-x-[3px] mobile:flex">
            <Link href={siteConfig.mainNav[1].href} className={`hidden mobile:flex ${buttonVariants({variant: "outline"})}`}>
              <Phone className="h-4 w-4 stroke-current"/> <span className="ml-1 text-xs">Contact Us</span>
            </Link>
            <ThemeToggle />
          </nav>
          <div className="sm:hidden">
            <Menu/>
          </div>
        </div>
      </div>
    </header>
  )
}
