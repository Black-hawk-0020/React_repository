import { useState, useEffect } from "react";
import type { Ipost } from "./type";
import { PostDatails } from "./PostDatails";
export const Posts = () => {
  const [posts, setPosts] = useState<Ipost[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  return posts.map((value, index) => <PostDatails key={index} {...value} />);
};
