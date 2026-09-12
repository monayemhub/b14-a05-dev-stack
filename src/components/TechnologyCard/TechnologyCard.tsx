import type { Technology } from "../../types/index.ts";
import { FaStar } from "react-icons/fa";

interface TechnologyCardProps {
  technology: Technology;
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  return (
    <li className="flex flex-col p-5 border border-[#F1F5F9] rounded-2xl">
      <div className="flex justify-between items-center mb-3">
        <div className="w-7">
          <img src={technology.icon} alt={`${technology.name} icon`} />
        </div>

        <p className="font-semibold text-xs text-[#0EA5E9] bg-[#F0F9FF] px-2.5 py-1 border border-[#E0F2FE] rounded-full">
          {technology.badge}
        </p>
      </div>

      <h3 className="font-bold text-lg mb-1.5">{technology.name}</h3>

      <p className="font-normal text-xs text-[#64748B] mb-auto">
        {technology.description}
      </p>

      <div className="flex justify-between items-center mb-3">
        <p className="font-medium text-xs text-[#475569] bg-[#F1F5F9] px-2 py-1 rounded-s">
          {technology.category}
        </p>

        <p className="font-medium text-xs text-[#475569]">
          {technology.difficulty}
        </p>

        <p className="flex items-center gap-1.5">
          <FaStar color="#FBBF24" className="w-3" />{" "}
          <span className="font-semibold text-xs text-[#475569]">
            {technology.rating}
          </span>
        </p>
      </div>

      <button className="block text-white bg-[#0A0F1D] w-full py-2.5 rounded-lg cursor-pointer">
        Add to Stack
      </button>
    </li>
  );
};

export default TechnologyCard;
