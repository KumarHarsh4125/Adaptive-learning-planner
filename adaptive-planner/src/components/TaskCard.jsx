import { Link } from "react-router-dom";
import { CheckCircle, Clock, Lock, PlayCircle, BookOpen, Brain, ChevronRight } from "lucide-react";

function TaskCard({
  time,
  title,
  status,
  action,
  link,
  onComplete,
  disabled,
  isLast,
}) {
  const getIcon = () => {
    if (title.includes("Video")) return <PlayCircle className="w-5 h-5" />;
    if (title.includes("Notes")) return <BookOpen className="w-5 h-5" />;
    if (title.includes("Quiz")) return <Brain className="w-5 h-5" />;
    return <Clock className="w-5 h-5" />;
  };

  const getStatusColor = () => {
    switch (status) {
      case "Completed": return "bg-teal-100 text-teal-700 border-teal-200";
      case "Missed": return "bg-red-50 text-red-600 border-red-200";
      default: return "bg-amber-50 text-amber-600 border-amber-200"; // Pending
    }
  };

  return (
    <div className={`relative flex gap-6 ${disabled ? "opacity-60 grayscale-[0.5]" : ""}`}>
      {/* Timeline Line & Dot */}
      <div className="flex flex-col items-center">
        <div className={`
          w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 border-4
          ${status === "Completed" ? "bg-teal-600 border-teal-100 text-white" : "bg-white border-gray-100 text-gray-400"}
          ${!disabled && status !== "Completed" ? "border-teal-500 text-teal-600" : ""}
          transition-all duration-300
        `}>
          {status === "Completed" ? <CheckCircle className="w-5 h-5" /> : getIcon()}
        </div>
        {!isLast && (
          <div className={`w-0.5 grow mt-2 ${status === "Completed" ? "bg-teal-200" : "bg-gray-100"}`}></div>
        )}
      </div>

      {/* Card Content */}
      <div className="pb-10 flex-1 group">
        <div className={`
          bg-white p-5 rounded-2xl border transition-all duration-300
          ${disabled ? "border-gray-100" : "border-gray-100 hover:border-teal-200 hover:shadow-lg hover:-translate-y-1 cursor-default"}
        `}>
          <div className="flex justify-between items-start mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 bg-gray-50 px-2 py-1 rounded-md">
              {time}
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor()}`}>
              {status}
            </span>
          </div>

          <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
          <p className="text-sm text-gray-500 mb-5 line-clamp-2">
            Complete this activity to move forward in your learning path.
          </p>

          <div className="flex items-center gap-3">
            <Link
              to={disabled ? "#" : link}
              onClick={(e) => disabled && e.preventDefault()}
              className={`
                flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all
                ${disabled
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-teal-600 text-white hover:bg-teal-700 shadow-sm hover:shadow-teal-200/50"}
              `}
            >
              {disabled ? <Lock className="w-4 h-4" /> : null}
              {action}
              {!disabled && <ChevronRight className="w-4 h-4" />}
            </Link>

            {status === "Pending" && !disabled && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onComplete();
                }}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-teal-600 hover:bg-teal-50 transition-colors"
              >
                Mark Done
              </button>
            )}

            {disabled && (
              <span className="text-xs text-gray-400 italic">Complete previous task</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
