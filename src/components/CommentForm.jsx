// src/components/CommentForm.js
import React, { useState } from "react";

const CommentForm = ({ onAddComment }) => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author && content) {
      
      onAddComment({ author, content, date: new Date().toLocaleString() });
      setAuthor("");
      setContent("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <input
        type="text"
        className="border p-2 w-full mb-2"
        placeholder="Your name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Your comment"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit" className="bg-[#274CB2] text-white p-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
