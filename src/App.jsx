import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

import Dashboard from "./Pages/Dashboard/Dashboard";

function App() {
    return (
        <div className="app">

            {/* Top Navbar */}
            <Navbar />

            <div className="app-body">

                {/* Sidebar */}
                <Sidebar />

                {/* Page Content */}
                <main className="main-content">

                    <Dashboard />

                </main>

            </div>

        </div>
    );
}

export default App;