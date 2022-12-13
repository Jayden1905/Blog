"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { FeatureProps } from "../../../interfaces";
import "./styles.css";
import Link from "next/link";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

type Props = {
  features: FeatureProps[];
};

export default function Features({ features }: Props) {
  const [category] = features.map((post) =>
    post.categories.map((item) => item)
  );
  return (
    <>
      <Swiper
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full w-full md:h-[50vh] lg:h-[60vh]"
      >
        {features.map((post) => (
          <SwiperSlide
            key={post.slug}
            className="group flex cursor-pointer flex-col md:flex-row"
          >
            <Link
              href={`/post/${post.slug}`}
              className="relative h-56 w-full md:h-full md:w-1/2"
            >
              <div className="absolute top-0 left-0 hidden h-full w-full items-end justify-end bg-secondary p-4 opacity-0 !transition-all !duration-300 !ease-out group-hover:opacity-80 md:flex">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="translate-y-6 translate-x-6 text-white transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                />
              </div>
              <motion.img
                className="select-none"
                src={post.featureImage.url}
                alt={post.slug}
              />
            </Link>
            <Link
              href={`/post/${post.slug}`}
              className="flex h-full w-full flex-col items-start bg-black p-4 text-start text-white md:w-1/2 md:p-10"
            >
              <p className="mb-2 text-[0.75rem] tracking-widest text-[#c68a09]">
                {category.map((item) => item.name.toUpperCase())}
              </p>
              <h1 className="text-xl font-extrabold sm:text-4xl md:text-2xl">
                {post.title}
              </h1>
              <p className="mt-4 text-sm font-thin sm:text-xl md:text-lg">
                {post.excerpt}
              </p>
              <p className="mt-4 text-sm sm:mt-auto">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
