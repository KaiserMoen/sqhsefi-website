import React from 'react';
const videoSource = '/images/home_page_video.mp4';
const AutoplayVideo = () => {
  return (
    <div className="w-full h-auto">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto xl:h-[60vh] object-cover"
      >
      <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AutoplayVideo;