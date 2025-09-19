const WhoWeServe = () => {
  return (
    <section className="py-16 bg-gray-light dark:bg-gray-dark">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
            Who We Serve
          </h2>
          <p className="mt-4 text-base font-medium text-body-color sm:text-lg">
            We work with startups, small businesses, and tech innovators who want to build scalable, modern, and high-performing websites and software solutions. From sleek landing pages to complex web applications, we create tools that help you attract leads, convert customers, and grow your business.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md hover:shadow-lg hover:scale-105 transition-transform transition-shadow duration-300 cursor-pointer flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
              Startups & Entrepreneurs
            </h3>
            <p className="text-body-color dark:text-gray-300 text-base">
              We help startups launch fast, functional, and user-friendly platforms to validate ideas and attract investors or customers.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md hover:shadow-lg hover:scale-105 transition-transform transition-shadow duration-300 cursor-pointer flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
              Small & Medium Businesses
            </h3>
            <p className="text-body-color dark:text-gray-300 text-base">
              We modernize your digital presence with responsive websites, custom software, and tools that streamline workflows and generate leads.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md hover:shadow-lg hover:scale-105 transition-transform transition-shadow duration-300 cursor-pointer flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-3">
              Tech Innovators & SaaS Projects
            </h3>
            <p className="text-body-color dark:text-gray-300 text-base">
              We build scalable, maintainable, and secure SaaS applications with a focus on UX, performance, and converting visitors into customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
