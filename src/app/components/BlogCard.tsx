import { format } from "date-fns-tz";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type BlogCardProps = {
  id: string;
  title: string;
  createdOn: string;
  blog: string;
  image: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  title,
  createdOn,
  blog,
  image,
}) => {
  console.log();
  return (
    <div className="flex sm:flex-row flex-col border-b-[1px] border-solid border-white pb-10 mt-10 items-center">
      <div className="sm:w-[15vw] w-full">
        <Link href={`./blog/${id}`}>
          <img src={image} alt={title} className="w-full"></img>
        </Link>
      </div>
      <div className="sm:w-[45vw] w-full pl-4 flex flex-col justify-stretch relative mt-4">
        <Link href={`./blog/${id}`}>
          {" "}
          <h3 className="font-bold text-2xl">{title}</h3>{" "}
        </Link>
        <p className="">
          {format(new Date(createdOn), "MMMM dd, yyyy h:mm a zzz", {
            timeZone: "America/New_York",
          })}
        </p>
        <p className="mt-4">
          {blog
            .match(/<p>(.*?)<\/p>/i)
            ?.filter((item, index) => {
              if (index === 1) return item;
            })[0]
            .slice(0, 200)}
          ...{" "}
          <Link href={`./blog/${id}`} className="mt-6 text-red-400">
            Read More
          </Link>
        </p>
      </div>
    </div>
  );
};
export default BlogCard;
