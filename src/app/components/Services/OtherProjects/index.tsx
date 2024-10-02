"use client";
import React, { useEffect, useRef, useState } from "react";
import Img1 from "@/app/assets/other-projects-1.webp";
import Img2 from "@/app/assets/other-projects-2.webp";

import Image from "next/image";

type OtherProjectsProps = {};

const OtherProjects: React.FC<OtherProjectsProps> = () => {
  const imagesRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const [thumbHeight, setThumbHeight] = useState(1);
  const [imagesBottom, setImagesBottom] = useState(1);

  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    if (thumbRef?.current?.getBoundingClientRect().bottom) {
      setThumbHeight(
        +Math.round(thumbRef?.current?.getBoundingClientRect().height)
      );
    }
    if (imagesRef?.current?.getBoundingClientRect().bottom) {
      setImagesBottom(imagesRef?.current?.getBoundingClientRect().bottom);
    }
  }, []);

  function handleScroll() {
    if (imagesRef?.current?.getBoundingClientRect().bottom) {
      setImagesBottom(imagesRef?.current?.getBoundingClientRect().bottom);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setScreenHeight(window.screen.height);
    return () => {
      if (imagesRef.current && thumbRef.current) {
        window.removeEventListener("scroll", handleScroll, true);
      }
    };
  }, []);
  return (
    <>
      {screenHeight && (
        <>
          <div
            // style={{ height: `${screenHeight}px` }}
            className=" w-[50vw] sticky top-0 bg-black"
          >
            Sticky
          </div>

          <div
            // style={{ height: `${screenHeight}px` }}
            className={` w-[50vw] ml-[50vw] -translate-y-[100vh]`}
          >
            <div className="h-screen border-y-2">Image one</div>
            <div className="h-screen border-y-2">Image two</div>
          </div>
        </>
      )}

      {/* {thumbHeight && imagesBottom && (
        <>
          {" "}
          {
            <div
              ref={thumbRef}
              className={`h-screen w-1/2 ${
                thumbHeight < imagesBottom ? "sticky top-0" : "invisible"
              } bg-black`}
            >
              {" "}
              <video className="h-screen " autoPlay={true} muted loop>
                <source src="./thumb.mp4" type="video/mp4" className="" />
              </video>
            </div>
          }
          <div className="w-screen flex bg-black">
            <div
              ref={imagesRef}
              className={`w-full flex justify-between -translate-y-[50vh]`}
            >
              <div
                className={`h-auto w-1/2 bottom-0 flex flex-col ${
                  thumbHeight < imagesBottom ? "invisible" : ""
                } items-start`}
              >
                <video className="h-screen " autoPlay={true} muted loop>
                  <source src="./thumb.mp4" type="video/mp4" className="" />
                </video>
              </div>
              <div className="flex flex-col w-1/2 items-center">
                <Image className="mb-[10vh]" src={Img1} alt="op-1"></Image>
                <Image src={Img2} alt="op-2"></Image>
              </div>
            </div>
          </div>
        </>
      )} */}
    </>
  );
};
export default OtherProjects;
