import React from "react";

import Post from "./Post/Post";

type PropsType = {
  posts: any;
};

const Posts: React.FC<PropsType> = ({ posts: data }) => {
  const posts = data.map(
    (p: { id: number; message: string; likeCount: number }) => {
      return <Post key={p.id} {...p} />;
    }
  );

  return <React.Fragment>{posts}</React.Fragment>;
};

export default Posts;
