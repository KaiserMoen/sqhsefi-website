import React from 'react';

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
        <source src="/images/video_test.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AutoplayVideo;