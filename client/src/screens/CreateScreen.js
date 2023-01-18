import React from "react";
import SubmitPost from "../components/SubmitPost";
import { useState } from "react";
import SubmitPost2 from "../components/SubmitPost2";

const CreateScreen = () => {
  const [type, setType] = useState(false);

  return (
    <div>
      <div className="mb-9  flex justify-center gap-x-2">
        <button
          className=" bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-2 border border-gray-700 rounded "
          onClick={() => setType(false)}
        >
          Type 1{" "}
        </button>

        <button
          className=" bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-2 border border-gray-700 rounded "
          onClick={() => setType(true)}
        >
          Type 2{" "}
        </button>
      </div>
      {!type ? <SubmitPost /> : <SubmitPost2 />}
    </div>
  );
};

export default CreateScreen;
