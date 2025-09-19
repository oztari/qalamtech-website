"use client";

import SectionTitle from "@/components/Common/SectionTitle";
import Accordion from "@/components/Common/Accordion";

export default function TermsOfUsePage() {
  const items = [
    {
      title: "Acceptance of Terms",
      content: (
        <>
          By accessing and using the QalamTech website, you agree to be bound by these Terms of Use.
          If you do not agree with any part of these terms, please do not use our website.
        </>
      ),
    },
    {
      title: "User Responsibilities",
      content: (
        <>
          Users must use our website responsibly and not engage in any activity that may harm the website,
          other users, or QalamTech. Prohibited activities include but are not limited to hacking, spamming,
          or sharing malicious content.
        </>
      ),
    },
    {
      title: "Intellectual Property",
      content: (
        <>
          All content on the QalamTech website, including text, graphics, logos, images, and software, is the property
          of QalamTech and protected by intellectual property laws. You may not copy, reproduce, or distribute
          any material without prior written permission.
        </>
      ),
    },
    {
      title: "Limitation of Liability",
      content: (
        <>
          QalamTech is not responsible for any direct, indirect, incidental, or consequential damages arising from
          your use of the website. Use the website at your own risk.
        </>
      ),
    },
    {
      title: "Changes to Terms",
      content: (
        <>
          QalamTech may update these Terms of Use at any time. Continued use of the website after changes indicates
          acceptance of the updated terms.
        </>
      ),
    },
    {
      title: "Governing Law",
      content: (
        <>
          These Terms of Use are governed by and construed in accordance with the laws of your jurisdiction, without
          regard to its conflict of law principles.
        </>
      ),
    },
    {
      title: "Contact Us",
      content: (
        <>
          For questions regarding these Terms of Use, contact us via our <a href="/contact" className="text-primary hover:underline">Contact page</a>.
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-dark text-body-color dark:text-white px-4 md:px-16 pt-28 pb-16">
      <div className="container mx-auto">
        <SectionTitle
          title="Terms of Use"
          paragraph="Please read these terms carefully before using the QalamTech website."
          width="700px"
          center
          mb="60px"
        />
        <Accordion items={items} />
      </div>
    </div>
  );
}
