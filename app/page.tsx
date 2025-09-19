import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Dividers from "@/components/Dividers";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import ScrollToHash from "@/components/Common/ScrollToHash";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "QalamTech",
  description: "QalamTech - Home",
};

export default function Home() {
  return (
    <>
      <ScrollToHash />  {/* smooth scroll */}
      <ScrollUp />       {/* scroll to top button */}
      <Hero />
      <Features />
      <Dividers />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
