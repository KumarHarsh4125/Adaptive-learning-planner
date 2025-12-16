import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasksByDate, setTasksByDate] = useState({});
  const [taskInput, setTaskInput] = useState("");

  const formatDateKey = (date) => date.toISOString().split("T")[0];
  const dateKey = formatDateKey(selectedDate);
  const tasksForSelectedDay = tasksByDate[dateKey] || [];

  const addTask = (e) => {
    e.preventDefault();

    if (!taskInput.trim()) return;

    setTasksByDate((prev) => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), taskInput],
    }));

    setTaskInput("");
  };

  const upcomingTasks = Object.keys(tasksByDate)
    .filter((date) => new Date(date) > new Date())
    .sort((a, b) => new Date(a) - new Date(b))
    .slice(0, 2);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* LEFT SIDE */}
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">
          📅 My Calendar
        </h1>

        <div className="bg-white p-4 rounded-xl shadow w-fit">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileContent={({ date }) => {
              const key = formatDateKey(date);
              if (tasksByDate[key]?.length > 0) {
                return (
                  <div className="flex justify-center mt-1">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                  </div>
                );
              }
              return null;
            }}
            className="custom-calendar"
          />
        </div>

        {/* TASKS */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-semibold text-gray-800">
            Tasks for {selectedDate.toDateString()}
          </h2>

          <ul className="mt-3 space-y-2">
            {tasksForSelectedDay.length === 0 && (
              <li className="text-gray-500 text-sm">
                No tasks for this day
              </li>
            )}

            {tasksForSelectedDay.map((task, index) => (
              <li
                key={index}
                className="bg-purple-50 px-3 py-2 rounded text-base"
              >
                {task}
              </li>
            ))}
          </ul>

          {/* ADD TASK FORM */}
          <form onSubmit={addTask} className="flex gap-2 mt-4">
            <input
              type="text"
              placeholder="Add a task"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              className="flex-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Add
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-6 mt-0 -ml-16">
        <h2 className="text-2xl font-semibold text-gray-800">
          ⏭️ Upcoming Tasks
        </h2>

        {upcomingTasks.length === 0 && (
          <div className="bg-white p-6 rounded-2xl shadow text-gray-500 text-base">
            No upcoming tasks
          </div>
        )}

        {upcomingTasks.map((date) => (
          <div
            key={date}
            className="bg-white p-6 rounded-2xl shadow"
          >
            <p className="text-base text-purple-600 font-semibold">
              {new Date(date).toDateString()}
            </p>

            <ul className="mt-3 space-y-2 text-base text-gray-700">
              {tasksByDate[date].map((task, index) => (
                <li key={index}>• {task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarPage;
