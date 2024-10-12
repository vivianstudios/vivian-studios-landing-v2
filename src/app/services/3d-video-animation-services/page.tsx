import React from "react";
import type { Metadata } from "next";
import { Suspense, useRef } from "react";
import Hero from "../../components/Services/Hero";
import Mission from "../../components/Services/Mission";
import FeaturedProject from "../../components/Services/FeaturedProject";
import SubServices from "../../components/Services/SubServices";
import Clients from "@/app/components/Services/Clients";

import ThreeDModel from "@/app/assets/animation/3D-model.jpg";
import Rigging from "@/app/assets/animation/Rigging-before.png";
import RiggingAfter from "@/app/assets/animation/Rigging-after.png";

import One from "@/app/assets/animation/Client-list/1.png";
import Two from "@/app/assets/animation/Client-list/2.png";
import Three from "@/app/assets/animation/Client-list/3.png";
import Four from "@/app/assets/animation/Client-list/4.png";
import Five from "@/app/assets/animation/Client-list/5.png";
import Six from "@/app/assets/animation/Client-list/6.png";
import Seven from "@/app/assets/animation/Client-list/7.png";
import Eight from "@/app/assets/animation/Client-list/8.png";
import Nine from "@/app/assets/animation/Client-list/9.png";
import Ten from "@/app/assets/animation/Client-list/10.png";

//assets for mobile
import ThreeDModelMobile from "@/app/assets/animation/mobile/3D-modelling.jpg";
import RiggingMobile from "@/app/assets/animation/mobile/Rigging-before.jpg";
import RiggingAfterMobile from "@/app/assets/animation/mobile/Rigging-after.jpg";

import { StaticImageData } from "next/image";
import CallToAction from "@/app/components/CallToAction";

type pageProps = {};

export type ISubServices = {
  id: number;
  title: string;
  text: string;
  background: string;
  backgroundTwo?: string;
  type?: "video" | "image";
  mobileBackground: string;
  mobileBackgroundTwo?: string;
  buttonText?: string;
  altTag?: string;
};

export type IClientLogos = {
  id: number;
  image: StaticImageData;
};

export type IHeroContent = {
  title: string;
  video: string;
  mobileVideo: string;
};

export type IFeaturedProject = {
  title: string;
  video: string;
  mobileVideo: string;
};

const ClientList: IClientLogos[] = [
  {
    id: 1,
    image: One,
  },
  {
    id: 2,
    image: Two,
  },
  {
    id: 3,
    image: Three,
  },
  {
    id: 4,
    image: Four,
  },
  {
    id: 5,
    image: Five,
  },
  {
    id: 6,
    image: Six,
  },
  {
    id: 7,
    image: Seven,
  },
  {
    id: 8,
    image: Eight,
  },
  {
    id: 9,
    image: Nine,
  },
  {
    id: 10,
    image: Ten,
  },
];

const heroContent: IHeroContent = {
  title: "Animation",
  video: "./animation/hero-video.mp4",
  mobileVideo: "./animation/mobile/hero.mp4",
};

const featuredProjectContent: IFeaturedProject = {
  title: "Steps taken for Projects",
  video: "./animation/featured-project.mp4",
  mobileVideo: "./animation/featured-project.mp4",
};

const animationServices: ISubServices[] = [
  {
    id: 1,
    title: "3D Model",
    text: "At Vivian Studios, we excel in providing exceptional 3D modeling services tailored to diverse industries. Our dedicated team ensures rapid turnaround without compromising quality, empowering clients to achieve their creative visions with accuracy and flair.",
    background: ThreeDModel.src,
    mobileBackground: ThreeDModelMobile.src,
    altTag: "3d Modelling Services",
  },
  {
    id: 2,
    title: "Rigging",
    text: "Our expert team excels in character rigging, delivering anatomically accurate models that ensure functional articulation. We utilize industry-standard methods to guarantee flawless integration into your projects, enhancing both performance and visual impact.",
    background: Rigging.src,
    backgroundTwo: RiggingAfter.src,
    mobileBackground: RiggingMobile.src,
    mobileBackgroundTwo: RiggingAfterMobile.src,
    altTag: "3D Character Rigging Model",
  },
  {
    id: 3,
    title: "Animating",
    text: "Animation breathes life into static models, transforming them into dynamic entities that can convey stories and emotions. Our experienced animators create fluid movements and realistic actions that resonate with audiences across various platforms, whether in films, video games, or promotional content.  ",
    background: "/services-3.mp4",
    type: "video",
    mobileBackground: "/mobile/animation.mp4",
    altTag: "3d Video Animation",
  },
];

const missionContent = `At our 3D animation agency, we infuse imagination with artistry, transforming concepts into breathtaking visuals that resonate with audiences. With passion and precision, we deliver exceptional animations that elevate storytelling across diverse industries.`;

export const metadata: Metadata = {
  title: "Animated video services | Vivian Studio",
  description:
    "Vivian studios offer effective, customized animated videos for your commercial campaigns that help showcase your products or services and convey brand messages to help you increase visibility.",
};

const page: React.FC<pageProps> = () => {
  return (
    <>
      {" "}
      <Suspense fallback={<>Loading...</>}>
        <Hero heroContent={heroContent}></Hero>
      </Suspense>
      <Suspense fallback={<>Loading...</>}>
        <Mission content={missionContent}></Mission>
      </Suspense>
      <Suspense fallback={<>Loading...</>}>
        <FeaturedProject
          title="Steps taken for Projects"
          video="./animation/featured-project.mp4"
        ></FeaturedProject>
      </Suspense>
      <Suspense fallback={<>Loading...</>}>
        <Clients clientList={ClientList}></Clients>
      </Suspense>
      <Suspense fallback={<>Loading...</>}>
        <SubServices subServices={animationServices}></SubServices>
      </Suspense>
      <CallToAction />
    </>
  );
};
export default page;
