import React from 'react'
import Hero from '@/components/home/hero'
import Whyus from '@/components/home/whyus'
import NewCTA from '@/components/home/newcta'
  
  export default function IndexPage() {
    return (
      <main className="realtive mt-14 min-h-screen w-screen">
        <Hero/>
        <Whyus/>
        <NewCTA/>
      </main>
    )
  }