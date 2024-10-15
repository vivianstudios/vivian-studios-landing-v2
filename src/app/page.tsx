"use client";
import Image from "next/image";
import dynamic from "next/dynamic";

const RevealShowreel = dynamic(() => import("./components/RevealShowreel"), {
  loading: () => <p>Loading...</p>,
});
import HeroBanner from "./components/HeroBanner";
import NavbarCenter from "./components/NavbarCenter";
// import RevealShowreel from "./components/RevealShowreel";
// const ProjectList = dynamic(() => import("./components/ProjectList"), {
//   loading: () => <p>Loading...</p>,
// });
import ProjectList from "./components/ProjectList";
const ProjectCard = dynamic(() => import("./components/ProjectCard"), {
  loading: () => <p>Loading...</p>,
});
// import ProjectCard from "./components/ProjectCard";
// import LogoReveal from "./components/LogoReveal";
const LogoReveal = dynamic(() => import("./components/LogoReveal"), {
  loading: () => <p>Loading...</p>,
});

const CallToAction = dynamic(() => import("./components/CallToAction"), {
  loading: () => <p>Loading...</p>,
});
// import CallToAction from "./components/CallToAction";

import { Suspense, useEffect, useRef, useState } from "react";

import ErrorBoundary from "./error";
import NonStickyProjectList from "./components/NonStickyProjectList";
import Message, { IMessageProps } from "./components/About/Message";

const aboutUsContent: IMessageProps = {
  title: "About Us",
  content:
    "Our dedication to excellence extends beyond project completion; we actively seek client feedback to refine our processes and improve our services. This commitment to continuous improvement, combined with our TPN certification, reinforces our position as a trusted partner in the post-production industry. At Vivian Studios, we embrace challenges and view each project as an opportunity to innovate and push creative boundaries, ensuring that your vision is not only realized but celebrated",
  alignment: "left",
};
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    return () => window.removeEventListener("load", handleLoading);
  }, []);

  return (
    <>
      <ErrorBoundary>
        <>
          <HeroBanner>
            <NavbarCenter></NavbarCenter>
          </HeroBanner>
          <Suspense fallback={<>Loading...</>}>
            <RevealShowreel />
          </Suspense>
          <Message {...aboutUsContent}></Message>
          <Suspense fallback={<>Loading...</>}>
            <ProjectList>
              <ProjectCard></ProjectCard>
            </ProjectList>
          </Suspense>
          <Suspense fallback={<>Loading...</>}>
            <LogoReveal>
              <NonStickyProjectList>
                <ProjectCard></ProjectCard>
              </NonStickyProjectList>
            </LogoReveal>
          </Suspense>
          <CallToAction></CallToAction>
        </>
      </ErrorBoundary>
    </>
  );
}
