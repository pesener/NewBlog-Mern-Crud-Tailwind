import React from "react";
import moment from "moment";
import { MdModeEdit, MdDelete, MdReadMore } from "react-icons/md";
import { deletePost } from "../actions/postActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Cards = ({ post, user }) => {
  const dispatch = useDispatch();

  return (
    <div
      key={post._id}
      className="max-w-sm opacity-100 drop-shadow-2xl   mb-20 bg-white border border-gray-200 rounded-lg shadow-2xl shadow-gray-500/40 hover:shadow-gray-500/50 dark:bg-gray-800 dark:border-gray-700  "
    >
      <div>
        <img
          className=" hover:opacity-90 rounded-t-lg h-auto w-full "
          src={post.image}
          alt=""
        />
      </div>

      <div className="p-5  " key={post._id}>
        <h5 className="mb-5 text-2xl font-bold font-serif tracking-tight text-gray-900 dark:text-white">
          {post.title}
        </h5>

        <p
          key={post._id}
          className="mb-3 break-words line-clamp-3 font-normal text-lg font-serif  text-gray-400 dark:text-gray-200  "
        >
          {post.content}
        </p>

        <p className="text-gray-600 dark:text-gray-400 font-normal mb-3">
          {moment(post.createdAt).fromNow()}
        </p>

        <Link
          to={`/newNote/${post._id}`}
          className="inline-flex font-serif items-center px-3 py-2 text-md font-medium text-center text-white bg-readmore-color rounded-lg hover:bg-readmore-color-300 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-readmore-color dark:hover:bg-hov-readmore dark:focus:ring-blue-800"
        >
          Read more <MdReadMore className="readmore-color ml-3 h-6 w-6" />
          <svg
            aria-hidden="true"
            className="w-2 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </Link>
        {user ? (
          <div className="flex justify-between mt-4 mx-auto">
            <Link to={`/update/${post._id}`}>
              <div className="cursor-pointer mt-3 ">
                <MdModeEdit className="fill-blue-400 h-6 w-6" />{" "}
              </div>
            </Link>

            <div className="cursor-pointer mt-3 ">
              <MdDelete
                className="fill-red-400 h-6 w-6"
                onClick={() => {
                  dispatch(deletePost(post._id));
                }}
              />{" "}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cards;
