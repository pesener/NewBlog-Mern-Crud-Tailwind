import React from "react";
import { useState, useEffect } from "react";
import PublishedComments from "../components/PublishedComments";

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
    createdAt: "",
    _id: "",
    isPublish: false,
    lid: "",
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
        <h1 className="font-serif text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-900 mb-20 mt-20">
          {postData.title}
        </h1>
        <p className="mb-3 indent-8  font-normal leading-relaxed font-serif text-3xl text-gray-400 dark:text-gray-900 mr-40 ml-40">
          {postData.content}
        </p>
        <p className="mb-3 indent-8 break-keep font-normal leading-relaxed font-serif text-2xl text-gray-400 dark:text-gray-900 mr-40 ml-40 mt-20">
          {postData.content2}
        </p>
      </div>
      <div className="mb-4 mt-4 ">
        <PublishedComments id={id} />
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
                e.target.reset();
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
                    setCommentData({
                      ...commentData,
                      email: e.target.value,
                      lid: postData._id,
                    })
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
                placeholder="Name"
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
              <div className="flex flex-col items-center">
                <button
                  disabled={
                    commentData.name === "" ||
                    commentData.comment === "" ||
                    commentData.email === ""
                  }
                  type="submit"
                  className="disabled:opacity-60  disabled:cursor-not-allowed bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-60 border border-blue-700 rounded "
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;
