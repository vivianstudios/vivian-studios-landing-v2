"use client";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import useLogoRevealDistance from "../hooks/logoRevealDistance";
import useProjectsDistance from "../hooks/projectsDistance";
import useProjectsContainerWidth from "../hooks/projectsContainerWidth";
import useProjectBreakpoints from "../hooks/breakpoints";
import useActiveProject from "../hooks/activeProject";
import useDetectScroll from "@smakss/react-scroll-direction";
import useLogoRevealBottom from "../hooks/logoRevealBottom";
import useCallToActionDistance from "../hooks/callToActionDistance";
import useActiveImage from "../hooks/activeImage";
import Image, { StaticImageData } from "next/image";
import logoGif from "@/app/assets/home/gif-image-1acb5518.gif";
// import { dictionary } from "@/app/utils/imageDictionary";
import imageURLArray from "@/app/utils/imageUrlArray.json";
import { dictionary } from "../utils/imageDictionary";
type LogoRevealProps = {
  children: ReactNode;
};

const LogoReveal: React.FC<LogoRevealProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const finalFrameRef = useRef<HTMLDivElement>(null);
  const logoRevealSection = useRef<HTMLDivElement>(null);
  const [scrollSpeed, setScrollSpeed] = useState<number>(1);
  const [replacementComponentHeight, setReplacementComponentHeight] =
    useState<number>(0);
  const [currentUrl, setCurrentURL] = useState("");
  const [fillerHeight, setFillerHeight] = useState(0);

  const { logoRevealDistance, setLogoRevealDistance }: any =
    useLogoRevealDistance();

  const { projectsDistance }: any = useProjectsDistance();

  const { projectsContainerWidth }: any = useProjectsContainerWidth();

  const { breakpoints }: any = useProjectBreakpoints();

  const { logoRevealBottom, setLogoRevealBottom }: any = useLogoRevealBottom();

  const { callToActionDistance, setCallToActionDistance }: any =
    useCallToActionDistance();

  const { scrollDir, scrollPosition } = useDetectScroll();

  const { increaseNumber, decreaseNumber, maxQuantity, activeImage }: any =
    useActiveImage();

  const { setActiveProject }: any = useActiveProject();

  function handleScroll() {
    const top = ref?.current?.getBoundingClientRect();
    setLogoRevealDistance(top?.top);
    setLogoRevealBottom(top?.bottom);
    setCallToActionDistance(finalFrameRef.current?.getBoundingClientRect().top);
  }
  //set scroll speed
  useEffect(() => {
    setScrollSpeed((prev) => {
      return prev - scrollPosition.top;
    });
  }, [scrollPosition.top]);

  useEffect(() => {
    if (
      logoRevealSection.current?.getBoundingClientRect().top === 0 &&
      finalFrameRef?.current?.getBoundingClientRect().top &&
      fillerHeight === 0
    ) {
      setFillerHeight(finalFrameRef?.current?.getBoundingClientRect().top);
    }

    if (logoRevealBottom <= 0) {
      if (scrollDir === "down") {
        increaseNumber(1);
      }
      if (scrollDir === "up") {
        decreaseNumber(1);
      }
    }
  }, [finalFrameRef.current?.getBoundingClientRect().top]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentURL(window.location.href);
      window.addEventListener("scroll", handleScroll);

      return () => {
        setScrollSpeed(scrollPosition.top);
        if (ref.current) {
          window.removeEventListener("scroll", handleScroll, true);
        }
      };
    }
  }, []);

  //This useEffect is used to set the buffer height based on the Project List Container Width
  useEffect(() => {
    setReplacementComponentHeight(projectsContainerWidth);
  }, [projectsContainerWidth]);

  //This useEffect is made to change the Active Project setter function.
  //The Active Project Setter function is invoked everytime a person scrolls up/down the page
  useEffect(() => {
    // Converting the breakpoints object to an array of floating point numbers
    // so that they can be used for computation
    const breakpointsArrFloat: number[] = Object.keys(breakpoints).map(
      (breakpoint) => parseFloat(breakpoint)
    );

    // When the user is scrolling down we first check if the first card has cross the first breakpoint
    // We are using logoRevealDistance as the pointer.
    if (scrollDir === "down") {
      if (logoRevealDistance < breakpointsArrFloat[0]) {
        //If the first card has crossed the first breakpoint we detect which card is currently in focus.
        //The we update the activeProject State.
        let range = 0;
        breakpointsArrFloat.forEach((breakpoint) => {
          if (logoRevealDistance < breakpoint) {
            range = breakpoint;
          }
        });

        setActiveProject(breakpoints[range as number]);
      }
    } else {
      // The same is done for when the user is scrolling up.
      if (
        logoRevealDistance > breakpointsArrFloat[breakpointsArrFloat.length - 1]
      ) {
        let range = 0;
        breakpointsArrFloat.reverse().forEach((breakpoint, i) => {
          if (logoRevealDistance > breakpoint) {
            //the exception being when we are going up we want to focus on the div that is
            //immediately above the detected div. Since the detected div has already passed its breakpoint,
            //If we use i+1 we might get undefined in the last div. To mitigate that we have used an itenary operator
            range = breakpointsArrFloat.reverse()[i + 1]
              ? breakpointsArrFloat.reverse()[i + 1]
              : // : breakpointsArrFloat[0];
                0;
          }
        });
        setActiveProject(breakpoints[range as number]);
      }
    }
  }, [logoRevealDistance]);

  return (
    <>
      <div
        style={{
          height: `${replacementComponentHeight}px`,
        }}
        className="bg-black sm:block hidden"
      >
        filler
      </div>
      <div ref={ref} className="h-screen w-screen z-0 sm:block hidden">
        {projectsDistance <= 0 && logoRevealDistance > 0 ? "" : children}
      </div>

      <div
        ref={logoRevealSection}
        className={`sm:block hidden h-screen w-screen bg-black text-white z-30 relative ${
          callToActionDistance > 0 ? "sticky top-0" : ""
        }`}
      >
        {Object.entries(dictionary).map((image: [string, StaticImageData]) => (
          <img
            key={image[0]}
            width={100}
            height={100}
            className={`h-screen w-screen z-20 absolute ${
              image[0] == activeImage ? "visible" : "invisible"
            }`}
            src={image[1].src}
            alt=""
          />
        ))}
      </div>
      <div
        ref={logoRevealSection}
        className={`sm:block hidden h-fit w-screen bg-black text-white z-20 relative ${
          callToActionDistance > 0 ? "sticky top-0" : ""
        }`}
      >
        <Image
          className="h-screen w-screen z-20 relative"
          src={dictionary[activeImage]}
          alt=""
        />
      </div>
      <div
        style={{ height: `${maxQuantity * 3}rem` }}
        className="bg-black sm:block hidden"
      >
        Height for buffer
      </div>
      <div
        ref={finalFrameRef}
        className="bg-black h-screen w-screen z-10 relative sm:block hidden"
      >
        {callToActionDistance <= 0 &&
          Object.entries(dictionary).map((image: [string, StaticImageData]) => (
            <>
              <img
                width={100}
                height={100}
                className={`h-screen w-screen z-20 absolute ${
                  image[0] == activeImage ? "visible" : "invisible"
                }`}
                src={image[1].src}
                alt=""
              />
            </>
          ))}
      </div>
      <video
        className="w-screen text-black relative z-30 sm:hidden"
        autoPlay={true}
        muted
        loop
      >
        <source
          src="./home/mobile-size-logo.mp4"
          type="video/mp4"
          className=""
        />
      </video>
    </>
  );
};
export default LogoReveal;
