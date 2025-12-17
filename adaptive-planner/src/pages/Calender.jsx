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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* LEFT SIDE */}
      <div className="lg:col-span-2 space-y-8">
        <h1 className="text-3xl font-semibold text-gray-900 flex items-center gap-2">
          📅 My Calendar
        </h1>

        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 w-fit">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileContent={({ date }) => {
              const key = formatDateKey(date);
              if (tasksByDate[key]?.length > 0) {
                return (
                  <div className="flex justify-center mt-1">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                  </div>
                );
              }
              return null;
            }}
            className="custom-calendar"
          />
        </div>

        {/* TASKS */}
        <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">
            Tasks for {selectedDate.toDateString()}
          </h2>

          <ul className="mt-4 space-y-3">
            {tasksForSelectedDay.length === 0 && (
              <li className="text-gray-500 text-base">
                No tasks for this day
              </li>
            )}

            {tasksForSelectedDay.map((task, index) => (
              <li
                key={index}
                className="bg-teal-50 px-4 py-2.5 rounded-lg text-base"
              >
                {task}
              </li>
            ))}
          </ul>

          {/* ADD TASK FORM */}
          <form onSubmit={addTask} className="flex gap-3 mt-6">
            <input
              type="text"
              placeholder="Add a task"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              className="flex-1 border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              type="submit"
              className="bg-teal-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-teal-700 transition"
            >
              Add
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          ⏭️ Upcoming Tasks
        </h2>

        {upcomingTasks.length === 0 && (
          <div className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 text-gray-500 text-base">
            No upcoming tasks
          </div>
        )}

        {upcomingTasks.map((date) => (
          <div
            key={date}
            className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100"
          >
            <p className="text-base text-teal-600 font-semibold">
              {new Date(date).toDateString()}
            </p>

            <ul className="mt-4 space-y-2 text-base text-gray-800">
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
