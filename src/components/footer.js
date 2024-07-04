// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="font-open-sans bg-[#080F24] text-white py-16 px-10 box-border bottom-0">
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-40 w-full lg:w-4/5 box-border items-baseline">
          <div className="flex flex-col mb-10 lg:mb-0">
            <h3 className="text-sm font-bold">Company</h3>
            <ul className="p-0 mt-2">
              <li className="text-[#D4D4D4] text-sm mb-2"><Link to='/productsPage'>Our Products</Link></li>
              <li className="text-[#D4D4D4] text-sm mb-2">About us</li>
              <li className="text-[#D4D4D4] text-sm mb-2">Blogs</li>
              <li className="text-[#D4D4D4] text-sm mb-2">FAQs</li>
            </ul>
          </div>
          <div className="flex flex-col mb-10 lg:mb-0">
            <h3 className="text-sm font-bold">Make a difference</h3>
            <ul className="p-0 mt-2">
              <li className="text-[#D4D4D4] text-sm mb-2">
                Become an ambassador
              </li>
              <li className="text-[#D4D4D4] text-sm mb-2">Volunteer</li>
              <li className="text-[#D4D4D4] text-sm mb-2">Sponsorship</li>
            </ul>
          </div>
          <div className="flex flex-col mb-10 lg:mb-0">
            <h3 className="text-sm font-bold">Contact Us</h3>
            <ul className="p-0 mt-2">
              <li className="text-[#D4D4D4] text-sm mb-2">
                contact@achellisdrill.com
              </li>
              <li className="text-[#D4D4D4] text-sm mb-2">+234-xxx-xxx-xxxx</li>
              <li className="text-[#D4D4D4] text-sm mb-2">+234-xxx-xxx-xxxx</li>
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
            <form className="block mt-2">
            <input
                className="w-4/5 py-2 px-4 text-sm"
                placeholder="Input your Full name"
              />
              <input
                className="w-4/5 py-2 px-4 text-sm mt-2"
                placeholder="Input your email address"
              />
              <button
                type="button"
                className="block mt-1 bg-[#080F24] px-3 py-2 border border-[#080F24] rounded-r-md"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-[#230F01] my-2">
              Get latest exciting updates!
            </p>
          </div>
        </div>
      </div>
      <hr className="border-t border-[#D4D4D4] my-5"></hr>
      <div className="flex flex-col lg:flex-row items-center justify-between mt-5">
        <img
          src="/images/achelis.png"
          alt="logo"
          className="w-[97px] h-[42.083px] mb-5 lg:mb-0"
        ></img>
        <div className="mb-5 lg:mb-0">
          <ul className="flex gap-5 lg:gap-10 text-sm">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Copyright @2024 Achilles Drill</li>
          </ul>
        </div>
        <div className="flex gap-5">
          <a href="https://achilles-web-be.onrender.com/docs">
            <img
              src="/images/linkedin.svg"
              alt="LinkedIn"
              className="w-6 h-6 p-1 border border-[#D4D4D4] rounded-full"
            ></img>
          </a>
          <a href="https://achilles-web-be.onrender.com/docs">
            <img
              src="/images/facebook.svg"
              alt="Facebook"
              className="w-6 h-6 p-1 border border-[#D4D4D4] rounded-full"
            ></img>
          </a>
          <a href="https://achilles-web-be.onrender.com/docs">
            <img
              src="/images/x.svg"
              alt="X"
              className="w-6 h-6 p-1 border border-[#D4D4D4] rounded-full"
            ></img>
          </a>
          <a href="https://achilles-web-be.onrender.com/docs">
            <img
              src="/images/instagram.svg"
              alt="Instagram"
              className="w-6 h-6 p-1 border border-[#D4D4D4] rounded-full"
            ></img>
          </a>
          <a href="https://achilles-web-be.onrender.com/docs">
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
