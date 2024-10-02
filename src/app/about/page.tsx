"use client";
import React from "react";
import Hero from "../components/About/Hero";
import TagLine from "../components/About/TagLine";
import Message, { IMessageProps } from "../components/About/Message";
import Team from "../components/About/Team";
import Portfolio from "../components/About/Portfolio";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";

import ProjectList from "../components/ProjectList";
import CallToAction from "../components/CallToAction";
type AboutProps = {};

const trackRecord: IMessageProps = {
  title: "Our Track Record",
  content: `With over 60 successful projects under our belt, our proven track record
        speaks for itself. We pride ourselves on delivering high-quality results
        on time and within budget. Our client-centric approach ensures that we
        thoroughly understand your challenges and goals, crafting solutions that
        are not only effective but also sustainable and user-friendly. `,
  alignment: "left",
};

const whyChooseUs: IMessageProps[] = [
  {
    title: "Demonstrated Success",
    content:
      "We have a proven history of achieving exceptional outcomes, supported by a multitude of successful projects and a roster of satisfied clients. ",
    alignment: "left",
  },
  {
    title: "Speed and Precision",
    content:
      "With efficient turnaround times, we ensure that your project is completed promptly without compromising on quality. Our attention to detail and creative expertise guarantee a polished final product. ",
    alignment: "left",
  },
  {
    title: "Experienced Team",
    content:
      "Our dedicated team of professionals and artists are passionate about storytelling through visual media. With years of industry experience, they bring unparalleled skill and creativity to every project. ",
    alignment: "left",
  },
  {
    title: "Competitive Pricing",
    content:
      "We offer transparent, customized packages to fit various budgets and project sizes. Quality post production doesn't have to break the bank. ",
    alignment: "left",
  },
  {
    title: "Commitment to Satisfaction",
    content:
      "We maintain open communication and the flexibility to accommodate client feedback, ensuring that you're delighted with the final product.",
    alignment: "left",
  },
];

const About: React.FC<AboutProps> = () => {
  return (
    <div>
      <ParallaxProvider>
        <Hero />
        <TagLine />
        <Message {...trackRecord} />
        <p className="text-8xl sm:text-6xl h-screen text-center flex items-center justify-center w-screen bg-black text-white p-4">
          Why Choose Us
        </p>
        {whyChooseUs.map((item, index) => (
          <Message {...item} key={index} />
        ))}

        {/* <Team /> */}

        {/* <Portfolio /> */}

        {/* <ProjectList>
        <Portfolio />
      </ProjectList> */}
        <CallToAction />
      </ParallaxProvider>
    </div>
  );
};
export default About;
