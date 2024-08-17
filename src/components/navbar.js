import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faTimes,
  faCheckCircle,
  faTimesCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";
import { PiClipboardBold, PiClipboardDuotone } from "react-icons/pi";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  const [isFormModalVisible, setFormModalVisible] = useState(false);
  const [isResponseModalVisible, setResponseModalVisible] = useState(false);
  const [submissionResponse, setSubmissionResponse] = useState(null);
  const [isSuccess, setIsSuccess] = useState(true);

  const openFormModal = () => {
    setFormModalVisible(true);
    console.log("Form Modal Opened");
  };

  const closeFormModal = () => {
    setFormModalVisible(false);
    console.log("Form Modal Closed");
  };

  const openResponseModal = () => {
    setResponseModalVisible(true);
    console.log("Response Modal Opened");
  };

  const closeResponseModal = () => {
    setResponseModalVisible(false);
    console.log("Response Modal Closed");
  };

  const baseURL = useSelector((state) => state.baseUrl);
  const endPoint = `https://api.achillesdrill.com/waitlist/join`;

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(endPoint, values);
      setSubmissionResponse(response.data.message);
      setIsSuccess(true);
      resetForm();
      closeFormModal();
      openResponseModal();
    } catch (error) {
      if (error.message === "Network Error") {
        setSubmissionResponse("Please Check Your Network and Try Again!");
      } else {
        setSubmissionResponse(error.response?.data.message || "An error occurred");
      }
      setIsSuccess(false);
      closeFormModal();
      openResponseModal();
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    name: Yup.string().required("Full name is required"),
  });

  const FormModal = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-20'>
        <div className='bg-white p-8 rounded-md w-[80%] mx-auto md:w-[70%] lg:w-[40%]'>
          <div className='relative mb-6'>
            <h2 className='font-bold'>Dr. Drills Waitlist</h2>
            <button className='absolute top-0 right-0' onClick={onClose}>
              <FontAwesomeIcon icon={faTimes} size='lg' />
            </button>
          </div>

          <Formik
            initialValues={{ email: "", fullName: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className='mb-4'>
                  <Field
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='w-full text-sm p-2 border border-gray-300 rounded outline-none'
                  />
                  <ErrorMessage
                    name='email'
                    component='div'
                    className='text-red-500 text-sm mt-1'
                  />
                </div>

                <div className='mb-4'>
                  <Field
                    type='text'
                    name='name'
                    placeholder='Full Name'
                    className='w-full p-2 text-sm border border-gray-300 rounded outline-none'
                  />
                  <ErrorMessage name='name' component='div' className='text-red-500 text-sm mt-1' />
                </div>

                <div className='bg-blue-600 text-white text-center rounded transition-all duration-[0.3s] hover:bg-blue-900'>
                  <button type='submit' disabled={isSubmitting} className='w-full py-2'>
                    {isSubmitting && <FontAwesomeIcon icon={faSpinner} className='animate-spin' />}
                    &nbsp; SUBMIT
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  };

  const ResponseModal = ({ isVisible, onClose, message, isSuccess }) => {
    if (!isVisible) return null;

    const getTextColor = () => {
      if (
        message === "You are already on the Dr. Drills Wait-List! Keep watching out!" ||
        message === "You have just joined the Dr. Drills Wait-List. Watch out for more information!"
      ) {
        return "text-[#214198]";
      } else if (message === "Network Error") {
        return "text-red-500";
      }
      return isSuccess ? "text-[#214198]" : "text-red-500";
    };

    const getIcon = () => {
      if (message === "You are already on the Dr. Drills Wait-List! Keep watching out!") {
        return <FontAwesomeIcon icon={faExclamationCircle} className='mr-2' />;
      } else if (message === "Network Error") {
        return <FontAwesomeIcon icon={faTimesCircle} className='mr-2' />;
      }
      return isSuccess ? (
        <FontAwesomeIcon icon={faCheckCircle} className='mr-2' />
      ) : (
        <FontAwesomeIcon icon={faTimesCircle} className='mr-2' />
      );
    };

    return (
      <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-30'>
        <div className='bg-white p-8 rounded-md w-[80%] mx-auto md:w-[70%] lg:w-[40%] shadow-lg transform transition-all'>
          <div className='text-center'>
            <div className={`${getTextColor()} text-6xl mb-8`}>{getIcon()}</div>

            <div
              className={`text-lg flex flex-col items-center justify-center mb-10 ${getTextColor()}`}
            >
              {message}
            </div>
          </div>

          <button
            className='bg-blue-600 text-white text-center py-2 mt-4 w-full rounded transition-transform transform hover:scale-105'
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const getNavLinkClass = (path) => {
    return location.pathname === path ? "text-blue-800 font-bold" : "text-black-800";
  };

  return (
    <>
      <nav className='bg-white sticky top-0 w-full p-2.5 flex items-center shadow z-10'>
        <Link to='/'>
          <img
            src='/images/achelis.png'
            alt='Achilles drill logo'
            className='h-11 ml-2 w-23 lg:ml-10'
          />
        </Link>
        <div className='flex items-center justify-between w-full'>
          <div className='hidden md:flex items-center ml-5 w-full'>
            <ul className='flex justify-center w-3/5 gap-7 text-sm m-0 p-0'>
              <li className={getNavLinkClass("/about")}>
                <Link to='/about'>About us</Link>
              </li>
              <li className={getNavLinkClass("/productsPage")}>
                <Link to='/productsPage'>Products</Link>
              </li>
              <li className={getNavLinkClass("/blogs")}>
                <Link to='/blogs'>Blog</Link>
              </li>
              <li className={getNavLinkClass("/faq")}>
                <Link to='/faq'>FAQS</Link>
              </li>
            </ul>
            <div className='flex items-center justify-center gap-10 ml-10 w-1/3'>
              <Link to='/contactus'>
                <li className='flex items-center text-blue-800'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='19'
                    viewBox='0 0 20 19'
                    fill='none'
                  >
                    <g clipPath='url(#clip0_394_976)'>
                      <path
                        d='M5.13882 15.0417L1.59216 17.8125V3.16667C1.59216 2.9567 1.67604 2.75534 1.82534 2.60687C1.97464 2.45841 2.17713 2.375 2.38827 2.375H16.7182C16.9293 2.375 17.1318 2.45841 17.2811 2.60687C17.4304 2.75534 17.5143 2.9567 17.5143 3.16667V14.25C17.5143 14.46 17.4304 14.6613 17.2811 14.8098C17.1318 14.9583 16.9293 15.0417 16.7182 15.0417H5.13882ZM4.58792 13.4583H15.9221V3.95833H3.18438V14.5548L4.58792 13.4583ZM8.75713 7.91667H10.3493V9.5H8.75713V7.91667ZM5.5727 7.91667H7.16492V9.5H5.5727V7.91667ZM11.9416 7.91667H13.5338V9.5H11.9416V7.91667Z'
                        fill='#2149B7'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_394_976'>
                        <rect width='19.1066' height='19' fill='white' />
                      </clipPath>
                    </defs>
                  </svg>
                  Contact
                </li>
              </Link>
              <a href="https://quiz.achillesdrill.com">
              <button
               
                className='flex items-center bg-blue-800  text-sm text-white border border-blue-800 rounded-full p-2.5 h-10 gap-1.5'
              >
                                            <PiClipboardBold />

               Take a Quiz
              </button></a>
            </div>
          </div>
          <div className='md:hidden ml-auto'>
            <button
              type='button'
              className='text-black-800 hover:text-gray-300 focus:text-gray-300 focus:outline-none'
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16m-7 6h7' />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className={`md:hidden bg-white fixed top-0 left-0 w-full h-screen z-20 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className='p-8'>
            <div className='flex justify-end mb-5'>
              <button
                type='button'
                className='text-blue-800 hover:text-gray-300 focus:text-gray-300 focus:outline-none'
                onClick={closeMobileMenu}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth={2}
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                </svg>
              </button>
            </div>

            <ul className='flex flex-col space-y-5 text-center text-blue-800 text-2xl'>
              <li className={getNavLinkClass("/")}>
                <Link to='/' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className={getNavLinkClass("/about")}>
                <Link to='/about' onClick={closeMobileMenu}>
                  About us
                </Link>
              </li>
              <li className={getNavLinkClass("/productsPage")}>
                <Link to='/productsPage' onClick={closeMobileMenu}>
                  Products
                </Link>
              </li>
              <li className={getNavLinkClass("/blogs")}>
                <Link to='/blogs' onClick={closeMobileMenu}>
                  Blog
                </Link>
              </li>
              <li className={getNavLinkClass("/faq")}>
                <Link to='/faq' onClick={closeMobileMenu}>
                  FAQS
                </Link>
              </li>
              <li>
                <Link to='/contactus' onClick={closeMobileMenu}>
                  Contact us
                </Link>
              </li>
              <li>
              <a href="https://quiz.achillesdrill.com">

                <button
                  className='bg-[#214198] items-center mx-auto flex text-white py-2 px-5 rounded-full'
                  onClick={() => {
                    closeMobileMenu();
                  
                  }}
                >
                               <PiClipboardBold />

                  Take a Quiz
                </button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <FormModal isVisible={isFormModalVisible} onClose={closeFormModal} />
      <ResponseModal
        isVisible={isResponseModalVisible}
        onClose={closeResponseModal}
        message={submissionResponse}
        isSuccess={isSuccess}
      />
    </>
  );
}
