import { useState } from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

import Dashboard from "./Pages/Dashboard/Dashboard";
import HabitTracker from "./Pages/Habittracker/Habittracker";
import MyTasks from "./Pages/Mytasks/Mytasks";
import Calendar from "./Pages/Calendar/calendar";
import Analytics from "./Pages/Analytics/analytics";
import Settings from "./Pages/Settings/settings";

function App() {

    const [darkMode, setDarkMode] = useState(false);

    return (
        <BrowserRouter>

            <div className={`app ${darkMode ? "dark-mode" : ""}`}>

                <Navbar />

                <div className="app-body">

                    <Sidebar />

                    <main className="main-content">

                        <Routes>

                            <Route
                                path="/"
                                element={<Dashboard />}
                            />

                            <Route
                                path="/dashboard"
                                element={<Dashboard />}
                            />

                            <Route
                                path="/habits"
                                element={<HabitTracker />}
                            />

                            <Route
                                path="/tasks"
                                element={<MyTasks />}
                            />
                             <Route
                                path="/analytics"
                                element={<Analytics />}
                            />
                            

                            <Route
                                path="/calendar"
                                element={<Calendar />}
                            />

                            <Route
                                path="/settings"
                                element={
                                    <Settings
                                        darkMode={darkMode}
                                        setDarkMode={setDarkMode}
                                    />
                                }
                            />

                        </Routes>

                    </main>

                </div>

            </div>

        </BrowserRouter>
    );
}

export default App;