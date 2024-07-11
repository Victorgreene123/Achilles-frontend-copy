import React from "react";
import Video from "./Video";
import videoSrc from "../Assets/videos/video.mp4";
import image1 from "../Assets/schools logos/image 17-1.png";
import image2 from "../Assets/schools logos/image 17.png";
import image3 from "../Assets/schools logos/image 19-1.png";
import image4 from "../Assets/schools logos/image 19.png";
import image5 from "../Assets/schools logos/image 20-1.png";
import image6 from "../Assets/schools logos/image 20.png";
import image7 from "../Assets/schools logos/image 21-1.png";
import image8 from "../Assets/schools logos/image 21.png";
import image9 from "../Assets/schools logos/image 21-2.png";
import Youtube from "./YoutubeVid";

const TrustedSchools = () => {
  return (
    <div>
      <div className="lg:flex items-center justify-evenly   space-y-5 border-l-2 border-b-2">
        <div className="  py-8">
          <p className="">Trusted by:</p>
        </div>
        <div className="place-items-center border-box border-l-2  grid grid-cols-3 lg:grid-cols-9 gap-3 lg:space-x-16 py-5 lg:px-10">
          <img src={image1} alt="" />
          <img src={image2} alt="" />
          <img src={image3} alt="" />
          <img src={image4} alt="" />
          <img src={image5} alt="" />
          <img src={image6} alt="" />
          <img src={image7} alt="" />
          <img src={image8} alt="" />
          <div className="flex items-center justify-center">
            <img src={image9} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-10 space-y-10">
        <h2 className="text-3xl lg:text-6xl text-center font-semibold text-blue-950 w-3/4 lg:w-2/4">
          We finally Hacked Med-school{" "}
          <span className="text-[#f18337]">for you</span> !
        </h2>
        {/* <Video
          src={videoSrc}
          type="video/mp4"
          controls={true}
          autoplay={false}
          loop={false}
          muted={false}
        /> */}
        <Youtube src="https://www.youtube.com/embed/gOhGsrayF18?si=JskSob52JPCur8D-" style="w-full h-[200px] lg:w-4/5 lg:h-[530px]" title="Welcome to achilles drill"/>
      </div>
    </div>
  );
};

export default TrustedSchools;
