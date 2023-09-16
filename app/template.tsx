"use client"
import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion"


interface PageWrapperProps {
  children: ReactNode;
}


export default function Template({ children }: { children: React.ReactNode }) {
  return(
  <>
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  </>
  )
}