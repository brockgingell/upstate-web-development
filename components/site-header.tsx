"use client"
import { siteConfig } from "@/config/site"
import NavLinks from "@/components/navlinks"
import NavLogo from "@/components/navlogo"
import NavButtons from "@/components/navbuttons"
import React from "react"
import { MenuIcon, XIcon } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import MobileNavLinks from "@/components/mobile-nav-links"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  return (
    <header> {isMenuOpen ? 
      <>
        <div className="fixed top-0 isolate z-50 mt-2 flex min-h-screen w-screen flex-col border-b-2 bg-background px-2">
          <div className="relative flex h-[46px] items-center justify-start">
            <NavLogo />
          </div>
          <div className="absolute right-2 top-2 z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <XIcon className="h-8 w-8 p-[1px]"/>
          </div>
        </div>
        <button className='relative z-50 mt-16 border-t-2' onClick={() => setIsMenuOpen(false)}>
          <MobileNavLinks items={siteConfig.mainNav} />
        </button>
      </>
      :
      <>
        <div className="fixed top-0 isolate z-50 flex h-16 w-screen flex-row items-center justify-between border-b-2 bg-background px-2">
          <NavLogo />
          <div className="hidden flex-row items-center justify-center xs:flex">
            <NavLinks items={siteConfig.mainNav} />
          </div>
          <div className="absolute right-2 z-50 flex xs:relative">
          <NavButtons />
            <button className="xs:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <MenuIcon className="ml-[1px] h-10 w-10 p-1 text-foreground"/>
            </button>
          </div>
        </div>
      </>
      }
    </header>
  )
}