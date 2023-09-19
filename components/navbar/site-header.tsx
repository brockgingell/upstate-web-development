"use client"
import React from "react"
import { siteConfig } from "@/config/site"
import { MenuIcon, XIcon } from "lucide-react"
import { ThemeToggle } from "@/components/navbar/theme-toggle"
import NavLinks from "@/components/navbar/navlinks"
import NavLogo from "@/components/navbar/navlogo"
import NavButtons from "@/components/navbar/navbuttons"
import MobileNavLinks from "@/components/navbar/mobile-links"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  return (
    <header> {isMenuOpen ? 
      <>
        <div className="fixed top-0 z-50 m-1 flex w-screen flex-col border-b-2 bg-background md:px-6">
          <div className="relative top-0 flex h-20 items-center justify-start">
            <NavLogo />
          </div>
          <div className="absolute right-2 top-5" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <XIcon className="h-8 w-8 p-[1px]"/>
          </div>
        </div>
        <button className='relative top-20 z-40 flex h-screen justify-start border-t-2' onClick={() => setIsMenuOpen(false)}>
          <MobileNavLinks items={siteConfig.mainNav} />
        </button>
      </>
      :
      <>
        <div className="fixed top-0 z-50 m-1 flex h-20 w-screen flex-row items-center justify-between border-b-2 bg-background md:px-6">
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