import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import WhoWeServe from "@/components/About/WhoWeServe";

import { Metadata } from "next";

import about3Animation from "/components/About/animations/about5.json";
import about4Animation from "/components/About/animations/about4.json";

export const metadata: Metadata = {
  title: "What We Do | Building Apps and Websites to Help You Grow",
  description: "Learn more about our freelance software and web development services, and how we help businesses grow online",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="What We Do"
        description="We are a freelance software and web developing service specializing in building modern, responsive, high-performance websites and applications. We help businesses scale by creating tailored solutions that attract and retain customers."
      />
      <AboutSectionOne animationData={about3Animation} />
      <WhoWeServe /> 
      <AboutSectionTwo animationData={about4Animation} />
    </>
  );
};

export default AboutPage;
