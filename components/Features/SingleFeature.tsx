import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center justify-center rounded-xl bg-white dark:bg-gray-800 p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center max-w-xs">
        <div className="mb-6 h-16 w-16 flex items-center justify-center text-primary">
          {icon}
        </div>
        <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
          {title}
        </h3>
        <p className="text-body-color text-base leading-relaxed">{paragraph}</p>
      </div>
    </div>
  );
};

export default SingleFeature;
