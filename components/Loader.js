import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader ">
      <InfinitySpin className="text-5xl" width="200" color="#7e32cf" />
    </div>
  );
};

export default Loader;
