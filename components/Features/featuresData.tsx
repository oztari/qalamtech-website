import { Feature } from "@/types/feature";
import {
  ComputerDesktopIcon,
  PaintBrushIcon,
  ServerStackIcon,
  DevicePhoneMobileIcon,
  WrenchIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <ComputerDesktopIcon className="w-10 h-10" />,
    title: "Custom Web Development",
    paragraph:
      "We build fully responsive, performant websites tailored to your business needs using modern technologies like Next.js, React, and Node.js.",
  },
  {
    id: 1,
    icon: <PaintBrushIcon className="w-10 h-10" />,
    title: "UI/UX Design",
    paragraph:
      "We design clean, user-friendly interfaces focused on usability and conversion to ensure the best experience for your user.",
  },
  {
    id: 1,
    icon: <ServerStackIcon className="w-10 h-10" />,
    title: "Full-Stack Development",
    paragraph:
      "We handle both frontend and backend development, integrating databases, APIs, and server-side logic for robust applications.",
  },
  {
    id: 1,
    icon: <DevicePhoneMobileIcon className="w-10 h-10" />,
    title: "Responsive & Mobile-first",
    paragraph:
      "All websites we create are fully responsive and optimized for mobile devices, ensuring a seamless experience across screens.",
  },
  {
    id: 1,
    icon: <WrenchIcon className="w-10 h-10" />,
    title: "Website Maintenance",
    paragraph:
      "We provide ongoing support, updates, and optimizations to keep your website secure, fast, and up-to-date.",
  },
  {
    id: 1,
    icon: <CodeBracketIcon className="w-10 h-10" />,
    title: "Open-Source Projects",
    paragraph:
      "We contribute to open-source projects and create reusable components to give back to the developer community.",
  },
];

export default featuresData;
