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
      text: "How much is the lecture bank?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati repellendus dolore consequatur neque molestias voluptatum nemo cupiditate voluptas, sed possimus quis explicabo alias, tempore sapiente, voluptatibus saepe laboriosam facilis",
    },
    {
      id: 2,
      text: "What topics are covered in the lecture banks?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati repellendus dolore consequatur neque molestias voluptatum nemo cupiditate voluptas, sed possimus quis explicabo alias, tempore sapiente, voluptatibus saepe laboriosam facilis",
    },
    {
      id: 3,
      text: "Are the past questions sourced from actual exams?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati repellendus dolore consequatur neque molestias voluptatum nemo cupiditate voluptas, sed possimus quis explicabo alias, tempore sapiente, voluptatibus saepe laboriosam facilis",
    },
    {
      id: 4,
      text: "How can the past questions help with exam preparation?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati repellendus dolore consequatur neque molestias voluptatum nemo cupiditate voluptas, sed possimus quis explicabo alias, tempore sapiente, voluptatibus saepe laboriosam facilis",
    },
    {
      id: 5,
      text: "What is the format of the YouTube videos?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati repellendus dolore consequatur neque molestias voluptatum nemo cupiditate voluptas, sed possimus quis explicabo alias, tempore sapiente, voluptatibus saepe laboriosam facilis",
    },
    {
      id: 6,
      text: "Are the YouTube videos aligned with the lecture banks?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati repellendus dolore consequatur neque molestias voluptatum nemo cupiditate voluptas, sed possimus quis explicabo alias, tempore sapiente, voluptatibus saepe laboriosam facilis",
    },
    {
      id: 7,
      text: "Can I access the material offline?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati repellendus dolore consequatur neque molestias voluptatum nemo cupiditate voluptas, sed possimus quis explicabo alias, tempore sapiente, voluptatibus saepe laboriosam facilis",
    },
    {
      id: 8,
      text: "Is there a support team available for questions and technical issues?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci obcaecati repellendus dolore consequatur neque molestias voluptatum nemo cupiditate voluptas, sed possimus quis explicabo alias, tempore sapiente, voluptatibus saepe laboriosam facilis",
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
            <h1 className='lg:w-4/5  text-3xl lg:text-5xl font-semibold text-blue-600'>
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
            <img className='object-contain w-1/3' src={image6} alt='' data-aos='fade-right' />
            <img className='object-contain w-1/3' src={image4} alt='' data-aos='fade-up' />
            <img className='object-contain w-1/3' src={image5} alt='' data-aos='fade-left' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
