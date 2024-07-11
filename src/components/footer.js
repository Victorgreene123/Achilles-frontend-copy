import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faPhone,
  faSpinner,
  faTimes,
  faCheckCircle,
  faTimesCircle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const [responseMessage, setResponseMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [isInfo , setisInfo] = useState(true)
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
  });

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("https://achilles-web-be.onrender.com/newsletter/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.status === 200 || response.status === 300) {
          return response.json().then((data) => ({
            status: response.status,
            message: data.message,
          }));
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        if (data.status === 200) {
          setResponseMessage(data.message || "Form submitted successfully!");
          setIsSuccess(true);
          
        } else if (data.status === 300) {
          setResponseMessage(data.message || "You have already subscribed to our newsletter!");
          setIsSuccess(false);
          setisInfo(true);
        }
        setShowModal(true);
        setFormData({
          fullname: "",
          email: "",
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setResponseMessage("An error occurred. Please try again.");
        setIsSuccess(false);
        setisInfo(false)
        setShowModal(true);
        setLoading(false);
      });
  };
  
  return (
    <footer className="font-open-sans bg-[#080F24] text-white py-16 px-10 box-border bottom-0">
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-40 w-full lg:w-4/5 box-border items-baseline">
          <div className="flex flex-col mb-10 lg:mb-0">
            <h3 className="text-sm font-bold">Company</h3>
            <ul className="p-0 mt-2">
              <li className="text-[#D4D4D4] text-sm mb-2">
                <Link to="/productsPage">Our Products</Link>
              </li>
              <li className="text-[#D4D4D4] text-sm mb-2"> <Link to="/about">About us</Link></li>
              <li className="text-[#D4D4D4] text-sm mb-2"> <Link to="/blogs">Blogs</Link></li>
              <li className="text-[#D4D4D4] text-sm mb-2"> <Link to="/faq">FAQs</Link></li>
            </ul>
          </div>
          <div className="flex flex-col mb-10 lg:mb-0">
            <h3 className="text-sm font-bold">Make a difference</h3>
            <ul className="p-0 mt-2">
              <li className="text-[#D4D4D4] text-sm mb-2">
                <a href="https://forms.gle/7JkeQgKhpCNoZ6176">
                Become an ambassador</a>
              </li>
              <li className="text-[#D4D4D4] text-sm mb-2"><a href="https://forms.gle/mnLB68U7Aam87VAU9">Volunteer</a></li>
              <li className="text-[#D4D4D4] text-sm mb-2"><a href="https://forms.gle/kaK1sHc3TeA9ptSNA">Sponsorship</a></li>
            </ul>
          </div>
          <div className="flex flex-col mb-10 lg:mb-0">
            <h3 className="text-sm font-bold">Contact Us</h3>
            <ul className="p-0 mt-2">
              <li className="text-[#D4D4D4] text-sm mb-2">
                support@achillesdrill.com
              </li>
              <li className="text-[#D4D4D4] text-sm mb-2">+234-906-955-6424</li>
              <li className="text-[#D4D4D4] text-sm mb-2">+234-810-828-7800</li>
              <li className="text-[#D4D4D4] text-sm mb-2">
                LUTH, Idiaraba, Lagos
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col justify-center w-full lg:w-1/2 box-border mt-10 lg:mt-0">
          <div className="bg-[#F18337] p-5 rounded-md w-full lg:w-4/5 mx-auto">
            <h3 className="text-base mt-0 text-[#2C1403]">
              Subscribe to our Newsletter
            </h3>
            <form className="block mt-2  " onSubmit={handleSubmit}>
              <input
                className="w-4/5 py-2 px-4 text-sm text-black"
                placeholder="Input your Full name"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
              <input
                className="w-4/5 py-2 px-4 text-sm mt-2 text-black"
                placeholder="Input your email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="block mt-1 bg-[#080F24] px-3 py-2 border border-[#080F24] rounded-r-md"
                disabled={loading}
              >
                {loading ? (
                  <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
            <p className="text-sm text-[#230F01] my-2">
              Get latest exciting updates!
            </p>
          </div>
          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-20">
              <div className="relative bg-white w-[90%] max-w-lg mx-auto p-8 rounded-lg shadow-lg">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                >
                  <FontAwesomeIcon icon={faTimes} size="lg" />
                </button>
                <div
                  className={`flex items-center justify-center mb-4 ${
                    isSuccess ?  "text-blue-600" : isInfo ? "text-red-300" :"text-red-600"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={isSuccess ? faCheckCircle : isInfo ? faInfoCircle : faTimesCircle}
                    className={`text-6xl mr-4 ${
                      isSuccess ? "bg-blue-600" : isInfo ? "bg-red-600" :"bg-red-600"
                    } text-white p-3 rounded-full`}
                  />
                </div>
                <p
                  className={`text-lg text-center ${
                    isSuccess ? "text-blue-600" : isInfo ? "text-red-600" : "text-red-600"
                  }`}
                >
                  {responseMessage}
                </p>
                <button
                  onClick={closeModal}
                  className={`mt-6 w-full py-2 rounded-lg ${
                    isSuccess ? "bg-blue-600" : isInfo ? "bg-red-600" :"bg-red-600"
                  } text-white text-lg hover:${
                    isSuccess ? "bg-blue-700" : isInfo ? "bg-red-700" : "bg-red-700"
                  } transition-colors duration-300`}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr className="border-t border-[#D4D4D4] my-5"></hr>
      <div className="flex flex-col lg:flex-row items-center justify-between mt-5">
        <img
          src="/images/achilleslogowhite.png"
          alt="logo"
          className="w-[97px] h-[42.083px] mb-5 lg:mb-0"
        ></img>
        <div className="mb-5 lg:mb-0">
          <ul className="flex gap-3 lg:gap-10 text-sm">
            <li>Terms</li>
            <li>Privacy</li>
            
            <li>Copyright @2024 Achilles Drill</li>
          </ul>
        </div>
        <div className="flex gap-5">
          <a href="https://www.linkedin.com/company/achilles-drill/">
            <img
              src="/images/linkedin.svg"
              alt="LinkedIn"
              className="w-6 h-6 p-1 border border-[#D4D4D4] rounded-full"
            ></img>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61550556556677&mibextid=LQQJ4d">
            <img
              src="/images/facebook.svg"
              alt="Facebook"
              className="w-6 h-6 p-1 border border-[#D4D4D4] rounded-full"
            ></img>
          </a>
          <a href="https://x.com/AchillesDrill?t=tV_ZBZQDe4oJvJ-9TYP8Ww&s=09">
            <img
              src="/images/twitter.png"
              alt="X"
              className="w-6 h-6 p-1 border border-[#D4D4D4] rounded-full"
            ></img>
          </a>
          <a href="https://www.instagram.com/achilles_drill?igsh=MW1qZ2o4ZzFjZWtpYg%3D%3D&utm_source=qr">
            <img
              src="/images/instagram.svg"
              alt="Instagram"
              className="w-6 h-6 p-1 border border-[#D4D4D4] rounded-full"
            ></img>
          </a>
          <a href="https://youtube.com/@achillesdrill?si=kgnIUGYSTutwdQRj">
            <img
              src="/images/youtube.svg"
              alt="YouTube"
              className="w-6 h-6 p-1 border border-[#D4D4D4] rounded-full"
            ></img>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
