"use client";
import React, { useEffect, useState } from "react";
import { Suspense, useRef } from "react";
import freakyTales from "@/app/assets/vfx/Movie list/freaky-tales.jpg";
import kalki from "@/app/assets/vfx/Movie list/kalki.png";
import loki from "@/app/assets/vfx/Movie list/loki.png";
import masallardan from "@/app/assets/vfx/Movie list/masallardan-geriye-kalan.jpg";
import noExit from "@/app/assets/vfx/Movie list/no-exit.png";
import rippley from "@/app/assets/vfx/Movie list/rippley.png";
import rrr from "@/app/assets/vfx/Movie list/RRR.jpg";
import stateOfMind from "@/app/assets/vfx/Movie list/State-of-mind.png";
import expendables from "@/app/assets/vfx/Movie list/the-expendables.png";
import lastOfUs from "@/app/assets/vfx/Movie list/the-last-of-us.png";
import theYearOfFury from "@/app/assets/vfx/Movie list/the-year-of-fury.png";

import matchMoveBefore from "@/app/assets/vfx/match-move.jpg";
import matchMoveAfter from "@/app/assets/vfx/match-move-2.jpg";

import matchMoveBeforeMobile from "@/app/assets/vfx/mobile-size/Matchmove-Before.jpg";
import matchMoveAfterMobile from "@/app/assets/vfx/mobile-size/Matchmove.jpg";

import Image from "next/image";

import Hero from "../../components/Services/Hero";
import Mission from "../../components/Services/Mission";
import FeaturedProject from "../../components/Services/FeaturedProject";
import SubServices from "../../components/Services/SubServices";
import { IHeroContent, ISubServices } from "../animation/page";
import tpn from "@/app/assets/vfx/TPN.png";
import CallToAction from "@/app/components/CallToAction";
import Carousel from "react-multi-carousel";
import MoviePosterSlider from "@/app/components/Services/MoviePosterSlider";

type pageProps = {};

