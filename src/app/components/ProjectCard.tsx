"use client";
import React, { useEffect, useRef, useState } from "react";

type ProjectCardProps = {};

import useLogoRevealDistance from "../hooks/logoRevealDistance";
import useProjectsContainerWidth from "../hooks/projectsContainerWidth";
import useProjectsDistance from "../hooks/projectsDistance";
import { calculateBgColorChangeRanges } from "../utils/calculateBgColorChangeRanges";
import useProjectBreakpoints from "../hooks/breakpoints";
import useActiveProject from "../hooks/activeProject";
import { portfolioList } from "../utils/portfolioList";
import { InView } from "react-intersection-observer";
import Image from "next/image";

const ProjectCard: React.FC<ProjectCardProps> = () => {
  const { logoRevealDistance }: any = useLogoRevealDistance();
  const { projectsDistance }: any = useProjectsDistance();
  const { activeProject, setActiveProject }: any = useActiveProject();
  const [positionAdjustment, setPositionAdjustment] = useState<number>(0);
  const [startLine, setStartLine] = useState<number>(0);

  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef: any = {};

  const { setBreakpoints, breakpoints }: any = useProjectBreakpoints();

  const setProjectsContainerWidth = useProjectsContainerWidth(
    (state: any) => state.setProjectsContainerWidth
  );

  useEffect(() => {
    const card: any = cardRef?.current?.getBoundingClientRect();
    if (card) {
      setPositionAdjustment(card.width * portfolioList.length);
      setProjectsContainerWidth(card.width * portfolioList.length);
    }
  }, []);

  useEffect(() => {
    const card: any = cardRef?.current?.getBoundingClientRect();
    if (
      projectsDistance <= 0 &&
      logoRevealDistance > 0 &&
      startLine === 0 &&
      card.width != 0
    ) {
      const breakpointsTemp = calculateBgColorChangeRanges(
        logoRevealDistance,
        portfolioList,
        card.width
      );

      setBreakpoints(breakpointsTemp);
      setStartLine(logoRevealDistance);
    }
  }, [projectsDistance, logoRevealDistance]);

  // console.log(breakpoints);

  useEffect(() => {
    videoRef[activeProject]?.play();
    videoRef[activeProject - 1]?.pause();
    videoRef[activeProject + 1]?.pause();
  }, [activeProject]);

  return (
    <>
      <div
        style={{
          transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ${
            logoRevealDistance - positionAdjustment
          }, 0, 0, 1)`,
        }}
        className={`sm:flex sm:mt-[10vh] hidden`}
      >
        {portfolioList.map((portfolio) => (
          <div
            key={portfolio.id}
            ref={cardRef}
            className="flex justify-center relative mr-[3vw] z-0 w-full items-center"
          >
            <p
              className={`absolute font-averta text-${
                portfolio.textColor
              } font-extrabold text-5xl text-center transition duration-1000 ${
                portfolio.id === activeProject ? "opacity-100" : "opacity-0"
              }`}
            >
              {portfolio.projectName}
            </p>
            <Image
              src={portfolio.thumbnail}
              alt="portfolio"
              height={300}
              width={300}
              className={`transition duration-1000 ${
                portfolio.id === activeProject ? "opacity-0" : "opacity-100"
              } absolute w-[20vw]`}
            ></Image>
            <video
              className="w-[20vw] text-black"
              ref={(ref) => {
                videoRef[portfolio.id] = ref;
              }}
              muted
              loop
              // autoPlay={portfolio.id === activeProject ? true : false}
              autoPlay
              poster={portfolio.thumbnail}
            >
              <source src={portfolio.video} type="video/mp4" className="" />
            </video>
          </div>
        ))}
      </div>
      <div className="block sm:hidden">
        {portfolioList.map((portfolio) => (
          <div
            key={portfolio.id}
            className="flex flex-col justify-center relative mr-[3vw] z-0 w-full items-center mt-[5vh]"
          >
            <InView
              as="div"
              className={`absolute  font-averta text-${
                portfolio.textColor
              } font-extrabold text-5xl text-center transition duration-1000 ${
                portfolio.id === activeProject ? "opacity-100" : "opacity-0"
              }`}
              onChange={(inView, entry) => {
                if (inView) {
                  setActiveProject(portfolio.id);
                }
              }}
            >
              <p>{portfolio.projectName}</p>
            </InView>
            <video
              className="w-[80vw] text-black"
              ref={(ref) => {
                videoRef[portfolio.id] = ref;
              }}
              muted
              loop
            >
              <source src={portfolio.video} type="video/mp4" className="" />
            </video>
          </div>
        ))}
      </div>
    </>
  );
};
export default ProjectCard;
