import { useEffect, useState } from "react";
import { PostDetails } from "./PostDetails";
import type { Ipost } from "./type";

export const Posts = () => {
  const [post, setPost] = useState<Ipost[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
      });
  }, []);
  return post.map((value, index) => <PostDetails key={index} {...value} />);
};
