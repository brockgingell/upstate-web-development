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
      <div className="fixed top-0 z-40 mt-2 flex min-h-screen w-screen flex-col items-center border-b bg-background">
        <NavLogo />
        <div className="absolute right-0 top-0 z-50 mr-2 flex flex-row items-center p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <XIcon/>
        </div>
        <button onClick={() => {setTimeout(() => {setIsMenuOpen(false);}, 500);}}>
          <MobileNavLinks items={siteConfig.mainNav} />
        </button>
      </div>
      : 
      <div className="fixed top-0 z-40 flex h-16 w-full flex-row items-center justify-between border-b-2 bg-background px-2 md:h-[72px] lg:h-20">
        <NavLogo />
        <div className="hidden flex-row items-center md:flex">
          <NavLinks items={siteConfig.mainNav} />
        </div>
        <div className="absolute right-0 top-0 z-50 mr-2 mt-2 flex flex-row items-center">
        <NavButtons />
          <button className="" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon/>
          </button>
        </div>
      </div>
      }
    </header>
  )
}