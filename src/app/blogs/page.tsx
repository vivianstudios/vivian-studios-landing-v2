import React from "react";
import BlogCard, { BlogCardProps } from "../components/BlogCard";
import Rigging from "@/app/assets/animation/Rigging.jpg";
import { getBlogs } from "@/services/blogs";
import Link from "next/link";
type BlogsProps = object;

// const posts = [
//   {
//     id: 1,
//     title: "Blog Title",
//     date: "August 5,2023",
//     firstParagraph:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     image: Rigging.src,
//   },
//   {
//     id: 2,
//     title: "Blog Title",
//     date: "August 5,2023",
//     firstParagraph:
//       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//     image: Rigging.src,
//   },
// ];

const MAX_DISPLAY = 3;
const Page: React.FC<BlogsProps> = async () => {
  let data = await fetch("https://vivian.fly.dev/api/blogs");
  let posts = await data.json();
  // const posts = await res.json();
  return (
    <>
      <div className="border-b-[1px] border-solid border-white">
        <h1 className="text-6xl sm:text-8xl font-bold mt-4">Latest</h1>
        <h2 className="text-2xl mt-4 mb-4">
          A blog created with Next.js and Tailwind.css
        </h2>
      </div>
      <div className="mt-4 mb-4">
        {posts.map((post: BlogCardProps) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};
export default Page;

// export async function getServerSideProps() {
//   // Fetch data from external API
//   // const { isLoading, data } = usePosts(1);
//   const res = await getBlogs();
//   const data = await res.json();
//   // Pass data to the page via props
//   return { props: { posts: data } };
// }
