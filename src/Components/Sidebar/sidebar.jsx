import "./Sidebar.css";

import { NavLink } from "react-router-dom";

function Sidebar() {
    return (
        <aside className="sidebar">

            <nav className="sidebar-nav">

                <NavLink
                    to="/dashboard"
                    className="sidebar-link"
                >
                    Dashboard
                </NavLink>

                <NavLink
                    to="/habits"
                    className="sidebar-link"
                >
                    Habit Tracker
                </NavLink>

                <NavLink
                    to="/tasks"
                    className="sidebar-link"
                >
                    My Tasks
                </NavLink>

                <NavLink
                    to="/analytics"
                    className="sidebar-link"
                >
                    Analytics
                </NavLink>

                <NavLink
                    to="/calendar"
                    className="sidebar-link"
                >
                    Calendar
                </NavLink>

                <NavLink
                    to="/settings"
                    className="sidebar-link"
                >
                    Settings
                </NavLink>

            </nav>

        </aside>
    );
}

export default Sidebar;