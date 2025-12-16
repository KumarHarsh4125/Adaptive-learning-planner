import { NavLink, Outlet } from "react-router-dom";

function Pagelayout() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* LEFT SIDEBAR */}
      <aside className="w-64 bg-purple-600 text-white flex flex-col p-6">
        {/* Logo / App Name */}
        <div className="text-2xl font-bold mb-10">
          🎓 StudyBuddy
        </div>

        {/* Navigation */}
        <nav className="space-y-4">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-purple-800"
                  : "hover:bg-purple-700"
              }`
            }
          >
            🏠 Dashboard
          </NavLink>

          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-purple-800"
                  : "hover:bg-purple-700"
              }`
            }
          >
            📅 Calendar
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `block px-4 py-2 rounded-lg ${
                isActive
                  ? "bg-purple-800"
                  : "hover:bg-purple-700"
              }`
            }
          >
            🏠 Home
          </NavLink>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Pagelayout;
