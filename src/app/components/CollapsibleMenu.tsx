"use client";
import React from "react";
import useCollapsibleMenu from "../hooks/collapsibleMenu";
import NavbarTop from "./NavbarTop";
import Image from "next/image";
import logo from "@/app/assets/logo-vivian.png";
import burgerMenu from "@/app/assets/burger-menu.png";
import closeButton from "@/app/assets/close.png";

type CollapsibleMenuProps = {};

const CollapsibleMenu: React.FC<CollapsibleMenuProps> = () => {
  const { open, setOpen }: any = useCollapsibleMenu();

  return (
    <>
      <div
        className={`w-screen ${
          open ? "h-screen z-30 visible sticky top-0" : "h-[0px] z-0 hidden"
        } absolute bg-black text-white flex flex-col justify-center items-center `}
      >
        <div className="w-screen flex sm:justify-center items-center mt-[5vh] sm:mt-[0vh] p-4 sm:p-0">
          <div className="sm:w-[40vw] sm:mr-[20vw] flex flex-col sm:justify-start">
            <div className="font-averta text-slate-300 font-bold">
              Take the tour
            </div>
            <div className="flex flex-col sm:items-start w-full">
              <div className="flex justify-between w-full ">
                <div className="flex flex-col">
                  <a
                    className="font-averta text-3xl sm:text-5xl mb-[3vh] "
                    href="/"
                  >
                    Home
                  </a>
                  <a
                    className="font-averta text-3xl sm:text-5xl mb-[3vh]"
                    href="/blogs"
                  >
                    Blog
                  </a>
                  <a
                    className="font-averta text-3xl sm:text-5xl mb-[3vh]"
                    href="/contact-us"
                  >
                    Contact
                  </a>
                  <a className="font-averta text-3xl sm:text-5xl" href="/about">
                    Who We Are
                  </a>
                </div>

                <div className="flex flex-col font-averta ml-3 sm:ml-0">
                  <p className="text-3xl sm:text-5xl mb-[1vh]">What we do</p>
                  <a
                    className="text-2xl mb-[1vh] "
                    href="/services/3d-video-animation-services"
                  >
                    Animation
                  </a>
                  <a
                    className="text-2xl mb-[1vh]"
                    href="/services/special-effects-services"
                  >
                    VFX
                  </a>
                  <a
                    className="text-2xl mb-[1vh]"
                    href="/services/ar-vr-app-development"
                  >
                    AR/VR
                  </a>
                  <a
                    className="text-2xl mb-[1vh]"
                    href="/services/video-and-motion-graphics-design-services"
                  >
                    Video Editing <br />
                    and Motion graphics
                  </a>
                  <a
                    className="text-2xl"
                    href="/services/image-post-production-services"
                  >
                    Image Post production
                  </a>
                </div>
              </div>
              <div className="flex justify-between w-full mb-[3vh]"></div>
            </div>
          </div>

          <div className="w-[15vw] sm:flex flex-col justify-start hidden ">
            <div className="font-averta text-slate-300 font-bold mb-[1vh]">
              Hey there, we&apos;re everywhere
            </div>
            <div className="flex flex-col items-start font-averta text-2xl">
              <div className="flex justify-between w-full mb-[1vh]">
                <a href="https://www.facebook.com/officialvivianstudios">
                  Facebook
                </a>
                <a href="https://www.youtube.com/channel/UC8PqF-MmQsQ9aoByfhyzZJg">
                  Youtube
                </a>
              </div>
              <div className="flex justify-between w-full mb-[1vh]">
                <a href="https://www.instagram.com/vivian.studios/">
                  Instagram
                </a>
                <a href="https://vimeo.com/user205910158">Vimeo</a>
              </div>
              <div className="flex justify-between w-full mb-[1vh]">
                <a href="https://twitter.com/vivian_studios">Twitter</a>
                <a href="">Behance</a>
              </div>
              <div className="flex justify-between w-full mb-[1vh]">
                <a href="https://www.linkedin.com/company/officialvivianstudios">
                  LinkedIn
                </a>
                <a href="">Dribble</a>
              </div>
            </div>
            <div className=" font-averta text-slate-300 font-bold mb-[1vh]">
              Get to know more
            </div>
            <div className="w-[15vw] flex flex-col items-start font-averta text-2xl">
              <div className="flex justify-between w-full mb-[1vh]">
                <a href="">Awards</a>
                <a href="">Web Design </a>
              </div>
              <div className="flex justify-between w-full mb-[1vh]">
                <a href="">Blogs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CollapsibleMenu;
