import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
    return (
        <>
            <Navbar />
            <div className="layout">
                <Sidebar />
                <main className="content">
                    <h1>Welcome back!</h1>
                    <p>This is your dashboard.</p>
                </main>
            </div>
        </>
    );
}

export default App;