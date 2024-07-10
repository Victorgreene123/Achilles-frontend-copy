import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";

const ArticlePage = ({ data }) => {
  const { id } = useParams();
  const location = useLocation();
  const article = data.find((item) => item.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  const from = location.state?.from || "/blogs";

  return (
    <div className='container mx-auto p-4'>
      <img
        src={`/images/${article.image}`}
        className='w-full h-auto rounded-lg'
        alt={article.title}
      />
      <div className='mt-4'>
        <h1 className='text-3xl font-bold'>{article.title}</h1>
        <div className='flex items-center justify-between mt-2'>
          <span className='text-gray-600'>{article.category}</span>
          <span className='text-gray-600'>{article.datePosted}</span>
        </div>
        <p className='mt-4'>{article.fullText}</p>
        <Link to={from}>
          <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'>Back to Blog</button>
        </Link>
      </div>
    </div>
  );
};

export default ArticlePage;
