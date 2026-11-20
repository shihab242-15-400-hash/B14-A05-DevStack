import type { ITechnology } from "../../types/technology";
import { FaStar } from "react-icons/fa";

interface TechCardProps {
  technology: ITechnology;
  isAdded: boolean;
  onAddToStack: (tech: ITechnology) => void;
}

// Helper to provide nice matching colors for badges based on badge name or category
const getBadgeColor = (badge: string) => {
  const normalized = badge.toLowerCase();
  if (normalized.includes("popular") || normalized.includes("essential") || normalized.includes("sql") || normalized.includes("container")) {
    return "bg-sky-50 text-sky-600 border border-sky-100";
  }
  if (normalized.includes("versatile") || normalized.includes("standard")) {
    return "bg-emerald-50 text-emerald-600 border border-emerald-100";
  }
  if (normalized.includes("fast") || normalized.includes("cache") || normalized.includes("nosql")) {
    return "bg-rose-50 text-rose-600 border border-rose-100";
  }
  if (normalized.includes("ubiquitous") || normalized.includes("blazing")) {
    return "bg-amber-50 text-amber-700 border border-amber-100";
  }
  if (normalized.includes("modern") || normalized.includes("robust")) {
    return "bg-cyan-50 text-cyan-600 border border-cyan-100";
  }
  return "bg-purple-50 text-purple-600 border border-purple-100";
};

const TechCard = ({
  technology,
  isAdded,
  onAddToStack,
}: TechCardProps) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group">
      <div>
        {/* Top Header: Icon + Badge */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 p-2 flex items-center justify-center transition-transform group-hover:scale-105">
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-8 h-8 object-contain"
              loading="lazy"
            />
          </div>

          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${getBadgeColor(
              technology.badge,
            )}`}
          >
            {technology.badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {technology.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-500 line-clamp-3 leading-relaxed mb-5 min-h-[60px]">
          {technology.description}
        </p>

        {/* Metadata Chips: Category, Difficulty, Rating */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs py-2 border-t border-slate-100 mb-5">
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full font-medium">
            {technology.category}
          </span>

          <span className="text-slate-500 font-medium">
            {technology.difficulty}
          </span>

          <span className="flex items-center gap-1 font-semibold text-slate-700">
            <FaStar className="text-amber-400 text-xs" />
            {technology.rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Add / Added Button */}
      <button
        type="button"
        onClick={() => onAddToStack(technology)}
        disabled={isAdded}
        className={`w-full py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 text-center ${
          isAdded
            ? "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
            : "bg-[#0B0F19] hover:bg-slate-800 text-white shadow-sm hover:shadow active:scale-[0.99] cursor-pointer"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;
