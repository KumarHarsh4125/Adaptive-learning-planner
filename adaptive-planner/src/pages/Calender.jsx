import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Plus, Trash2, Calendar as CalendarIcon, CheckCircle, Clock } from "lucide-react";

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

  const removeTask = (index) => {
    setTasksByDate((prev) => {
      const newTasks = [...(prev[dateKey] || [])];
      newTasks.splice(index, 1);
      return { ...prev, [dateKey]: newTasks };
    });
  };

  const upcomingTasks = Object.keys(tasksByDate)
    .filter((date) => new Date(date) > new Date())
    .sort((a, b) => new Date(a) - new Date(b))
    .slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex items-center justify-between relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <div className="bg-teal-100 p-2 rounded-xl text-teal-600">
              <CalendarIcon className="w-6 h-6" />
            </div>
            Schedule & Tasks
          </h1>
          <p className="text-gray-500 mt-2 ml-1">Manage your learning timeline effectively.</p>
        </div>
        <div className="absolute right-0 top-0 w-32 h-32 bg-teal-50 rounded-full blur-3xl -mr-10 -mt-10"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Calendar Section */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-lg shadow-gray-100/50 border border-gray-50">
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              tileContent={({ date }) => {
                const key = formatDateKey(date);
                if (tasksByDate[key]?.length > 0) {
                  return (
                    <div className="flex justify-center mt-1">
                      <span className="w-1.5 h-1.5 bg-teal-500 rounded-full shadow-sm shadow-teal-200"></span>
                    </div>
                  );
                }
                return null;
              }}
              className="custom-calendar w-full border-none font-sans text-gray-700"
              tileClassName="rounded-lg hover:bg-teal-50 transition-colors p-2 text-sm font-medium"
            />
          </div>
        </div>

        {/* Sidebar: Tasks & Upcoming */}
        <div className="lg:col-span-4 space-y-6">
          {/* Selected Day Tasks */}
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col min-h-[200px]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                {selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
              </h2>
              <span className="text-xs font-bold bg-teal-50 text-teal-700 px-3 py-1 rounded-full uppercase tracking-wider">
                {tasksForSelectedDay.length} Tasks
              </span>
            </div>

            {/* Task List */}
            <div className="flex-1 overflow-y-auto mb-6 pr-2 custom-scrollbar">
              {tasksForSelectedDay.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-40 text-gray-400 text-center">
                  <CheckCircle className="w-12 h-12 mb-3 opacity-20" />
                  <p className="text-sm">No tasks yet.</p>
                  <p className="text-xs opacity-70">Add one below!</p>
                </div>
              ) : (
                <ul className="space-y-3">
                  {tasksForSelectedDay.map((task, index) => (
                    <li
                      key={index}
                      className="group flex items-center justify-between bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 px-4 py-3 rounded-xl transition-all shadow-sm"
                    >
                      <span className="text-gray-700 font-medium text-sm">{task}</span>
                      <button
                        onClick={() => removeTask(index)}
                        className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all p-1 hover:bg-red-50 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Add Task Input */}
            <form onSubmit={addTask} className="relative mt-auto">
              <input
                type="text"
                placeholder="Add new task..."
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-teal-500 focus:border-teal-500 block w-full pl-4 p-3.5 outline-none transition-shadow focus:shadow-md"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bg-teal-600 hover:bg-teal-700 text-white p-1.5 rounded-lg transition-colors cursor-pointer"
                disabled={!taskInput.trim()}
              >
                <Plus className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Upcoming Preview */}
          <div className="bg-gray-900 rounded-3xl p-6 text-white shadow-xl">
            <div className="flex items-center gap-2 mb-4 opacity-90">
              <Clock className="w-4 h-4 text-teal-400" />
              <h3 className="font-semibold text-sm uppercase tracking-wide">Upcoming</h3>
            </div>

            {upcomingTasks.length === 0 ? (
              <p className="text-gray-500 text-sm italic">No upcoming tasks scheduled.</p>
            ) : (
              <div className="space-y-4">
                {upcomingTasks.map((date) => (
                  <div key={date} className="border-l-2 border-teal-500 pl-4 py-1">
                    <p className="text-xs text-gray-400 mb-0.5">{new Date(date).toLocaleDateString()}</p>
                    <p className="text-sm font-medium text-gray-200 line-clamp-1">
                      {tasksByDate[date].length} tasks scheduled
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarPage;
