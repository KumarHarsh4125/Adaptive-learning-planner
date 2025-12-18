import { NavLink, Outlet } from "react-router-dom";
import { LayoutDashboard, Calendar, Home, BookOpen, Brain, PlayCircle, LogOut, Map, BrainCircuit } from "lucide-react";

function Pagelayout() {
  const navItems = [
    { to: "/dashboard", icon: <LayoutDashboard size={20} />, label: "Dashboard" },
    { to: "/calendar", icon: <Calendar size={20} />, label: "Calendar" },
    { to: "/home", icon: <Home size={20} />, label: "Home" },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50 font-sans">
      {/* SIDEBAR */}
      <aside className="w-72 bg-white border-r border-gray-100 flex flex-col fixed h-full z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)] transition-all">
        {/* Logo */}
        <div className="p-8 pb-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-teal-200">
            <BrainCircuit size={24} />
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">StudyBuddy</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar">
          <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-2">Menu</p>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 group
                ${isActive
                  ? "bg-teal-50 text-teal-700 shadow-sm"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className={`transition-colors duration-200 ${isActive ? "text-teal-600" : "text-gray-400 group-hover:text-gray-600"}`}>
                    {item.icon}
                  </span>
                  {item.label}
                  {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-teal-600"></span>}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 border border-gray-100/50 hover:border-gray-200 transition-colors cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-2 border-white shadow-sm">
              <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex" alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-900 truncate">Alex Student</p>
              <p className="text-xs text-gray-500 truncate">Free Plan</p>
            </div>
            <button className="text-gray-400 hover:text-red-500 transition-colors p-2">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      {/* Added ml-72 to account for fixed sidebar */}
      <main className="flex-1 ml-72 p-10 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Pagelayout;
