import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const getNavLinkClass = (path) => {
    return location.pathname === path ? 'text-blue-800 font-bold' : 'text-black-800';
  };

  return (
    <>
      <nav className='bg-white sticky top-0 w-full p-2.5 flex items-center shadow z-10'>
        <Link to='/'>
          <img src='/images/achelis.png' alt='Achilles drill logo' className='h-11 ml-2 w-23 lg:ml-10' />
        </Link>
        <div className='flex items-center justify-between w-full'>
          <div className='hidden md:flex items-center ml-5 w-full'>
            <ul className='flex justify-center w-3/5 gap-7 text-sm m-0 p-0'>
              <li className={getNavLinkClass('/about')}>
                <Link to='/about'>About us</Link>
              </li>
              <li className={getNavLinkClass('/productsPage')}>
                <Link to='/productsPage'>Products</Link>
              </li>
              <li className={getNavLinkClass('/blogs')}>
                <Link to='/blogs'>Blog</Link>
              </li>
              <li className={getNavLinkClass('/faq')}>
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
              <button className='flex items-center bg-blue-800  text-sm text-white border border-blue-800 rounded-full p-2.5 h-10 gap-1.5'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                >
                  <path
                    opacity='0.2'
                    d='M20.25 4.5V19.5H3.75V4.5C3.75 4.10218 3.90804 3.72064 4.18934 3.43934C4.47064 3.15804 4.85218 3 5.25 3H18.75C19.1478 3 19.5294 3.15804 19.8107 3.43934C20.092 3.72064 20.25 4.10218 20.25 4.5Z'
                    fill='white'
                  />
                  <path
                    d='M21 13.5V19.5C21 19.6989 20.921 19.8897 20.7803 20.0303C20.6397 20.171 20.4489 20.25 20.25 20.25H3.75C3.55109 20.25 3.36032 20.171 3.21967 20.0303C3.07902 19.8897 3 19.6989 3 19.5V13.5C3 13.3011 3.07902 13.1103 3.21967 12.9697C3.36032 12.829 3.55109 12.75 3.75 12.75C3.94891 12.75 4.13968 12.829 4.28033 12.9697C4.42098 13.1103 4.5 13.3011 4.5 13.5V18.75H19.5V13.5C19.5 13.3011 19.579 13.1103 19.7197 12.9697C19.8603 12.829 20.0511 12.75 20.25 12.75C20.4489 12.75 20.6397 12.829 20.7803 12.9697C20.921 13.1103 21 13.3011 21 13.5ZM11.4694 14.0306C11.539 14.1004 11.6217 14.1557 11.7128 14.1934C11.8038 14.2312 11.9014 14.2506 12 14.2506C12.0986 14.2506 12.1962 14.2312 12.2872 14.1934C12.3783 14.1557 12.461 14.1004 12.5306 14.0306L16.2806 10.2806C16.3503 10.2109 16.4056 10.1282 16.4433 10.0372C16.481 9.94613 16.5004 9.84855 16.5004 9.75C16.5004 9.65145 16.481 9.55387 16.4433 9.46283C16.4056 9.37178 16.3503 9.28906 16.2806 9.21937C16.2109 9.14969 16.1282 9.09442 16.0372 9.0567C15.9461 9.01899 15.8485 8.99958 15.75 8.99958C15.6515 8.99958 15.5539 9.01899 15.4628 9.0567C15.3718 9.09442 15.2891 9.14969 15.2194 9.21937L12.75 11.6897V3C12.75 2.80109 12.671 2.61032 12.5303 2.46967C12.3897 2.32902 12.1989 2.25 12 2.25C11.8011 2.25 11.6103 2.32902 11.4697 2.46967C11.329 2.61032 11.25 2.80109 11.25 3V11.6897L8.78066 9.21937C8.71098 9.14969 8.62826 9.09442 8.53721 9.0567C8.44616 9.01899 8.34858 8.99958 8.25 8.99958C8.15145 8.99958 8.05387 9.01899 7.96283 9.0567C7.87178 9.09442 7.78906 9.14969 7.71937 9.21937C7.64969 9.28906 7.59442 9.37178 7.5567 9.46283C7.51899 9.55387 7.49958 9.65145 7.49958 9.75C7.49958 9.84855 7.51899 9.94613 7.5567 10.0372C7.59442 10.1282 7.64969 10.2109 7.71937 10.2806L11.4694 14.0306Z'
                    fill='white'
                  />
                </svg>
                Download App
              </button>
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
            <li>
              <Link to='/' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={closeMobileMenu}>
                About us
              </Link>
            </li>
            <li>
              <Link to='/productsPage' onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link to='/blogs' onClick={closeMobileMenu}>
                Blog
              </Link>
            </li>
            <li>
              <Link to='/faq' onClick={closeMobileMenu}>
                FAQS
              </Link>
            </li>
            <li>
              <Link to='/contactus' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
