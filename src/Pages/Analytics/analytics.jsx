import "./Analytics.css";

function Analytics() {

    return (

        <div className="analytics-page">

            {/* ================================
                HEADER
            ================================= */}

            <div className="analytics-header">

                <div>

                    <h1>
                        Analytics
                    </h1>

                    <p>
                        Track your productivity and understand your progress.
                    </p>

                </div>


                <select className="analytics-period">

                    <option>
                        This Week
                    </option>

                    <option selected>
                        This Month
                    </option>

                    <option>
                        Last Month
                    </option>

                </select>

            </div>


            {/* ================================
                OVERVIEW CARDS
            ================================= */}

            <div className="analytics-overview">


                <div className="analytics-card">

                    <span className="analytics-card-label">
                        TOTAL TASKS
                    </span>

                    <strong>
                        42
                    </strong>

                    <span className="analytics-card-subtext">
                        tasks created
                    </span>

                </div>


                <div className="analytics-card">

                    <span className="analytics-card-label">
                        COMPLETED
                    </span>

                    <strong>
                        31
                    </strong>

                    <span className="analytics-card-subtext success">
                        ↑ 12% from last month
                    </span>

                </div>


                <div className="analytics-card">

                    <span className="analytics-card-label">
                        ACTIVE HABITS
                    </span>

                    <strong>
                        8
                    </strong>

                    <span className="analytics-card-subtext">
                        habits being tracked
                    </span>

                </div>


                <div className="analytics-card">

                    <span className="analytics-card-label">
                        COMPLETION RATE
                    </span>

                    <strong>
                        74%
                    </strong>

                    <span className="analytics-card-subtext success">
                        ↑ 8% improvement
                    </span>

                </div>

            </div>


            {/* ================================
                CHART ROW
            ================================= */}

            <div className="analytics-chart-row">


                {/* TASK COMPLETION */}

                <div className="analytics-panel large-panel">

                    <div className="panel-header">

                        <div>

                            <h2>
                                Task Completion
                            </h2>

                            <p>
                                Completed tasks over the last 7 days
                            </p>

                        </div>

                    </div>


                    <div className="line-chart">

                        <div className="chart-y-axis">

                            <span>20</span>
                            <span>15</span>
                            <span>10</span>
                            <span>5</span>
                            <span>0</span>

                        </div>


                        <div className="chart-area">

                            <div className="chart-grid"></div>

                            <svg
                                className="chart-line"
                                viewBox="0 0 600 220"
                                preserveAspectRatio="none"
                            >

                                <polyline
                                    points="
                                        0,175
                                        85,145
                                        170,160
                                        255,105
                                        340,125
                                        425,70
                                        510,90
                                        600,45
                                    "
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                                <circle cx="0" cy="175" r="5" />
                                <circle cx="85" cy="145" r="5" />
                                <circle cx="170" cy="160" r="5" />
                                <circle cx="255" cy="105" r="5" />
                                <circle cx="340" cy="125" r="5" />
                                <circle cx="425" cy="70" r="5" />
                                <circle cx="510" cy="90" r="5" />
                                <circle cx="600" cy="45" r="5" />

                            </svg>


                            <div className="chart-x-axis">

                                <span>Mon</span>
                                <span>Tue</span>
                                <span>Wed</span>
                                <span>Thu</span>
                                <span>Fri</span>
                                <span>Sat</span>
                                <span>Sun</span>

                            </div>

                        </div>

                    </div>

                </div>


                {/* TASK DISTRIBUTION */}

                <div className="analytics-panel">

                    <div className="panel-header">

                        <div>

                            <h2>
                                Task Distribution
                            </h2>

                            <p>
                                Current task status
                            </p>

                        </div>

                    </div>


                    <div className="donut-container">

                        <div className="donut-chart">

                            <div className="donut-center">

                                <strong>
                                    74%
                                </strong>

                                <span>
                                    Complete
                                </span>

                            </div>

                        </div>

                    </div>


                    <div className="chart-legend">

                        <div className="legend-item">

                            <span className="legend-dot completed-dot"></span>

                            <span>
                                Completed
                            </span>

                            <strong>
                                31
                            </strong>

                        </div>


                        <div className="legend-item">

                            <span className="legend-dot pending-dot"></span>

                            <span>
                                Pending
                            </span>

                            <strong>
                                11
                            </strong>

                        </div>

                    </div>

                </div>

            </div>


            {/* ================================
                PRODUCTIVITY CHART
            ================================= */}

            <div className="analytics-panel productivity-panel">

                <div className="panel-header">

                    <div>

                        <h2>
                            Weekly Productivity
                        </h2>

                        <p>
                            Tasks completed each day
                        </p>

                    </div>

                </div>


                <div className="bar-chart">

                    <div className="bar-item">

                        <div
                            className="bar"
                            style={{ height: "45%" }}
                        ></div>

                        <span>
                            Mon
                        </span>

                    </div>


                    <div className="bar-item">

                        <div
                            className="bar"
                            style={{ height: "65%" }}
                        ></div>

                        <span>
                            Tue
                        </span>

                    </div>


                    <div className="bar-item">

                        <div
                            className="bar"
                            style={{ height: "35%" }}
                        ></div>

                        <span>
                            Wed
                        </span>

                    </div>


                    <div className="bar-item">

                        <div
                            className="bar"
                            style={{ height: "80%" }}
                        ></div>

                        <span>
                            Thu
                        </span>

                    </div>


                    <div className="bar-item">

                        <div
                            className="bar"
                            style={{ height: "55%" }}
                        ></div>

                        <span>
                            Fri
                        </span>

                    </div>


                    <div className="bar-item">

                        <div
                            className="bar"
                            style={{ height: "90%" }}
                        ></div>

                        <span>
                            Sat
                        </span>

                    </div>


                    <div className="bar-item">

                        <div
                            className="bar"
                            style={{ height: "70%" }}
                        ></div>

                        <span>
                            Sun
                        </span>

                    </div>

                </div>

            </div>


        </div>

    );

}

export default Analytics;