import React from "react";
import team1 from "../Assets/teams.png";
<<<<<<< HEAD
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
=======
import "react-multi-carousel/lib/styles.css";
import { BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
>>>>>>> 2720971bf390f9a088bc675388c5829febf0d056

const Team = () => {
  const team = [
    {
      id: 1,
      name: "James Tayo",
      role: "Head of Operations",
      image: team1,
    },

    {
      id: 2,
      name: "James Tayo",
      role: "Head of Operations",
      image: team1,
    },

    {
      id: 3,
      name: "James Tayo",
      role: "Head of Operations",
      image: team1,
    },

    {
      id: 4,
      name: "James Tayo",
      role: "Head of Operations",
      image: team1,
    },

    {
      id: 5,
      name: "James Tayo",
      role: "Head of Operations",
      image: team1,
    },

    {
      id: 6,
      name: "James Tayo",
      role: "Head of Operations",
      image: team1,
    },
  ];

  return (
<<<<<<< HEAD
    <div className='bg-[#274CB2]'>
      <div className='container mx-auto p-10 space-y-20'>
        <h2 className='text-3xl text-white font-semibold'>Meet the team</h2>
        {/* <Carousel swipeable={false} draggable={false} showDots={true} responsive={responsive}>
          <div className='grid lg:grid-cols-3 gap-10 container mx-auto'>
            {team.map((item) => (
              <div key={item.id} className='bg-white'>
                <img src={item.image} alt='' className='w-full' />
                <div className='px-7 py-10 flex justify-between'>
                  <div>
                    <p className='font-semibold text-xl'>{item.name}</p>
                    <p>{item.role}</p>
                  </div>
                  <div className='flex flex-col text-2xl text-blue-700'>
                    <a href=''>
                      <BiLogoInstagram />
                    </a>
                    <a href=''>
                      <BiLogoTwitter />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Carousel> */}
=======
    <div className="bg-[#274CB2]">
      <div className="container mx-auto p-10 space-y-20">
        <div className="space-y-5">
          <div className="flex justify-start">
            <div className="bg-slate-300 w-44 h-1"></div>
            <div className="bg-[#f18337] w-28 h-1"></div>
          </div>
          <h2 className="text-3xl text-white font-semibold">Meet the team</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-10 container mx-auto">
          {team.map((item) => (
            <div key={item.id} className="bg-white">
              <img src={item.image} alt="" className="w-full" />
              <div className="px-7 py-10 flex justify-between">
                <div>
                  <p className="font-semibold text-xl">{item.name}</p>
                  <p>{item.role}</p>
                </div>
                <div className="flex flex-col text-2xl text-blue-700">
                  <a href="">
                    <BiLogoInstagram />
                  </a>
                  <a href="">
                    <BiLogoTwitter />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
>>>>>>> 2720971bf390f9a088bc675388c5829febf0d056
      </div>
    </div>
  );
};

export default Team;
