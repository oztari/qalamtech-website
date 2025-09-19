"use client";

import SectionTitle from "@/components/Common/SectionTitle";
import Accordion from "@/components/Common/Accordion";

export default function RefundPolicyPage() {
  const refundItems = [
    {
      title: "Refund Eligibility",
      content: (
        <p>
          Refunds are only applicable if the product or service meets the criteria
          outlined in our refund policy. Please ensure you provide valid proof of
          purchase.
        </p>
      ),
    },
    {
      title: "Refund Process",
      content: (
        <p>
          To request a refund, contact our support team with your order details.
          Refund requests are processed within 7–10 business days.
        </p>
      ),
    },
    {
      title: "Non-Refundable Items",
      content: (
        <p>
          Certain services or products, such as customized solutions or digital
          downloads, may not be eligible for a refund.
        </p>
      ),
    },
    {
      title: "Contact for Refund",
      content: (
        <p>
          If you have questions regarding your refund, please reach out to our
          <a href="/contact" className="text-primary hover:underline"> support team</a>.
        </p>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-dark text-body-color dark:text-white px-4 md:px-16 pt-28 pb-16">
      <div className="container mx-auto">
        <SectionTitle
          title="Refund Policy"
          paragraph="Learn about our refund terms and how we handle refund requests."
          width="700px"
          center
          mb="60px"
        />

        <Accordion items={refundItems} />
      </div>
    </div>
  );
}
