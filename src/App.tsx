
// App.tsx
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import DGatePage from "./components/D-gate/D-gate";
import Arena from "./components/Arena/Arena";
import Knetpage from "./components/K-net/K-net";
import "./styles/global.scss";
import ChatBot from "./components/ChatBot/ChatBot";
import { ThemeProvider } from './context/ThemeContext'; // Add this import

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <ThemeProvider>
      <div className="app-container">
        <Sidebar
          isOpen={isSidebarOpen}
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        />
        <main
          className={`main-content ${
            isSidebarOpen ? "sidebar-open" : "sidebar-closed"
          }`}
        >
          <Routes>
            <Route
              path="/frontend/DGatePage"
              element={<DGatePage isSidebarOpen={isSidebarOpen} />}
            />
            <Route
              path="/frontend/arena"
              element={<Arena isSidebarOpen={isSidebarOpen} />}
            />
            <Route
              path="/frontend/knet"
              element={<Knetpage isSidebarOpen={isSidebarOpen} />}
            />
          </Routes>
        </main>
        <ChatBot />
      </div>
    </ThemeProvider>
  );
};

export default App;