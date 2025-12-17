import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Planner from "./pages/Planner";
import Pagelayout from "./layout/Pagelayout";
import Calendarpage from "./pages/Calender";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import NotesPage from "./pages/NotesPage";
import QuizPage from "./pages/QuizPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout with Sidebar */}
        <Route element={<Pagelayout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/planner" element={<Planner />} />
          <Route path="/calendar" element={<Calendarpage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/quiz" element={<QuizPage />} />
        </Route>

        <Route path="/home" element={<Home />} />

        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
