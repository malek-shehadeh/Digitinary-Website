
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import DGatePage from "./components/D-gate/D-gate";
import Arena from "./components/Arena/Arena";
import Knetpage from "./components/K-net/K-net";
import "./styles/global.scss";
import ChatBot from "./components/ChatBot/ChatBot";
import { ThemeProvider } from './context/ThemeContext'; 
import AuthForm from "./components/AuthForm/AuthForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAuthFormOpen, setIsAuthFormOpen] = useState(true); 

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
              path="/signin"
              element={
                <AuthForm
                  isOpen={isAuthFormOpen} 
                  onClose={() => setIsAuthFormOpen(false)} 
                />
              }
            />
       
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
        <ToastContainer />
      </div>
    </ThemeProvider>
  );
};

export default App;