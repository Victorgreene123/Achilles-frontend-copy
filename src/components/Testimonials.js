import React, { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import image1 from "../Assets/schools logos/image 19-1.png";
import eclipse1 from "../Assets/Ellipse 1.png";
import eclipse2 from "../Assets/Ellipse 1 (1).png";
import eclipse3 from "../Assets/Ellipse 1 (2).png";
import Testimonial from "./Testimonial";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
  const carouselRef = useRef(null);

  const testimonial = [
    {
      id: 1,
      head: "Totally Worth It",
      logo: image1,
      names: "Emmanuel K.",
      school: "MBBS, Unilag",
      message:
        "This product has been amazing for my medical school journey. The comprehensive lecture banks cover everything from basic sciences to clinical rotations. The past questions are invaluable for exam prep, providing practical knowledge tests. The YouTube videos are engaging and perfect for visual learners. I highly recommend it to any medical student aiming to excel.",
      image: eclipse1,
    },
    {
      id: 2,
      head: "Totally Worth It",
      logo: image1,
      names: "Emmanuel K.",
      school: "MBBS, Unilag",
      message:
        "This product has been amazing for my medical school journey. The comprehensive lecture banks cover everything from basic sciences to clinical rotations. The past questions are invaluable for exam prep, providing practical knowledge tests. The YouTube videos are engaging and perfect for visual learners. I highly recommend it to any medical student aiming to excel.",
      image: eclipse2,
    },
    {
      id: 3,
      head: "Totally Worth It",
      logo: image1,
      names: "Emmanuel K.",
      school: "MBBS, Unilag",
      message:
        "This product has been amazing for my medical school journey. The comprehensive lecture banks cover everything from basic sciences to clinical rotations. The past questions are invaluable for exam prep, providing practical knowledge tests. The YouTube videos are engaging and perfect for visual learners. I highly recommend it to any medical student aiming to excel.",
      image: eclipse3,
    },
    {
      id: 4,
      head: "Totally Worth It",
      logo: image1,
      names: "Emmanuel K.",
      school: "MBBS, Unilag",
      message:
        "This product has been amazing for my medical school journey. The comprehensive lecture banks cover everything from basic sciences to clinical rotations. The past questions are invaluable for exam prep, providing practical knowledge tests. The YouTube videos are engaging and perfect for visual learners. I highly recommend it to any medical student aiming to excel.",
      image: eclipse2,
    },
    {
      id: 5,
      head: "Totally Worth It",
      logo: image1,
      names: "Emmanuel K.",
      school: "MBBS, Unilag",
      message:
        "This product has been amazing for my medical school journey. The comprehensive lecture banks cover everything from basic sciences to clinical rotations. The past questions are invaluable for exam prep, providing practical knowledge tests. The YouTube videos are engaging and perfect for visual learners. I highly recommend it to any medical student aiming to excel.",
      image: eclipse3,
    },
    {
      id: 6,
      head: "Totally Worth It",
      logo: image1,
      names: "Emmanuel K.",
      school: "MBBS, Unilag",
      message:
        "This product has been amazing for my medical school journey. The comprehensive lecture banks cover everything from basic sciences to clinical rotations. The past questions are invaluable for exam prep, providing practical knowledge tests. The YouTube videos are engaging and perfect for visual learners. I highly recommend it to any medical student aiming to excel.",
      image: eclipse1,
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const CustomLeftArrow = ({ onClick, className }) => (
    <button
      onClick={onClick}
      className={`bg-white p-2 rounded-full ${className}`}
    >
      <svg
        width="47"
        height="35"
        viewBox="0 0 47 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.0876923 16.9026C0.165405 16.4946 0.349976 16.1546 0.641399 15.8826L17.3983 0L20.1377 3.20566L7.37329 15.2998H46.6572V19.642H7.37329L20.1377 31.7652L17.3983 35L0.641399 19.0883C0.349976 18.7968 0.165405 18.4666 0.0876923 18.0974C-0.0288773 17.6894 -0.0288773 17.2911 0.0876923 16.9026Z"
          fill="#C1C1C1"
        />
      </svg>
    </button>
  );

  const CustomRightArrow = ({ onClick, className }) => (
    <button
      onClick={onClick}
      className={`bg-white p-2 rounded-full ${className}`}
    >
      <svg
        width="48"
        height="35"
        viewBox="0 0 48 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M47.1018 16.9026C47.024 16.4946 46.8395 16.1546 46.5481 15.8826L29.7912 0L27.0518 3.20566L39.8162 15.2998H0.532227V19.642H39.8162L27.0518 31.7652L29.7912 35L46.5481 19.0883C46.8395 18.7968 47.024 18.4666 47.1018 18.0974C47.2183 17.6894 47.2183 17.2911 47.1018 16.9026Z"
          fill="#EE6B11"
        />
      </svg>
    </button>
  );

  return (
    <div className="relative py-20 px-10 lg:px-44 gap-10">
      {/* Top Arrows */}
      <div className="flex justify-end gap-2 pb-10">
        <CustomLeftArrow
          onClick={() => carouselRef.current.previous()}
          className="ml-2 mt-2"
        />
        <CustomRightArrow
          onClick={() => carouselRef.current.next()}
          className="mr-2 mt-2"
        />
      </div>

      <Carousel
        ref={carouselRef}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        keyBoardControl={true}
        customTransition="transform 0.7s ease"
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        customLeftArrow={
          <CustomLeftArrow onClick={() => carouselRef.current.previous()} />
        }
        customRightArrow={
          <CustomRightArrow onClick={() => carouselRef.current.next()} />
        }
      >
        {testimonial.map((item) => (
          <div key={item.id} className="mx-5">
            <Testimonial
              key={item.id}
              head={item.head}
              logo={item.logo}
              names={item.names}
              school={item.school}
              message={item.message}
              image={item.image}
            />
          </div>
        ))}
      </Carousel>

      {/* Bottom Arrows */}
      <div className="flex justify-end gap-2 pt-10">
        <CustomLeftArrow
          onClick={() => carouselRef.current.previous()}
          className="ml-2 mb-2"
        />
        <CustomRightArrow
          onClick={() => carouselRef.current.next()}
          className="mr-2 mb-2"
        />
      </div>
    </div>
  );
};

export default Testimonials;
