import './App.css';
import Sidebar from "./components/Dashboard/sidebar/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Profile from "./Pages/Profile";
import Transactions from "./Pages/Transactions";
import MarketLeads from "./Pages/MarketLeads";
import PerformanceReport from "./Pages/PerformanceReport";
import SettingsPage from "./Pages/SettingsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./Theme/ThemeContext";

function App() {
  const { darkMode } = useContext(ThemeContext);
  return (

    <BrowserRouter>
      <div className={darkMode ? "App dark" : "App"}>

        <Sidebar />

        <main className="Main">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/market-leads" element={<MarketLeads />} />
            <Route path="/performance-report" element={<PerformanceReport />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>

        <section className="Right"></section>

      </div>
    </BrowserRouter>
  );
}
export default App;
