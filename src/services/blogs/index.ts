import { config } from "../../../config";

export async function getBlogs(): Promise<any> {
  console.log(config.blogsURL);
  const posts = await fetch(`https://vivian.fly.dev/api/blogs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(posts);
  return posts;
}
