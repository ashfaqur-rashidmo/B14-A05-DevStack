
import type { TechTypes } from '../types/TechTypes';
import { FaStar } from 'react-icons/fa';
import { IoCheckmark } from 'react-icons/io5';

interface TechCardProps {
    technology: TechTypes;
    handleAddToStack: (technology: TechTypes) => void;
    selectedTech: TechTypes[];
}

const TechCard = ({
    technology,
    handleAddToStack,
    selectedTech
}: TechCardProps) => {

    const isAdded = selectedTech.some(
        (tech) => tech.id === technology.id
    );

    return (

        <div className={`border rounded-2xl p-5 min-h-[264px] flex flex-col
    transition-colors duration-300 ${
        isAdded
            ? "border-[#D81B7E]"
            : "border-[#F1F5F9]"
    }`}
>
    {/* Icon + Badge */}
    <div className="flex justify-between items-center gap-3">
        <img
            src={technology.icon}
            alt={technology.name}
            className="h-10 w-10 object-contain"
        />

        <p className="bg-[#F0F9FF] text-[#0EA5E9] rounded-full px-3 py-1 text-xs whitespace-nowrap">
            {technology.badge}
        </p>
    </div>

    {/* Technology Name */}
    <h3 className="font-bold text-lg mt-4">
        {technology.name}
    </h3>

    {/* Description */}
    <p className="text-[#64748B] text-sm mt-1 leading-5 min-h-[60px]">
        {technology.description}
    </p>

    {/* Category + Difficulty + Rating */}
    <div className="flex flex-wrap items-center gap-2 mt-4">
        <p className="text-[#475569] bg-[#F1F5F9] px-2 py-1 rounded-md text-xs">
            {technology.category}
        </p>

        <p className="text-[#64748B] text-xs">
            {technology.difficulty}
        </p>

        <div className="flex items-center gap-1 text-sm">
            <FaStar className="text-amber-300" />
            <span>{technology.rating}</span>
        </div>
    </div>

    {/* Add to Stack */}
    <button
        onClick={() => handleAddToStack(technology)}
        disabled={isAdded}
        className={`w-full flex items-center justify-center gap-2 
        px-4 py-2.5 rounded-md mt-4
        transition-colors duration-300
        ${
            isAdded
                ? "bg-gray-200 text-[#D81B7E] cursor-not-allowed"
                : "bg-black text-white hover:bg-[#D81B7E]"
        }`}
    >
        {isAdded ? (
            <>
                <IoCheckmark className="text-xl" />
                <span>Added to Stack</span>
            </>
        ) : (
            "Add to Stack"
        )}
    </button>
</div>
    );
};

export default TechCard;