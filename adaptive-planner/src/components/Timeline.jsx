import { useState, useEffect } from "react";
import TaskCard from "./TaskCard";

function Timeline() {
  const generateTasksFromNow = () => {
    const now = new Date();
    const addMinutes = (d, m) => new Date(d.getTime() + m * 60000);

    const t1End = addMinutes(now, 15);
    const t2End = addMinutes(t1End, 15);
    const t3End = addMinutes(t2End, 15);

    const formatTime = (d) =>
      d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const formatEnd = (d) =>
      `${d.getHours().toString().padStart(2, "0")}:${d
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;

    return [
      {
        id: 1,
        order: 1,
        time: `${formatTime(now)} – ${formatTime(t1End)}`,
        title: "Watch Video",
        status: "Pending",
        action: "See Video",
        link: "/video",
        endTime: formatEnd(t1End),
      },
      {
        id: 2,
        order: 2,
        time: `${formatTime(t1End)} – ${formatTime(t2End)}`,
        title: "Revise Notes",
        status: "Pending",
        action: "Take Notes",
        link: "/notes",
        endTime: formatEnd(t2End),
      },
      {
        id: 3,
        order: 3,
        time: `${formatTime(t2End)} – ${formatTime(t3End)}`,
        title: "Take Quiz",
        status: "Pending",
        action: "Take Quiz",
        link: "/quiz",
        endTime: formatEnd(t3End),
      },
    ];
  };

  const [tasks, setTasks] = useState(generateTasksFromNow);

  const markAsDone = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: "Completed" } : task
      )
    );
  };

  // Auto Missed logic
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      setTasks((prev) =>
        prev.map((task) => {
          if (task.status !== "Pending") return task;

          const [h, m] = task.endTime.split(":");
          const taskEnd = new Date();
          taskEnd.setHours(h, m, 0, 0);

          if (now >= taskEnd) {
            return { ...task, status: "Missed" };
          }

          return task;
        })
      );
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  // ✅ unlock quiz only if ANY previous task is completed
  const isQuizUnlocked = tasks
    .filter((t) => t.order < 3)
    .some((t) => t.status === "Completed");

  return (
    <div className="mt-8 space-y-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          {...task}
          disabled={task.title === "Take Quiz" && !isQuizUnlocked}
          onComplete={() => markAsDone(task.id)}
        />
      ))}
    </div>
  );
}

export default Timeline;
