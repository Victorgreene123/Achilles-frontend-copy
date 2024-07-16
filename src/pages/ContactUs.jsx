import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faPhone,
  faSpinner,
  faTimes,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import boy from "../Assets/boy.PNG";

import { useSelector } from "react-redux";

const ContactUs = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("First Name is required!"),
    lname: Yup.string().required("Last Name is required!"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string().required("This field is empty"),
    school: Yup.string().required("This field is empty!"),
    enquiry: Yup.string().required("This field is empty!"),
  });

  const initialValues = {
    fname: "",
    lname: "",
    email: "",
    school: "",
    subject: "",
    enquiry: "",
  };

  const baseURL = useSelector((state) => state.baseURL);
  const endPoint = `${baseURL}contact/getintouch`;

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post(endPoint, values);
      // console.log("Response:", response.data);
      setResponseMessage(response.data.message || "Form submitted successfully!");
      setIsSuccess(true);
      setShowModal(true);
      resetForm();
    } catch (error) {
      // console.error("Error submitting form:", error);
      setResponseMessage("There was an error submitting the form.");
      setIsSuccess(false);
      setShowModal(true);
    } finally {
      setSubmitting(false);
    }
    // console.log(values);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className='mt-12 mb-12 max-w-[80%] mx-auto relative sm:max-w-[75%] lg:max-w-[90%] lg:flex gap-14 justify-between'>
        <div className='mb-24 lg:mb-0 grow'>
          <div>
            <h1 className='text-gray-800 text-2xl font-bold mb-2 sm:text-4xl md:text-5xl lg:text-3xl xl:text-5xl'>
              Get in touch with us
            </h1>
            <p className='text-sm mb-6 md:text-base lg:text-base'>
              Our support team is on standby to address all your enquiries.
            </p>
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className='lg:flex justify-between gap-6'>
                  <div className='grow'>
                    <Field
                      type='text'
                      name='fname'
                      placeholder='First name'
                      className='text-sm py-3 pl-4 w-full mb-5 bg-gray-100 border-2 border-transparent outline-none focus:border-[#2f4ca3]'
                    />
                    <ErrorMessage
                      name='fname'
                      component='div'
                      className='text-red-500 text-sm mb-2'
                    />
                  </div>

                  <div className='grow'>
                    <Field
                      type='text'
                      name='lname'
                      placeholder='Last name'
                      className='text-sm py-3 pl-4 w-full mb-5 bg-gray-100 border-2 border-transparent outline-none focus:border-[#2f4ca3]'
                    />

                    <ErrorMessage
                      name='lname'
                      component='div'
                      className='text-red-500 text-sm mb-2'
                    />
                  </div>
                </div>

                <div>
                  <Field
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='text-sm py-3 pl-4 w-full mb-5 bg-gray-100 border-2 border-transparent outline-none focus:border-[#2f4ca3]'
                  />
                  <ErrorMessage
                    name='email'
                    component='div'
                    className='text-red-500 text-sm mb-2'
                  />

                  <Field
                    type='text'
                    name='school'
                    placeholder='School'
                    className='text-sm py-3 pl-4 w-full mb-5 bg-gray-100 border-2 border-transparent outline-none focus:border-[#2f4ca3]'
                  />
                  <ErrorMessage
                    name='school'
                    component='div'
                    className='text-red-500 text-sm mb-2'
                  />

                  <Field
                    type='text'
                    name='subject'
                    placeholder='Subject (Area of Request)'
                    className='text-sm py-3 pl-4 w-full mb-5 bg-gray-100 border-2 border-transparent outline-none focus:border-[#2f4ca3]'
                  />
                  <ErrorMessage
                    name='subject'
                    component='div'
                    className='text-red-500 text-sm mb-2'
                  />

                  <Field
                    as='textarea'
                    name='enquiry'
                    placeholder='How can we support you?'
                    className='text-sm py-3 pl-4 w-full mb-5 bg-gray-100 border-2 border-transparent outline-none focus:border-[#2f4ca3]'
                    rows={4}
                  />
                  <ErrorMessage
                    name='enquiry'
                    component='div'
                    className='text-red-500 text-sm mb-2'
                  />
                </div>

                <div className='bg-[#2f4ca3] text-white text-center transition-all duration-[0.3s] hover:bg-blue-900'>
                  <button type='submit' disabled={isSubmitting} className='w-full py-2'>
                    {isSubmitting && <FontAwesomeIcon icon={faSpinner} className='animate-spin' />}
                    &nbsp; SUBMIT
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* CONTACTS - PHONE / WHATSAPP / EMAIL / IMAGE */}
        <div className='self-end flex-none'>
          <div className='flex flex-col gap-8 pb-12 sm:flex-row sm:justify-between'>
            <div className='flex-none'>
              <div className='text-sm flex gap-2 items-center mb-2 lg:text-base'>
                <FontAwesomeIcon icon={faPhone} className='text-[#f18337]' />
                <p className='text-[#f18337] font-bold'>CALL</p>
              </div>

              <div className='text-sm'>
                <p>
                  <a href='tel:+2349069556424'> +234-906-955-6424</a>
                </p>
                <p>
                  <a href='tel:+2348108287800'>+234-810-828-7800</a>
                </p>
              </div>
            </div>

            <div className='flex-none'>
              <div className='text-sm flex gap-2 items-center mb-2 lg:text-base'>
                <FontAwesomeIcon icon={faPhone} className='text-[#f18337]' />
                <p className='text-[#f18337] font-bold'>WHATSAPP</p>
              </div>

              <div className='text-sm'>
                <p>
                  <a href='https://wa.me/09102184183'>+234 910 218 4183</a>
                </p>
                <p>
                  <a href='https://wa.me/08105388080'>+234 810 538 8080</a>
                </p>
              </div>
            </div>

            <div className='flex-initial'>
              <div className='text-sm flex gap-2 items-center mb-2 lg:text-base'>
                <FontAwesomeIcon icon={faEnvelope} className='text-[#f18337]' />
                <p className='text-[#f18337] font-bold'>EMAIL</p>
              </div>

              <div>
                <p>
                  <a
                    href='mailto:support@achillesdrill.com
              '
                  >
                    support@achillesdrill.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div>
            <img src={boy} alt='Boy PNG' className='w-full' />
          </div>
        </div>
      </div>

      {/* Render the response message */}
      {showModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-20'>
          <div className='relative bg-white w-[90%] max-w-lg mx-auto p-8 rounded-lg shadow-lg'>
            <button
              onClick={closeModal}
              className='absolute top-4 right-4 text-gray-600 hover:text-gray-900'
            >
              <FontAwesomeIcon icon={faTimes} size='lg' />
            </button>
            <div
              className={`flex items-center justify-center mb-4 ${
                isSuccess ? "text-[#214198]" : "text-red-600"
              }`}
            >
              <FontAwesomeIcon
                icon={isSuccess ? faCheckCircle : faTimesCircle}
                className={`text-6xl mr-4 ${
                  isSuccess ? "bg-[#214198]" : "bg-red-600"
                } text-white p-3 rounded-full`}
              />
            </div>
            <p className={`text-lg text-center ${isSuccess ? "text-[#214198]" : "text-red-600"}`}>
              {responseMessage}
            </p>
            <button
              onClick={closeModal}
              className={`mt-6 w-full py-2 rounded-lg ${
                isSuccess ? "bg-[#214198]" : "bg-red-600"
              } text-white text-lg hover:${
                isSuccess ? "bg-blue-700" : "bg-red-700"
              } transition-colors duration-300`}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactUs;
