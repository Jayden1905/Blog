"use client";
import { CategoryProps, NodeProps } from "../../../interfaces/index";
import moment from "moment";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type BlogProps = {
  post: NodeProps;
  categories: CategoryProps[];
};

export default function Blog({ post, categories }: BlogProps) {
  const [category] = categories.map((item) => item);

  return (
    <Link href={`/post/${post.slug}`}>
      <div className="group flex h-full w-full flex-col md:h-[30rem] lg:h-[35rem] md:flex-row">
        <div className="relative h-56 w-full md:h-full md:w-1/2">
          <div className="absolute top-0 left-0 hidden h-full w-full items-end justify-end bg-secondary p-4 opacity-0 !transition-all !duration-300 !ease-out group-hover:opacity-80 md:flex">
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="translate-y-6 translate-x-6 text-white transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
            />
          </div>
          <motion.img
            className="h-full w-full select-none object-cover object-center"
            src={post.featureImage.url}
            alt={post.slug}
          />
        </div>
        <div className="flex h-full w-full flex-col items-start bg-white p-8 text-start md:w-1/2 md:p-10">
          <p className="mb-2 text-[0.75rem] tracking-widest text-secondary">
            {category.name.toUpperCase()}
          </p>
          <h1 className="text-2xl font-extrabold">{post.title}</h1>
          <p className="tfont-thin mt-4 text-sm opacity-60">{post.excerpt}</p>
          <p className="mt-4 text-sm opacity-60 sm:mt-auto">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </p>
        </div>
      </div>
    </Link>
  );
}
