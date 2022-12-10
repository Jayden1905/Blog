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
        className="w-full md:h-[50vh] h-full"
      >
        {features.map((post) => (
          <SwiperSlide
            key={post.slug}
            className="flex md:flex-row flex-col group cursor-pointer"
          >
            <Link
              href={`/post/${post.slug}`}
              className="md:w-1/2 w-full md:h-full h-56 relative"
            >
              <div className="w-full h-full md:flex justify-end items-end p-4 hidden absolute top-0 left-0 bg-secondary opacity-0 group-hover:opacity-80 !transition-all !duration-300 !ease-out">
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  className="text-white translate-y-6 translate-x-6 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 ease-out"
                />
              </div>
              <img src={post.featureImage.url} alt={post.slug} />
            </Link>
            <Link
              href={`/post/${post.slug}`}
              className="bg-black md:w-1/2 w-full h-full flex flex-col text-white text-start items-start md:p-10 p-4"
            >
              <p className="mb-2 text-[0.65rem] text-[#c68a09] tracking-widest">
                {category.map((item) => item.name.toUpperCase())}
              </p>
              <h1 className="sm:text-4xl md:text-2xl text-xl font-extrabold">
                {post.title}
              </h1>
              <p className="sm:text-xl md:text-lg text-sm font-thin mt-4">
                {post.excerpt}
              </p>
              <p className="mt-auto text-sm">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
