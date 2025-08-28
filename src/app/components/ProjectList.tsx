"use client";
import React, { ReactNode, useEffect, useRef } from "react";
import useProjectsDistance from "../hooks/projectsDistance";
import useLogoRevealDistance from "../hooks/logoRevealDistance";
import useActiveProject from "../hooks/activeProject";
import { portfolioList } from "../utils/portfolioList";

interface Props {
  children: ReactNode;
}

const ProjectList = React.forwardRef<HTMLDivElement | null, Props>(
  (props, _) => {
    const ref = useRef<HTMLDivElement>(null);

    const { projectsDistance, setProjectsDistance }: any =
      useProjectsDistance();

    const { logoRevealDistance }: any = useLogoRevealDistance();

    const { activeProject }: any = useActiveProject();

    function handleScroll() {
      const top = ref?.current?.getBoundingClientRect();
      setProjectsDistance(top?.top);
    }

    useEffect(() => {
      if (typeof window !== "undefined") {
        window.addEventListener("scroll", handleScroll);
        return () => {
          if (ref.current) {
            window.removeEventListener("scroll", handleScroll, true);
          }
        };
      }
    }, []);

    return (
      <>
        <div
          style={
            activeProject
              ? {
                  backgroundColor:
                    portfolioList[activeProject - 1]?.backgroundColor,
                }
              : { backgroundColor: "#000000" }
          }
          className={`sm:block hidden
                 ${
                   projectsDistance <= 0 && logoRevealDistance > 0
                     ? "sticky top-0"
                     : ""
                 }
                 overflow-y-auto 
                 w-screen h-screen  
                 overflow-x-hidden z-0 no-scrollbar transition-colors duration-500 `}
          ref={ref}
          // onScroll={props.handleScroll}
        >
          <p className="mt-[10vh] ml-[5vw] font-averta text-5xl text-white">
            Projects
          </p>
          {props.children}
        </div>
        <div
          className="block sm:hidden w-screen transition-colors duration-500 pb-[5vh] relative z-30"
          style={
            activeProject
              ? {
                  backgroundColor:
                    portfolioList[activeProject - 1]?.backgroundColor,
                }
              : { backgroundColor: "#000000" }
          }
        >
          <p className="pt-[5vh] ml-[10vw] font-averta text-5xl text-white">
            Projects
          </p>
          {props.children}
        </div>
      </>
    );
  }
);
ProjectList.displayName = "Project List";
export default ProjectList;
