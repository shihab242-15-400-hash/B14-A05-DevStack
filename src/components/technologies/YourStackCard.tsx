import type { ITechnology } from "../../types/technology";
import { IoCloseOutline } from "react-icons/io5";

interface IYourStackCardProps {
  technology: ITechnology;
  onRemoveFromStack: (technology: ITechnology) => void;
}

const YourStackCard = ({
  technology,
  onRemoveFromStack,
}: IYourStackCardProps) => {
  return (
    <div className="flex items-center justify-between p-3.5 rounded-2xl border border-sky-100 bg-white hover:border-sky-200 transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 p-2 flex items-center justify-center shrink-0">
          <img
            src={technology.icon}
            alt={technology.name}
            className="w-6 h-6 object-contain"
          />
        </div>
        <div>
          <h4 className="font-bold text-sm text-slate-900 leading-tight">
            {technology.name}
          </h4>
          <p className="text-xs text-slate-400 font-medium capitalize mt-0.5">
            {technology.category}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onRemoveFromStack(technology)}
        className="text-slate-400 hover:text-red-500 p-1.5 rounded-lg hover:bg-red-50 transition-colors focus:outline-none cursor-pointer"
        aria-label={`Remove ${technology.name} from stack`}
      >
        <IoCloseOutline className="w-5 h-5" />
      </button>
    </div>
  );
};

export default YourStackCard;
