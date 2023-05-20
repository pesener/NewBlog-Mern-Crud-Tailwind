import SubmitPost from "../components/SubmitPost";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SubmitPost2 from "../components/SubmitPost2";
import CommentsAdmin from "../components/CommentsAdmin";
import { getComments } from "../actions/commentActions";

const CreateScreen = ({ user }) => {
  const dispatch = useDispatch();

  const [type1, setType1] = useState(false);
  const [type2, setType2] = useState(false);
  const [commentsButton, setcommentsButton] = useState(false);

  const comments = useSelector((state) => state.comments);

  const [reloadScreen, setReloadScreen] = useState(false);

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch, reloadScreen]);

  return (
    <div>
      <div className="mb-12  flex justify-center gap-x-2">
        <button
          className={`${
            type1 === true ? "bg-gray-500" : "bg-gray-700 hover:bg-gray-500"
          }   text-white font-bold py-2 px-2 border border-gray-700 rounded `}
          onClick={() => {
            setType1(true);
            setType2(false);
            setcommentsButton(false);
          }}
        >
          Type 1{" "}
        </button>
        <button
          className={`${
            type2 === true ? "bg-gray-500" : "bg-gray-700 hover:bg-gray-500"
          }   text-white font-bold py-2 px-2 border border-gray-700 rounded `}
          onClick={() => {
            setType1(false);
            setType2(true);
            setcommentsButton(false);
          }}
        >
          Type 2
        </button>
        <button
          className={`${
            commentsButton === true
              ? "bg-gray-500"
              : "bg-gray-700 hover:bg-gray-500"
          }   text-white font-bold py-2 px-2 border border-gray-700 rounded `}
          onClick={() => {
            setType1(false);
            setType2(false);
            setcommentsButton(true);
          }}
        >
          Comments{" "}
        </button>{" "}
      </div>

      {type1 === true ? (
        <SubmitPost />
      ) : type2 === true ? (
        <SubmitPost2 />
      ) : commentsButton === true ? (
        <div>
          {!comments.length ? (
            <div className="text-2xl font-medium font-serif text-white flex flex-col items-center justify-center mb-40">
              <h1>No comments in DB</h1>
            </div>
          ) : (
            <div className="mt-0">
              <div className="text-5xl font-medium font-serif flex flex-col items-center justify-center mb-10 text-black">
                <h1>Comments</h1>
              </div>
              <div className=" grid grid-cols-2  m-auto gap-4 gap-x-0">
                {comments.map((com) => (
                  <div
                    className=" md:w-72 lg:w-96 sm:w-48 w-48  m-auto mb-4  "
                    key={com._id}
                  >
                    <CommentsAdmin
                      user={user}
                      com={com}
                      setReloadScreen={setReloadScreen}
                      reloadScreen={reloadScreen}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}{" "}
        </div>
      ) : (
        <SubmitPost />
      )}
    </div>
  );
};

export default CreateScreen;
