"use client";
import Lottie from "lottie-react";
import dividerAnimation from "/components/Dividers/animations/divider1.json";

const Dividers = () => {
  return (
    <section className="w-full flex justify-center">
      <div className="w-full max-w-4xl">
        <Lottie
          animationData={dividerAnimation}
          loop={true}
          className="w-full h-64" // Set a visible height
        />
      </div>
    </section>
  );
};

export default Dividers;
