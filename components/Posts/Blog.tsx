"use client";
import { CategoryProps, NodeProps } from "../../interfaces/index";
import moment from "moment";
import { motion } from "framer-motion";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type BlogProps = {
  post: NodeProps;
  categories: CategoryProps[];
  length: number;
};

export default function Blog({ post, categories, length }: BlogProps) {
  const [category] = categories.map((item) => item);
  const odd = length / 2 !== 0 ? true : false;

  return (
    <Link
      href={`/post/${post.slug}`}
      className={`shadow-md ${odd ? "last:col-span-2" : ""}`}
    >
      <div className="group flex h-full w-full flex-col md:h-[30rem] md:flex-row">
        <div className="relative h-52 w-full md:h-full md:w-1/2">
          <div className="absolute top-0 left-0 hidden h-full w-full items-end justify-end bg-secondary p-4 opacity-0 !transition-all !duration-300 !ease-out group-hover:opacity-80 md:flex">
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="translate-y-6 translate-x-6 text-white transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
            />
          </div>
          <motion.img
            className="h-full w-full object-cover object-center"
            src={post.featureImage.url}
            alt={post.slug}
          />
        </div>
        <div className="flex h-52 w-full flex-col items-start bg-white p-4 text-start md:h-full md:w-1/2 md:p-10">
          <p className="mb-2 text-[0.75rem] tracking-widest text-secondary">
            {category.name.toUpperCase()}
          </p>
          <h1 className="text-xl font-extrabold">{post.title}</h1>
          <p className="mt-4 text-sm font-thin opacity-60">{post.excerpt}</p>
          <p className="mt-auto text-sm opacity-60">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </p>
        </div>
      </div>
    </Link>
  );
}
