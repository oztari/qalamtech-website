"use client";

import SectionTitle from "@/components/Common/SectionTitle";
import Accordion from "@/components/Common/Accordion";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  const items = [
    {
      title: "Information We Collect",
      content: <>We may collect personal information such as your name, email address, and any information you provide when contacting us.</>,
    },
    {
      title: "How We Use Your Information",
      content: <>Your information is used to provide our services, respond to inquiries, and improve your experience on our website.</>,
    },
    {
      title: "Data Security",
      content: <>We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or alteration.</>,
    },
    {
      title: "Third-Party Services",
      content: <>We may use third-party services to help operate our website. These third parties are bound to protect your information.</>,
    },
    {
      title: "Contact Us",
      content: <>If you have questions about this Privacy Policy, contact us via our <Link href="/contact" className="text-primary hover:underline">Contact page</Link>.</>,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-dark text-body-color dark:text-white px-4 md:px-16 pt-28 pb-16">
      <div className="container mx-auto">
        <SectionTitle
          title="Privacy Policy"
          paragraph="Your privacy is important to us. Learn how we collect, use, and protect your personal information."
          width="700px"
          center
          mb="60px"
        />
        <Accordion items={items} />
      </div>
    </div>
  );
}
