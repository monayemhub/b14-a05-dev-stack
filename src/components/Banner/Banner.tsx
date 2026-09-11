import brandTheme from "../../styles/brand_theme.ts";
import BannerImage from "../../assets/banner.png";

const Banner = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center px-7 container mx-auto">
      <div className="mt-8 lg:mb-8">
        <h1 className="font-bold sm:font-extrabold text-3xl sm:text-6xl text-center lg:text-left mb-3 lg:mb-6">
          Build Your Ideal
          <br />
          <span className={`${brandTheme} bg-clip-text text-transparent`}>
            Development Stack
          </span>
        </h1>

        <p className="font-normal text-sm sm:text-lg text-[#4B5563] text-center lg:text-left lg:max-w-xl mb-6 lg:mb-10">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex gap-3 justify-center lg:justify-start items-center">
          <button
            className={`font-normal sm:font-semibold text-xs sm:text-sm text-white ${brandTheme} px-6 py-3 rounded-lg`}
          >
            Explore Technologies
          </button>

          <button className="font-normal sm:font-semibold text-xs sm:text-sm text-[#374151] px-6 py-3 rounded-lg border border-[#E5E7EB]">
            Learn More
          </button>
        </div>
      </div>

      <div>
        <img src={BannerImage} alt="Banner image" />
      </div>
    </section>
  );
};

export default Banner;
