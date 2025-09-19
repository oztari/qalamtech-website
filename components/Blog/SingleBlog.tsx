"use client";

import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, tags, slug } = blog;
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark dark:hover:shadow-gray-dark hover:shadow-two">
      <Link href={`/blog/${slug}`} className="relative block aspect-[37/22] w-full">
        <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
          {tags[0]}
        </span>

        {/* Placeholder background */}
        {!loaded && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700" />
        )}

        {/* Image with fade-in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loaded ? 1 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            onLoad={() => setLoaded(true)}
            priority // load above-the-fold images quickly
          />
        </motion.div>
      </Link>

      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>
      </div>
    </div>
  );
};

export default SingleBlog;
