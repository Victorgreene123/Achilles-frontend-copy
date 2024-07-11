import React from "react";
import image5 from "../Assets/Rectangle 291 (1).png";
import image6 from "../Assets/Rectangle 292right.png";
import { Link } from "react-router-dom";

const Resources = () => {
  return (
    <div className='bg-[#E9EDF9] p-10 lg:p-28'>
      <div className='container mx-auto space-y-10 lg:space-y-0 lg:flex lg:items-center lg:space-x-10'>
        <div className='flex w-full gap-1 lg:w-1/2'>
          <img
            className='w-1/2 lg:w-auto lg:h-[338px]'
            src={image5}
            alt='Resource 1'
          
          />
          <img
            className='w-1/2 lg:w-auto lg:h-[338px]'
            src={image6}
            alt='Resource 2'
           
          />
        </div>
        <div className='text-center lg:text-left space-y-7 lg:w-1/2'>
          <h1 className='font-semibold text-blue-950 text-3xl lg:text-5xl'>
            We got <span className='text-[#f18337]'>everything</span> you need
          </h1>
          <p className='text-blue-900 leading-8 lg:w-full text-sm'>
            Your one-stop place for go-to destination for exam prep resources tailored for Nigerian
            medical students. Your one-stop place for go-to destination for exam prep resources
            tailored for Nigerian medical students.
          </p>
          <Link to='/productsPage'>
            <button className='bg-blue-900 mt-4 text-white text-sm px-6 py-3 rounded-full transition duration-300 hover:bg-blue-800'>
              Check out Resources
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resources;
