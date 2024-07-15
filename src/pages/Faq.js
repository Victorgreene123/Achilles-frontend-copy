import React from "react";
import { Link } from "react-router-dom";
import faqImg from "../Assets/faq.PNG";

const faqs = [
  {
    contentHead: "What is the Lecture Bank?",
    content:
      "The Lecture Bank is a compilation of tutorial videos and other resources that cover your syllabus in your different courses of Anatomy, Physiology and Biochemistry. The resources in it are simplified and designed to help you study any topic of your choice anywhere and anytime.",
  },
  {
    contentHead: "What topics or courses are covered in the Lecture Bank?",
    content:
      "The Lecture Bank covers topics in your Anatomy, Physiology and Biochemistry curricula.",
  },
  {
    contentHead: "Does the Lecture Bank get updated?",
    content:
      "Yes. The Lecture Bank is updated regularly to provide you with the most relevant and current information.",
  },
  {
    contentHead: "What are the payment options for the Lecture Bank?",
    content:
      "You get access to the Lecture Bank in one single purchase. Payment does not need to be renewed.",
  },
  {
    contentHead: "How much is the Lecture Bank?",
    content:
      "The price depends on how many of the Lecture Banks you're buying. You can visit our store to see our resources with their prices. There are discounts for buying more than one material too.",
  },
  {
    contentHead: "How do I access the Lecture Bank after purchase?",
    content:
      "The Lecture Banks are hosted on private Telegram channels. They have been sequentially arranged and properly bookmarked for easy access.",
  },
  {
    contentHead: "What format does the Lecture Bank come in?",
    content:
      "The Lecture Bank comes in form of videos. It is a compilation of over 700 recorded tutorial videos created by our instructors. It also contains review questions and answers, and other bonus materials.",
  },
  {
    contentHead: "Can I share the Lecture Bank with someone?",
    content:
      "The Lecture Bank is strictly personalized and cannot be shared. The security in place does not allow sharing.",
  },
  {
    contentHead: "How long does delivery take?",
    content: "Delivery typically takes 3-4 working days.",
  },
  {
    contentHead: "What is the past question like?",
    content:
      "The past question is a hard copy material that contains real past in-course and exam questions with detailed solutions and explanations.",
  },
  {
    contentHead: "Do I pay for delivery?",
    content: "Yes. Delivery fee varies based on your location.",
  },
];

const FAQ = () => {
  return (
    <>
      <div className=''>
        <div className='bg-[#F3F5FA] pt-16 pb-20'>
          <div className='max-w-[85%] mx-auto'>
            <h1 className='text-[#f18337] text-3xl sm:text-4xl lg:text-6xl tracking-tighter'>Frequently</h1>
            <h1 className='text-3xl sm:text-4xl lg:text-6xl text-[#081640] tracking-tighter'>Asked Questions</h1>
          </div>
        </div>

        <div className='pt-8 pb-16 max-w-[85%] mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:justify-between'>
          {faqs.map((faq, index) => (
            <div key={index} className='bg-gray-100 p-2 border border-gray-300 rounded'>
              <div className='mb-1 pb-1 text-sm font-bold border-b-2 border-gray-300'>
                <p>{faq.contentHead}</p>
              </div>
              <div className='my-4 text-sm'>
                <p>{faq.content}</p>
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
                <h1 className='text-6xl font-bold'>Got more</h1>
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
