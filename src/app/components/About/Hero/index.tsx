import Image from "next/image";
import React from "react";
import about from "@/app/assets/who-we-are.webp";
import { Parallax, ParallaxBanner, useParallax } from "react-scroll-parallax";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="relative">
      <div className="w-screen h-[50vh] bg-black flex justify-center text-center items-center font-averta font-bold text-white text-2xl sm:text-6xl p-2">
        Welcome to Vivian Studios, where diverse expertise meets a
        client-centric approach to deliver exceptional results.
      </div>
      <ParallaxBanner
        layers={[
          {
            image: "./about/about-us-hero.jpg",
            speed: -20,
          },
        ]}
        className="aspect-[1/2] sm:aspect-[2/1]"
      ></ParallaxBanner>
    </div>
  );
};
export default Hero;
