import { IHeroContent } from "@/app/services/animation/page";
import React from "react";

type HeroProps = {
  heroContent: IHeroContent;
};

const Hero: React.FC<HeroProps> = ({
  heroContent: { title, video, mobileVideo },
}) => {
  return (
    <div className="">
      <p className="absolute flex w-screen h-screen justify-center items-center font-averta text-white font-extrabold text-4xl sm:text-8xl ">
        {title}
      </p>
      <video
        className="h-screen sm:w-screen sm:h-auto top-0 sm:block hidden"
        autoPlay={true}
        muted
        loop
      >
        <source src={video} type="video/mp4" className="h-screen sm:block" />
      </video>
      <video
        className="h-screen sm:w-screen sm:h-auto top-0 sm:hidden"
        autoPlay={true}
        muted
        loop
      >
        <source
          src={mobileVideo}
          type="video/mp4"
          className="h-screen sm:hidden"
        />
      </video>
    </div>
  );
};
export default Hero;
