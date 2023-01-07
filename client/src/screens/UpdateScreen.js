import React from "react";
import UpdatePost from "../components/UpdatePost";
import { useParams } from "react-router-dom";

const UpdateScreen = () => {
  const { id } = useParams();
  return (
    <div className="min-h-screen">
      <div>
        <UpdatePost id={id} />
      </div>
    </div>
  );
};

export default UpdateScreen;
