"use client";
import Image from "next/image";
import React from "react";
import ReactCompareImage from "react-compare-image";

import clippingBefore from "@/app/assets/image-post-production/clipping/before.png";
import clippingAfter from "@/app/assets/image-post-production/clipping/After.png";
import colorChangeBefore from "@/app/assets/image-post-production/color-change/color change before.jpg";
import colorChangeAfter from "@/app/assets/image-post-production/color-change/color change after.jpg";
import ghostManBefore from "@/app/assets/image-post-production/ghost-man/ghost mannequin Before.jpg";
import ghostManAfter from "@/app/assets/image-post-production/ghost-man/ghost mannequin (after).jpg";
import jewelryBefore from "@/app/assets/image-post-production/jewellery/before 1.jpg";
import jewelryAfter from "@/app/assets/image-post-production/jewellery/after.jpg";
import modelRetouchBefore from "@/app/assets/image-post-production/model-retouch/model retouch before.jpg";
import modelRetouchAfter from "@/app/assets/image-post-production/model-retouch/model retouch after.jpg";
import packshotImageBefore from "@/app/assets/image-post-production/packshot-image-retouch/Packshot image retouch.jpg";
import packshotImageAfter from "@/app/assets/image-post-production/packshot-image-retouch/Packshot image retouch ( after ).jpg";
import Clients from "@/app/components/Services/Clients";
import hero from "@/app/assets/image-post-production/image page first image.jpg";

import { IClientLogos } from "../3d-video-animation-services/page";

import Bimba from "@/app/assets/Client-list/Bimba-y-lola-logo.png";
import DnG from "@/app/assets/Client-list/D&G.png";
import Inditex from "@/app/assets/Client-list/Inditex.png";
import Lacoste from "@/app/assets/Client-list/Lacoste.png";
import Lululemon from "@/app/assets/Client-list/Lululemon.png";
import LV from "@/app/assets/Client-list/LV.png";
import Nike from "@/app/assets/Client-list/Nike.png";
import Rayban from "@/app/assets/Client-list/Ray ban.png";
import swarovksi from "@/app/assets/Client-list/swarovksi.png";
import TomFord from "@/app/assets/Client-list/Tom Ford.png";
import CallToAction from "@/app/components/CallToAction";
import { Metadata } from "next";

