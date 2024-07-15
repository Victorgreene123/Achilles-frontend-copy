import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import image1 from "../Assets/Rectangle 291.png";
import image2 from "../Assets/Rectangle 292.png";
import image3 from "../Assets/Rectangle 293.png";
import image4 from "../Assets/Rectangle 391.png";
import image5 from "../Assets/Rectangle 392.png";
import image6 from "../Assets/Rectangle 393.png";
import { Link } from "react-router-dom";

const Accordion = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const accordion = [
    {
      id: 1,
      text: "What is the Lecture Bank?",
      content:
        "The Lecture Bank is a compilation of tutorial videos and other resources that cover your syllabus in your different courses of Anatomy, Physiology and Biochemistry. The resources in it are simplified and designed to help you study any topic of your choice anywhere and anytime.",
    },
    {
      id: 2,
      text: "What topics or courses are covered in the Lecture Bank?",
      content:
        "The Lecture Bank covers topics in your Anatomy, Physiology and Biochemistry curricula.",
    },
    {
      id: 3,
      text: "Does the Lecture Bank get updated?",
      content:
        "Yes. The Lecture Bank is updated regularly to provide you with the most relevant and current information.",
    },
    {
      id: 4,
      text: "What are the payment options for the Lecture Bank?",
      content:
        "You get access to the Lecture Bank in one single purchase. Payment does not need to be renewed.",
    },
    {
      id: 5,
      text: "How much is the Lecture Bank?",
      content:
        "The price depends on how many of the Lecture Banks you're buying. You can visit our store to see our resources with their prices. There are discounts for buying more than one material too.",
    },
    {
      id: 6,
      text: "How do I access the Lecture Bank after purchase?",
      content:
        "The Lecture Banks are hosted on private Telegram channels. They have been sequentially arranged and properly bookmarked for easy access.",
    },
    {
      id: 7,
      text: "What format does the Lecture Bank come in?",
      content:
        "The Lecture Bank comes in form of videos. It is a compilation of over 700 recorded tutorial videos created by our instructors. It also contains review questions and answers, and other bonus materials.",
    },
    {
      id: 8,
      text: "Can I share the Lecture Bank with someone?",
      content:
        "The Lecture Bank is strictly personalized and cannot be shared. The security in place does not allow sharing.",
    },
    {
      id: 9,
      text: "What is the past question like?",
      content:
        "The past question is a hard copy material that contains real past in-course and exam questions with detailed solutions and explanations.",
    },
    {
      id: 10,
      text: "Do I pay for delivery?",
      content: "Yes. Delivery fee varies based on your location.",
    },
    {
      id: 11,
      text: "How long does delivery take?",
      content: "Delivery typically takes 3-4 working days.",
    },
  ];

  const handleToggle = (id) => {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className='bg-[#F0F2F5]'>
      <div className='container mx-auto px-8 lg:px-20 py-20 flex flex-col items-center lg:flex-row gap-20 lg:gap-20'>
        <div className='text-center lg:text-left flex flex-col gap-10 w-full'>
          <h2 className='uppercase text-blue-950 font-semibold text-3xl lg:text-4xl'>
            we are here to answer all your questions
          </h2>
          <div className='flex justify-center lg:justify-start'>
            <div className='bg-blue-700 w-48 h-1'></div>
            <div className='bg-red-400 w-32 h-1'></div>
          </div>
          <p className='text-blue-900 opacity-80'>
            If you’re ready to super-charge your knowledge and career, this section will help you
            answer most questions that you might have
          </p>
          <div className='flex gap-px items-center justify-center lg:justify-start'>
            <img src={image1} alt='' />
            <img src={image2} alt='' />
            <img src={image3} alt='' />
          </div>
        </div>
        <div className='flex flex-col gap-1 '>
          {accordion.map((item) => (
            <AccordionItem
              key={item.id}
              id={item.id}
              text={item.text}
              content={item.content}
              isOpen={openItemId === item.id}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
      <div className='bg-white lg:p-10'>
        <div className='container mx-auto p-10 lg:p-10 flex flex-col lg:flex-row lg:justify-between items-center gap-5'>
          <div className='text-center lg:text-left items-center lg:items-start flex flex-col gap-5'>
            <h1 className='lg:w-4/5  text-3xl lg:text-5xl font-semibold text-[#2547A7]'>
              Take the first step towards academic excellence
            </h1>
            <p className='text-[#2547A7]'>Check out some of the resources today</p>
            <Link to='/productsPage'>
              <button className='bg-[#274CB2] text-gray-100 rounded-full px-16 py-3'>
                Get Started
              </button>
            </Link>
            <div className='flex justify-center lg:justify-start'>
              <div className='bg-blue-700 w-48 h-1'></div>
              <div className='bg-red-400 w-32 h-1'></div>
            </div>
          </div>
          <div className='flex gap-px'>
            <img className='object-contain w-1/3' src={image6} alt='' />
            <img className='object-contain w-1/3' src={image4} alt='' />
            <img className='object-contain w-1/3' src={image5} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
