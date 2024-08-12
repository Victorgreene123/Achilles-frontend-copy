// src/components/CommentForm.js
import { comment } from "postcss";
import React, { useState } from "react";

const CommentForm = ({ id }) => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const article = id;
  const [loading, setIsLoading] = useState(false)
  const handleSubmit = (e) => {

    e.preventDefault();
    setIsLoading(true)
    if (author && content) {
      const body = {
        article: article,
        comment:content,
        fullname : author
      }
      fetch('https://achilles-web-be.onrender.com/comment/write', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
      .then(response => {
        setIsLoading(false); // Stop spinner
        if (response.status === 200) {
          window.location.reload();
          
        } else {
          throw new Error("Failed to send mail");
        }
      })
      .catch(error => {
        setIsLoading(false); // Stop spinner in case of error
        console.error("Error sending mail:", error);
      });
    };
     
      setAuthor("");
      setContent("");
    
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
      <button type="submit" className="bg-[#274CB2] text-white p-2 rounded" disabled={loading}>
       {
       loading ? <i className="fa fa-spinner fa-spin"></i>: "Submit"
       }
      </button>
    </form>
  );
};

export default CommentForm;
