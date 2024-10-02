"use client";
import { ISubServices } from "@/app/services/animation/page";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";

type SubServicesProps = {
  subServices: ISubServices[];
};

const SubServices: React.FC<SubServicesProps> = ({ subServices }) => {
  // console.log(subServices[2].background);
  const [currentURL, setCurrentURL] = useState("");
  const [hovered, setHover] = useState(false);
  useEffect(() => {
    setCurrentURL(window.location.href);
  }, []);

  function handleBackgroundHover(status: boolean) {
    console.log(status);
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
                    layers={
                      hovered && subService.backgroundTwo
                        ? [
                            {
                              image: subService.backgroundTwo,
                              speed: -20,
                            },
                          ]
                        : [
                            {
                              image: subService.background,
                              speed: -20,
                            },
                          ]
                    }
                    className="h-screen aspect-[1/2] sm:aspect-[2/1] sm:block hidden"
                  >
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
                    layers={
                      hovered && subService.backgroundTwo
                        ? [
                            {
                              image: subService.mobileBackgroundTwo,
                              speed: 0,
                            },
                          ]
                        : [
                            {
                              image: subService.mobileBackground,
                              speed: 0,
                            },
                          ]
                    }
                    className="h-screen aspect-[1/2] sm:aspect-[2/1] block sm:hidden"
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
