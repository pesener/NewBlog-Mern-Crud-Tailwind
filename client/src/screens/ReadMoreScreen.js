import React from "react";
import ReadMore from "../components/ReadMore";
import { useParams } from "react-router-dom";

const ReadMoreScreen = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      <ReadMore id={id} />
    </div>
  );
};

export default ReadMoreScreen;
