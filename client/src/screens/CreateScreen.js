import SubmitPost from "../components/SubmitPost";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SubmitPost2 from "../components/SubmitPost2";
import CommentsAdmin from "../components/CommentsAdmin";
import { getComments } from "../actions/commentActions";

const CreateScreen = ({ user }) => {
  const dispatch = useDispatch();
  const [type, setType] = useState(false);
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
            !type ? "bg-gray-500" : "bg-gray-700 hover:bg-gray-500"
          }   text-white font-bold py-2 px-2 border border-gray-700 rounded `}
          onClick={() => setType(false)}
        >
          Type 1{" "}
        </button>

        <button
          className={` ${
            type ? "bg-gray-500" : "bg-gray-700 hover:bg-gray-500"
          }  text-white font-bold py-2 px-2 border border-gray-700 rounded `}
          onClick={() => setType(true)}
        >
          Type 2{" "}
        </button>
      </div>
      {!type ? <SubmitPost /> : <SubmitPost2 />}
      {!comments.length ? (
        <div className="text-2xl font-medium font-serif text-white flex flex-col items-center justify-center mb-40">
          <h1>No comments in DB</h1>
        </div>
      ) : (
        <div className="mt-0">
          <div className="text-5xl font-medium font-serif flex flex-col items-center justify-center mb-20 text-black">
            <h1>Comments</h1>
          </div>
          <div className=" grid grid-cols-2  m-auto ">
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
      )}
    </div>
  );
};

export default CreateScreen;
