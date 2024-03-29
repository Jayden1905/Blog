'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse,
  faCircleInfo,
  faPaperPlane,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navIcon } from '../../animations/animation'
import { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/ContextProvider'
import Image from 'next/image'

export default function NavBar() {
  const { useStore } = useGlobalContext()
  const [windowDimension, setStore] = useStore((store) => store.windowDimension)
  const pathname = usePathname()
  const navMenu = [
    { name: 'Home', icon: faHouse, path: '/' },
    { name: 'About', icon: faCircleInfo, path: '/about' },
    { name: 'Contact', icon: faPaperPlane, path: '/contact' },
  ]

  const [open, setOpen] = useState(false)

  const closeNav = (value: boolean) => {
    setOpen(value)
  }

  const detectWindowSize = () => {
    setStore({
      windowDimension: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectWindowSize)

    return () => {
      window.removeEventListener('resize', detectWindowSize)
    }
  }, [windowDimension])

  return (
    <div
      id='top'
      className={`fixed right-0 left-0 z-10 ${
        open ? 'bg-white' : 'bg-primary'
      } py-6 lg:relative lg:py-14`}
    >
      <nav className='container mx-auto flex items-center justify-between gap-0 px-4 md:px-20 lg:px-32'>
        <Link scroll={false} href='/' className='logo flex items-center gap-1'>
          <Image
            width={180}
            height={180}
            src='/logo.png'
            alt={'logo'}
            className='h-full w-full object-cover'
          />
        </Link>
        <div
          className={`absolute top-full left-0 ${
            open ? 'bg-white' : 'hidden'
          } top-full w-full lg:relative lg:flex lg:w-auto`}
        >
          <div
            className={`${
              windowDimension.width <= 1024
                ? 'container mx-auto px-4 md:px-20'
                : ''
            } items-center justify-center gap-8 lg:flex`}
          >
            {navMenu.map((item, index) => (
              <NavItem
                key={index}
                pathname={pathname}
                item={item}
                closeNav={closeNav}
              ></NavItem>
            ))}
          </div>
        </div>
        <div
          onClick={() => setOpen((prev) => !prev)}
          className='menu flex h-10 w-10 cursor-pointer items-center justify-center rounded bg-white lg:hidden'
        >
          <FontAwesomeIcon
            icon={faEllipsis}
            className='text-xl text-secondary'
          />
        </div>
      </nav>
    </div>
  )
}

type NavItemProps = {
  pathname: null | string
  item: {
    name: string
    icon: any
    path: string
  }
  closeNav: (value: boolean) => void
}

function NavItem({ pathname, item, closeNav }: NavItemProps) {
  return (
    <Link
      scroll={false}
      href={item.path}
      className={`flex cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-full px-4 py-2 md:gap-2 ${
        pathname === item.path ? 'bg-secondary text-white' : ''
      }`}
      onClick={() => {
        closeNav(false)
      }}
    >
      <motion.div
        className={`text-sm`}
        variants={navIcon}
        initial='initial'
        animate={pathname === item.path ? 'animate' : 'initial'}
      >
        <FontAwesomeIcon icon={item.icon} />
      </motion.div>
      <h1
        className={`text-lg ${
          pathname === item.path ? '' : 'hover:text-secondary'
        } transition-all duration-300 ease-out`}
      >
        {item.name}
      </h1>
    </Link>
  )
}
