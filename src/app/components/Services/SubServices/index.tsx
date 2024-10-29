/* eslint-disable @next/next/no-img-element */
"use client";
import { ISubServices } from "@/app/services/3d-video-animation-services/page";
import React, { useEffect, useState } from "react";
import {
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";

type SubServicesProps = {
  subServices: ISubServices[];
};

const SubServices: React.FC<SubServicesProps> = ({ subServices }) => {
  const [currentURL, setCurrentURL] = useState("");
  const [hovered, setHover] = useState(false);
  useEffect(() => {
    setCurrentURL(window.location.href);
  }, []);

  function handleBackgroundHover(status: boolean) {
    if (status) {
      setHover(true);
    } else {
      setHover(false);
    }
  }

  return (
    <ParallaxProvider>
      <div className="bg-black z-30">
        {subServices.map((subService, index) => (
          <div className="relative" key={subService.id}>
            {/* <p className="text-white">{index}</p> */}
            <div className="relative h-screen sm:w-screen sm:h-auto z-30">
              {subService.type === "video" ? (
                <ParallaxBanner
                  layers={[
                    {
                      children: (
                        <>
                          <video
                            className={`relative h-screen sm:w-screen sm:h-auto hidden sm:block z-30`}
                            autoPlay={true}
                            muted
                            loop
                          >
                            <source
                              src={`${currentURL}${subService.background}`}
                              type="video/mp4"
                              className=""
                            />
                          </video>
                          <video
                            className={`relative h-screen sm:w-screen sm:h-auto sm:hidden z-30`}
                            autoPlay={true}
                            muted
                            loop
                          >
                            <source
                              src={`${currentURL}${subService.mobileBackground}`}
                              type="video/mp4"
                              className=""
                            />
                          </video>
                        </>
                      ),
                      speed: 0,
                    },
                  ]}
                  className="h-screen aspect-[1/2] sm:aspect-[2/1]"
                >
                  <div
                    className={`absolute h-screen w-[80vw] sm:w-[30vw] flex-col items-start flex justify-center ml-[10vw] ${
                      index % 2 === 0 ? "sm:ml-[10vw]" : "sm:ml-[60vw]"
                    }`}
                  >
                    <p
                      className={`font-averta font-extrabold ${
                        subService.text ? "text-4xl" : "text-4xl"
                      } text-white mb-[1rem]`}
                    >
                      {subService.title}
                    </p>
                    <p className="font-averta text-xl sm:text-2xl  text-white font-bold">
                      {subService.text}
                    </p>
                    {subService.buttonText ? (
                      <button className="w-1/3 h-[7vh] text-center text-white border-white border-2 rounded font-averta text-lg">
                        {subService.buttonText}
                      </button>
                    ) : (
                      <></>
                    )}
                  </div>{" "}
                </ParallaxBanner>
              ) : (
                <>
                  {" "}
                  <ParallaxBanner
                    onMouseEnter={() => handleBackgroundHover(true)}
                    onMouseLeave={() => handleBackgroundHover(false)}
                    className="h-screen aspect-[1/2] sm:aspect-[2/1] sm:block hidden items-center"
                  >
                    <ParallaxBannerLayer
                      speed={subService.backgroundTwo ? 0 : -20}
                    >
                      <div className="relative">
                        <img
                          src={subService.backgroundTwo}
                          alt={subService.altTag}
                          className={`absolute transition duration-1000  w-full ${
                            hovered && subService.backgroundTwo
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                        <img
                          className="w-full"
                          src={subService.background}
                          alt={subService.altTag}
                        />
                      </div>
                    </ParallaxBannerLayer>
                    <div
                      className={`absolute h-screen w-[80vw] sm:w-[30vw] flex-col items-start flex justify-center ml-[10vw] ${
                        index % 2 === 0 ? "sm:ml-[10vw]" : "sm:ml-[60vw]"
                      }`}
                    >
                      <p
                        className={`font-averta font-extrabold ${
                          subService.text ? "text-4xl" : "text-8xl"
                        } text-white mb-[1rem]`}
                      >
                        {subService.title}
                      </p>
                      <p className="font-averta text-xl sm:text-2xl text-white font-bold">
                        {subService.text}
                      </p>
                      {subService.buttonText && (
                        <button className="w-1/3 h-[7vh] text-center text-white border-white border-2 rounded font-averta text-lg">
                          {subService.buttonText}
                        </button>
                      )}
                    </div>{" "}
                  </ParallaxBanner>
                  <ParallaxBanner
                    onMouseEnter={() => handleBackgroundHover(true)}
                    onMouseLeave={() => handleBackgroundHover(false)}
                    className="h-screen aspect-[1/2] sm:aspect-[2/1] block sm:hidden"
                  >
                    {" "}
                    <ParallaxBannerLayer speed={0}>
                      <div className="relative">
                        <img
                          src={subService.mobileBackground}
                          alt={subService.altTag}
                          className={`absolute transition duration-1000  w-full ${
                            hovered && subService.mobileBackground
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                        <img
                          className="w-full"
                          src={subService.mobileBackgroundTwo}
                          alt={subService.altTag}
                        />
                      </div>
                    </ParallaxBannerLayer>
                    <div
                      className={`absolute h-screen w-[80vw] sm:w-[30vw] flex-col items-start flex justify-center ml-[10vw] ${
                        index % 2 === 0 ? "sm:ml-[10vw]" : "sm:ml-[60vw]"
                      }`}
                    >
                      <p
                        className={`font-averta font-extrabold ${
                          subService.text ? "text-4xl" : "text-4xl"
                        } text-white mb-[1rem]`}
                      >
                        {subService.title}
                      </p>
                      <p className="font-averta text-xl sm:text-2xl text-white font-bold">
                        {subService.text}
                      </p>
                      {subService.buttonText && (
                        <button className="w-1/3 h-[7vh] text-center text-white border-white border-2 rounded font-averta text-lg">
                          {subService.buttonText}
                        </button>
                      )}
                    </div>{" "}
                  </ParallaxBanner>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </ParallaxProvider>
  );
};
export default SubServices;
