import React from "react";
import loader from "../../assets/loader.gif";

const Loading = () => {
  return (
    <div className="text-center">
      <img src={loader} alt="Loading-gif" />
    </div>
  );
};

export default Loading;
