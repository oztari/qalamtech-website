"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const packages = {
  website: [
    {
      packageName: "Starter",
      price: "500",
      duration: "one-time + $50/mo",
      subtitle: "Perfect for personal or small business sites with optional monthly support",
      features: [
        "1–3 Pages",
        "Responsive Design",
        "Basic SEO",
        "Contact Form",
        "Blog Integration",
        "E-commerce",
        "Ongoing Monthly Support",
      ],
      activeFeatures: 4,
    },
    {
      packageName: "Business",
      price: "1200",
      duration: "one-time + $100/mo",
      subtitle: "For growing businesses needing more features and monthly support",
      features: [
        "5–10 Pages",
        "Custom Design",
        "SEO Optimized",
        "Blog / CMS Integration",
        "Analytics Setup",
        "Ongoing Monthly Support",
      ],
      activeFeatures: 5,
    },
    {
      packageName: "Premium",
      price: "2500",
      duration: "one-time + $250/mo",
      subtitle: "Advanced sites with custom integrations and premium monthly support",
      features: [
        "10+ Pages",
        "Custom Animations & Features",
        "CMS & E-commerce Integration",
        "SEO Optimized",
        "Analytics and Reporting",
        "Ongoing Premium Support",
      ],
      activeFeatures: 6,
    },
  ],
  app: [
    {
      packageName: "Starter App",
      price: "1500",
      duration: "one-time + $75/mo",
      subtitle: "Simple apps to get started with optional monthly support",
      features: [
        "Basic UI/UX",
        "iOS & Android Support",
        "Push Notifications",
        "Backend Integration",
        "App Store Deployment",
        "Ongoing Monthly Support",
      ],
      activeFeatures: 4,
    },
    {
      packageName: "Business App",
      price: "3500",
      duration: "one-time + $150/mo",
      subtitle: "Apps with more features for business needs and monthly support",
      features: [
        "Custom UI/UX",
        "iOS & Android Support",
        "Push Notifications & Analytics",
        "Backend & API Integration",
        "App Store Deployment",
        "Ongoing Monthly Support",
      ],
      activeFeatures: 6,
    },
    {
      packageName: "Premium App",
      price: "8000",
      duration: "one-time + $400/mo",
      subtitle: "Fully featured custom apps with premium monthly support",
      features: [
        "Premium Custom UI/UX",
        "iOS & Android Support",
        "Push Notifications, Analytics & Reporting",
        "Backend & API Integration + Scalability",
        "App Store Deployment & Maintenance",
        "Ongoing Premium Support",
      ],
      activeFeatures: 6,
    },
  ],
};

const Pricing = () => {
  const [isWebsite, setIsWebsite] = useState(true);
  const activePackages = isWebsite ? packages.website : packages.app;

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Simple and Affordable Pricing"
          paragraph="Choose between website and app development packages tailored to your needs. For custom logo designs, please contact us directly for a quote."
          center
          width="665px"
        />

        {/* Toggle Buttons */}
        <div className="w-full mb-12 flex justify-center">
          <span
            onClick={() => setIsWebsite(true)}
            className={`${
              isWebsite ? "pointer-events-none text-primary" : "text-dark dark:text-white"
            } mr-4 cursor-pointer text-base font-semibold`}
          >
            Website
          </span>
          <div
            onClick={() => setIsWebsite(!isWebsite)}
            className="flex cursor-pointer items-center"
          >
            <div className="relative">
              <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
              <div
                className={`${
                  isWebsite ? "" : "translate-x-full"
                } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
              >
                <span className="active h-4 w-4 rounded-full bg-white"></span>
              </div>
            </div>
          </div>
          <span
            onClick={() => setIsWebsite(false)}
            className={`${
              isWebsite ? "text-dark dark:text-white" : "pointer-events-none text-primary"
            } ml-4 cursor-pointer text-base font-semibold`}
          >
            App
          </span>
        </div>

        {/* Pricing Boxes */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {activePackages.map((pkg, idx) => (
            <PricingBox
              key={idx}
              packageName={pkg.packageName}
              price={pkg.price}
              duration={pkg.duration}
              subtitle={pkg.subtitle}
            >
              {pkg.features.map((feature, i) => (
                <OfferList
                  key={i}
                  text={feature}
                  status={i < pkg.activeFeatures ? "active" : "inactive"}
                />
              ))}
            </PricingBox>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
