import React, { useState } from "react";
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
import Youtube from "../components/YoutubeVid";

const ProductsPage = () => {
  const [activeSection, setActiveSection] = useState("LECTURE_BANKS");
  const [isFormModalVisible, setFormModalVisible] = useState(false);
  const [isResponseModalVisible, setResponseModalVisible] = useState(false);
  const [submissionResponse, setSubmissionResponse] = useState(null);
  const [isSuccess, setIsSuccess] = useState(true);

  const openFormModal = () => setFormModalVisible(true);
  const closeFormModal = () => setFormModalVisible(false);
  const openResponseModal = () => setResponseModalVisible(true);
  const closeResponseModal = () => setResponseModalVisible(false);

  const endPoint = "https://achilles-web-be.onrender.com/waitlist/join";

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(endPoint, values);
      // console.log(response.data);
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

  return (
    <div className='relative'>
      <div className='bg-[#F3F5FA] pt-12'>
        <div className='max-w-[90%] mx-auto pb-12 sm:max-w-[85%] lg:pb-24'>
          <p className='text-xs text-white font-bold bg-[#214198] py-2 px-8 inline-block mb-8 rounded-sm lg:text-sm'>
            PRODUCTS
          </p>

          <div className='md:max-w-[78%] lg:max-w-[85%] xl:max-w-[60%]'>
            <h1 className='text-3xl text-[#081640] font-bold tracking-tighter sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[72px] xl:text-[3.5rem]'>
              Shaping Africa's <span className='text-[#f18337]'>med excellence</span> 
              </h1> <h1 className="text-3xl text-[#081640] font-bold tracking-tighter sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[72px] xl:text-[3.5rem]" > with our{" "}
              <span className='text-[#f18337]'>product lines</span>
            </h1>
          </div>
        </div>
      </div>

      {/* NAVIGATION BUTTONS */}
      <div className='max-w-[90%] mx-auto sm:max-w-[85%]'>
        <div className='mt-8 mb-8 flex flex-col gap-6 lg:justify-between lg:flex-row lg:mt-10'>
          <button
            className={`text-xs font-bold text-center py-3 w-full lg:text-sm lg:text-left ${
              activeSection === "LECTURE_BANKS"
                ? "active text-white border-b-2 border-blue-200"
                : "text-[#535353] border-b-2 border-blue-200"
            }`}
            onClick={() => setActiveSection("LECTURE_BANKS")}
          >
            LECTURE BANKS
          </button>

          <button
            className={`text-xs font-bold text-center py-3 w-full lg:text-sm lg:text-left ${
              activeSection === "PAST_QUESTIONS"
                ? "active text-white border-b-2 border-blue-200"
                : "text-[#535353] border-b-2 border-blue-200"
            }`}
            onClick={() => setActiveSection("PAST_QUESTIONS")}
          >
            PAST QUESTIONS
          </button>

          <button
            className={`text-xs font-bold text-center py-3 w-full lg:text-sm lg:text-left ${
              activeSection === "YOUTUBE_VIDEOS"
                ? "active text-white border-b-2 border-blue-200"
                : "text-[#535353] border-b-2 border-blue-200"
            }`}
            onClick={() => setActiveSection("YOUTUBE_VIDEOS")}
          >
            YOUTUBE VIDEOS
          </button>

          <button
            className={`text-xs font-bold text-center py-3 w-full lg:text-sm lg:text-left ${
              activeSection === "DR_DRILLS"
                ? "active text-white border-b-2 border-blue-200"
                : "text-[#535353] border-b-2 border-blue-200"
            }`}
            onClick={() => setActiveSection("DR_DRILLS")}
          >
            DR. DRILLS &#40;coming soon&#41;
          </button>
        </div>

        {/* LECTURE BANKS */}
        {activeSection === "LECTURE_BANKS" && (
          <div className='mb-40 lg:flex gap-4 align-stretch'>
            <div className='mb-6 lg:flex-[3]'>
              <img
                src='/images/lecturebank.png'
                alt='Lecture Bank'
                className='w-full object-cover sm:h-64 md:h-72 lg:h-full'
              />
            </div>

            <div className='shrink lg:flex-[3]'>
              <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                <div className='bg-[#dcdcf5] border border-blue-400 rounded-md'>
                  <img
                    src='/images/products/neuroatonomy.jpg'
                    alt='Neuro Anatomy'
                    className='w-[70%] mx-auto sm:h-64 md:h-72'
                  />
                </div>

                <div className='bg-[#dcdcf5] border border-blue-400 rounded-md'>
                  <img
                    src='/images/products/anatomyofthehead.jpg'
                    alt='Anatomy of the Head'
                    className='w-[70%] mx-auto sm:h-64 md:h-72'
                  />
                </div>

                <div className='bg-[#dcdcf5] border border-blue-400 rounded-md'>
                  <img
                    src='/images/products/1st Medical Lecture Bank Discount-01.jpg'
                    alt='Medical Lecture Bank Discount'
                    className='w-[70%] mx-auto sm:h-64 md:h-72'
                  />
                </div>

                <div className='bg-[#dcdcf5] border border-blue-400 rounded-md'>
                  <img
                    src='/images/products/embryology.jpg'
                    alt='Embryology'
                    className='w-[70%] mx-auto sm:h-64 md:h-72'
                  />
                </div>
              </div>

              <div className='bg-blue-600 text-center rounded-full mt-4 transition-all duration-300 hover:bg-blue-800'>
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
          <div className='lg:flex gap-4 mb-40'>
            <div className='mb-2 bg-[#fdede3] flex-1'>
              <img
                src='/images/products/Pastquestion1 (1) (2)_prev_ui.png'
                alt='Past Question 1'
                className='w-full sm:h-64 md:h-72 lg:h-full'
              />
            </div>

            <div className='flex-1'>
              <div className='bg-[#f0dee1fa]'>
                <img
                  src='/images/products/Pastquestion1 (1) (3)_prev_ui.png'
                  alt='Past Question 2'
                  className='mb-1 w-full sm:h-64 object-cover object-top'
                />
              </div>

              <div className='bg-[#faefe8]'>
                <img
                  src='/images/products/SAVE_20240708_183352_prev_ui.png'
                  alt='Past Question 3'
                  className='w-full sm:h-64 object-cover object-top'
                />
              </div>

              <div className='bg-blue-600 text-center rounded-full mt-4 transition-all duration-300 hover:bg-blue-800'>
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
                <p className='text-white'>Learn FASTER in MED SCHOOL with ChatGPT</p>
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

              <div className='bg-blue-600 text-center rounded-full mt-10 transition-all duration-300 hover:bg-blue-800 lg:mt-12'>
                <a href='https://www.youtube.com/@ACHILLESDRILL/videos'>
                  <button className='text-xs text-white font-bold py-5 w-full h-full sm:text-sm'>
                    GO TO YOUTUBE
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}

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

              <div className='lg:w-[90%]'>
                <h3 className='text-blue-800 text-xl font-bold md:text-2xl lg:text-4xl lg:leading-normal'>
                  Your personal <span className='text-orange-600'>smart AI study buddy</span>.
                </h3>
              </div>

              <div className='bg-blue-600 text-center rounded-full mt-4 transition-all duration-300 hover:bg-blue-800 md:mt-10 lg:mt-20'>
                <button
                  className='text-xs text-white font-bold py-5 w-full h-full sm:text-sm'
                  onClick={openFormModal}
                >
                  GET NOTIFIED
                </button>
              </div>
            </div>
          </div>
        )}

        {submissionResponse && (
          <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-30'>
            <div className='bg-white p-8 rounded-md w-[80%] mx-auto lg:w-[40%]'>
              <div className='text-center'>
                <p className='text-lg'>{submissionResponse}</p>
              </div>

              <button
                className='bg-blue-600 text-white text-center py-2 mt-4 w-full rounded'
                onClick={() => setSubmissionResponse(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        <div className='relative'>
          {isFormModalVisible && (
            <FormModal isVisible={isFormModalVisible} onClose={closeFormModal} />
          )}
          {submissionResponse && (
            <ResponseModal
              isVisible={!!submissionResponse}
              message={submissionResponse}
              isSuccess={isSuccess}
              onClose={() => setSubmissionResponse(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
