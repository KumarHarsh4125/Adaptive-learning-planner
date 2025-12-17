import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="space-y-10">
      {/* 🔷 Welcome Banner */}
      <div className="rounded-2xl p-8 bg-gradient-to-r from-teal-500 to-teal-600 text-white">
        <p className="text-sm opacity-90 mb-2">Welcome back 👋</p>
        <h2 className="text-3xl font-semibold leading-tight">
          Ready to continue your learning?
        </h2>
        <p className="mt-2 text-teal-100 text-base">
          Let us guide your study plan for today
        </p>
      </div>

      {/* 🔷 Adaptive Planner Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7">
        <h3 className="text-2xl font-semibold text-gray-900">
          Adaptive Learning Planner
        </h3>
        <p className="text-gray-600 mt-2 text-base">
          Generate a personalized study plan based on your progress.
        </p>

        <button
          onClick={() => navigate("/planner")}
          className="mt-6 bg-teal-600 text-white px-7 py-3 rounded-xl text-base font-medium hover:bg-teal-700 transition"
        >
          Generate Adaptive Plan
        </button>
      </div>

      {/* 🔷 See Your Plans */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-7">
        <h3 className="text-2xl font-semibold text-gray-900">
          See Your Plans
        </h3>
        <p className="text-gray-600 mt-2 text-base">
          View and manage your upcoming study schedule.
        </p>

        <div className="mt-6 flex items-center justify-between bg-teal-50 p-5 rounded-xl">
          <div>
            <p className="text-sm text-gray-500">Next scheduled task</p>
            <p className="text-base font-medium text-gray-900">
              Open calendar to see upcoming plans
            </p>
          </div>

          <button
            onClick={() => navigate("/calendar")}
            className="bg-teal-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-teal-700 transition"
          >
            Open Calendar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
