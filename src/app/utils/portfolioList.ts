import { StaticImageData } from "next/image";
import aden from "../assets/portfolioThumbnails/aden.jpg";
import animation from "../assets/portfolioThumbnails/animation.jpg";
import expendibles from "../assets/portfolioThumbnails/expendibles.jpg";
import stateOfMind from "../assets/portfolioThumbnails/state-of-mind.png";
import wageWar from "../assets/portfolioThumbnails/wage-war.jpg";
import superbock from "../assets/home/Superbock.jpg";

export type IPortfolio = {
  id: number;
  projectName: string;
  video: string;
  thumbnail: string;
  backgroundColor: string;
  textColor: "black" | "white";
};
export const portfolioList: IPortfolio[] = [
  {
    id: 1,
    projectName: "Aden",
    video: "./projects/aden.mp4",
    thumbnail: aden.src,
    backgroundColor: "#deeceb",
    textColor: "black",
  },
  {
    id: 2,
    projectName: "Animation",
    video: "./projects/animation.mp4",
    thumbnail: animation.src,
    backgroundColor: "#a7a977",
    textColor: "white",
  },
  {
    id: 3,
    projectName: "Expendables",
    video: "./projects/expendables.mp4",
    thumbnail: expendibles.src,
    backgroundColor: "#ffe6bf",
    textColor: "black",
  },
  {
    id: 4,
    projectName: "State of Mind",
    video: "./projects/state-of-mind.mp4",
    thumbnail: stateOfMind.src,
    backgroundColor: "#a8a189",
    textColor: "white",
  },
  {
    id: 5,
    projectName: "Wage War",
    video: "./projects/wage-war.mp4",
    thumbnail: wageWar.src,
    backgroundColor: "#dbe8e7",
    textColor: "white",
  },
  {
    id: 6,
    projectName: "Superbock",
    video: "./projects/Superbock.mp4",
    thumbnail: superbock.src,
    backgroundColor: "#000000",
    textColor: "white",
  },
];
