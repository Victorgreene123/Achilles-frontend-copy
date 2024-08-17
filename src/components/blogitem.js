import React from "react";
import { Link, useLocation } from "react-router-dom";

const BlogItem = (props) => {
  const formatRelativeTime = (dateString) => {
    const parsedDate = new Date(dateString);
    const now = new Date();
    const diffInMs = now - parsedDate;
    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInDays / 365);

    if (diffInYears > 0) {
      return `${diffInYears} year${diffInYears > 1 ? 's' : ''} ago`;
    }
    if (diffInMonths > 0) {
      return `${diffInMonths} month${diffInMonths > 1 ? 's' : ''} ago`;
    }
    if (diffInWeeks > 0) {
      return `${diffInWeeks} week${diffInWeeks > 1 ? 's' : ''} ago`;
    }
    if (diffInDays > 0) {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    }
    if (diffInHours > 0) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    }
    if (diffInMinutes > 0) {
      return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
    }
    return `${diffInSeconds} second${diffInSeconds > 1 ? 's' : ''} ago`;
  };
  const location = useLocation();
  return (
    <div className="w-[90%] mx-auto box-border text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm p-4 ">
      <Link
        className="leading-relaxed text-justify mt-2"
        to={`/article/${props.id}?page=${props.currentPage}`}
        state={{ from: location }}
      >
        <img
          src={props.image} 
          className="w-full h-auto rounded-lg"
          alt={props.title}
        />
      </Link>

      <div className="w-full flex items-center justify-between my-4">
        <span className="text-gray-600">{props.category}</span>
        <span className="text-gray-600">{formatRelativeTime(props.date)}</span>
      </div>

      <div className="leading-tight mt-2">
        <Link
          className="leading-relaxed text-justify mt-2"
          to={`/article/${props.id}?page=${props.currentPage}`}
          state={{ from: location }}
        >
          <h3 className="text-[1.4rem] font-semibold mb-3">{props.title}</h3>
        </Link>
        <p className="leading-relaxed text-justify mt-2">{props.description}</p>
      </div>

      <div className="leading-tight mt-2">
        <Link
          className="leading-relaxed text-justify mt-2"
          to={`/article/${props.id}?page=${props.currentPage}`}
          state={{ from: location }}
        >
          <button className="px-4 py-2 mx-1 border bg-blue-500 text-white rounded">
            Read More {">>>"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
