"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ScrollTop = () => {
  return (
    <div className="fixed top-0 left-0 flex h-screen w-screen items-end justify-end p-10">
      <a
        href="#top"
        className="group z-40 hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white lg:left-[95%] lg:flex"
      >
        <FontAwesomeIcon
          icon={faChevronUp}
          className="text-xl transition-all duration-300 ease-out group-hover:text-secondary"
        />
      </a>
    </div>
  );
};

export default ScrollTop;
