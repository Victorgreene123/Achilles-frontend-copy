import React from "react";
import team1 from "../Assets/team-1.jpg";
import team2 from "../Assets/team2.jpg";
import team3 from "../Assets/team3.jpg";
import team4 from "../Assets/team4.jpg";
import team5 from "../Assets/team5.jpg";
import team6 from "../Assets/team6.jpg";
import team7 from "../Assets/team7.jpg";
import team8 from "../Assets/team8.jpg";
import team9 from "../Assets/team9.jpg";
import team10 from "../Assets/team10.jpg";
import team11 from "../Assets/team11.jpg";
import team12 from "../Assets/team12.jpg";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

import "react-multi-carousel/lib/styles.css";
import { BiLogoInstagram, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";

const Team = () => {
  const team = [
    {
      id: 1,
      name: "Orisajo Toluwani",
      role: "Chief Executive Officer",
      image: team1,
      linkedin: "https://linkedin.com/in/toluwani-orisajo-24912419a",
      instagram: "https://www.instagram.com/toluwaniorisajo",
    },

    {
      id: 2,
      name: "Muyiwa Oluwatobi",
      role: "Chief Operating Officer",
      image: team2,
      linkedin: "https://linkedin.com/in/oluwatobi-muyiwa-45b2871b7",
      instagram: "https://www.instagram.com/muyiwa_oluwatobi",
    },

    {
      id: 3,
      name: "Akanji Benedict",
      role: "Creative Director",
      image: team3,
      linkedin: "https://linkedin.com/in/benedictakanji",
      instagram: "https://www.instagram.com/benedict_akanji",
    },

    {
      id: 4,
      name: "Abah Marquis",
      role: "Chief Technology Officer",
      image: team4,
      linkedin: "https://www.linkedin.com/in/marquis-abah-584a12199",
      instagram: "#",
    },

    {
      id: 12,
      name: "Abe Marvellous",
      role: "Chief Strategy Officer",
      image: team12,
      linkedin: "http://www.linkedin.com/in/abe-marvellous",
      instagram: "https://www.instagram.com/kamal_marxl?igsh=MWI1ZWVyd3cwczk1YQ==",
    },

    {
      id: 5,
      name: "Abah Gift",
      role: "Product Design Lead",
      image: team5,
      linkedin: "https://www.linkedin.com/in/abahgift",
      instagram: "https://www.instagram.com/abahgift/",
    },

    {
      id: 6,
      name: "Samuel Ekuma",
      role: "Content Writing Team Lead",
      image: team6,
      linkedin: "https://www.linkedin.com/in/ekumasam",
      instagram: "https://www.instagram.com/ekuma_sam",
    },

    {
      id: 7,
      name: "Okunola Eunice",
      role: "Social Media Team Lead",
      image: team7,
      linkedin: "https://www.linkedin.com/in/okunola-eunice-7a3a51210",
      instagram: "https://www.instagram.com/_justteddy1",
    },

    {
      id: 8,
      name: "Fele Omolade",
      role: "Graphics Team Lead",
      image: team8,
      linkedin: "https://www.linkedin.com/in/omolade-fele-3988b4117",
      instagram: "https://www.instagram.com/lade_001",
    },

    {
      id: 9,
      name: "Oluwasegun Oshikoya",
      role: "Marketing Team Lead",
      image: team9,
      linkedin: "https://ng.linkedin.com/in/oshikoya-oluwasegun-437243238",
      instagram: "#",
    },

    {
      id: 10,
      name: "Olanipekun Jesutofunmi",
      role: "Follow Up Coach",
      image: team10,
      linkedin: "#",
      instagram: "https://www.instagram.com/jesutofunmiolanipekun",
    },

    {
      id: 11,
      name: "Akinwunmi Olive",
      role: "Tech-Writing Lead",
      image: team11,
      linkedin: "https://www.linkedin.com/in/olive-akinwumi-721759184",
      instagram: "https://www.instagram.com/oliveakinwumi",
    },
  ];

  return (
    <div className='bg-[#274CB2]'>
      <div className='w-[95%] mx-auto p-10 space-y-20'>
        <div className='space-y-5'>
          <div className='flex justify-start'>
            <div className='bg-slate-300 w-44 h-1'></div>
            <div className='bg-[#f18337] w-28 h-1'></div>
          </div>

          <h2 className='text-3xl text-white font-semibold'>Meet the team</h2>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto lg:gap-6 xl:gap-10'>
          {team.map((item) => (
            <div
              key={item.id}
              className='bg-white hover:bg-[#1D3B8A] hover:text-white transition duration-300 group md:w-full'
            >
              <div>
                <img
                  src={item.image}
                  alt=''
                  className='w-full h-64 object-cover lg:object-top object-top lg:h-80 xl:h-96'
                />
              </div>

              <div className='px-5 py-10 flex justify-between items-center'>
                <div>
                  <p className='font-semibold text-lg group-hover:text-white md:text-xl'>
                    {item.name}
                  </p>
                  <p className='group-hover:text-white text-lg md:text-xl'>{item.role}</p>
                </div>

                <div className='flex flex-col text-2xl text-blue-700 group-hover:text-white'>
                  <a href={item.instagram} target='_blank' rel='noopener noreferrer'>
                    <BiLogoInstagram />
                  </a>

                  <a href={item.linkedin} target='_blank' rel='noopener noreferrer'>
                    <BiLogoLinkedin />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
