import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
import prod from "../Assets/Rectangle 147.png";
// import axios from "axios";

const ProductsPage = () => {
  const [activeSection, setActiveSection] = useState("LECTURE_BANKS");
  // const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   fetchVideos();
  // }, []);

  // const fetchVideos = async () => {
  //   try {
  //     const response = await axios.get("https://achilles-web-be.onrender.com/video/get");
  //     console.log(response.data);
  //     setVideos(Array.isArray(response.data) ? response.data : []);
  //   } catch (error) {
  //     console.error("Error fetching videos:", error);
  //   }
  // };

  return (
    <div>
      <div className='bg-gray-200 pt-12'>
        <div className='max-w-[90%] mx-auto pb-12 sm:max-w-[85%] lg:pb-24'>
          <p className='text-xs text-white font-bold bg-blue-800 py-2 px-5 inline-block mb-4 lg:text-sm'>
            PRODUCTS
          </p>

          <div className='md:max-w-[78%] lg:max-w-[80%]'>
            <h1 className='text-3xl text-blue-800 font-bold tracking-tighter sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-tight'>
              Shaping Africa's <span className='text-orange-600'>med excellence</span> with our{" "}
              <span className='text-orange-600'>product lines</span>
            </h1>
          </div>
        </div>
      </div>

      {/* NAVIGATION BUTTONS */}
      <div className='max-w-[90%] mx-auto sm:max-w-[85%]'>
        <div className='mt-8 mb-8 flex flex-col gap-4 lg:justify-between lg:flex-row lg:mt-10'>
          <button
            className={`text-xs font-bold py-3 pr-10 lg:text-sm ${
              activeSection === "LECTURE_BANKS"
                ? "active"
                : "text-blue-600 border-b-2 border-blue-200"
            }`}
            onClick={() => setActiveSection("LECTURE_BANKS")}
          >
            LECTURE BANKS
          </button>

          <button
            className={`text-xs font-bold py-3 pr-10 lg:text-sm ${
              activeSection === "PAST_QUESTIONS"
                ? "active"
                : "text-blue-600 border-b-2 border-blue-200"
            }`}
            onClick={() => setActiveSection("PAST_QUESTIONS")}
          >
            PAST QUESTIONS
          </button>

          <button
            className={`text-xs font-bold py-3 pr-10 lg:text-sm ${
              activeSection === "YOUTUBE_VIDEOS"
                ? "active"
                : "text-blue-600 border-b-2 border-blue-200"
            }`}
            onClick={() => setActiveSection("YOUTUBE_VIDEOS")}
          >
            YOUTUBE VIDEOS
          </button>

          <button
            className={`text-xs font-bold py-3 pr-10 lg:text-sm ${
              activeSection === "DR_DRILLS" ? "active" : "text-blue-600 border-b-2 border-blue-200"
            }`}
            onClick={() => setActiveSection("DR_DRILLS")}
          >
            DR. DRILLS <i>&#40;coming soon&#41;</i>
          </button>
        </div>

        {/* LECTURE BANKS */}
        {activeSection === "LECTURE_BANKS" && (
          <div className='mb-10 lg:flex gap-4 align-stretch'>
            <div className='mb-6 lg:mb-0 flex-[3]'>
              <img
                src='/images/lecturebank.png'
                alt='PQ'
                className='w-full object-cover sm:h-64 md:h-72 lg:h-full'
              />
            </div>

            <div className='shrink flex-[3]'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                <div className='bg-blue-800 bg-opacity-5 border border-blue-400 rounded-md'>
                  <img
                    src='/images/products/neuroatonomy.jpg'
                    alt='PQ'
                    className='w-full sm:h-64 object-contain md:h-72'
                  />
                </div>

                <div className='bg-blue-800 bg-opacity-5 border border-blue-400 rounded-md'>
                  <img
                    src='/images/products/anatomyofthehead.jpg'
                    alt='PQ'
                    className='w-full sm:h-64 object-contain md:h-72'
                  />
                </div>

                <div className='bg-blue-800 bg-opacity-5 border border-blue-400 rounded-md'>
                  <img
                    src='/images/products/1st Medical Lecture Bank Discount-01.jpg'
                    alt='PQ'
                    className='w-full sm:h-64 object-contain md:h-72'
                  />
                </div>

                <div className='bg-blue-800 bg-opacity-5 border border-blue-400 rounded-md'>
                  <img
                    src='/images/products/embryology.jpg'
                    alt='PQ'
                    className='w-full sm:h-64 object-contain md:h-72'
                  />
                </div>
              </div>

              <div className='bg-blue-600 text-center rounded-full mt-4'>
                <a href='https://wa.link/e7zjjh'>
                  <button className='text-xs text-white font-bold py-3 sm:text-sm'>
                    BUY LECTURE BANK
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* PAST QUESTIONS */}
        {activeSection === "PAST_QUESTIONS" && (
          <div className='lg:flex lg:gap-4 mb-10'>
            <div className='mb-2 bg-[#fdede3] flex-1'>
              <img
                src='/images/products/Pastquestion1 (1) (2)_prev_ui.png'
                alt='pq'
                className='w-full sm:h-64 md:h-72 lg:h-auto lg:py-20'
              />
            </div>

            <div className='flex-1'>
              <div className='bg-[#f0dee1fa]'>
                <img
                  src='/images/products/Pastquestion1 (1) (3)_prev_ui.png'
                  alt='pq'
                  className='mb-1 w-full sm:h-64 object-cover object-top'
                />
              </div>

              <div className='bg-[#faefe8]'>
                <img
                  src='/images/products/SAVE_20240708_183352_prev_ui.png'
                  alt='pq'
                  className='w-full sm:h-64 object-cover object-top'
                />
              </div>

              <div className='bg-blue-600 text-center rounded-full mt-4'>
                <a href='https://wa.link/3iyw7j'>
                  <button className='text-xs text-white font-bold py-3 sm:text-sm'>
                    BUY PAST QUESTIONS
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* YOUTUBE VIDEOS */}
        {activeSection === "YOUTUBE_VIDEOS" && (
          <div className='mb-10 z-0 lg:flex gap-4'>
            <div className='mb-8 flex-[3]'>
              <video src='' controls className='w-full sm:aspect-[16/7] lg:h-full' />
              <p className='text-xs mt-2'>Main video caption</p>
            </div>

            <div className='flex-[3]'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                <div className='mb-8 lg:mb-2'>
                  <video src='' controls className='w-full sm:aspect-[16/7] lg:aspect-video' />
                  <p className='text-xs mt-2'>Caption for video 1</p>
                </div>

                <div className='mb-8 lg:mb-2'>
                  <video src='' controls className='w-full sm:aspect-[16/7] lg:aspect-video' />
                  <p className='text-xs mt-2'>Caption for video 2</p>
                </div>

                <div className='mb-8 lg:mb-2'>
                  <video src='' controls className='w-full sm:aspect-[16/7] lg:aspect-video' />
                  <p className='text-xs mt-2'>Caption for video 3</p>
                </div>

                <div className='mb-6 lg:mb-2'>
                  <video src='' controls className='w-full sm:aspect-[16/7] lg:aspect-video' />
                  <p className='text-xs mt-2'>Caption for video 4</p>
                </div>
              </div>

              <div className='bg-blue-600 text-center rounded-full mt-4 lg:mt-6'>
                <button className='text-xs text-white font-bold py-3 w-full h-full sm:text-sm'>
                  GO TO YOUTUBE
                </button>
              </div>
            </div>
          </div>
        )}

        {/* YOUTUBE VIDEOS */}
        {/* {activeSection === "YOUTUBE_VIDEOS" && (
          <div className='mb-10 z-0 lg:flex gap-4'>
            <div className='mb-8 flex-[3]'>
              <video
                src={videos.length > 0 ? videos[0].url : ""}
                controls
                className='w-full sm:aspect-[16/7] lg:h-full'
              />
            </div>

            <div className='flex-[3]'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                {videos.slice(1).map((video, index) => (
                  <video
                    key={index}
                    src={video.url}
                    controls
                    className='w-full sm:aspect-[16/7] lg:aspect-video'
                  />
                ))}
              </div>

              <div className='bg-blue-600 text-center rounded-full mt-4 lg:mt-8'>
                <button className='text-xs text-white font-bold py-3 sm:text-sm'>
                  GO TO YOUTUBE
                </button>
              </div>
            </div>
          </div>
        )} */}

        {/* DR DRILLS */}
        {activeSection === "DR_DRILLS" && (
          <div className='mb-10 md:flex gap-8 items-stretch'>
            <div className='grow-0'>
              <img
                src='/images/drdrills.png'
                alt='Dr Drills'
                className='w-full sm:h-64 object-cover md:h-full'
              />
            </div>

            <div className='grow self-stretch'>
              <div className='bg-red-300 inline-block my-4 md:mb-8'>
                <p className='text-xs text-red-500 font-bold py-2 px-4'>COMING SOON</p>
              </div>

              <h3 className='text-blue-800 text-xl font-bold md:text-3xl'>
                Your personal <span className='text-orange-600'>AI smart study buddy</span>.
              </h3>

              <div className='bg-blue-600 text-center rounded-full mt-4 md:mt-20'>
                <button className='text-xs text-white font-bold py-3 w-full h-full sm:text-sm'>
                  GET STARTED
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
