import React, { useState } from "react";
import BlogItem from "../components/blogitem";

export default function BlogPage() {
    const data = [
        {
            id: 1,
            image: "sampleblogimage.png",
            category: "ANATOMY",
            datePosted: "2024-05-16",
            title: "How to maintain good habits",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, hic. Nisi consequatur expedita, consectetur deserunt nemo nam similique, officiis earum id unde eius dolorem atque sequi ut illum doloremque modi.",
        },
        {
            id: 2,
            image: "sampleblogimage.png",
            category: "ANATOMY",
            datePosted: "2024-05-16",
            title: "How to maintain good habits",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, hic. Nisi consequatur expedita, consectetur deserunt nemo nam similique, officiis earum id unde eius dolorem atque sequi ut illum doloremque modi.",
        },
        {
            id: 3,
            image: "sampleblogimage.png",
            category: "ANATOMY",
            datePosted: "2024-05-16",
            title: "How to maintain good habits",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, hic. Nisi consequatur expedita, consectetur deserunt nemo nam similique, officiis earum id unde eius dolorem atque sequi ut illum doloremque modi.",
        },
        {
            id: 4,
            image: "sampleblogimage.png",
            category: "ANATOMY",
            datePosted: "2024-05-16",
            title: "How to maintain good habits",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, hic. Nisi consequatur expedita, consectetur deserunt nemo nam similique, officiis earum id unde eius dolorem atque sequi ut illum doloremque modi.",
        },
        {
            id: 5,
            image: "sampleblogimage.png",
            category: "ANATOMY",
            datePosted: "2024-05-16",
            title: "How to maintain good habits",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, hic. Nisi consequatur expedita, consectetur deserunt nemo nam similique, officiis earum id unde eius dolorem atque sequi ut illum doloremque modi.",
        },
        {
            id: 6,
            image: "sampleblogimage.png",
            category: "ANATOMY",
            datePosted: "2024-05-16",
            title: "How to maintain good habits",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, hic. Nisi consequatur expedita, consectetur deserunt nemo nam similique, officiis earum id unde eius dolorem atque sequi ut illum doloremque modi.",
        },
        {
            id: 7,
            image: "sampleblogimage.png",
            category: "ANATOMY",
            datePosted: "2024-05-16",
            title: "How to maintain good habits",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, hic. Nisi consequatur expedita, consectetur deserunt nemo nam similique, officiis earum id unde eius dolorem atque sequi ut illum doloremque modi.",
        },
        {
            id: 8,
            image: "sampleblogimage.png",
            category: "ANATOMY",
            datePosted: "2024-05-16",
            title: "How to maintain good habits",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, hic. Nisi consequatur expedita, consectetur deserunt nemo nam similique, officiis earum id unde eius dolorem atque sequi ut illum doloremque modi.",
        }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const totalPages = Math.ceil(data.length / itemsPerPage);

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
        return data.slice(startIndex, endIndex);
    };

    return (
        <>
        <div className='bg-[#23449F] pt-32'>
        <div className='max-w-[90%] mx-auto pb-12 sm:max-w-[85%] lg:pb-24'>
       

          <div className='md:max-w-[78%] lg:max-w-[80%]'>
            <h1 className='text-3xl text-white font-bold tracking-tighter sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-tight'>
            From the desk of <span className='text-orange-600'>Achilles Drill</span>
            
            </h1>
          </div>
        </div>
      </div>
            <div className="container mx-auto p-4">
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {getCurrentData().map((item) => (
                        <BlogItem
                            key={item.id}
                            image={item.image}
                            description={item.description}
                            title={item.title}
                            date={item.datePosted}
                            category={item.category}
                        />
                    ))}
                </div>
                <div className="flex justify-center mt-4">
                    <button
                        onClick={handlePrevious}
                        className="px-4 py-2 mx-1 border bg-white text-blue-500 rounded"
                        disabled={currentPage === 1}
                    >
                        &larr;
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handleClick(index + 1)}
                            className={`px-4 py-2 mx-1 border ${
                                currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                            } rounded`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={handleNext}
                        className="px-4 py-2 mx-1 border bg-white text-blue-500 rounded"
                        disabled={currentPage === totalPages}
                    >
                        &rarr;
                    </button>
                </div>
            </div>
        </>
    );
}
