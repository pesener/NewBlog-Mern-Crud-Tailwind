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
    lastName: "",
    comment: "",
    email: "",
    createdAt: "",
    _id: "",
    isPublish: false,
    lid: "",
    postName: "",
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
      <div className="p-5 grid-col-1 text-center  " key={postData._id}>
        <h1 className="font-serif text-5xl border-t border-gray-400 font-bold leading-relaxed  tracking-tight text-black dark:text-black-200 mb-10 mt-8 mr-60 ml-60 ">
          {postData.title}
        </h1>
        <div className="flex justify-center">
          {" "}
          {postData && postData.image === "" ? (
            <img className=" h-auto mb-auto " src={postData.image} alt="" />
          ) : (
            <img
              className=" rounded-t-lg h-72 w-max mb-20 "
              src={postData.image}
              alt=""
            />
          )}
        </div>

        <p className="mb-9 indent-20  mx-40 break-normal flex text-start justify-center font-normal leading-relaxed font-serif text-2xl text-black dark:text-black-200">
          {postData.content}
        </p>

        <p className="mb-10 border-b border-gray-400 indent-20 mx-40 flex text-start justify-center break-words font-normal leading-relaxed font-serif text-2xl text-black dark:text-black-200">
          {postData.content2 ? postData.content2 : ""}
        </p>
      </div>
      <div className="mb-2 ">
        <PublishedComments id={id} />
      </div>
      <div className="min-h-[600px] mt-12">
        <div className="flex justify-center ">
          <div className="w-7/12 bg-[#e2e0c1] border border-gray-200 rounded-lg shadow-md sm:p-9   md:p-5 dark:bg-[#e2e0c1] ">
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
              <h5 className="text-3xl mb-4 font-medium text-gray-900">
                Leave a comment on this post
              </h5>
              <div className="mb-4  font-medium text-xl">
                <div className="flex items-center justify-between">
                  {" "}
                  <input
                    maxLength="100"
                    name="title"
                    type="text"
                    onChange={(e) =>
                      setCommentData({ ...commentData, name: e.target.value })
                    }
                    className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm
            rounded focus:ring-blue-500 focus:border-blue-500 block  w-[400px]
            p-2.5 dark:bg-[#EEEEDE] dark:border-gray-500
            dark:placeholder-gray-400 dark:text-black mb-5"
                    required
                    placeholder="First Name"
                  ></input>
                  <input
                    maxLength="100"
                    name="title"
                    type="text"
                    onChange={(e) =>
                      setCommentData({
                        ...commentData,
                        lastName: e.target.value,
                      })
                    }
                    className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm
            rounded focus:ring-blue-500 focus:border-blue-500 block  w-[400px]
            p-2.5 dark:bg-[#EEEEDE] dark:border-gray-500
            dark:placeholder-gray-400 dark:text-black mb-5"
                    required
                    placeholder="Last Name"
                  ></input>
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border
            border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500
            focus:border-blue-500 block w-full  p-2.5 dark:bg-[#EEEEDE]
            dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Your email"
                  required
                  onChange={(e) =>
                    setCommentData({
                      ...commentData,
                      email: e.target.value,
                      lid: postData._id,
                      postName: postData.title,
                    })
                  }
                ></input>
              </div>

              <label className="block mb-2 text-xl font-medium text-gray-900  text-ellipsis overflow-hidden ...">
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
                className="bg-[#EEEEDE] border border-gray-300 text-gray-900 text-sm
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-[#EEEEDE] dark:border-gray-500
            dark:placeholder-gray-400 dark:text-black mb-5 text-ellipsis overflow-hidden ..."
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
                  className="disabled:opacity-60  disabled:cursor-not-allowed bg-gray-800 hover:bg-gray-500 text-white font-bold py-2 px-60 border border-blue-700 rounded "
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
