import React from "react";
import { Suspense, useRef } from "react";
import Hero from "../../components/Services/Hero";
import Mission from "../../components/Services/Mission";
import SubServices from "../../components/Services/SubServices";
import {
  IHeroContent,
  ISubServices,
} from "../3d-video-animation-services/page";

import arFuniture from "@/app/assets/ar-vr/AR-Furniture.png";
import arFunitureMobile from "@/app/assets/ar-vr/Mobile-size/Ar-Furniture.jpg";
import arWatch from "@/app/assets/ar-vr/AR-Watch.jpg";
import arWatchMobile from "@/app/assets/ar-vr/Mobile-size/Ar-Watch.jpg";
import CallToAction from "@/app/components/CallToAction";
import { Metadata } from "next";

type pageProps = {};

const heroBannerContent: IHeroContent = {
  title: "AR/VR",
  video: "./ar-vr-app-development/landing-video.mp4",
  mobileVideo: "./ar-vr-app-development/mobile/Landing-Video.mp4",
};

const ARServices: ISubServices[] = [
  {
    id: 2,
    title: "AR Shoes",
    text: "",
    background: "/ar-shoe.mp4",
    type: "video",
    mobileBackground: "/mobile/Ar-Shoe.mp4",
    altTag: "AR shoes",
  },
  {
    id: 1,
    title: "AR Furniture",
    text: "",
    background: arFuniture.src,
    mobileBackground: arFunitureMobile.src,
    altTag: "augmented reality furniture",
  },
  {
    id: 3,
    title: "AR Watch",
    text: "",
    background: arWatch.src,
    mobileBackground: arWatchMobile.src,
    altTag: "augmented reality watch",
  },
];

const VRServices: ISubServices[] = [
  {
    id: 1,
    title: "VR Games",
    text: "",
    background: "/VR-Gaming.mp4",
    type: "video",
    mobileBackground: "/mobile/Vr-games.mp4",
    altTag: "VR development",
  },
  {
    id: 2,
    title: "VR Healthcare",
    text: "",
    background: "/VR-Healthcare.mp4",
    type: "video",
    mobileBackground: "/mobile/VR-Healthcare.mp4",
  },
];

const vrContent = `Maximize the effectiveness of your VR endeavors with our tailored VR app services designed for various sectors, including healthcare, SaaS and more. We deliver cutting-edge solutions, including immersive audio and seamless transitions, positioning your brand at the forefront of innovation.`;
const arContent = `Transform your Augmented Reality initiatives with our exceptional services tailored for healthcare, SaaS, tour applications, and 3D modeling. Our dedicated team enhances visual fidelity and integrates interactive elements, ensuring your augmented reality projects surpass industry benchmarks and deeply engage users.`;

export const metadata: Metadata = {
  title: "Augmented Reality Services | Vivian Studios",
  description:
    "We are a renowned AR & VR app development company that merges its deep technical knowledge with creativity to deliver highly-immersive applications. Boasting extensive AR-VR expertise.",
};

const page: React.FC<pageProps> = () => {
  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <Hero heroContent={heroBannerContent}></Hero>
      </Suspense>
      <Suspense fallback={<>Loading...</>}>
        <Mission content={arContent}></Mission>
      </Suspense>
      <Suspense fallback={<>Loading...</>}>
        <SubServices subServices={ARServices}></SubServices>
      </Suspense>
      <Suspense fallback={<>Loading...</>}>
        <Mission content={vrContent}></Mission>
      </Suspense>
      <Suspense fallback={<>Loading...</>}>
        <SubServices subServices={VRServices}></SubServices>
      </Suspense>
      <CallToAction />
    </>
  );
};
export default page;
