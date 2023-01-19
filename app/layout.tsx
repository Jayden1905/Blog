'use client'
import '../styles/globals.css'
import { ReactNode } from 'react'
import StateProvider from '../components/context/ContextProvider'
import NavBar from '../components/NavBar/NavBar'
import ScrollTop from '../components/ScrollTop/ScrollTop'
import { AnimatePresence } from 'framer-motion'

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-primary'>
        <div id='top' className='scroll-smooth bg-primary'>
          <StateProvider>
            <ScrollTop />
            <NavBar />
            <AnimatePresence
              mode='wait'
              initial={true}
              onExitComplete={() => {
                if (typeof window !== 'undefined') {
                  window.scrollTo({ top: 0 })
                }
              }}
            >
              {children}
            </AnimatePresence>
          </StateProvider>
        </div>
      </body>
    </html>
  )
}
