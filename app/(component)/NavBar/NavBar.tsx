"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleInfo,
  faPaperPlane,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navIcon } from "../../../animations/animation";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/ContextProvider";

export default function NavBar() {
  const { useStore } = useGlobalContext();
  const [windowDimension, setStore] = useStore(
    (store) => store.windowDimension
  );
  const pathname = usePathname();
  const navMenu = [
    { name: "Home", icon: faHouse, path: "/" },
    { name: "About", icon: faCircleInfo, path: "/about" },
    { name: "Contact", icon: faPaperPlane, path: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  const detectWindowSize = () => {
    setStore({
      windowDimension: {
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectWindowSize);

    return () => {
      window.removeEventListener("resize", detectWindowSize);
    };
  }, [windowDimension]);

  return (
    <div
      id="top"
      className={`fixed right-0 left-0 z-10 ${
        open ? "bg-white" : "bg-primary"
      } py-6 lg:relative lg:py-14`}
    >
      <nav className="container mx-auto flex items-end justify-between gap-0 px-10 md:px-20 xl:justify-center xl:gap-[33rem]">
        <Link href="/" className="logo flex items-end gap-1">
          <div className="h-8 w-8">
            <img src="TheJourney.png" className="h-full w-full object-cover" />
          </div>
          <h1 className="text-xl font-light tracking-wide">Journey</h1>
        </Link>
        <div
          className={`absolute top-full left-0 ${
            open ? "bg-white" : "hidden"
          } top-full w-full select-none lg:relative lg:flex lg:w-auto`}
        >
          <div
            className={`${
              windowDimension.width <= 1024
                ? "container mx-auto px-10 md:px-20"
                : ""
            } items-center justify-center gap-8 lg:flex`}
          >
            {navMenu.map((item, index) => (
              <NavItem
                key={index}
                pathname={pathname}
                item={item}
                open={open}
              ></NavItem>
            ))}
          </div>
        </div>
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="menu flex h-10 w-10 cursor-pointer items-center justify-center rounded bg-white lg:hidden"
        >
          <FontAwesomeIcon
            icon={faEllipsis}
            className="text-xl text-secondary"
          />
        </div>
      </nav>
    </div>
  );
}

type NavItemProps = {
  pathname: null | string;
  item: {
    name: string;
    icon: any;
    path: string;
  };
  open: boolean;
};

function NavItem({ pathname, item, open }: NavItemProps) {
  return (
    <Link
      href={item.path}
      className={`flex cursor-pointer items-center justify-center gap-4 overflow-hidden rounded-full px-4 py-2 md:gap-2 ${
        pathname === item.path ? "bg-secondary text-white" : ""
      }`}
    >
      <motion.div
        className={`text-sm`}
        variants={navIcon}
        initial="initial"
        animate={pathname === item.path ? "animate" : "initial"}
      >
        <FontAwesomeIcon icon={item.icon} />
      </motion.div>
      <h1
        className={`text-lg ${
          pathname === item.path ? "" : "hover:text-secondary"
        } transition-all duration-300 ease-out`}
      >
        {item.name}
      </h1>
    </Link>
  );
}
