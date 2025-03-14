import React from "react";
import DecryptedText from "../DecryptedText";

const HeroVideo = () => {
  return (
    <div className="relative overflow-hidden">
      <video className="w-full h-auto" autoPlay loop muted>
        <source src="./MyVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center">
        <h1 className="text-7xl font-bold font-sans">
          <DecryptedText
            text="BITCOIN BROS!"
            speed={80}
            maxIterations={15}
            sequential={true}
            revealDirection="center"
            className="sm:text-8xl font-bold"
            encryptedClassName="text-xl"
            animateOn="view"
          />
        </h1>
        <p className="mt-4 sm:text-4xl">
          <DecryptedText
            text="To the moooooon!"
            speed={100}
            maxIterations={20}
            sequential={true}
            revealDirection="start"
            className="text-4xl"
            encryptedClassName="text-xl"
            animateOn="view"
          />
        </p>
      </div>
    </div>
  );
};

export default HeroVideo;
