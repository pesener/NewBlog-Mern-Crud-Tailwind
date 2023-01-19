import React from "react";
import { useState, useEffect } from "react";

import { getPost, createComment } from "../axios/index";
import { toast } from "react-hot-toast";

const ReadMore = ({ id }) => {
  const [postData, setPostData] = useState([
    {
      title: "",
      content: "",
      content2: "",
      image: "",
      createdAt: "",
      _id: "",
    },
  ]);
  const [commentData, setCommentData] = useState({
    name: "",
    comment: "",
    email: "",
    isPublish: false,
  });
  useEffect(() => {
    getPost(id)
      .then((res) => {
        setPostData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <div className="p-5 grid-col-1 text-center" key={postData._id}>
        <h1 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-900">
          {postData.title}
        </h1>
        <p className="mb-3 font-normal text-2xl text-gray-400 dark:text-gray-900 truncate ">
          {postData.content}
        </p>
      </div>
      <div className="min-h-screen">
        <div className="flex justify-center ">
          <div className="w-7/12 bg-white border border-gray-200 rounded-lg shadow-md sm:p-9   md:p-5 dark:bg-gray-800 dark:border-gray-700">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                createComment(commentData)
                  .then((res) => {
                    toast.success(res.data.message);
                  })
                  .catch((err) => {
                    toast.error(err.response.data.message);
                  });
              }}
            >
              <h5 className="text-3xl mb-4 font-medium text-gray-900 dark:text-white">
                Leave a comment
              </h5>
              <div className="mb-4 font-medium text-xl">
                <label
                  htmlFor="email"
                  className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border
            border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600
            dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                  onChange={(e) =>
                    setCommentData({ ...commentData, email: e.target.value })
                  }
                ></input>
              </div>
              <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
                Your name
              </label>
              <input
                maxLength="100"
                name="title"
                type="text"
                onChange={(e) =>
                  setCommentData({ ...commentData, name: e.target.value })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-gray-600 dark:border-gray-500
            dark:placeholder-gray-400 dark:text-white mb-5"
                required
                placeholder="Title"
              ></input>

              <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white text-ellipsis overflow-hidden ...">
                Comment
              </label>
              <textarea
                name="content"
                type="text"
                as="textarea"
                rows="5"
                onChange={(e) =>
                  setCommentData({ ...commentData, comment: e.target.value })
                }
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-gray-600 dark:border-gray-500
            dark:placeholder-gray-400 dark:text-white mb-5 text-ellipsis overflow-hidden ..."
                required
                placeholder="Write your thoughts here..."
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
