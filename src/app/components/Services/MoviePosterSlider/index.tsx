"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//@ts-ignore
import Slider from "react-infinite-logo-slider";

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
import { StaticImageData } from "next/image";

type IMovie = {
  id: number;
  image: StaticImageData;
};

const MovieList: IMovie[] = [
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
];

function MoviePosterSlider() {
  return (
    <>
      <div className="w-screen justify-center">
        <Slider
          width="250px"
          duration={40}
          pauseOnHover={true}
          blurBorders={false}
          blurBoderColor={"#fff"}
        >
          {MovieList.map((movie: IMovie, index: number) => (
            <div
              className="h-screen sm:h-screen sm:w-screen sm:flex justify-center items-center"
              key={index}
            >
              <img
                src={movie.image.src}
                className="w-[90vw] sm:w-[16vw]"
                alt="movie"
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default MoviePosterSlider;
