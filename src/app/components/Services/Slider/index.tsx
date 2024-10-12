"use client";
import React, { Suspense, useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

type IVideo = {
  video: string;
  mobile: string;
  poster?: string;
};

const videoArray: IVideo[] = [
  {
    video: "/Color-Grading.mp4",
    mobile: "/mobile/Color-Grading.mp4",
  },
  {
    video: "/Logo-Reveal.mp4",
    mobile: "/mobile/Logo-Reveal.mp4",
  },
  {
    video: "/Ecommerce-video.mp4",
    mobile: "/mobile/E-commerce-video.mp4",
  },
  {
    video: "/Motion-Graphics.mp4",
    mobile: "/mobile/Motion-Graphics.mp4",
  },
  {
    video: "/Real-Estate.mp4",
    mobile: "/mobile/Real-Estate.mp4",
  },
  // {
  //   video: "/Vlog-editing.mp4",
  //   mobile: "/mobile/Vlog-editing.mp4",
  // },
];

function Slider() {
  return (
    <>
      <div className="w-screen sm:flex justify-center hidden">
        <Carousel
          responsive={responsive}
          autoPlay
          autoPlaySpeed={3000}
          transitionDuration={200}
          infinite
          className="bg-black w-screen flex justify-center"
          pauseOnHover
          ssr
        >
          {videoArray.map((video: IVideo, index: number) => (
            <div
              className="h-screen sm:h-screen sm:w-screen sm:flex justify-center items-center"
              key={index}
            >
              <video
                className={`h-auto w-screen absolute sm:block hidden`}
                autoPlay
                muted
                loop
                key={index}
              >
                <source
                  src={`./video-and-motion-graphics-design-services${video.video}`}
                  type="video/mp4"
                  className=""
                />
              </video>
              <p></p>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="w-screen flex justify-center sm:hidden">
        <Carousel
          responsive={responsive}
          autoPlay
          autoPlaySpeed={3000}
          transitionDuration={200}
          infinite
          className="bg-black w-screen flex justify-center"
          pauseOnHover
          ssr
        >
          {videoArray.map((video: IVideo, index: number) => (
            <div
              className="h-screen sm:h-screen sm:w-screen sm:flex justify-center items-center"
              key={index}
            >
              <Suspense
                fallback={
                  <div className="h-screen w-screen flex justify-center items-center">
                    Loading...
                  </div>
                }
              >
                <video
                  className={`h-screen w-screen absolute`}
                  autoPlay
                  muted
                  loop
                  key={index}
                >
                  <source
                    src={`./video-and-motion-graphics-design-services${video.mobile}`}
                    type="video/mp4"
                    className=""
                  />
                </video>
              </Suspense>

              <p></p>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Slider;
