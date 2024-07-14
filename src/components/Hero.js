import React from "react";
import rectangle137 from "../Assets/Rectangle 137.png";
import rectangle138 from "../Assets/Rectangle 138.png";
import rectangle142 from "../Assets/Rectangle 142.png";
import rectangle143 from "../Assets/Rectangle 143.png";

import rectangle141 from "../Assets/Rectangle 141.png";

import reactangle140 from "../Assets/Rectangle 140.png"
import reactangle139 from "../Assets/teams.png"
import reactangle144 from "../Assets/Rectangle144.png"

import { PiDownloadSimpleLight } from "react-icons/pi";
import { PiCaretDownBold } from "react-icons/pi";

const Hero = () => {
  return (
    <div className="bg-[#F0F2F5] p-10 lg:flex lg:items-center lg:justify-evenly space-y-10">
      <div className="text-center lg:text-left space-y-10 lg:w-2/4">
        <h1 className="text-5xl lg:text-7xl font-semibold text-blue-950">
          Conquer medical School with{" "}
          <span className="text-[#f18337]">Ease</span>.
        </h1>
        <p className="text-sm lg:w-3/4">
          Your one-stop-place for go-to destination for exam prep resources
          tailored for Nigerian medical students.
        </p>
        <div className="flex flex-col lg:flex-row gap-3 items-center">
          <a
            href="https://wa.link/6lhnja"
            className="text-white text-sm bg-[#274CB2] rounded-full px-4 py-3"
          >
            Get Started Now
          </a>
          <a href="/" className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <PiDownloadSimpleLight />
              <p className="text-sm text-blue-950 font-semibold">
                Download Dr Drills Mobile App
              </p>
              <PiCaretDownBold />
            </div>
          </a>
        </div>
      </div>
      <div className='lg:flex lg:items-start lg:justify-center lg:w-1/2  lg:h-[400px] h-[325px]   overflow-hidden'>
      <div className="grid grid-cols-2 justify-center scrolling  ">
        <img className="w-full  lg:h-[200px]" src={rectangle137} alt="" />
        <img className="w-full lg:h-[200px]" src={rectangle138} alt="" />
        <img className="w-full lg:h-[200px]" src={rectangle142} alt="" />
        <img className="w-full lg:h-[200px]" src={rectangle143} alt="" />
        <img className="w-full lg:h-[200px]" src={reactangle139} alt="" />
        <img className="w-full lg:h-[200px]" src={reactangle140} alt="" />
        <img className="w-full lg:h-[200px]" src={reactangle144} alt="" />
        <img className="w-full lg:h-[200px]" src={rectangle141} alt="" />
        
      </div>
      </div>
 
    </div>
  );
};

export default Hero;
