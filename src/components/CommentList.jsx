// src/components/CommentList.js
import React from "react";
import Comment from "./CommentItem";

const CommentList = ({ comments }) => {
  const visibleComment =comments.filter((item) => item.visibility === true)
  return (
    <div className="mt-4">
      {visibleComment.length === 0 ? <p>Be the first to comment !</p> : ""}
      {visibleComment.map((comment, index) => (
        <Comment
          key={index}
          author={comment.fullname}
          content={comment.comment}
          date={comment.created_at}
        />
      ))}
    </div>
  );
};

export default CommentList;
