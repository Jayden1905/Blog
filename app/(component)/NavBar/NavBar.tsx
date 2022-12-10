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

export default function NavBar() {
  const pathname = usePathname();
  const navMenu = [
    { name: "Home", icon: faHouse, path: "/" },
    { name: "About", icon: faCircleInfo, path: "/about" },
    { name: "Contact", icon: faPaperPlane, path: "/contact" },
  ];

  return (
    <div className="md:py-14 py-6 md:relative fixed right-0 left-0 z-10 bg-primary">
      <nav className="container mx-auto md:px-20 px-10 flex items-end xl:justify-center xl:gap-[33rem] justify-between gap-0">
        <div className="logo flex gap-1 items-end">
          <div className="w-10 h-10">
            <img src="TheJourney.png" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl font-light tracking-wide">Journey</h1>
        </div>
        <div className="md:flex hidden gap-8 items-center justify-center">
          {navMenu.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className={`cursor-pointer flex items-center justify-center gap-2 px-4 py-2 rounded-full overflow-hidden ${
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
          ))}
        </div>
        <div className="menu cursor-pointer md:hidden w-10 h-10 flex justify-center items-center rounded bg-white">
          <FontAwesomeIcon
            icon={faEllipsis}
            className="text-xl text-secondary"
          />
        </div>
      </nav>
    </div>
  );
}
