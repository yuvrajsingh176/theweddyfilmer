import React from "react";

const FaqHomeVideo = () => {
  return (
    <div>
      <div className="  ">
        <video
          className="absolute top-0 left-0 w-full h-[99%] object-cover -z-10"
          src="https://cdn.pixabay.com/video/2022/10/23/136134-764371502_large.mp4"
          autoPlay
          loop
          muted
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default FaqHomeVideo;
