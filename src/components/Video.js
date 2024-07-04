import React from "react";

const Video = ({
  src,
  type,
  controls = true,
  autoplay = false,
  loop = false,
  muted = false,
}) => {
  return (
    <video
      controls={controls}
      autoPlay={autoplay}
      loop={loop}
      muted={muted}
      className="container w-full h-auto"
    >
      <source src={src} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};

export default Video;
