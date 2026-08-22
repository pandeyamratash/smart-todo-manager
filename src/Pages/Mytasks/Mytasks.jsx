import { useState } from "react";
import "./Mytasks.css";

function MyTasks() {

    const today = new Date();

    const todayString = today.toISOString().split("T")[0];


    // =====================================================
    // TASKS
    // =====================================================

    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Complete DSA assignment",
            description: "Finish the remaining problems",
            date: todayString,
            time: "10:00",
            priority: "High",
            completed: false
        },

        {
            id: 2,
            title: "Review ML notes",
            description: "Revision for tomorrow's exam",
            date: todayString,
            time: "14:00",
            priority: "Medium",
            completed: true
        },

        {
            id: 3,
            title: "Complete project documentation",
            description: "Finish documentation for the project",
            date: todayString,
            time: "11:00",
            priority: "Low",
            completed: false
        }
    ]);


    // =====================================================
    // MODAL
    // =====================================================

    const [showAddTask, setShowAddTask] = useState(false);


    // =====================================================
    // FORM
    // =====================================================

    const [taskTitle, setTaskTitle] = useState("");

    const [taskDescription, setTaskDescription] = useState("");

    const [taskDate, setTaskDate] = useState(todayString);

    const [taskTime, setTaskTime] = useState("09:00");

    const [taskPriority, setTaskPriority] = useState("Medium");


    // =====================================================
    // FILTER
    // =====================================================

    const [activeFilter, setActiveFilter] = useState("All");

    const [searchTerm, setSearchTerm] = useState("");


    // =====================================================
    // ADD TASK
    // =====================================================

    const addTask = () => {

        const trimmedTitle = taskTitle.trim();


        if (!trimmedTitle) {
            alert("Please enter a task title.");
            return;
        }


        if (!taskDate) {
            alert("Please select a due date.");
            return;
        }


        const newTask = {

            id: Date.now(),

            title: trimmedTitle,

            description: taskDescription.trim(),

            date: taskDate,

            time: taskTime,

            priority: taskPriority,

            completed: false

        };


        setTasks((previousTasks) => [

            ...previousTasks,

            newTask

        ]);


        // Reset form

        setTaskTitle("");

        setTaskDescription("");

        setTaskDate(todayString);

        setTaskTime("09:00");

        setTaskPriority("Medium");

        setShowAddTask(false);

    };


    // =====================================================
    // COMPLETE TASK
    // =====================================================

    const toggleTask = (taskId) => {

        setTasks((previousTasks) =>

            previousTasks.map((task) =>

                task.id === taskId

                    ? {
                        ...task,
                        completed: !task.completed
                    }

                    : task

            )

        );

    };


    // =====================================================
    // DELETE TASK
    // =====================================================

    const deleteTask = (taskId) => {

        setTasks((previousTasks) =>

            previousTasks.filter(
                (task) => task.id !== taskId
            )

        );

    };


    // =====================================================
    // FILTER TASKS
    // =====================================================

    const filteredTasks = tasks.filter((task) => {

        const matchesSearch =

            task.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||

            task.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase());


        if (!matchesSearch) {
            return false;
        }


        if (activeFilter === "Completed") {
            return task.completed;
        }


        if (activeFilter === "Pending") {
            return !task.completed;
        }


        if (activeFilter === "Today") {
            return task.date === todayString;
        }


        return true;

    });


    // =====================================================
    // TODAY / UPCOMING
    // =====================================================

    const todayTasks = filteredTasks.filter(
        (task) => task.date === todayString
    );


    const upcomingTasks = filteredTasks.filter(
        (task) => task.date !== todayString
    );


    // =====================================================
    // FORMAT DATE
    // =====================================================

    const formatDate = (date) => {

        if (date === todayString) {
            return "Today";
        }


        return new Date(
            `${date}T00:00:00`
        ).toLocaleDateString(
            "en-US",
            {
                day: "numeric",
                month: "short"
            }
        );

    };


    // =====================================================
    // FORMAT TIME
    // =====================================================

    const formatTime = (time) => {

        if (!time) {
            return "";
        }


        const [hours, minutes] =
            time.split(":");


        const date = new Date();

        date.setHours(
            Number(hours),
            Number(minutes)
        );


        return date.toLocaleTimeString(
            "en-US",
            {
                hour: "numeric",
                minute: "2-digit"
            }
        );

    };


    // =====================================================
    // TASK CARD
    // =====================================================

    const renderTask = (task) => (

        <div
            className={
                task.completed
                    ? "task-card completed"
                    : "task-card"
            }

            key={task.id}
        >

            <button
                className={
                    task.completed
                        ? "task-checkbox checked"
                        : "task-checkbox"
                }

                onClick={() =>
                    toggleTask(task.id)
                }
            >

                {task.completed ? "✓" : ""}

            </button>


            <div className="task-content">

                <h3>
                    {task.title}
                </h3>


                {task.description && (

                    <p>
                        {task.description}
                    </p>

                )}


                <div className="task-meta">

                    <span className="task-time">

                        {formatDate(task.date)}

                        {task.time &&
                            ` · ${formatTime(task.time)}`
                        }

                    </span>


                    <span
                        className={
                            `priority ${task.priority.toLowerCase()}`
                        }
                    >

                        {task.priority}

                    </span>

                </div>

            </div>


            <button
                className="task-menu"

                onClick={() =>
                    deleteTask(task.id)
                }

                title="Delete task"
            >
                ×
            </button>

        </div>

    );


    // =====================================================
    // JSX
    // =====================================================

    return (

        <div className="mytasks-page">


            {/* =========================================
                HEADER
            ========================================= */}

            <div className="mytasks-header">

                <div>

                    <h1>
                        My Tasks
                    </h1>

                    <p>
                        Manage your tasks and stay organized.
                    </p>

                </div>


                <button
                    className="add-task-button"

                    onClick={() =>
                        setShowAddTask(true)
                    }
                >
                    + Add Task
                </button>

            </div>


            {/* =========================================
                TOOLBAR
            ========================================= */}

            <div className="tasks-toolbar">

                <div className="task-search">

                    <span>
                        ⌕
                    </span>

                    <input
                        type="text"

                        placeholder="Search tasks..."

                        value={searchTerm}

                        onChange={(event) =>
                            setSearchTerm(
                                event.target.value
                            )
                        }
                    />

                </div>


                <div className="task-filters">

                    {[
                        "All",
                        "Today",
                        "Pending",
                        "Completed"
                    ].map((filter) => (

                        <button
                            key={filter}

                            className={
                                activeFilter === filter
                                    ? "filter-button active"
                                    : "filter-button"
                            }

                            onClick={() =>
                                setActiveFilter(filter)
                            }
                        >

                            {filter}

                        </button>

                    ))}

                </div>

            </div>


            {/* =========================================
                TODAY
            ========================================= */}

            {todayTasks.length > 0 && (

                <section className="task-section">

                    <div className="section-heading">

                        <div>

                            <h2>
                                Today
                            </h2>

                            <span>
                                {today.toLocaleDateString(
                                    "en-US",
                                    {
                                        month: "long",
                                        day: "numeric"
                                    }
                                )}
                            </span>

                        </div>


                        <span className="task-count">

                            {todayTasks.length}

                            {" "}

                            {todayTasks.length === 1
                                ? "task"
                                : "tasks"
                            }

                        </span>

                    </div>


                    <div className="task-list">

                        {todayTasks.map(renderTask)}

                    </div>

                </section>

            )}


            {/* =========================================
                UPCOMING
            ========================================= */}

            {upcomingTasks.length > 0 && (

                <section className="task-section">

                    <div className="section-heading">

                        <div>

                            <h2>
                                Upcoming
                            </h2>

                            <span>
                                Future tasks
                            </span>

                        </div>


                        <span className="task-count">

                            {upcomingTasks.length}

                            {" "}

                            {upcomingTasks.length === 1
                                ? "task"
                                : "tasks"
                            }

                        </span>

                    </div>


                    <div className="task-list">

                        {upcomingTasks.map(renderTask)}

                    </div>

                </section>

            )}


            {/* =========================================
                EMPTY STATE
            ========================================= */}

            {filteredTasks.length === 0 && (

                <div className="empty-tasks">

                    <div className="empty-task-icon">
                        ✓
                    </div>

                    <h3>
                        No tasks found
                    </h3>

                    <p>
                        Try adding a new task or changing your filter.
                    </p>

                </div>

            )}


            {/* =========================================
                ADD TASK MODAL
            ========================================= */}

            {showAddTask && (

                <div className="task-modal-overlay">

                    <div className="task-modal">


                        {/* Modal Header */}

                        <div className="task-modal-header">

                            <div>

                                <h2>
                                    Add New Task
                                </h2>

                                <p>
                                    Create a task and set when you want to complete it.
                                </p>

                            </div>


                            <button
                                className="task-modal-close"

                                onClick={() =>
                                    setShowAddTask(false)
                                }
                            >
                                ×
                            </button>

                        </div>


                        {/* Task Title */}

                        <div className="task-form-group">

                            <label>
                                Task Title
                            </label>

                            <input
                                type="text"

                                placeholder="e.g. Complete DSA assignment"

                                value={taskTitle}

                                onChange={(event) =>
                                    setTaskTitle(
                                        event.target.value
                                    )
                                }

                                autoFocus
                            />

                        </div>


                        {/* Description */}

                        <div className="task-form-group">

                            <label>
                                Description
                            </label>

                            <textarea
                                placeholder="Add some details about this task..."

                                value={taskDescription}

                                onChange={(event) =>
                                    setTaskDescription(
                                        event.target.value
                                    )
                                }
                            />

                        </div>


                        {/* Date + Time */}

                        <div className="task-form-row">

                            <div className="task-form-group">

                                <label>
                                    Due Date
                                </label>

                                <input
                                    type="date"

                                    value={taskDate}

                                    onChange={(event) =>
                                        setTaskDate(
                                            event.target.value
                                        )
                                    }
                                />

                            </div>


                            <div className="task-form-group">

                                <label>
                                    Due Time
                                </label>

                                <input
                                    type="time"

                                    value={taskTime}

                                    onChange={(event) =>
                                        setTaskTime(
                                            event.target.value
                                        )
                                    }
                                />

                            </div>

                        </div>


                        {/* Priority */}

                        <div className="task-form-group">

                            <label>
                                Priority
                            </label>


                            <div className="priority-selector">

                                {[
                                    "Low",
                                    "Medium",
                                    "High"
                                ].map((priority) => (

                                    <button
                                        type="button"

                                        key={priority}

                                        className={
                                            taskPriority === priority
                                                ? `priority-option selected ${priority.toLowerCase()}`
                                                : `priority-option ${priority.toLowerCase()}`
                                        }

                                        onClick={() =>
                                            setTaskPriority(
                                                priority
                                            )
                                        }
                                    >

                                        {priority}

                                    </button>

                                ))}

                            </div>

                        </div>


                        {/* Actions */}

                        <div className="task-modal-actions">

                            <button
                                className="task-cancel-button"

                                onClick={() =>
                                    setShowAddTask(false)
                                }
                            >
                                Cancel
                            </button>


                            <button
                                className="task-save-button"

                                onClick={addTask}
                            >
                                Add Task
                            </button>

                        </div>

                    </div>

                </div>

            )}

        </div>

    );

}

export default MyTasks;