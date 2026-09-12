import type { Technology } from "../../types/index.ts";
import { FaStar } from "react-icons/fa";
import { MdOutlineDone } from "react-icons/md";

interface TechnologyCardProps {
  availableTechnology: Technology;
  handleAddClick: (technologyId: string) => void;
}

const TechnologyCard = ({
  availableTechnology,
  handleAddClick,
}: TechnologyCardProps) => {
  return (
    <li className="flex flex-col p-5 border border-[#F1F5F9] rounded-2xl">
      <div className="flex justify-between items-center mb-3">
        <div className="w-7">
          <img
            src={availableTechnology.icon}
            alt={`${availableTechnology.name} icon`}
          />
        </div>

        <p className="font-semibold text-xs text-[#0EA5E9] bg-[#F0F9FF] px-2.5 py-1 border border-[#E0F2FE] rounded-full">
          {availableTechnology.badge}
        </p>
      </div>

      <h3 className="font-bold text-lg mb-1.5">{availableTechnology.name}</h3>

      <p className="font-normal text-xs text-[#64748B] mb-auto">
        {availableTechnology.description}
      </p>

      <div className="flex justify-between items-center mb-3">
        <p className="font-medium text-xs text-[#475569] bg-[#F1F5F9] px-2 py-1 rounded-s">
          {availableTechnology.category}
        </p>

        <p className="font-medium text-xs text-[#475569]">
          {availableTechnology.difficulty}
        </p>

        <p className="flex items-center gap-1.5">
          <FaStar color="#FBBF24" className="w-3" />{" "}
          <span className="font-semibold text-xs text-[#475569]">
            {availableTechnology.rating}
          </span>
        </p>
      </div>

      <button
        onClick={() => handleAddClick(availableTechnology.id)}
        className={`flex justify-center items-center gap-1 text-white bg-[#0A0F1D] w-full py-2.5 rounded-lg ${availableTechnology.isAdded ? "cursor-not-allowed" : "cursor-pointer"}`}
        disabled={availableTechnology.isAdded}
      >
        {availableTechnology.isAdded ? (
          <>
            <MdOutlineDone /> <span>Added to Stack</span>
          </>
        ) : (
          <span>Add to Stack</span>
        )}
      </button>
    </li>
  );
};

export default TechnologyCard;
