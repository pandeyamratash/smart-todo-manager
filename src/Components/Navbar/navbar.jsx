import "./Navbar.css";

function Navbar() {

    return (

        <nav className="navbar">

            {/* Website Logo / Name */}
            <h1>
                Task Manager
            </h1>
            <h2>
                Dashboard
            </h2>


            {/* Right side of Navbar */}
            <div className="navbar-right">

                {/* Search Box */}
                <input
                    type="text"
                    placeholder="Search tasks..."
                />


                {/* Add Task Button */}
                <button>
                    Add Task
                </button>

            </div>

        </nav>

    );

}

export default Navbar;