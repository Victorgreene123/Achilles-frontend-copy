import React from "react";
import { RiStarSFill } from "react-icons/ri";

const Testimonial = ({ head, logo, names, school, message, image }) => {
  const icons = Array.from({ length: 5 });
  return (
    <div>
      <div className='w-full bg-[#fbfcfe]'>
        <div className='flex justify-between items-center rounded-t-md border border-blue-400 px-5 py-2'>
          <p className='font-bold italic'>"{head}"</p>
          <img className='rounded-full w-8' src={logo} alt='' />
        </div>
        <div className='flex justify-between border border-blue-400 px-5 py-2'>
          <p>{names}</p>
          <p>{school}</p>
        </div>
        <div className='border rounded-b-md border-blue-400 px-5 py-3'>
          <p className='py-6 leading-8 text-left'>{message}</p>
          <div className='flex items-center gap-2'>
            <img src={image} alt='Testifier' className='h-12 w-12 rounded-full object-cover' />
            <div className='flex flex-col items-center'>
              <p>{names}</p>
              <div className='text-yellow-600 flex'>
                {icons.map((_, index) => (
                  <RiStarSFill key={index} className='text-yellow-500 text-2xl' />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
