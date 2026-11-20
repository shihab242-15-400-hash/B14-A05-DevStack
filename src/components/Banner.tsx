import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-16 md:pb-24">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-violet-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Build Your Ideal <br />
              <span className="brand-gradient-text">Development Stack</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a
                href="#technologies"
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-white brand-gradient shadow-md shadow-pink-500/15 hover:opacity-95 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base inline-flex items-center gap-2"
              >
                Explore Technologies
              </a>

              <a
                href="#learn-more"
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all text-sm sm:text-base inline-flex items-center gap-2"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Banner Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              <img
                src={bannerImg}
                alt="Dev Stack Layers 3D Illustration"
                className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
