import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">

            <div className="navbar-brand">
                Smart Todo Manager
            </div>

            <div className="navbar-actions">

                <input
                    type="text"
                    placeholder="Search tasks..."
                />

                <button>
                    + Add Task
                </button>

            </div>

        </nav>
    );
}

export default Navbar;