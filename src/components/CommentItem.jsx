import React from "react";

const CommentItem = ({ author, content, date }) => {
  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex justify-between items-center">
        <h4 className="font-bold">{author}</h4>
        <span className="text-gray-600 text-sm">{date}</span>
      </div>
      <p className="mt-2">{content}</p>
    </div>
  );
};

export default CommentItem;
