"use client";
import React, { useEffect, useRef, useState } from "react";

type FeaturedProjectProps = {
  title: string;
  video: string;
};

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ title, video }) => {
  const videoRef: any = useRef();
  // const viewHeight: number = window.screen.height;
  const [top, setTop] = useState<number>(0);
  const [viewWidth, setViewWidth] = useState(0);
  const [videoWidth, setVideoWidth] = useState(0);

  function handleScroll() {
    const videoRectangle = videoRef?.current?.getBoundingClientRect();
    // const bufferRectangle = bufferRef?.current?.getBoundingClientRect();
    if (videoRectangle.top > 0 && videoRectangle.top < 1080) {
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setViewWidth(window.screen.width);
    return () => {
      if (videoRef.current) {
        window.removeEventListener("scroll", handleScroll, true);
      }
    };
  }, []);

  return (
    <div className="bg-black h-screen flex flex-col justify-evenly items-center relative w-screen pb-[10vh]">
      <div className="h-auto flex flex-col justify-center items-center font-averta ">
        <p className="font-averta font-extrabold text-3xl text-white mb-10">
          {title}
        </p>
      </div>
      <video
        ref={videoRef}
        style={{ transform: `scale(1)` }}
        className={`w-screen sm:w-[80vw]`}
        autoPlay={true}
        muted
        loop
      >
        <source src={video} type="video/mp4" className="" />
      </video>
      {/* <div ref={bufferRef} className="h-screen w-screen">
        buffer Height
      </div> */}
    </div>
  );
};
export default FeaturedProject;
