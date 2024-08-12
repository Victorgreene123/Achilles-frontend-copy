<<<<<<< HEAD
import React from 'react';
=======
import React from "react";
>>>>>>> 3e7af7a5a6273a6f468bb2b327f05b8cfb940a76

const CommentItem = ({ author, content, date }) => {
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

  const formatdate = formatRelativeTime(date);

  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex justify-between items-center">
        <h4 className="font-bold">{author}</h4>
        <span className="text-gray-600 text-sm">{formatdate}</span>
      </div>
      <p className="mt-2">{content}</p>
    </div>
  );
};

export default CommentItem;
