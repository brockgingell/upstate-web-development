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
        <div className="fixed top-0 z-50 flex w-screen flex-col border-b-2 bg-background mx-1">
          <div className="relative top-0 flex h-[70px] items-center justify-start">
            <NavLogo />
          </div>
          <div className="absolute right-2 top-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <XIcon className="h-8 w-8 p-[1px]"/>
          </div>
        </div>
        <button className='relative top-[70px] z-40 flex h-screen justify-start border-t-2' onClick={() => setIsMenuOpen(false)}>
          <MobileNavLinks items={siteConfig.mainNav} />
        </button>
      </>
      :
      <>
        <div className="fixed top-0 z-50 flex h-[70px] w-screen flex-row items-center justify-between border-b-2 bg-background mx-1">
          <NavLogo />
          <div className="hidden flex-row items-center justify-center xs:flex">
            <NavLinks items={siteConfig.mainNav} />
          </div>
          <div className="absolute right-2 z-50 flex xs:relative">
          <NavButtons />
            <button className="xs:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <MenuIcon className="p-1" size={40} strokeWidth={1.7}/>
            </button>
          </div>
        </div>
      </>
      }
    </header>
  )
}