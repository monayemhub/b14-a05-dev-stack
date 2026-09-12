import { use } from "react";
import type { Technology } from "../../types/index.ts";
import TechnologyCard from "../TechnologyCard/TechnologyCard.tsx";

interface TechnologyCardsProps {
  technologyDataPromise: Promise<Technology[]>;
}

const TechnologyCards = ({ technologyDataPromise }: TechnologyCardsProps) => {
  const technologies: Technology[] = use(technologyDataPromise);

  return (
    <section className="grid grid-cols-1 md:grid-cols-[auto_calc((100%-20px)/2)] lg:grid-cols-[auto_calc((100%-2*20px)/3)] xl:grid-cols-[auto_calc((100%-3*20px)/4)] gap-5 px-7 container mx-auto">
      <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 auto-rows-72">
        {technologies.map((technology) => (
          <TechnologyCard key={technology.id} technology={technology} />
        ))}
      </ul>

      <div>Your Stack Section</div>
    </section>
  );
};

export default TechnologyCards;