const ClientList: IClientLogos[] = [
  {
    id: 1,
    image: Bimba,
  },
  {
    id: 2,
    image: DnG,
  },
  {
    id: 3,
    image: Inditex,
  },
  {
    id: 4,
    image: Lacoste,
  },
  {
    id: 5,
    image: Lululemon,
  },
  {
    id: 6,
    image: LV,
  },
  {
    id: 7,
    image: Nike,
  },
  {
    id: 8,
    image: Rayban,
  },
  {
    id: 9,
    image: swarovksi,
  },
  {
    id: 10,
    image: TomFord,
  },
];

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <div className="bg-black w-[100vw]">
      <div className="flex h-screen  justify-center items-end ">
        <div className="flex flex-col h-screen sm:w-1/2 w-full text-white justify-center items-start p-4 sm:pl-[12.5vw] z-20">
          <h1 className="font-averta font-bold text-3xl mb-[5vh]">
            Image Post Production
          </h1>
          <h3 className="font-averta font-bold text-lg mb-[5vh]">
            Transform your visuals with our exceptional image post-production
            services, meticulously crafted for e-commerce businesses,
            photographers, and marketing agencies. Our tailored editing
            solutions guarantee that each image reflects your distinct style and
            brand identity.
          </h3>
          <a
            href="/contact-us"
            className="sm:w-[20vw] w-[80vw] h-[7vh] z-40 flex justify-center items-center bg-black font-extrabold text-center text-white border-white border-2 rounded font-averta text-lg mt-[10vh] "
          >
            Get Free Trial
          </a>
        </div>
        <div className="absolute w-full sm:w-1/2 sm:static">
          <Image
            src={hero}
            className="w-full sm:w-[50vw]"
            alt="image-post-production"
          ></Image>
        </div>
      </div>

      <Clients clientList={ClientList}></Clients>

      <div className="w-screen flex flex-col items-center font-averta text-white mb-4">
        <h1 className="text-3xl">Interactive Works</h1>
        <h1 className="text-3xl">Our Services</h1>
      </div>

      <div className="flex sm:flex-row flex-col h-fit w-screen justify-center items-end mb-[5vh]">
        <div className="flex sm:h-screen h-fit justify-center w-full sm:w-1/2 items-center bg-black">
          <div className="w-[80vw] sm:w-[25vw]">
            <ReactCompareImage
              leftImage={clippingBefore.src}
              rightImage={clippingAfter.src}
            />
          </div>
        </div>

        <div className="flex flex-col sm:h-screen h-fit w-full sm:w-1/2 text-white mt-[2vw] mb-[2vw] justify-center items-start sm:pl-[5vw] pl-[10vw] pr-[10vw]">
          <div className=" text-6xl font-averta">Clipping</div>
          <br />
          <h3 className="font-averta font-bold text-lg w-full sm:w-3/4 mb-[5vh]">
            Our clipping path services guarantee detailed precision for complex
            images, catering to photographers and e-commerce professionals
            alike. We handle bulk orders with meticulous attention to detail,
            ensuring the highest quality standards for your visuals.
          </h3>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col sm:h-screen h-fit w-screen justify-center items-end mb-[5vh]">
        <div className="flex sm:h-screen h-fit justify-center w-full sm:w-1/2 items-center bg-black sm:hidden ">
          <div className="w-[80vw] sm:w-[25vw]">
            <ReactCompareImage
              leftImage={colorChangeBefore.src}
              rightImage={colorChangeAfter.src}
              leftImageAlt="Clipping path services"
            />
          </div>
        </div>
        <div className="flex flex-col sm:h-screen h-fit w-full sm:w-1/2 text-white mt-[2vw] mb-[2vw] justify-center items-start sm:pl-[12.5vw] pl-[10vw] pr-[10vw]">
          <div className=" text-6xl font-averta">Color Correction</div>
          <br />
          <h3 className="font-averta font-bold text-lg mb-[5vh] ">
            Transform the aesthetic of your images with expert color correction,
            tackling exposure and contrast issues for a unified look. Achieve
            stunning results across all photography styles with tailored
            adjustments to enhance visual appeal.
          </h3>
        </div>

        <div className="sm:flex h-screen justify-center w-1/2 items-center bg-black hidden">
          <div className="w-[25vw]">
            <ReactCompareImage
              leftImage={colorChangeBefore.src}
              rightImage={colorChangeAfter.src}
              leftImageAlt="Color correction service"
            />
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col h-fit sm:h-screen w-screen justify-center sm:items-center items-end mb-[5vh]">
        <div className="flex h-fit justify-center w-full sm:w-1/2 items-center bg-black">
          <div className="w-[80vw] sm:w-[25vw]">
            <ReactCompareImage
              leftImage={ghostManBefore.src}
              rightImage={ghostManAfter.src}
              leftImageAlt="Neck joint service"
            />
          </div>
        </div>

        <div className="flex flex-col h-fit w-full sm:w-1/2 text-white mt-[2vw] mb-[2vw] justify-center items-start sm:pl-[5vw] pl-[10vw]">
          <div className=" text-6xl font-averta">Neck Joint</div>
          <br />
          <h3 className="font-averta font-bold text-lg w-3/4 mb-[5vh] ">
            Our neck joint services are tailored for e-commerce apparel
            businesses, expertly enhancing garment images by adjusting the neck
            area for a natural fit. We offer both standard and ghost mannequin
            styles, ensuring high-quality presentation without models.
          </h3>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col sm:h-screen h-fit w-screen justify-center items-end sm:items-center mb-[5vh]">
        <div className="flex h-fit justify-center w-full sm:w-1/2 items-center bg-black sm:hidden">
          <div className="w-[80vw] sm:w-[25vw]">
            <ReactCompareImage
              leftImage={jewelryBefore.src}
              rightImage={jewelryAfter.src}
              leftImageAlt="Neck joint service"
            />
          </div>
        </div>

        <div className="flex flex-col h-fit w-full sm:w-1/2 text-white justify-center mt-[2vw] mb-[2vw] items-start sm:pl-[12.5vw] pl-[10vw]">
          <div className="w-[40%] text-6xl font-averta ">Jewelry</div>
          <br />
          <h3 className="font-averta font-bold text-lg mb-[5vh] ">
            Hand-drawn clipping path services from us can be expected to be of
            the highest quality without breaking the bank. Just send us your
            photos, and forget about the nitty gritty process of drawing
            clipping paths, and you will be pleased with the results! We have
            served over 1000 clients worldwide and have ten years of experience
            editing photos. <br /> <br />
            No matter how complex the clipping needs to be, we ensure that your
            photos are edited perfectly.
          </h3>
        </div>

        <div className="sm:flex h-fit justify-center w-1/2 items-center bg-black hidden">
          <div className="w-[25vw]">
            <ReactCompareImage
              leftImage={jewelryBefore.src}
              rightImage={jewelryAfter.src}
              leftImageAlt="Neck joint service"
            />
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col h-fit sm:h-screen w-screen justify-center sm:items-center items-end mb-[5vh]">
        <div className="flex h-fit justify-center w-full sm:w-1/2 items-center bg-black">
          <div className="w-[80vw] sm:w-[25vw]">
            <ReactCompareImage
              leftImage={modelRetouchBefore.src}
              rightImage={modelRetouchAfter.src}
              leftImageAlt=" model photo retouching"
            />
          </div>
        </div>

        <div className="flex flex-col h-fit w-full sm:w-1/2 text-white justify-center items-start sm:pl-[5vw] pl-[10vw] mt-[2vw] mb-[2vw]">
          <div className="text-6xl font-averta">Model Retouch</div>
          <br /> <br />
          <h3 className="font-averta font-bold text-lg w-full sm:w-3/4 mb-[5vh] ">
            Our professional model retouching services elevate the look of
            models in photos, catering specifically to the fashion and beauty
            sectors. With expertise in skin enhancement, blemish removal, and
            body shaping, we create natural and stunning results.
          </h3>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col h-fit sm:h-screen w-screen bg-black justify-center sm:items-center items-end relative z-30 ">
        <div className="flex h-fit justify-center w-full sm:w-1/2 items-center bg-black sm:hidden">
          <div className="w-[80vw] sm:w-[25vw]">
            <ReactCompareImage
              leftImage={packshotImageBefore.src}
              rightImage={packshotImageAfter.src}
              leftImageAlt="model photo retouching"
            />
          </div>
        </div>

        <div className="flex flex-col h-fit w-full sm:w-1/2 text-white justify-center items-start sm:pl-[12.5vw] pl-[10vw] mt-[2vw] mb-[2vw]">
          <div className="text-6xl font-averta ">Packshot Image Retouch</div>
          <h3 className="font-averta font-bold text-lg mb-[5vh] ">
            <br />
            Transform your product images into eye-catching visuals that grab
            attention! Our expert packshot editing service blends speed with
            quality, tailored precisely to your unique needs. Trust our
            expertise to give your products the visual appeal they deserve.
          </h3>
        </div>

        <div className="sm:flex h-fit justify-center w-1/2 items-center bg-black hidden">
          <div className="w-[25vw]">
            <ReactCompareImage
              leftImage={packshotImageBefore.src}
              rightImage={packshotImageAfter.src}
              leftImageAlt="model photo retouching"
            />
          </div>
        </div>
      </div>
      <CallToAction />
    </div>
  );
};
export default page;
