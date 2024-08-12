// import React from "react";
// import { useState } from "react";
// import { useParams, useLocation, Link } from "react-router-dom";
// import CommentItem from "../components/CommentItem";
// import CommentList from "../components/CommentList";
// import CommentForm from "../components/CommentForm";

// const ArticlePage = ({ data }) => {
//   const { id } = useParams();
//   const location = useLocation();
//   const [comments, setComments] = useState([
//     { author: "Alice", content: "Nice post!", date: "2024-07-31 12:34" },
//     {
//       author: "Bob",
//       content: "I found this helpful.",
//       date: "2024-07-31 13:45",
//     },
//   ]);
//   const article = data.find((item) => item.id === parseInt(id));

//   if (!article) {
//     return <div>Article not found</div>;
//   }

//   const from = location.state?.from || "/blogs";
//   const points = article.fullText.split(/(?=\d️?\.)/);

//   const addComment = (comment) => {
//     setComments([...comments, comment]);
//   };

//   return (
//     <div>
//       <div className="bg-[#F3F5FA] mb-4">
//         <div className="pt-8 pb-12 w-[90%] mx-auto">
//           <div>
//             <h1 className="text-center text-[#040C25] text-xl font-bold mb-6 tracking-tight md:text-2xl md:my-10 lg:text-2xl">
//               {article.title}
//             </h1>
//           </div>

//           <div className="">
//             <img
//               src={`/images/${article.image}`}
//               className="w-full object-cover h-48 sm:h-[16rem] md:h-[20rem] lg:h-[25rem] xl:h-[30rem]"
//               alt={article.title}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="mt-8 w-[80%] mx-auto mb-8 text-justify md:w-[70%] lg:w-[50%]">
//         <div>
//           <p className="">{article.description}</p>
//         </div>

//         <div>
//           {points.map((point, index) => (
//             <p key={index} className="mt-10">
//               {point.trim()}
//             </p>
//           ))}
//         </div>

//         {/* <div>
//           <Link to={from}>
//             <button className='mt-8 px-4 py-2 bg-blue-500 text-white rounded'>Back to Blog</button>
//           </Link>
//         </div> */}

//         <div className="mt-24 bg-gray-200 py-6 px-8 rounded-md text-left">
//           <h1 className="text-2xl font-bold mb-6 md:text-4xl">
//             {article.articleNoteHead}
//           </h1>

//           <p className="text-sm leading-6 text-[#2f2f58f1] md:text-base">
//             {article.articleNote}
//           </p>
//         </div>

//         <div className="max-w-2xl mx-auto p-4">
//           <h1 className="text-2xl font-bold mb-4">Comments</h1>
//           <CommentForm onAddComment={addComment} />
//           <CommentList comments={comments} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArticlePage;
import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import CommentList from "../components/CommentList";
import CommentForm from "../components/CommentForm";

const ArticlePage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [reload , setReload] = useState(false)
  // const initreloadcomment = (newComment) =>{
  //   setReload(true)
  //   setComments
  // }
  useEffect(() => {
    // Fetch article data from the API
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://achilles-web-be.onrender.com/blog/fetch/`);
       
        const article = response.data.articles.find((item) => item._id === id)
        setArticle(article);
        console.log(article)
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchArticle();
  }, [id]);
  useEffect(() => {
    // Fetch article data from the API
    const fetchComment = async () => {
      try {
        const response = await axios.get(`https://achilles-web-be.onrender.com/comment/all`);
       
        const comments = response.data.allComment.filter((item) => item.article._id === id)
        setComments(comments);
        console.log(comments)
      } catch (error) {
        console.error("Error fetching article:", error);
      }
    };

    fetchComment();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  const from = location.state?.from || "/blogs";
  const { title, image, content, conclusion } = article;

  return (
    <div>
      <div className='bg-[#F3F5FA] mb-4'>
        <div className='pt-8 pb-12 w-[90%] mx-auto'>
          <div>
            <h1 className='text-center text-[#040C25] text-xl font-bold mb-6 tracking-tight md:text-2xl md:my-10 lg:text-2xl'>
              {title}
            </h1>
          </div>

          <div className=''>
            <img
              src={image}
              className='w-full object-cover h-48 sm:h-[16rem] md:h-[20rem] lg:h-[25rem] xl:h-[30rem]'
              alt={title}
            />
          </div>
        </div>
      </div>

      <div className='mt-8 w-[80%] mx-auto mb-8 text-justify md:w-[70%] lg:w-[50%]'>
        <div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
          
        </div>

        <div className='mt-24 bg-gray-200 py-6 px-8 rounded-md text-left'>
          <h1 className='text-2xl font-bold mb-6 md:text-4xl'>Conclusion</h1>

          <p className='text-sm leading-6 text-[#2f2f58f1] md:text-base'>{conclusion}</p>
        </div>

        <div className='max-w-2xl mx-auto p-4'>
          <h1 className='text-2xl font-bold mb-4'>Comments</h1>
          <CommentForm  id = {id}/>
          <CommentList comments={comments} />
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
