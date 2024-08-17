import React, { useState, useEffect } from "react";
import './loading.css';

const Loading = ({ item }) => {
  const [progress, setProgress] = useState(50); // Initial progress

  useEffect(() => {
    // Set the interval to update progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval); // Stop the interval when progress reaches 100%
          return 100;
        }
        return prev + 1; // Increment progress
      });
    }, 50); // Update progress every 50 ms (adjust for smoother/faster progress)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="w-[50%] mx-auto text-center mb-3  h-[80vh] relative">
        <div className="absolute top-[50%] w-full">
      Loading {item}
      <div className=" border rounded-full w-[100%] ">
        <div
          className="p-1 bg-[#214198] rounded-full text-sm progress-bar text-white"
          style={{ width: `${progress}%` }} // Set width based on progress
        >
          {progress}%
        </div>
      </div>
      </div>
    </div>
  );
};

export default Loading;
