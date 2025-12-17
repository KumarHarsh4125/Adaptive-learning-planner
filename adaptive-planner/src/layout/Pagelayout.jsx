import { NavLink, Outlet } from "react-router-dom";

function Pagelayout() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* SIDEBAR */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col px-6 py-8">
        {/* Logo */}
        <div className="text-2xl font-bold mb-12 text-gray-900">
          StudyBuddy
        </div>

        {/* Nav */}
        <nav className="space-y-3">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg text-lg font-medium transition
              ${
                isActive
                  ? "bg-teal-600 text-teal-900"
                  : "text-gray-700 hover:bg-teal-50 hover:text-teal-700"
              }`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg text-lg font-medium transition
              ${
                isActive
                  ? "bg-teal-600 text-teal-900"
                  : "text-gray-700 hover:bg-teal-50 hover:text-teal-700"
              }`
            }
          >
            Calendar
          </NavLink>

          <NavLink
            to="/home"
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg text-lg font-medium transition
              ${
                isActive
                  ? "bg-teal-600 text-teal-900"
                  : "text-gray-700 hover:bg-teal-50 hover:text-teal-700"
              }`
            }
          >
            Home
          </NavLink>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Pagelayout;
