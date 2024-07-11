import React from "react";

const Product = ({ image, title, description, badge }) => {
  return (
    <div className='bg-white p-6 space-y-5'>
      <img className='w-full' src={image} alt='' data-aos='fade-up' />
      <div className='relative border-box border border-white'>
        <span className='px-5 py-2 rounded-full text-sm text-gray border border-gray absolute top-0 right-0'>
          {badge}
        </span>
        <h3 className='font-semibold text-1xl mb-4 lg:mt-0 mt-2'>{title}</h3>
        <p className='text-sm '>{description}</p>
      </div>
    </div>
  );
};

export default Product;
