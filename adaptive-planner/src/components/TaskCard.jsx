import { Link } from "react-router-dom";

function TaskCard({
  time,
  title,
  status,
  action,
  link,
  onComplete,
  disabled,
}) {
  return (
    <div
      className={`p-5 rounded-xl border shadow-sm flex justify-between items-center
        ${
          disabled
            ? "bg-teal-50 opacity-50"
            : "bg-teal-50 border-teal-100"
        }`}
    >
      <div>
        <p className="text-sm text-gray-500">{time}</p>
        <h3 className="text-lg font-semibold text-gray-900 mt-1">
          {title}
        </h3>

        <p className="text-sm mt-2">
          Status:{" "}
          <span
            className={`font-medium ${
              status === "Completed"
                ? "text-teal-700"
                : status === "Missed"
                ? "text-red-600"
                : "text-teal-600"
            }`}
          >
            {status}
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-2 items-end">
        <Link
          to={disabled ? "#" : link}
          onClick={(e) => disabled && e.preventDefault()}
          className={`px-5 py-2 rounded-lg text-sm font-medium transition text-center
            ${
              disabled
                ? "bg-gray-300 text-white cursor-not-allowed"
                : "bg-teal-600 text-white hover:bg-teal-700"
            }`}
        >
          {action}
        </Link>

        {status === "Pending" && !disabled && (
          <button
            onClick={onComplete}
            className="bg-teal-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-teal-600 transition"
          >
            Mark as Done
          </button>
        )}

        {disabled && (
          <p className="text-xs text-gray-600 text-center">
            Complete a previous task to unlock
          </p>
        )}
      </div>
    </div>
  );
}

export default TaskCard;
