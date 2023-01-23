import React from "react";
import { useState, useEffect } from "react";

import { getPubPost } from "../axios/index";

const PublishedComments = ({ id }) => {
  const [isPubComment, setPubComment] = useState([
    {
      name: "",
      comment: "",
      email: "",
      createdAt: "",
      _id: "",
      isPublish: false,
      lid: "",
    },
  ]);

  useEffect(() => {
    getPubPost()
      .then((res) => {
        setPubComment(res.data);
        console.log(res, "Success to get comment");
      })
      .catch((err) => {
        console.log(err, "Failed to get comment");
      });
  }, []);

  return (
    <div>
      <div className="text-5xl font-medium font-serif flex flex-col items-center justify-center mb-10 mt-20 text-white dark:text-gray-200 ">
        <h1>Comments</h1>
      </div>

      {isPubComment.map((com) =>
        com.lid === id ? (
          <div
            className="mb-40 mt-4 border-seperate  border-spacing-2 border border-slate-300 box-border   "
            key={com._id}
          >
            <div className="p-5 grid-col-1 text-center container">
              <p className="mb-2 font-normal font-serif  text-xl text-white dark:text-gray-200 ">
                {com.comment}
              </p>
              <p className=" mb-3 flex justify-center text-xl font-bold font-serif tracking-tight text-white dark:text-gray-200">
                {com.name}
              </p>
            </div>
          </div>
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default PublishedComments;
