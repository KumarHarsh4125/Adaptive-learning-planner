import Timeline from "../components/Timeline";

function Planner() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-fade-in-up">
      {/* Header Section */}
      <div className="bg-linear-to-r from-teal-600 to-teal-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <p className="opacity-80 font-medium tracking-wide text-sm uppercase mb-2">Daily Goal</p>
          <h1 className="text-3xl font-bold mb-4">Your Learning Path</h1>
          <p className="text-teal-100 max-w-lg leading-relaxed">
            Follow this adaptive schedule to master your topics efficiently.
            Complete tasks in order to unlock the final quiz.
          </p>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-20 w-32 h-32 rounded-full bg-teal-400 opacity-20 blur-2xl"></div>
      </div>

      <div className="bg-white/50 backdrop-blur-xl rounded-3xl p-8 shadow-sm border border-white/50">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-gray-800">Timeline</h2>
          <span className="bg-teal-50 text-teal-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            Today
          </span>
        </div>
        <Timeline />
      </div>
    </div>
  );
}

export default Planner;
