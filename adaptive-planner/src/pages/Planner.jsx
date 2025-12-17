import Timeline from "../components/Timeline";

function Planner() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">
          Your Adaptive Study Plan
        </h1>
        <p className="text-gray-600 mt-2 text-base">
          Follow the plan step by step to complete today’s learning.
        </p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <Timeline />
      </div>
    </div>
  );
}

export default Planner;