const heroBannerContent: IHeroContent = {
  title: "VFX",
  video: "./vfx/hero.mp4",
  mobileVideo: "./vfx/mobile/hero.mp4",
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
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

const vfxServices: ISubServices[] = [
  {
    id: 1,
    title: "Clean Up",
    text: "Our paint and clean-up services are expertly crafted to elevate the visual integrity of your footage, meticulously eliminating undesired elements and executing premium retouching. With profound industry knowledge in restoration and video enhancement, we ensure that each frame achieves its utmost potential, catering to diverse projects such as commercials and animation.",
    background: "/clean-up.mp4",
    type: "video",
    mobileBackground: "/mobile/clean-up.mp4",
  },
  {
    id: 2,
    title: "Compositing",
    text: "Compositing masterfully blends diverse elements into captivating scenes, where meticulous attention to lighting, color, and perspective guarantees perfection. Our commitment to swift delivery without compromising quality makes us the preferred partner for studios eager to realize their artistic dreams.",
    background: "/Composite.mp4",
    type: "video",
    mobileBackground: "/mobile/Composition.mp4",
  },
  {
    id: 3,
    title: "Match-move",
    text: "Our Camera Tracking/Matchmove service utilizes cutting-edge tracking technology to expertly blend CGI with live-action footage. By prioritizing precision, we ensure seamless integration of camera movements, enhancing the realism of your visual storytelling.",
    background: matchMoveBefore.src,
    backgroundTwo: matchMoveAfter.src,
    type: "image",
    mobileBackground: matchMoveBeforeMobile.src,
    mobileBackgroundTwo: matchMoveAfterMobile.src,
  },
  {
    id: 4,
    title: "Rotoscoping",
    text: "Rotoscoping plays a vital role in the VFX pipeline, delivering high-precision detailing to create fluid and accurate outlines in intricate scenes. We specialize in effectively managing intricate movements making us a reliable partner for film studios, ad agencies, and animation studios.",
    background: "/Rotoscoping.mp4",
    type: "video",
    mobileBackground: "/mobile/Rotoscope.mp4",
  },
];

const MovieList: any = [
  {
    id: 1,
    image: freakyTales,
  },
  {
    id: 2,
    image: kalki,
  },
  {
    id: 3,
    image: loki,
  },
  {
    id: 4,
    image: masallardan,
  },
  {
    id: 5,
    image: noExit,
  },
  {
    id: 6,
    image: rippley,
  },
  {
    id: 7,
    image: rrr,
  },
  {
    id: 8,
    image: stateOfMind,
  },
  {
    id: 9,
    image: expendables,
  },
  {
    id: 10,
    image: lastOfUs,
  },
  {
    id: 11,
    image: theYearOfFury,
  },
];

const Page: React.FC<pageProps> = () => {
  const [inc, setInc] = useState<number>(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [queue, setQueue] = useState<any>([]);

  // useEffect(() => {
  //   setQueue([...MovieList, ...MovieList]);
  // }, []);

  useEffect(() => {
    setWindowWidth(window.screen.width);
    const myInterval = setInterval(() => {
      if (inc > -2200) {
        setInc((prev) => prev - 1);
      }
    }, 10);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  useEffect(() => {
    if (inc < -2000) {
      setInc(windowWidth);
      // setQueue((prev: any) => {
      //   return [...prev.slice(MovieList.length), ...MovieList];
      // });
    }
  }, [inc]);

  const content = `At Vivian Studios, we are committed to excellence in the realm of visual effects, seamlessly transforming imaginative concepts into breathtaking visual experiences. Our expert team and their artistic mastery to create enthralling VFX solutions that resonate with and inspire audiences worldwide.`;
  return (
    <div className="bg-black flex flex-col items-center">
      <Suspense fallback={<>Loading...</>}>
        <Hero heroContent={heroBannerContent}></Hero>
      </Suspense>
      <Suspense fallback={<>Loading...</>}>
        <Mission content={content}></Mission>
      </Suspense>
      <Suspense fallback={<>Loading...</>}>
        <FeaturedProject
          title="Notable VFX Projects"
          video="./vfx/featured.mp4"
        ></FeaturedProject>
      </Suspense>
      <Suspense fallback={<>Loading...</>}>
        <SubServices subServices={vfxServices}></SubServices>
      </Suspense>
      <Suspense fallback={<>Loading...</>}>
        <Image
          className="sm:w-[20vw] w-[50vw] h-auto"
          src={tpn}
          alt="tpn-certification"
        ></Image>
      </Suspense>
      <Suspense fallback={<>Loading...</>}>
        <div className="w-screen flex justify-center pt-[3vh] sm:mt-[10vh] bg-black">
          <div className="flex flex-col w-full sm:w-1/2 text-white justify-center items-center pl-[5vw]">
            <h1 className="font-averta font-bold text-3xl w-3/4 mb-[5vh]">
              TPN Certification
            </h1>
            <h3 className="font-averta font-bold text-lg w-3/4 mb-[5vh]">
              We are TPN (Trusted Partner Network) certified. TPN certification
              signifies our unwavering commitment to security and quality
              standards. This recognition enhances our operational integrity and
              reinforces trust with clients across the media and entertainment
              industry.
            </h3>
          </div>
        </div>
        {/* <Carousel
          responsive={responsive}
          autoPlay
          autoPlaySpeed={3000}
          transitionDuration={200}
          infinite
          className="bg-black w-screen flex justify-center"
          pauseOnHover
          ssr
        >
          {MovieList.map((portfolio: any, index: number) => (
            <div
              key={portfolio.id}
              className="flex justify-center relative mr-[3vw] z-30 items-center"
            >
              <Image
                src={portfolio.image}
                alt={`${portfolio.id} image`}
                className={`sm:w-[10vw] w-[50vw]`}
              ></Image>
            </div>
          ))}
        </Carousel> */}
        {/* <div className="overflow-x-scroll bg-black no-scrollbar relative z-30">
          <div
            style={{
              transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${inc}, 0, 0, 1)`,
            }}
            className={`flex sm:mt-[10vh] mt-[20vh]`}
          >
            {MovieList.map((portfolio: any) => (
              <div
                key={portfolio.id}
                className="flex justify-center relative mr-[3vw] z-0  items-center"
              >
                <Image
                  src={portfolio.image}
                  alt={`${portfolio.id} image`}
                  className={`sm:w-[10vw] w-[50vw]`}
                ></Image>
              </div>
            ))}
          </div>
        </div> */}
        <MoviePosterSlider></MoviePosterSlider>
      </Suspense>
      <CallToAction />
    </div>
  );
};
export default Page;
