import "./Dashboard.css";

function Dashboard() {
    return (
        <div className="dashboard-page">

            {/* =========================
                DASHBOARD HEADER
            ========================== */}

            <div className="dashboard-heading">

                <div>
                    <h1>Dashboard</h1>

                    <p>
                        Here's an overview of your productivity.
                    </p>
                </div>

                <div className="dashboard-date">
                    Today
                </div>

            </div>


            {/* =========================
                OVERVIEW CARDS
            ========================== */}

            <section className="overview-cards">

                <div className="overview-card">

                    <span>Total Tasks</span>

                    <strong>24</strong>

                    <p>All your tasks</p>

                </div>


                <div className="overview-card">

                    <span>Completed</span>

                    <strong>14</strong>

                    <p>58% completion</p>

                </div>


                <div className="overview-card">

                    <span>Pending</span>

                    <strong>8</strong>

                    <p>Tasks remaining</p>

                </div>


                <div className="overview-card">

                    <span>Overdue</span>

                    <strong>2</strong>

                    <p>Need attention</p>

                </div>

            </section>


            {/* =========================
                PRODUCTIVITY OVERVIEW
            ========================== */}

            <section className="dashboard-section">

                <div className="section-title">

                    <div>

                        <h2>Productivity Overview</h2>

                        <p>
                            Track your productivity and task completion.
                        </p>

                    </div>

                </div>


                <div className="productivity-overview">

                    {/* Focus Time */}

                    <div className="focus-summary">

                        <span>Focus Time</span>

                        <strong>4h 35m</strong>

                        <p>This week</p>

                    </div>


                    {/* Completion */}

                    <div className="completion-summary">

                        <div className="completion-title">

                            <span>Task Completion</span>

                            <strong>58%</strong>

                        </div>


                        <div className="dashboard-progress">

                            <div className="dashboard-progress-value">
                            </div>

                        </div>


                        <p>
                            14 of 24 tasks completed
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================
                TASK PROGRESS
            ========================== */}

            <section className="dashboard-section">

                <div className="section-title">

                    <div>

                        <h2>Task Progress</h2>

                        <p>
                            Current distribution of your tasks.
                        </p>

                    </div>

                </div>


                <div className="task-progress">


                    {/* Completed */}

                    <div className="progress-item">

                        <div className="progress-item-header">

                            <span>Completed</span>

                            <strong>14</strong>

                        </div>


                        <div className="progress-bar">

                            <div className="completed-progress">
                            </div>

                        </div>

                    </div>


                    {/* Pending */}

                    <div className="progress-item">

                        <div className="progress-item-header">

                            <span>Pending</span>

                            <strong>8</strong>

                        </div>


                        <div className="progress-bar">

                            <div className="pending-progress">
                            </div>

                        </div>

                    </div>


                    {/* Overdue */}

                    <div className="progress-item">

                        <div className="progress-item-header">

                            <span>Overdue</span>

                            <strong>2</strong>

                        </div>


                        <div className="progress-bar">

                            <div className="overdue-progress">
                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================
                UPCOMING TASKS
            ========================== */}

            <section className="dashboard-section">

                <div className="section-title">

                    <div>

                        <h2>Upcoming Tasks</h2>

                        <p>
                            Tasks that need your attention.
                        </p>

                    </div>


                    <button className="view-all">
                        View All
                    </button>

                </div>


                <div className="upcoming-tasks">


                    {/* Task 1 */}

                    <div className="upcoming-task">

                        <div className="task-details">

                            <h3>
                                Complete React Project
                            </h3>

                            <p>
                                Build the dashboard interface
                            </p>

                        </div>


                        <span className="task-priority high">
                            High
                        </span>


                        <span className="task-deadline">
                            Today
                        </span>

                    </div>


                    {/* Task 2 */}

                    <div className="upcoming-task">

                        <div className="task-details">

                            <h3>
                                Practice DSA
                            </h3>

                            <p>
                                Solve 5 array problems
                            </p>

                        </div>


                        <span className="task-priority medium">
                            Medium
                        </span>


                        <span className="task-deadline">
                            Tomorrow
                        </span>

                    </div>


                    {/* Task 3 */}

                    <div className="upcoming-task">

                        <div className="task-details">

                            <h3>
                                Read ML Research Paper
                            </h3>

                            <p>
                                Complete the assigned paper
                            </p>

                        </div>


                        <span className="task-priority low">
                            Low
                        </span>


                        <span className="task-deadline">
                            Friday
                        </span>

                    </div>

                </div>

            </section>

        </div>
    );
}

export default Dashboard;