import React from "react";
import moment from "moment";
import { MdDelete, MdPublish, MdUnpublished } from "react-icons/md";
import { deleteComments } from "../actions/commentActions";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { updatePub } from "../axios";

const CommentsAdmin = ({ user, com, setReloadScreen, reloadScreen }) => {
  const dispatch = useDispatch();

  const fetchPublish = (publishedObj) => {
    updatePub(publishedObj)
      .then((res) => {
        toast.success(res.data.message);
        setReloadScreen(!reloadScreen);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Network error");
      });
  };

  return (
    <div className="max-w-md opacity-90 m-auto bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5 ">
        <p className="mb-3 font-normal text-gray-400 dark:text-gray-200 truncate ">
          <strong> Post name:</strong> {com.postName}
        </p>
        <p className="mb-3 font-normal flex text-gray-400 dark:text-gray-200 truncate ">
          <div className="font-semibold mr-3">Email: </div> {com.email}
        </p>

        <h5 className="mb-2 text-md flex  tracking-tight text-gray-900 dark:text-white">
          <div className="font-semibold mr-3">Name: </div> {com.name}
        </h5>

        <p className="mb-3 font-normal flex text-gray-400 dark:text-gray-200 truncate ">
          <div className="font-semibold mr-3">Comment: </div> {com.comment}
        </p>

        <p className="text-gray-600 dark:text-gray-400 font-normal mb-3">
          {moment(com.createdAt).fromNow()}
        </p>

        {user ? (
          <div className="flex justify-between mt-4 mx-auto">
            <div className="cursor-pointer mt-3 ">
              <MdDelete
                className="fill-red-400 h-6 w-6"
                onClick={() => {
                  dispatch(deleteComments(com._id));
                }}
              />{" "}
            </div>
            <div
              className="cursor-pointer mt-3 "
              onClick={() => {
                fetchPublish({
                  isPublish: !com.isPublish,
                  id: com._id,
                });
              }}
            >
              {!com.isPublish ? (
                <MdPublish className="fill-blue-400 h-6 w-6" />
              ) : (
                <MdUnpublished className="fill-blue-400 h-6 w-6" />
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CommentsAdmin;
