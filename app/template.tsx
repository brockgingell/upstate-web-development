"use client"
import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { SiteHeader } from "@/components/navbar/site-header"

interface PageWrapperProps {
  children: ReactNode;
}


export default function Template({ children }: { children: React.ReactNode }) {
  return (
  <>
    <AnimatePresence>
      <SiteHeader />
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