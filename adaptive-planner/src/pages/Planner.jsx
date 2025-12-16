import Timeline from "../components/Timeline";

function Planner() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Your Adaptive Study Plan
      </h1>
      <p className="text-gray-600 mb-6">
        Follow the plan step by step to complete today’s learning.
      </p>

      <Timeline />
    </div>
  );
}

export default Planner;
