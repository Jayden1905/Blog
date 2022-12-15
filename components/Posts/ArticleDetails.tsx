"use client";
import { RichText } from "@graphcms/rich-text-react-renderer";
import moment from "moment";
import Link from "next/link";
import React from "react";
import { PostDetailProps } from "../../interfaces";
import "../../styles/globals.css";

type ArticleDetailsProps = {
  post: PostDetailProps;
};

export default function ArticleDetails({ post }: ArticleDetailsProps) {
  const [category] = post.categories.map((item) => item);

  return (
    <div className="container top-24 mx-auto mb-14 flex h-full flex-col items-center gap-8 bg-primary px-4 font-ibmp md:px-20 lg:top-0">
      <div className="h-[25rem] w-full md:h-[30rem] lg:h-[35rem] lg:w-[90%]">
        <img
          className="h-full w-full object-cover object-center"
          src={post.featureImage.url}
          alt="featureImage"
        />
      </div>
      <div className="w-full lg:w-[60%]">
        <p className="mb-2 text-[0.75rem] tracking-widest text-secondary">
          {category.name.toUpperCase()}
        </p>
        <h1 className="text-3xl font-extrabold">{post.title}</h1>
        <p className="mt-4 text-xl font-thin opacity-60">{post.excerpt}</p>
        <p className="mt-4 mb-4 text-sm opacity-60">
          {moment(post.createdAt).format("MMMM DD, YYYY")}
        </p>
        <div className="flex flex-col gap-4 leading-7">
          <RichText content={post.content.raw} />
        </div>
      </div>
    </div>
  );
}
