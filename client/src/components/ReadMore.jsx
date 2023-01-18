import React from "react";
import { useState, useEffect } from "react";

import { getPost } from "../actions/postActions";
import { useDispatch, useSelector } from "react-redux";

const ReadMore = ({ id }) => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch]);

  return (
    <div>
      {posts.map((post) => (
        <div className="p-5 grid-col-1 text-center" key={post._id}>
          <h1 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-900">
            {post.title}
          </h1>
          <p className="mb-3 font-normal text-2xl text-gray-400 dark:text-gray-900 truncate ">
            {post.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReadMore;
