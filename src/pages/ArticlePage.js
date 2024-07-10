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
    <div>
      <div className='bg-[#efeff3] mb-4'>
        <div className='pt-8 pb-12 w-[90%] mx-auto'>
          <div>
            <h1 className='text-center text-xl font-bold mb-6 tracking-tight'>{article.title}</h1>
          </div>

          <div className=''>
            <img
              src={`/images/${article.image}`}
              className='w-full h-full object-cover md:h-1/2 lg:h-1/3'
              alt={article.title}
            />
          </div>
        </div>
      </div>

      <div className='mt-8 w-[80%] mx-auto mb-8'>
        {/* <div className='flex items-center justify-between mt-2'>
          <span className='text-gray-600'>{article.category}</span>
          <span className='text-gray-600'>{article.datePosted}</span>
        </div> */}

        <div>
          <p className='mt-4'>{article.fullText}</p>
        </div>

        <div>
          <Link to={from}>
            <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded'>Back to Blog</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
