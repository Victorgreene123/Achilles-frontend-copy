import React from "react";
import hero from "../Assets/heroRectangle294.png";
import Accordion from "../components/Accordion";
import rectangle137 from "../Assets/Rectangle 137.png";
import rectangle138 from "../Assets/Rectangle 138.png";
import rectangle142 from "../Assets/Rectangle 142.png";
import rectangle143 from "../Assets/Rectangle 143.png";
import Team from "../components/Team";
import Counter from "../components/counter";

const About = () => {
  const result = [
    { id: 1, rate: "90", title: "Success rate", unit: "%" },
    { id: 2, rate: "1400", title: "Copies sold so far", unit: "" },
    { id: 3, rate: "24", title: "Schools reached", unit: "" },
  ];

  const images = [
    { id: 1, src: rectangle137, alt: "image1" },
    { id: 2, src: rectangle138, alt: "image2" },
    { id: 3, src: rectangle142, alt: "image3" },
    { id: 4, src: rectangle143, alt: "image4" },
  ];

  return (
    <div className="">
      <div className="relative w-full">
        <img className="w-full" src={hero} alt="" />
        <div className="px-10 absolute inset-0 flex items-center justify-center">
          <h1 className="lg:w-4/5 text-center lg:text-left text-white text-3xl lg:text-7xl md:text-5xl font-semibold">
            We are <span className="text-[#f18337]">Africa's foremost</span>{" "}
            resource hub for medical students
          </h1>
        </div>
      </div>

      <div className="py-20">
        <div className="text-center flex flex-col items-center">
          <h2 className="font-semibold text-4xl lg:text-6xl lg:w-[50rem] text-blue-950 py-10 px-5">
            We finally hacked Med-school{" "}
            <span className="text-[#f18337]">for you</span>!
          </h2>
        </div>

        <div className="lg:flex lg:items-center lg:justify-center">
          <div className="grid grid-cols-2 gap-4">
            {images.map((image) => (
              <img
                key={image.id}
                className="w-full fade-in hover-lively"
                src={image.src}
                alt={image.alt}
              />
            ))}
          </div>

          {/* The following grid of images will only appear on large screens and above */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {images.map((image) => (
                <img
                  key={image.id}
                  className="w-full fade-in hover-lively"
                  src={image.src}
                  alt={image.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container px-10 py-24 mx-auto flex flex-col gap-20 items-center lg:items-start">
          <div className="gap-10 flex flex-col items-center lg:items-start">
            <div className="flex justify-center lg:justify-start">
              <div className="bg-blue-700 w-48 h-1"></div>
              <div className="bg-[#f18337] w-32 h-1"></div>
            </div>
            <h2 className="text-4xl lg:text-6xl w-4/5 font-semibold text-blue-950 text-center lg:text-left">
              Our <span className="text-[#f18337]">results</span> speaks for
              itself
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-5 mx-auto">
            {result.map((item) => (
              <div
                key={item.id}
                className="border-b-2 text-center lg:text-left pb-5 w-44 lg:w-80"
              >
                <p className="text-6xl lg:text-[4rem] font-semibold">
                  <Counter start={0} end={item.rate} />
                  {item.unit}
                </p>
                <p className="text-xs">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Team />
      </div>
      <Accordion />
    </div>
  );
};

export default About;
