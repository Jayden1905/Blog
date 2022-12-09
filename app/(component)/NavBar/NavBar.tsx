"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCircleInfo,
  faPaperPlane,
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
    <div className="mb-10 py-14">
      <nav className="container mx-auto sm:px-0 px-14 flex items-end justify-between">
        <div className="logo flex gap-1 items-end">
          <div className="w-10 h-10">
            <img src="TheJourney.png" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-2xl font-light tracking-wide">Journey</h1>
        </div>
        <div className="sm:flex hidden gap-8 items-center justify-center">
          {navMenu.map((item) => (
            <Link
              href={item.path}
              className={`cursor-pointer flex items-center justify-center gap-2 px-4 py-2 rounded-full overflow-hidden ${
                pathname === item.path ? "bg-secondary text-white" : ""
              }`}
            >
              <motion.div
                className={`text-md`}
                variants={navIcon}
                initial="initial"
                animate={pathname === item.path ? "animate" : "initial"}
              >
                <FontAwesomeIcon icon={item.icon} />
              </motion.div>
              <h1
                className={`text-xl ${
                  pathname === item.path ? "" : "hover:text-secondary"
                } transition-all duration-300 ease-out`}
              >
                {item.name}
              </h1>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
