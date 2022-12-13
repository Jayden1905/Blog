"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ScrollTop = () => {
  return (
    <a
      href="#top"
      className="group fixed top-[90%] left-[93%] z-40 hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white md:flex lg:left-[95%]"
    >
      <FontAwesomeIcon
        icon={faChevronUp}
        className="text-xl transition-all duration-300 ease-out group-hover:text-secondary"
      />
    </a>
  );
};

export default ScrollTop;
