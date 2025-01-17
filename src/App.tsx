// import { Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar/Sidebar";
// // import Dashboard from "./components/Dashboard"; // Import your components
// import "./styles/global.scss";
// import DGatePage from "./components/D-gate/D-gate";
// import Arena from "./components/Arena/Arena";
// import Knetpage from "./components/K-net/K-net";
// const App = () => {
//   return (
//     <div className="app-container">
//       <Sidebar />
//       <main className="main-content">
//         <Routes>
//           <Route path="/frontend/DGatePage" element={<DGatePage />} />
//           <Route path="/frontend/arena" element={<Arena />} />
//           <Route path="/frontend/knet" element={<Knetpage />} />
//           {/* <Route path="*" element={<NotFound />} /> Fallback route */}
//         </Routes>
//       </main>
//     </div>
//   );
// };

// export default App;
/////

// import { Routes, Route } from "react-router-dom";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Sidebar from "./components/Sidebar/Sidebar";
// import DGatePage from "./components/D-gate/D-gate";
// import Arena from "./components/Arena/Arena";
// import Knetpage from "./components/K-net/K-net";
// import "../src/styles/_global.scss"; // Ensure this file exists

// const theme = createTheme({
//   palette: {
//     primary: { main: "#4068DF" },
//     secondary: { main: "#42c9c2" },
//   },
// });

// const App = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <div className="app-container">
//         <Sidebar />
//         <main className="main-content">
//           <Routes>
//             <Route path="/frontend/DGatePage" element={<DGatePage />} />
//             <Route path="/frontend/arena" element={<Arena />} />
//             <Route path="/frontend/knet" element={<Knetpage />} />
//           </Routes>
//         </main>
//       </div>
//     </ThemeProvider>
//   );
// };

// export default App;

// import { Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar/Sidebar";
// import "./styles/global.scss";
// import DGatePage from "./components/D-gate/D-gate";
// import Arena from "./components/Arena/Arena";
// import Knetpage from "./components/K-net/K-net";

// const App = () => {
//   return (
//     <div className="app-container">
//       <Sidebar />
//       <main className="main-content">
//         <Routes>
//           <Route path="/frontend/DGatePage" element={<DGatePage />} />
//           <Route path="/frontend/arena" element={<Arena />} />
//           <Route path="/frontend/knet" element={<Knetpage />} />
//           {/* <Route path="*" element={<NotFound />} /> Fallback route */}
//         </Routes>
//       </main>
//     </div>
//   );
// };

// export default App;
///

// App.tsx
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import DGatePage from "./components/D-gate/D-gate";
import Arena from "./components/Arena/Arena";
import Knetpage from "./components/K-net/K-net";
import "./styles/global.scss";
import ChatBot from "./components/ChatBot/ChatBot";
import { ThemeProvider } from '@mui/material/styles';
import { chatbotTheme } from './components/ChatBot/theme';
const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <ThemeProvider theme={chatbotTheme}>

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
