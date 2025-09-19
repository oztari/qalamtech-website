"use client";
import { useState, ReactNode, useRef, useEffect } from "react";

interface AccordionItem {
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<HTMLDivElement[]>([]);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border rounded-lg border-gray-200 dark:border-gray-700 overflow-hidden">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left px-6 py-4 bg-gray-100 dark:bg-gray-800 font-medium text-black dark:text-white flex justify-between items-center"
            >
              {item.title}
              <span className={`transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>+</span>
            </button>

            <div
              ref={(el) => {
                if (el) contentRefs.current[index] = el;
              }}
              className="transition-all duration-500 ease-in-out overflow-hidden"
              style={{
                maxHeight: isOpen
                  ? contentRefs.current[index]?.scrollHeight + "px"
                  : "0px",
              }}
            >
              <div className="px-6 py-4 bg-white dark:bg-gray-dark text-body-color dark:text-white">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
