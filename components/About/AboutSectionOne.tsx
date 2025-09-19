"use client";

import SectionTitle from "../Common/SectionTitle";
import Lottie from "lottie-react"; 
import about1Animation from "./animations/about1.json";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

type AboutSectionOneProps = {
  animationData?: object; // optional override
};

const AboutSectionOne = ({ animationData }: AboutSectionOneProps) => {
  const List = ({ text }: { text: string }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            
            {/* Text Content */}
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="Freelance Software & Web Development Services"
                paragraph="We specialize in crafting high-quality websites, web apps, and software solutions tailored to your business or personal projects."
                mb="44px"
              />

              <div className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Custom web development" />
                    <List text="Responsive & modern design" />
                    <List text="Performance optimized" />
                    <List text="Cross-browser compatible" />
                    <List text="Scalable code architecture" />
                  </div>
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Next.js, Node.js & React expertise" />
                    <List text="SEO-friendly & fast-loading" />
                    <List text="Developer & client friendly" />
                    <List text="Easy maintenance & updates" />
                    <List text="Personalized project consultation" />
                  </div>
                </div>
              </div>
            </div>

            {/* Lottie Animation */}
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                data-wow-delay=".2s"
              >
                <Lottie
                  animationData={animationData || about1Animation} 
                  loop
                  autoplay
                  className="mx-auto h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
