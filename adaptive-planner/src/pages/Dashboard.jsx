import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">
      {/* 🟣 Welcome Banner */}
      <div className="bg-purple-600 text-white rounded-xl p-6">
        <p className="text-sm opacity-90">Welcome back 👋</p>
        <h2 className="text-2xl font-bold mt-1">
          Ready to continue your learning?
        </h2>
        <p className="text-purple-200 mt-1">
          Let us guide your study plan for today
        </p>
      </div>

      {/* ⬜ Adaptive Learning Card */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-semibold text-gray-800">
          Adaptive Learning Planner
        </h3>
        <p className="text-gray-600 mt-1">
          Generate a personalized study plan based on your progress.
        </p>

        <button
          onClick={() => navigate("/planner")}
          className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
        >
          Generate Adaptive Plan
        </button>
      </div>

      {/* ⬜ See Your Plans */}
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-xl font-semibold text-gray-800">
          See Your Plans
        </h3>
        <p className="text-gray-600 mt-1">
          View and manage your upcoming study schedule.
        </p>

        <div className="mt-4 flex items-center justify-between bg-purple-50 p-4 rounded-lg">
          <div>
            <p className="text-sm text-gray-600">Next scheduled task</p>
            <p className="font-semibold text-gray-800">
              Open calendar to see upcoming plans
            </p>
          </div>

          <button
            onClick={() => navigate("/calendar")}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Open Calendar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
