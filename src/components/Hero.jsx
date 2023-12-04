const Hero = () => {
  return (
    <section className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
      <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2 ">
        <h1 className="text-3xl font-semibold text-center lg:text-6xl lg:text-left">
          A Simple Bookmark Manager
        </h1>
        <p className="max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0">
          A clean and simple interface to organize your favorite website Open a
          new browser tab and see your sites load instanly. Try it for free
        </p>
        {/*Button Container */}
        <div className="flex items-center justify-center w-full space-x-4 lg:justify-start">
          <button
            type="button"
            className="p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-sm border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue"
          >
            Get It On Chrome
          </button>
          <button
            type="button"
            className="p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-sm border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600"
          >
            Get It On Chrome
          </button>
        </div>
      </div>
      {/*Image */}
      <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
        <div className="bg-hero" />
        <img
          src="/images/illustration-hero.svg"
          alt="computer"
          className="relative z-10 lg:top-24 xl:top-0"
        />
      </div>
    </section>
  );
};
export default Hero;