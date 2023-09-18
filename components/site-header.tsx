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
      <div className="fixed top-0 z-40 mt-2 flex min-h-screen w-screen flex-col border-b bg-background px-2">
        <NavLogo />
        <div className="absolute right-2 top-2 z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <XIcon className="h-8 w-8 p-[1px]"/>
        </div>
        <button onClick={() => {setTimeout(() => {setIsMenuOpen(false);}, 500);}}>
          <MobileNavLinks items={siteConfig.mainNav} />
        </button>
      </div>
      : 
      <div className="fixed top-0 z-40 flex h-16 w-screen flex-row items-center justify-between border-b-2 bg-background px-2">
        <NavLogo />
        <div className="hidden flex-row items-center justify-start sm:flex">
          <NavLinks items={siteConfig.mainNav} />
        </div>
        <div className="absolute right-2 z-50 flex sm:relative">
        <NavButtons />
          <button className="sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MenuIcon className="h-10 w-10 p-2"/>
          </button>
        </div>
      </div>
      }
    </header>
  )
}