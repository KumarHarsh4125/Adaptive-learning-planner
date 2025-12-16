import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Planner from "./pages/Planner";
import Pagelayout from "./layout/Pagelayout";
import Calendarpage from "./pages/Calender";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout with Sidebar */}
        <Route element={<Pagelayout />}>
          {/* Redirect root to dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/calendar" element={<Calendarpage/>} />
        </Route>

        {/* Fallback for unknown routes */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
