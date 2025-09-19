"use client";

import Lottie from "lottie-react";
import SectionTitle from "../Common/SectionTitle";
import about2Animation from "./animations/about2.json";

type AboutSectionTwoProps = {
  animationData?: object;
};

const AboutSectionTwo = ({ animationData }: AboutSectionTwoProps) => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">

          {/* Lottie Animation */}
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Lottie
                animationData={animationData || about2Animation}
                loop
                autoplay
                className="mx-auto h-full w-full"
              />
            </div>
          </div>

          {/* Text Content (kept intact) */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Clean & Bug-Free Code
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We deliver high-quality, maintainable code that’s tested, optimized, and free of common bugs to ensure your website or web app runs smoothly.
                </p>
              </div>

              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Dedicated Client Support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We provide responsive support throughout the project lifecycle and beyond, helping you resolve issues, implement updates, and improve your digital presence.
                </p>
              </div>

              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Modern Technology Stack
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We use modern technologies like Next.js, Node.js, React, and Tailwind CSS to build fast, scalable, and SEO-friendly websites and web applications.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
