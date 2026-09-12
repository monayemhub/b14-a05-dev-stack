import { use, useState } from "react";
import type { Technology } from "../../types/index.ts";
import TechnologyCard from "../TechnologyCard/TechnologyCard.tsx";
import brandTheme from "../../styles/brand_theme.ts";
import YourStack from "../YourStack/YourStack.tsx";

interface TechnologyCardsProps {
  technologyDataPromise: Promise<Technology[]>;
}

const TechnologyCards = ({ technologyDataPromise }: TechnologyCardsProps) => {
  const technologies: Technology[] = use(technologyDataPromise);

  const [availableTechnologies, setAvailableTechnologies] =
    useState<Technology[]>(technologies);

  return (
    <section className="px-7 mb-20 container mx-auto">
      <h2 className="font-bold sm:font-extrabold text-2xl sm:text-4xl text-center md:text-left mb-1 sm:mb-2">
        Explore the{" "}
        <span className={`${brandTheme} bg-clip-text text-transparent`}>
          Technologies
        </span>
      </h2>

      <p className="font-normal text-xs sm:text-base text-[#6B7280] text-center md:text-left mb-5 sm:mb-10">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[auto_calc((100%-20px)/2)] lg:grid-cols-[auto_calc((100%-2*20px)/3)] xl:grid-cols-[auto_calc((100%-3*20px)/4)] gap-5 ">
        <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 auto-rows-72">
          {availableTechnologies.map((technology) => (
            <TechnologyCard key={technology.id} technology={technology} />
          ))}
        </ul>

        <YourStack availableTechnologies={availableTechnologies} />
      </div>
    </section>
  );
};

export default TechnologyCards;
