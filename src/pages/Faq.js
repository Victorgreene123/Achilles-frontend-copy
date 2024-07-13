import React from "react";
import { Link } from "react-router-dom";
import faqImg from "../Assets/faq.PNG";

const faq = () => {
  return (
    <>
      <div className=''>
        <div className='bg-gray-200 pt-16 pb-20'>
          <div className='max-w-[85%] mx-auto'>
            <h1 className='text-[#f18337] text-3xl sm:text-4xl lg:text-6xl'>Frequently</h1>
            <h1 className='text-3xl sm:text-4xl lg:text-6xl'>Asked Questions</h1>
          </div>
        </div>

        <div className='pt-8 pb-16 max-w-[85%] mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:justify-between'>
          <div className='bg-gray-100 p-2 border border-gray-300 rounded'>
            <div className='mb-1 pb-1 text-sm font-bold border-b-2 border-gray-300'>
              <p>What topics are covered in the lecture banks?</p>
            </div>

            <div className='my-4 text-sm'>
              <p>
                The lecture banks cover a wide range of topics, including basic sciences, clinical
                rotations, pharmacology, pathology and more.
              </p>
            </div>
          </div>

          <div className='bg-gray-100 p-2 border border-gray-300 rounded'>
            <div className='mb-1 pb-1 text-sm font-bold border-b-2 border-gray-300'>
              <p>How frequently are the lecture banks updated?</p>
            </div>

            <div className='my-4 text-sm'>
              <p>
                The lecture banks are updated regularly to ensure they include the most current
                information and medical guidelines.
              </p>
            </div>
          </div>

          <div className='bg-gray-100 p-2 border border-gray-300 rounded'>
            <div className='mb-1 pb-1 text-sm font-bold border-b-2 border-gray-200'>
              <p>Are the past questions sourced from actual exams?</p>
            </div>

            <div className='my-4 text-sm'>
              <p>
                Yes, the past questions compiled from previous exams to provide a realistic practice
                experience.
              </p>
            </div>
          </div>

          <div className='bg-gray-100 p-2 border border-gray-300 rounded'>
            <div className='mb-1 pb-1 text-sm font-bold border-b-2 border-gray-200'>
              <p>How can the past questions help with exam preparation?</p>
            </div>

            <div className='my-4 text-sm'>
              <p>
                They offer a practical way to test your knowledge and familiarize yourself with the
                format and types of questions you'll encounter in exams.
              </p>
            </div>
          </div>

          <div className='bg-gray-100 p-2 border border-gray-300 rounded'>
            <div className='mb-1 pb-1 text-sm font-bold border-b-2 border-gray-200'>
              <p>What topics are covered in the lecture banks?</p>
            </div>

            <div className='my-4 text-sm'>
              <p>
                The lecture banks cover a wide range of topics, including basic sciences, clinical
                rotations, pharmacology, pathology and more.
              </p>
            </div>
          </div>

          <div className='bg-gray-100 p-2 border border-gray-300 rounded'>
            <div className='mb-1 pb-1 text-sm font-bold border-b-2 border-gray-200'>
              <p>What topics are covered in the lecture banks?</p>
            </div>

            <div className='my-4 text-sm'>
              <p>
                The lecture banks cover a wide range of topics, including basic sciences, clinical
                rotations, pharmacology, pathology and more.
              </p>
            </div>
          </div>

          <div className='bg-gray-100 p-2 border border-gray-300 rounded'>
            <div className='mb-1 pb-1 text-sm font-bold border-b-2 border-gray-200'>
              <p>What topics are covered in the lecture banks?</p>
            </div>

            <div className='my-4 text-sm'>
              <p>
                The lecture banks cover a wide range of topics, including basic sciences, clinical
                rotations, pharmacology, pathology and more.
              </p>
            </div>
          </div>

          <div className='bg-gray-100 p-2 border border-gray-300 rounded'>
            <div className='mb-1 pb-1 text-sm font-bold border-b-2 border-gray-200'>
              <p>What topics are covered in the lecture banks?</p>
            </div>

            <div className='my-4 text-sm'>
              <p>
                The lecture banks cover a wide range of topics, including basic sciences, clinical
                rotations, pharmacology, pathology and more.
              </p>
            </div>
          </div>

          <div className='bg-gray-100 p-2 border border-gray-300 rounded'>
            <div className='mb-1 pb-1 text-sm font-bold border-b-2 border-gray-200'>
              <p>What topics are covered in the lecture banks?</p>
            </div>

            <div className='my-4 text-sm'>
              <p>
                The lecture banks cover a wide range of topics, including basic sciences, clinical
                rotations, pharmacology, pathology and more.
              </p>
            </div>
          </div>

          <div className='bg-gray-100 p-2 border border-gray-300 rounded'>
            <div className='mb-1 pb-1 text-sm font-bold border-b-2 border-gray-200'>
              <p>What topics are covered in the lecture banks?</p>
            </div>

            <div className='my-4 text-sm'>
              <p>
                The lecture banks cover a wide range of topics, including basic sciences, clinical
                rotations, pharmacology, pathology and more.
              </p>
            </div>
          </div>

          <div className='bg-gray-100 p-2 border border-gray-300 rounded'>
            <div className='mb-1 pb-1 text-sm font-bold border-b-2 border-gray-200'>
              <p>What topics are covered in the lecture banks?</p>
            </div>

            <div className='my-4 text-sm'>
              <p>
                The lecture banks cover a wide range of topics, including basic sciences, clinical
                rotations, pharmacology, pathology and more.
              </p>
            </div>
          </div>

          <div className='bg-gray-100 p-2 border border-gray-300 rounded'>
            <div className='mb-1 pb-1 text-sm font-bold border-b-2 border-gray-200'>
              <p>What topics are covered in the lecture banks?</p>
            </div>

            <div className='my-4 text-sm'>
              <p>
                The lecture banks cover a wide range of topics, including basic sciences, clinical
                rotations, pharmacology, pathology and more.
              </p>
            </div>
          </div>
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

            <div className=''>
              <img src={faqImg} alt='Woman' className='mt-10 max-w-[85%] mx-auto lg:mt-0' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default faq;
