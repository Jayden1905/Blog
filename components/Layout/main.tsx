'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
