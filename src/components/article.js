// import React from "react";
// import { useState } from "react";

// const [blog, setBlogs] = useState([]);
// function getBlogs() {
//   fetch("https://achilles-web-be.onrender.com/blog/fetch")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       setBlogs(data.articles);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// export default articles;

import React, { useState, useEffect } from "react";

function Articles() {
  const [blog, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch articles from the database when the component mounts
    fetch("https://achilles-web-be.onrender.com/blog/fetch")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Set the fetched articles to the blog state
        setBlogs(data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  return blog;
}

export default Articles;
