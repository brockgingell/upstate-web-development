"use client"
import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { SiteHeader } from "@/components/navbar/site-header"
import BackgroundVect from "@/components/home/backgroundvect"

interface PageWrapperProps {
  children: ReactNode;
}


export default function Template({ children }: { children: React.ReactNode }) {
  return (
  <>
    <SiteHeader />
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 2 }}
        transition={{ delay: .25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </>
  )
}