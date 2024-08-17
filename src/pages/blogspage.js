import React, { useState, useEffect } from "react";
import BlogItem from "../components/blogitem";
import Loading from "../components/loading";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    // Fetch data from your API
    fetch("https://api.achillesdrill.com/blog/fetch")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Simulate a delay for showing the loading component
        setTimeout(() => {
          setBlogs(data.articles);  // Set the fetched blogs
          setLoading(false);        // Stop the loading animation after delay
        }, 3000); // 2 seconds delay
      })
      .catch((error) => {
        setError(error);          // Handle error state
        setLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(blogs.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage));
  };

  const getCurrentData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return blogs.slice(startIndex, endIndex);
  };

  // If loading is true, show Loading component
  if (loading) {
    return <Loading item="articles" />;
  }

  // If there is an error, display the error message
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Main Blog Content
  return (
    <>
      <div className='bg-[#23449F] pt-20 pb-20'>
        <div className='max-w-[90%] mx-auto sm:max-w-[85%]'>
          <div className='md:max-w-[78%] lg:max-w-[80%]'>
            <h1 className='text-3xl text-white font-bold tracking-tighter sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-tight'>
              From the desk of <br /> <span className='text-[#f18337]'>Achilles Drill</span>
            </h1>
          </div>
        </div>
      </div>

      <div className='flex gap-6 justify-between items-center w-[90%] mx-auto mt-8 mb-4'>
        <h3 className='flex-none font-semibold md:text-2xl'>Feature Articles</h3>
        <div className='w-full h-0.5 bg-slate-300'></div>
      </div>

      <div className='container mx-auto p-4'>
        <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-2'>
          {getCurrentData().map((item) => (
            <BlogItem
              key={item._id}
              id={item._id}
              image={item.image}
              title={item.title}
              date={item.created_at}
              category={item.category}
              currentPage={currentPage}
            />
          ))}
        </div>

        <div className='flex justify-center mt-4'>
          <button
            onClick={handlePrevious}
            className='px-4 py-2 mx-1 border bg-white text-blue-500 rounded'
            disabled={currentPage === 1}
          >
            &larr;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handleClick(index + 1)}
              className={`px-4 py-2 mx-1 border ${
                currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-white text-blue-500"
              } rounded`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={handleNext}
            className='px-4 py-2 mx-1 border bg-white text-blue-500 rounded'
            disabled={currentPage === totalPages}
          >
            &rarr;
          </button>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
