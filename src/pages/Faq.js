import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import faqImg from "../Assets/faq.PNG";



const FAQ = () => {
  const [faqs, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  fetch("https://api.achillesdrill.com/faq/read")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      setData(data.faq);
      console.log(data.faq);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
      setLoading(false);
    });
}, []);
  return (
    <>
      <div className=''>
        <div className='bg-[#F3F5FA] pt-16 pb-20'>
          <div className='max-w-[85%] mx-auto'>
            <h1 className='text-[#f18337] text-3xl sm:text-4xl lg:text-5xl tracking-tighter font-medium'>Frequently</h1>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl text-[#081640] tracking-tighter font-semibold'>Asked Questions</h1>
          </div>
        </div>

        <div className='pt-8 pb-16 max-w-[85%] mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:justify-between'>
          {faqs.map((faq, index) => (
            <div key={index} className='bg-gray-100 p-2 border border-gray-300 rounded'>
              <div className='mb-1 pb-1 text-sm font-bold border-b-2 border-gray-300'>
                <p>{faq.question}</p>
              </div>
              <div className='my-4 text-sm'>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* GET IN TOUCH BUTTON AND IMAGE */}
        <div className='bg-gray-200 py-16'>
          <div className='lg:flex justify-between lg:max-w-[85%] mx-auto'>
            <div className='max-w-[80%] mx-auto lg:max-w-full lg:mx-0'>
              <div className='lg:hidden text-center'>
                <h1 className='text-3xl font-bold tracking-tighter'>
                  Got more <span className='text-[#f18337] text-3xl font-bold'>questions?</span>
                </h1>
              </div>

              <div className='hidden lg:block'>
                <h1 className='text-6xl font-bold text-blue-900'>Got more</h1>
                <h1 className='text-6xl font-bold text-[#f18337]'>questions?</h1>
              </div>

              <div className='mt-1 lg:mt-3 text-center'>
                <p className='text-sm mb-8'>We are on standby to answer all your questions.</p>
                <div>
                  <Link
                    to='/contactus'
                    className='bg-blue-900 px-12 py-2 text-white text-xs font-semibold rounded-full transition-all duration-[0.3s] hover:bg-blue-700 lg:block lg:text-sm'
                  >
                    GET IN TOUCH
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <img src={faqImg} alt='Woman' className='mt-10 max-w-[85%] mx-auto lg:mt-0' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
