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
      className={`bg-white p-4 rounded-lg shadow flex justify-between items-center ${
        disabled ? "opacity-50" : ""
      }`}
    >
      <div>
        <p className="text-sm text-gray-500">{time}</p>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm mt-1">
          Status:{" "}
          <span
            className={`font-medium ${
              status === "Completed"
                ? "text-green-600"
                : status === "Missed"
                ? "text-red-600"
                : "text-blue-600"
            }`}
          >
            {status}
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Link
          to={disabled ? "#" : link}
          className={`px-4 py-2 rounded text-center ${
            disabled
              ? "bg-gray-400 text-white cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={(e) => disabled && e.preventDefault()}
        >
          {action}
        </Link>

        {status === "Pending" && !disabled && (
          <button
            onClick={onComplete}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
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
