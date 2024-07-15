import React from "react";
import { Link, useLocation } from "react-router-dom";

const BlogItem = (props) => {
  const location = useLocation();
  return (
    <div className='w-[90%] mx-auto box-border text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm p-4 '>
      <img src={`/images/${props.image}`} className='w-full h-auto rounded-lg' alt={props.title} />

      <div className='w-full flex items-center justify-between my-4'>
        <span className='text-gray-600'>{props.category}</span>
        <span className='text-gray-600'>{props.date}</span>
      </div>

      <div className='leading-tight mt-2'>
        <h3 className='text-[1.4rem] font-semibold mb-3'>{props.title}</h3>
        <p className='leading-relaxed text-justify mt-2'>{props.description}</p>
      </div>

      <div className='leading-tight mt-2'>
        <Link
          className='leading-relaxed text-justify mt-2'
          to={`/article/${props.id}?page=${props.currentPage}`}
          state={{ from: location }}
        >
          <button className="px-4 py-2 mx-1 border bg-white text-blue-500 rounded">
          Read More {">>>"}</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
