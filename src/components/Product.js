import React from "react";

const Product = ({ image, title, description, badge }) => {
  return (
    <div className='bg-white p-6 space-y-5'>
      <img className='w-full' src={image} alt='' />
      <div className='border-box border border-white'>
        <div className='flex items-center justify-between mb-4'>
          <h3 className='font-semibold lg:mt-0'>{title}</h3>
          <span className='px-4 py-1 rounded-full text-xs text-gray border border-gray lg:px-5 lg:py-2 lg:text-sm'>
            {badge}
          </span>
        </div>

        <p className='text-sm '>{description}</p>
      </div>
    </div>
  );
};

export default Product;
