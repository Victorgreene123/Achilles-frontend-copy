import React, { useRef, useState } from "react";
import image1 from "../Assets/schools logos/image 19-1.png";
import unilag from "../Assets/schools logos/UNILAG.png"
import ui from "../Assets/schools logos/UI.png"
import uniben from "../Assets/schools logos/UNIBEN.png"
import oou from "../Assets/schools logos/OOU.svg"
import Lasu from "../Assets/schools logos/LASU.png"
import aifunai from '../Assets/schools logos/AE-FUNAI.jpg'
import eclipse1 from "../Assets/Ellipse 1.png";
import eclipse2 from "../Assets/Ellipse 1 (1).png";
import eclipse3 from "../Assets/Ellipse 1 (2).png";
import Testimonial from "./Testimonial";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonial = [
    {
      id: 1,
      head: "Totally Worth It",
      logo: unilag,
      names: "Victoire",
      school: "MLS , Unilag",
      message:
        "“...There were times I just felt like throwing my books away and giving up, I felt so choked, but somehow Achilles Drill made it easy to cope. I had As in all my Anatomy courses, first and second semester, you had a big hand in that. Thank you so much, I’m really grateful for all you did.”",
      image: eclipse1,
    },
    {
      id: 2,
      head: "Totally Worth It",
      logo: ui,
      names: "Olabimpe",
      school: "Pharmacy , UI",
      message:
        "“…I really want to give a shout out to the ACHILLES TEAM, the tutorial really helped. I can remember pouring what I learnt in blood physiology for them like that. I had an 83% in Physiology and 82% in Anatomy. I wish the tutorial could continue, thank you Achilles, keep building lives…”",
      image: eclipse2,
    },
    {
      id: 3,
      head: "Totally Worth It",
      logo: unilag,
      names: "Bukola",
      school: "Pharmacology , Unilag",
      message:
        "“…for real your first clip on Anatomical terms motivated me. The first time I read a slide on anatomy, it was on femoral artery during the holidays, it felt like I was reading Chinese because I couldn’t understand anything. I’m so glad I checked out the Telegram GC for your lectures…”",
      image: eclipse3,
    },
    {
      id: 4,
      head: "Totally Worth It",
      logo: aifunai,
      names: "Ruyina Eteng",
      school: "MBBS, AE-FUNAI",
      message:
        "“…please don’t stop what you are doing, your videos helped me jump from having 40-50% into having 70-75% in steeplechase anatomy exam…I have dragged many of my coursemates and YouTube fam to see the gold you’ve uploaded on your channel…”",
      image: eclipse2,
    },
    {
      id: 5,
      head: "Totally Worth It",
      logo: unilag,
      names: "Emmanuel K.",
      school: "MBBS, Unilag",
      message:
        "This product has been amazing for my medical school journey. The comprehensive lecture banks cover everything from basic sciences to clinical rotations. The past questions are invaluable for exam prep, providing practical knowledge tests. The YouTube videos are engaging and perfect for visual learners. I highly recommend it to any medical student aiming to excel.",
      image: eclipse3,
    },
    {
      id: 6,
      head: "Totally Worth It",
      logo: unilag,
      names: "Emmanuel K.",
      school: "MBBS, Unilag",
      message:
        "This product has been amazing for my medical school journey. The comprehensive lecture banks cover everything from basic sciences to clinical rotations. The past questions are invaluable for exam prep, providing practical knowledge tests. The YouTube videos are engaging and perfect for visual learners. I highly recommend it to any medical student aiming to excel.",
      image: eclipse1,
    },
    {
      id: 7,
      head: "Life-changing Experience",
      logo: uniben,
      names: "Chinedu O.",
      school: "Engineering, Uniben",
      message:
        "Achilles Drill has completely transformed my study habits. The structured lessons and interactive content have made learning much more engaging and effective. I couldn't have asked for a better study tool.",
      image: eclipse1,
    },
    {
      id: 8,
      head: "Remarkable Improvement",
      logo: oou,
      names: "Fatimah S.",
      school: "Law, OOU",
      message:
        "The impact Achilles Drill has had on my academic performance is remarkable. The resources are top-notch, and the support from the team is unparalleled. I've seen a significant improvement in my grades.",
      image: eclipse2,
    },
    {
      id: 9,
      head: "Exceptional Resource",
      logo: Lasu,
      names: "Segun A.",
      school: "Business Administration, LASU",
      message:
        "Achilles Drill is an exceptional resource for students. The breadth and depth of the material are impressive, and it's tailored to meet the needs of students at all levels. Highly recommended!",
      image: eclipse3,
    },
    {
      id: 10,
      head: "Outstanding Support",
      logo: ui,
      names: "Ifeoma N.",
      school: "Computer Science, UI",
      message:
        "The support from the Achilles team has been outstanding. They are always available to help and provide guidance. The tutorials are clear, concise, and very helpful for understanding complex concepts.",
      image: eclipse2,
    },
    {
      id: 11,
      head: "Highly Effective",
      logo: unilag,
      names: "James T.",
      school: "Medicine, Unilag",
      message:
        "Achilles Drill is a highly effective study tool. The combination of video lectures, practice questions, and study guides has made my preparation for exams much more efficient. I highly recommend it to all students.",
      image: eclipse3,
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

  const CustomLeftArrow = ({ onClick, className, disabled }) => (
    <button
      onClick={onClick}
      className={`bg-white p-2 rounded-full ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={disabled}
    >
      <svg
        width='30'
        height='22'
        viewBox='0 0 47 35'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0.0876923 16.9026C0.165405 16.4946 0.349976 16.1546 0.641399 15.8826L17.3983 0L20.1377 3.20566L7.37329 15.2998H46.6572V19.642H7.37329L20.1377 31.7652L17.3983 35L0.641399 19.0883C0.349976 18.7968 0.165405 18.4666 0.0876923 18.0974C-0.0288773 17.6894 -0.0288773 17.2911 0.0876923 16.9026Z'
          fill={ `${disabled ? '#C1C1C1' : "#EE6B11"}`}
        />
      </svg>
    </button>
  );

  const CustomRightArrow = ({ onClick, className, disabled }) => (
    <button
      onClick={onClick}
      className={`bg-white p-2 rounded-full ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      disabled={disabled}
    >
      <svg
        width='30'
        height='22'
        viewBox='0 0 48 35'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M47.1018 16.9026C47.024 16.4946 46.8395 16.1546 46.5481 15.8826L29.7912 0L27.0518 3.20566L39.8162 15.2998H0.532227V19.642H39.8162L27.0518 31.7652L29.7912 35L46.5481 19.0883C46.8395 18.7968 47.024 18.4666 47.1018 18.0974C47.2183 17.6894 47.2183 17.2911 47.1018 16.9026Z'
          fill={ `${disabled ? '#C1C1C1' : "#EE6B11"}`}
        />
      </svg>
    </button>
  );

  const beforeChange = (nextSlide) => {
    setCurrentSlide(nextSlide);
  };

  const afterChange = (previousSlide, { currentSlide }) => {
    setCurrentSlide(currentSlide);
  };

  return (
    <div className="relative py-20 px-10 lg:px-10 gap-10">
      <div className="flex justify-end gap-1 pb-10">
        <CustomLeftArrow
          onClick={() => carouselRef.current.previous()}
          className="left-arrow"
          disabled={currentSlide === 0}
        />
        <CustomRightArrow
          onClick={() => carouselRef.current.next()}
          className="right-arrow"
          disabled={currentSlide === testimonial.length - 1}
        />
      </div>
      <Carousel
        ref={carouselRef}
        responsive={responsive}
        beforeChange={beforeChange}
        afterChange={afterChange}
        arrows={false}
        
      
        infinite
      >
        {testimonial.map((item) => (
           <div key={item.id} className='mx-1 lg:mx-5'>
          <Testimonial key={item.id} {...item} /></div>
        ))}
      </Carousel>
    
      <div className="flex justify-end gap-1 pb-10">

        <CustomLeftArrow
          onClick={() => carouselRef.current.previous()}
          className="left-arrow"
          disabled={currentSlide === 0}
        />
        <CustomRightArrow
          onClick={() => carouselRef.current.next()}
          className="right-arrow"
          disabled={currentSlide === testimonial.length - 1}
        />
      </div>
    </div>
  );
};

export default Testimonials;
