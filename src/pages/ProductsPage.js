import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
import prod from "../Assets/Rectangle 147.png";
import Youtube from "../components/YoutubeVid";
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
          <p className='text-xs text-white font-bold bg-blue-800 py-2 px-8 inline-block mb-8 rounded-sm lg:text-sm'>
            PRODUCTS
          </p>

          <div className='md:max-w-[78%] lg:max-w-[80%] xl:max-w-[60%]'>
            <h1 className='text-3xl text-blue-800 font-bold tracking-tighter sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-tight xl:text-[3.5rem]'>
              Shaping Africa's <span className='text-orange-600'>med excellence</span> with our{" "}
              <span className='text-orange-600'>product lines</span>
            </h1>
          </div>
        </div>
      </div>

      {/* NAVIGATION BUTTONS */}
      <div className='max-w-[90%] mx-auto sm:max-w-[85%]'>
        <div className='mt-8 mb-8 flex flex-col gap-6 lg:justify-between lg:flex-row lg:mt-10'>
          <button
            className={`text-xs text-center font-bold py-3 w-full lg:text-base ${
              activeSection === "LECTURE_BANKS"
                ? "active"
                : "text-blue-600 border-b-2 border-blue-200"
            }`}
            onClick={() => setActiveSection("LECTURE_BANKS")}
          >
            LECTURE BANKS
          </button>

          <button
            className={`text-xs text-center font-bold py-3 w-full lg:text-base ${
              activeSection === "PAST_QUESTIONS"
                ? "active"
                : "text-blue-600 border-b-2 border-blue-200"
            }`}
            onClick={() => setActiveSection("PAST_QUESTIONS")}
          >
            PAST QUESTIONS
          </button>

          <button
            className={`text-xs text-center font-bold py-3 w-full lg:text-base ${
              activeSection === "YOUTUBE_VIDEOS"
                ? "active"
                : "text-blue-600 border-b-2 border-blue-200"
            }`}
            onClick={() => setActiveSection("YOUTUBE_VIDEOS")}
          >
            YOUTUBE VIDEOS
          </button>

          <button
            className={`text-xs text-center font-bold py-3 w-full lg:text-base ${
              activeSection === "DR_DRILLS" ? "active" : "text-blue-600 border-b-2 border-blue-200"
            }`}
            onClick={() => setActiveSection("DR_DRILLS")}
          >
            DR. DRILLS <i>&#40;coming soon&#41;</i>
          </button>
        </div>

        {/* LECTURE BANKS */}
        {activeSection === "LECTURE_BANKS" && (
          <div className='mb-40 lg:flex gap-4 align-stretch'>
            <div className='mb-6 lg:mb-0 flex-[3]'>
              <img
                src='/images/lecturebank.png'
                alt='PQ'
                className='w-full object-cover sm:h-64 md:h-72 lg:h-full'
              />
            </div>

            <div className='shrink flex-[3]'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                <div className='bg-[#dcdcf5] border border-blue-400 rounded-md'>
                  <img
                    src='/images/products/neuroatonomy.jpg'
                    alt='PQ'
                    className='w-[70%] mx-auto sm:h-64 md:h-72'
                  />
                </div>

                <div className='bg-[#dcdcf5] border border-blue-400 rounded-md'>
                  <img
                    src='/images/products/anatomyofthehead.jpg'
                    alt='PQ'
                    className='w-[70%] mx-auto sm:h-64 md:h-72'
                  />
                </div>

                <div className='bg-[#dcdcf5] border border-blue-400 rounded-md'>
                  <img
                    src='/images/products/1st Medical Lecture Bank Discount-01.jpg'
                    alt='PQ'
                    className='w-[70%] mx-auto sm:h-64 md:h-72'
                  />
                </div>

                <div className='bg-[#dcdcf5] border border-blue-400 rounded-md'>
                  <img
                    src='/images/products/embryology.jpg'
                    alt='PQ'
                    className='w-[70%] mx-auto sm:h-64 md:h-72'
                  />
                </div>
              </div>

              <div className='bg-blue-600 text-center rounded-full mt-4'>
                <a href='https://wa.link/e7zjjh'>
                  <button className='text-xs text-white font-bold h-full w-full py-5 sm:text-sm'>
                    BUY LECTURE BANK
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* PAST QUESTIONS */}
        {activeSection === "PAST_QUESTIONS" && (
          <div className='lg:flex lg:gap-4 mb-40'>
            <div className='mb-2 bg-[#fdede3] flex-1'>
              <img
                src='/images/products/Pastquestion1 (1) (2)_prev_ui.png'
                alt='pq'
                className='w-full sm:h-64 md:h-72 lg:h-full'
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
                  <button className='text-xs text-white font-bold h-full w-full py-5 sm:text-sm'>
                    BUY PAST QUESTIONS
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* YOUTUBE VIDEOS */}
        {activeSection === "YOUTUBE_VIDEOS" && (
          <div className='mb-40 z-0 lg:flex gap-4'>
            <div className='mb-8 flex-[3]'>
              {/* <video src='' controls className='w-full sm:aspect-[16/7] lg:h-full' /> */}
              <Youtube
                src='https://www.youtube.com/embed/xi1sKqM-QkA?si=Tuvagj4olryfeVWU'
                title='Welcome to achilles drill'
                style='w-full h-[200px] sm:aspect-[16/7] lg:h-full'
              />
              <div className='bg-black text-center py-4'>
                <p className='text-white'>
                Learn FASTER in MED SCHOOL with ChatGPT 
                </p>
              </div>
            </div>

            <div className='flex-[3]'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                <div className='relative'>
                  <div className='py-6 px-3 bg-[#dcdcf5]'>
                    {/* <video src='https://www.youtube.com/watch?v=gOhGsrayF18' controls className='w-full sm:aspect-[16/7] lg:aspect-video' /> */}

                    <Youtube
                      src='https://www.youtube.com/embed/ogBByvsk0VU?si=X3JvHjx-UI7DG1uX'
                      title='Welcome to achilles drill'
                      style='w-full h-[200px] sm:aspect-[16/7] lg:h-full'
                    />
                  </div>
                  <div className='w-12 h-3 bg-white absolute bottom-0'></div>
                </div>

                <div className='relative'>
                  <div className='mt-8 lg:mt-0 py-6 px-3 bg-[#dcdcf5]'>
                    {/* <video src='' controls className='w-full sm:aspect-[16/7] lg:aspect-video' /> */}
                    <Youtube
                      src='https://www.youtube.com/embed/P1NraMV6Ky8?si=I8UaLFoO_5JUOpj1'
                      title='Welcome to achilles drill'
                      style='w-full h-[200px] sm:aspect-[16/7] lg:h-full'
                    />
                  </div>
                  <div className='w-12 h-3 bg-white absolute bottom-0'></div>
                </div>

                <div className='relative'>
                  <div className='mt-8 lg:mt-2 py-6 px-3 bg-[#dcdcf5]'>
                    {/* <video src='' controls className='w-full sm:aspect-[16/7] lg:aspect-video' /> */}
                    <Youtube
                      src='https://www.youtube.com/embed/tnADA37As6c?si=Sba7jAqEeX_Z4JyB'
                      title='Welcome to achilles drill'
                      style='w-full h-[200px] sm:aspect-[16/7] lg:h-full'
                    />
                  </div>
                  <div className='w-12 h-3 bg-white absolute bottom-0'></div>
                </div>

                <div className='relative'>
                  <div className='mt-8 lg:mt-2 py-6 px-3 bg-[#dcdcf5]'>
                    {/* <video src='' controls className='w-full sm:aspect-[16/7] lg:aspect-video' /> */}
                    <Youtube
                      src='https://www.youtube.com/embed/lToIUS5ITp4?si=Zs4TX4KZuYO53-32'
                      title='Welcome to achilles drill'
                      style='w-full h-[200px] sm:aspect-[16/7] lg:h-full'
                    />
                  </div>
                  <div className='w-12 h-3 bg-white absolute bottom-0'></div>
                </div>
              </div>

              <div className='bg-blue-600 text-center rounded-full mt-10 lg:mt-12'>
                <a href='https://www.youtube.com/@ACHILLESDRILL/videos'>
                  <button className='text-xs text-white font-bold py-5 w-full h-full sm:text-sm'>
                    GO TO YOUTUBE
                  </button>
                </a>
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
          <div className='mb-40 md:flex gap-8 items-end'>
            <div className='grow-0'>
              <img
                src='/images/drdrills.png'
                alt='Dr Drills'
                className='w-full sm:h-64 object-cover md:h-full'
              />
            </div>

            <div className='grow'>
              <div className='bg-red-300 inline-block my-4 md:mb-8'>
                <p className='text-xs text-red-500 font-bold py-2 px-4'>COMING SOON</p>
              </div>

              <div className='lg:w-[80%]'>
                <h3 className='text-blue-800 text-xl font-bold md:text-3xl lg:text-4xl lg:leading-normal'>
                  Your personal <span className='text-orange-600'>AI smart study buddy</span>.
                </h3>
              </div>

              <div className='bg-blue-600 text-center rounded-full mt-4 md:mt-20'>
                <button className='text-xs text-white font-bold py-5 w-full h-full sm:text-sm'>
                  GET NOTIFIED
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
