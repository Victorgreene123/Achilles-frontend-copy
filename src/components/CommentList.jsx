// src/components/CommentList.js
import React from "react";
import Comment from "./CommentItem";

const CommentList = ({ comments }) => {
  return (
    <div className="mt-4">
      {comments.map((comment, index) => (
        <Comment
          key={index}
          author={comment.author}
          content={comment.content}
          date={comment.date}
        />
      ))}
    </div>
  );
};

export default CommentList;
