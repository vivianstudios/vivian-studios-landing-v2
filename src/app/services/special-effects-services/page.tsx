import React, { useEffect, useState } from "react";
import { Suspense, useRef } from "react";

import matchMoveBefore from "@/app/assets/vfx/match-move.jpg";
import matchMoveAfter from "@/app/assets/vfx/match-move-2.jpg";

import matchMoveBeforeMobile from "@/app/assets/vfx/mobile-size/Matchmove-Before.jpg";
import matchMoveAfterMobile from "@/app/assets/vfx/mobile-size/Matchmove.jpg";

import Image from "next/image";

import Hero from "../../components/Services/Hero";
import Mission from "../../components/Services/Mission";
import FeaturedProject from "../../components/Services/FeaturedProject";
import SubServices from "../../components/Services/SubServices";
import {
  IHeroContent,
  ISubServices,
} from "../3d-video-animation-services/page";
import tpn from "@/app/assets/vfx/TPN.png";
import CallToAction from "@/app/components/CallToAction";
import MoviePosterSlider from "@/app/components/Services/MoviePosterSlider";
import { Metadata } from "next";

type pageProps = {};

const heroBannerContent: IHeroContent = {
  title: "VFX",
  video: "./special-effects-services/hero.mp4",
  mobileVideo: "./special-effects-services/mobile/hero.mp4",
};

const vfxServices: ISubServices[] = [
  {
    id: 1,
    title: "Clean Up",
    text: "Our paint and clean-up services are expertly crafted to elevate the visual integrity of your footage, meticulously eliminating undesired elements and executing premium retouching. With profound industry knowledge in restoration and video enhancement, we ensure that each frame achieves its utmost potential, catering to diverse projects such as commercials and animation.",
    background: "/clean-up.mp4",
    type: "video",
    mobileBackground: "/mobile/clean-up.mp4",
    altTag: "vfx cleanup",
  },
  {
    id: 2,
    title: "Compositing",
    text: "Compositing masterfully blends diverse elements into captivating scenes, where meticulous attention to lighting, color, and perspective guarantees perfection. Our commitment to swift delivery without compromising quality makes us the preferred partner for studios eager to realize their artistic dreams.",
    background: "/Composite.mp4",
    type: "video",
    mobileBackground: "/mobile/Composition.mp4",
    altTag: "vfx compositing",
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
    altTag: "camera tracking vfx service",
  },
  {
    id: 4,
    title: "Rotoscoping",
    text: "Rotoscoping plays a vital role in the VFX pipeline, delivering high-precision detailing to create fluid and accurate outlines in intricate scenes. We specialize in effectively managing intricate movements making us a reliable partner for film studios, ad agencies, and animation studios.",
    background: "/Rotoscoping.mp4",
    type: "video",
    mobileBackground: "/mobile/Rotoscope.mp4",
    altTag: "rotoscoping in vfx",
  },
];

export const metadata: Metadata = {
  title: "#1 Special Effects Company for Brands | Vivian Studios",
  description:
    "Vivian Studios is TPN certified and have successfully delivered VFX & special effects projects for international markets and global clients.",
};

const Page: React.FC<pageProps> = () => {
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
          video="./special-effects-services/featured.mp4"
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

        <MoviePosterSlider></MoviePosterSlider>
      </Suspense>
      <CallToAction />
    </div>
  );
};
export default Page;
