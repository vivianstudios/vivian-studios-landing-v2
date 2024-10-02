import Image from "next/image";
import React from "react";
import Img1 from "@/app/assets/haspr-office-2.webp";
import Img2 from "@/app/assets/haspr-office-3.webp";
import { ParallaxBanner } from "react-scroll-parallax";
type TagLineProps = {};

const TagLine: React.FC<TagLineProps> = () => {
  return (
    <>
      <div className="w-screen sm:h-screen h-fit font-averta font-extrabold text-xl sm:text-xl bg-black text-white flex flex-col justify-center items-center text-center p-2 sm:p-8">
        <div className="flex flex-col sm:w-[60vw] justify-evenly">
          <p className="text-3xl sm:text-6xl p-6">Who We Are</p>
          <p>
            We are a dynamic and innovative company that embarked on our journey
            during the challenging times of the COVID-19 pandemic in May 2020.
            <br />
            <br /> From a humble beginning in a 150 square foot room, we
            dedicated ourselves to reigniting hope and inspiration through
            compelling content. During this tumultuous period, we focused on
            enlightening our audience and cultivating an environment rich in
            animation and creativity. From humble beginnings during my
            university days, our team has expanded to over 50 talented employees
            who are dedicated to excellence. Throughout our growth, we have had
            the privilege of collaborating on a variety of notable projects with
            high-end brands, mainstream OTT platforms, television commercials,
            and blockbuster films worldwide.
            <br />
            <br /> As a TPN-certified company, we are proud to meet and maintain
            the highest quality standards in our industry, demonstrating our
            commitment to delivering exceptional results. With a team of some of
            the best artists in-house, we stand ready to bring your projects to
            life, ensuring creativity and quality at every step.
          </p>
        </div>
      </div>

      {/* <div className="flex h-[150vh] w-screen bg-black justify-center">
        <div className="flex flex-col items-center mr-[10vw]">
          <div className="w-[25vw] h-[50vw] ">
            <ParallaxBanner
              layers={[
                {
                  image: "./about/about-us-hero.jpg",
                  speed: -20,
                },
              ]}
              className=" aspect-[1/2]"
            ></ParallaxBanner>
          </div>
          <p className="text-white text-2xl font-averta font-bold mt-[4vh]">
            Clean and minimal cars and bike
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[25vw] h-[50vw] mt-[20vh] ">
            <ParallaxBanner
              layers={[
                {
                  image: "./about/haspr-office-2.webp",
                  speed: -20,
                },
              ]}
              className="aspect-[1/2]"
            ></ParallaxBanner>
          </div>
          <p className="text-white text-2xl font-averta font-bold mt-[4vh]">
            Certified by Startup India and Department
          </p>
        </div>
      </div> */}
    </>
  );
};
export default TagLine;
