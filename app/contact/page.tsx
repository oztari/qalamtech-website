import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Freelance Software & Web Development",
  description: "Get in touch with us to discuss your web development and software needs.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Reach out to us for custom web development, software solutions, or freelance tech projects. We're here to help you grow your business with high-performing websites and applications."
      />

      {/* Adjust the top margin to lift the form higher */}
      <div className="mt-[-40px] md:mt-[-60px] lg:mt-[-80px]">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
