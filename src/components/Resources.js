import React from "react";
import image5 from "../Assets/Rectangle 291 (1).png";
import image6 from "../Assets/Rectangle 292right.png";

const Resources = () => {
  return (
    <div className="bg-[#E9EDF9] p-10 lg:p-28">
      <div className="container mx-auto space-y-10 flex flex-col lg:flex-row">
        <div className="flex w-full gap-px">
          <img className="w-1/2 lg:w-80" src={image5} alt="" />
          <img className="w-1/2 lg:w-80" src={image6} alt="" />
        </div>
        <div className="text-center lg:text-left space-y-7">
          <h1 className="font-semibold text-blue-950 text-3xl lg:text-7xl">
            We got <span className="text-[#f18337]">everything</span> you need
          </h1>
          <p className="text-blue-900 lg:w-2/4 leading-8">
            Your one-stop-place for go-to destination for exam prep resources
            tailored for Nigerian medical students. Your one-stop-place for
            go-to destination for exam prep resources tailored for Nigerian
            medical students.
          </p>
          <button className="bg-blue-900 text-white px-4 py-3 rounded-full">
            Check out Resources
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
