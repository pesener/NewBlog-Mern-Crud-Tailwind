import React from "react";
import { useState, useEffect } from "react";

import { getPubPost } from "../axios/index";

const PublishedComments = ({ postData, id }) => {
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
      <div className="text-5xl font-medium font-serif flex flex-col items-center justify-center mb-5 mt-20 ">
        <h1>Comments</h1>
      </div>

      {isPubComment.map((comcom) =>
        id === comcom.lid
          ? isPubComment.map((com) => (
              <div className="mb-4 mt-4" key={com._id}>
                <div className="p-5 grid-col-1 text-center">
                  <h1 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-900">
                    {com.name}
                  </h1>
                  <p className="mb-3 font-normal text-2xl text-gray-400 dark:text-gray-900 truncate ">
                    {com.comment}
                  </p>
                </div>
              </div>
            ))
          : ""
      )}
    </div>
  );
};

export default PublishedComments;
