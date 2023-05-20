import moment from "moment";
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
      <div className="text-5xl   font-medium font-serif flex flex-col items-center justify-center mb-10 mt-2 text-black dark:text-black-200 ">
        <h1>Comments</h1>
      </div>

      {isPubComment.map((com) =>
        com.lid === id ? (
          <div className="flex justify-center items-center ">
            <div
              className="mb-3 mt-4 border-seperate  border-spacing-2 border border-gray-500 box-border  w-[700px]  "
              key={com._id}
            >
              <div className="p-5 grid-col-1 text-center container">
                <p className="mb-2 font-normal font-serif  text-xl text-black dark:text-black-200 ">
                  <div className="font-bold">Comment:</div> {com.comment}
                </p>
                <p className=" mb-3 flex justify-center text-xl font-bold font-serif tracking-tight text-black dark:text-black-200 ">
                  User: {com.name}
                </p>
                <p className="text-black-400 dark:text-black-200 font-normal mb-3">
                  {moment(com.createdAt).fromNow()}
                </p>
              </div>
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
