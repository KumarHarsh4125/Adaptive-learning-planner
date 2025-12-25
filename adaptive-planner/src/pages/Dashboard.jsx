import { useNavigate } from "react-router-dom";
import { Zap, Calendar, ArrowRight, BarChart2, Clock, CheckCircle, Sparkles } from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();

  // Mock stats 
  const stats = [
    { icon: <Zap className="w-5 h-5 text-amber-500" />, label: "Day Streak", value: "3", bg: "bg-amber-50 border-amber-100" },
    { icon: <CheckCircle className="w-5 h-5 text-teal-500" />, label: "Completed", value: "12", bg: "bg-teal-50 border-teal-100" },
    { icon: <Clock className="w-5 h-5 text-blue-500" />, label: "Focus Time", value: "4h", bg: "bg-blue-50 border-blue-100" },
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* 🔷 Welcome Banner */}
      <div className="rounded-3xl p-8 bg-linear-to-r from-teal-600 to-emerald-600 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2 opacity-90">
            <Sparkles className="w-4 h-4 text-emerald-200 animate-pulse" />
            <span className="text-sm font-medium tracking-wide uppercase">Welcome Back</span>
          </div>
          <h2 className="text-3xl font-bold leading-tight mb-2">
            Ready to crush your goals?
          </h2>
          <p className="text-teal-100 text-lg max-w-xl">
            You're on a 3-day streak! Let's keep the momentum going.
          </p>
        </div>

        {/* Decor */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
      </div>

      {/* 🔷 Quick Stats Row */}
      <div className="grid grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`p-4 rounded-2xl border ${stat.bg} flex items-center gap-4 transition-transform hover:-translate-y-1 duration-300`}
          >
            <div className="p-3 bg-white rounded-xl shadow-xs">
              {stat.icon}
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{stat.label}</p>
              <p className="text-xl font-bold text-gray-900">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* 🔷 Adaptive Planner Card */}
        <div
          onClick={() => navigate("/planner")}
          className="group cursor-pointer bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-teal-100/50 hover:border-teal-200 transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <BarChart2 className="w-24 h-24 text-teal-600 transform rotate-12" />
          </div>

          <div className="relative z-10 flex flex-col h-full">
            <div className="w-12 h-12 bg-teal-100 rounded-2xl flex items-center justify-center text-teal-600 mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">Adaptive Planner</h3>
            <p className="text-gray-500 text-sm mb-6 flex-grow">
              Generate a personalized study plan dynamically tailored to your progress.
            </p>

            <div className="flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform">
              Generate Plan <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>

        {/* 🔷 See Your Plans */}
        <div
          className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Schedule</h3>
            </div>
            <button
              onClick={() => navigate("/calendar")}
              className="text-xs font-semibold bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-lg transition-colors"
            >
              View All
            </button>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-4 mb-4 flex-grow">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
              <p className="text-xs font-medium text-gray-500 uppercase">Up Next</p>
            </div>
            <p className="text-gray-900 font-semibold text-lg">Introduction to React</p>
            <p className="text-gray-500 text-sm">10:00 AM - 11:30 AM</p>
          </div>

          <button
            onClick={() => navigate("/calendar")}
            className="w-full py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
          >
            Open Calendar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
