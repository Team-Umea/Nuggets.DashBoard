// src/HeroVideo.jsx
import React from 'react';

const HeroVideo = () => {
  return (
    <div className="relative overflow-hidden">
      <video className="w-full h-auto" autoPlay loop muted>
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center">
        <h1 className="text-4xl font-bold">BITCOIN BROS!</h1>
        <p className="mt-4 text-lg">Lets go to the moooooon!</p>

      </div>
    </div>
  );
};

export default HeroVideo;