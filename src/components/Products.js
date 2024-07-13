import React from "react";
import Product from "./Product";
import image1 from "../Assets/Rectangle 146.png";
import image2 from "../Assets/Rectangle 147 (1).png";
import image3 from "../Assets/Rectangle 147 (2).png";
import image4 from "../Assets/Rectangle 147.png";

const Products = () => {
  const ProductList = [
    {
      id: 1,
      image: image4,
      title: "Lecture Banks",
      badge: "Videos",

      description:
        "A compilation of tutorial videos and other resources that cover your syllabus in your different courses of Anatomy, Physiology and Biochemistry.",
    },
    {
      id: 2,
      image: image1,
      title: "Past Questions",
      badge: "BOOKLETS",

      description:
        "Hard copy material that contains real past in-course and exam questions with detailed solutions and explanations.",
    },
    {
      id: 3,
      image: image2,
      title: "Youtube Videos",
      badge: "Videos",
      description:
        "Free video resources created by Achilles Drill instructors, available on our YouTube page.",
    },
    {
      id: 4,
      image: image3,
      title: "Dr Drills",
      badge: "AI SOLUTION",
      description: `Your personal AI buddy that will help you remember important mnemonics and acronyms. Reminds you to study the right sections of each topic. `,
    },
  ];
  return (
    <div className='bg-gray-100 mx-auto p-10 lg:p-24 space-y-10'>
      <div className='container mx-auto flex flex-col space-y-10'>
        <h2 className='text-5xl text-blue-950 font-semibold'>Our Products</h2>
        <div className='grid grid-cols-1 items-center lg:grid-cols-2 gap-5'>
          {ProductList.map((item) => (
            <Product
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              badge={item.badge}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
