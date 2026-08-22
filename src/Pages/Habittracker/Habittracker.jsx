import { useState } from "react";
import "./HabitTracker.css";

function HabitTracker() {

    const currentDate = new Date();

    const [currentMonth, setCurrentMonth] = useState(
        currentDate.getMonth()
    );

    const [currentYear, setCurrentYear] = useState(
        currentDate.getFullYear()
    );


    // =========================================
    // HABITS
    // =========================================

    const [habits, setHabits] = useState([
        {
            id: 1,
            name: "Morning Workout",
            startDate: "2026-08-01",
            time: "07:00",
            days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
            completed: {}
        },

        {
            id: 2,
            name: "Read 10 Pages",
            startDate: "2026-08-01",
            time: "21:00",
            days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            completed: {}
        }
    ]);


    // =========================================
    // ADD HABIT MODAL
    // =========================================

    const [showAddHabit, setShowAddHabit] = useState(false);


    // =========================================
    // NEW HABIT FORM
    // =========================================

    const [habitName, setHabitName] = useState("");

    const [startDate, setStartDate] = useState(
        currentDate.toISOString().split("T")[0]
    );

    const [habitTime, setHabitTime] = useState("09:00");

    const [selectedDays, setSelectedDays] = useState([
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri"
    ]);


    const weekDays = [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun"
    ];


    // =========================================
    // MONTH INFORMATION
    // =========================================

    const daysInMonth = new Date(
        currentYear,
        currentMonth + 1,
        0
    ).getDate();


    const monthName = new Date(
        currentYear,
        currentMonth
    ).toLocaleString("default", {
        month: "long"
    });


    const today = new Date();

    const isCurrentMonth =
        today.getMonth() === currentMonth &&
        today.getFullYear() === currentYear;


    // =========================================
    // CHANGE MONTH
    // =========================================

    const changeMonth = (direction) => {

        let newMonth = currentMonth + direction;

        let newYear = currentYear;


        if (newMonth < 0) {
            newMonth = 11;
            newYear--;
        }


        if (newMonth > 11) {
            newMonth = 0;
            newYear++;
        }


        setCurrentMonth(newMonth);

        setCurrentYear(newYear);
    };


    // =========================================
    // SELECT / UNSELECT DAYS
    // =========================================

    const toggleDay = (day) => {

        setSelectedDays((previousDays) => {

            if (previousDays.includes(day)) {

                return previousDays.filter(
                    (selectedDay) => selectedDay !== day
                );

            }


            return [
                ...previousDays,
                day
            ];

        });

    };


    // =========================================
    // ADD HABIT
    // =========================================

    const addHabit = () => {

        const trimmedName = habitName.trim();


        if (!trimmedName) {
            alert("Please enter a habit name.");
            return;
        }


        if (!startDate) {
            alert("Please select a start date.");
            return;
        }


        if (selectedDays.length === 0) {
            alert("Please select at least one day.");
            return;
        }


        const newHabit = {

            id: Date.now(),

            name: trimmedName,

            startDate: startDate,

            time: habitTime,

            days: selectedDays,

            completed: {}

        };


        setHabits((previousHabits) => [

            ...previousHabits,

            newHabit

        ]);


        // Reset form

        setHabitName("");

        setStartDate(
            currentDate.toISOString().split("T")[0]
        );

        setHabitTime("09:00");

        setSelectedDays([
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri"
        ]);


        setShowAddHabit(false);

    };


    // =========================================
    // TOGGLE HABIT COMPLETION
    // =========================================

    const toggleHabit = (habitId, day) => {

        setHabits((previousHabits) => {

            return previousHabits.map((habit) => {

                if (habit.id !== habitId) {
                    return habit;
                }


                const updatedCompleted = {

                    ...habit.completed,

                    [day]: !habit.completed[day]

                };


                return {

                    ...habit,

                    completed: updatedCompleted

                };

            });

        });

    };


    // =========================================
    // DELETE HABIT
    // =========================================

    const deleteHabit = (habitId) => {

        setHabits((previousHabits) =>

            previousHabits.filter(
                (habit) => habit.id !== habitId
            )

        );

    };


    // =========================================
    // COMPLETION PERCENTAGE
    // =========================================

    const getCompletionPercentage = (habit) => {

        let completedDays = 0;


        for (
            let day = 1;
            day <= daysInMonth;
            day++
        ) {

            if (habit.completed[day]) {
                completedDays++;
            }

        }


        if (daysInMonth === 0) {
            return 0;
        }


        return Math.round(

            (completedDays / daysInMonth) * 100

        );

    };


    // =========================================
    // JSX
    // =========================================

    return (

        <div className="habit-page">


            {/* =================================
                HEADER
            ================================== */}

            <div className="habit-header">

                <div>

                    <h1>
                        Habit Tracker
                    </h1>

                    <p>
                        Build consistency one day at a time.
                    </p>

                </div>


                <div className="habit-header-actions">

                    <button
                        className="month-button"
                        onClick={() =>
                            changeMonth(-1)
                        }
                    >
                        ←
                    </button>


                    <div className="current-month">

                        {monthName} {currentYear}

                    </div>


                    <button
                        className="month-button"
                        onClick={() =>
                            changeMonth(1)
                        }
                    >
                        →
                    </button>

                </div>

            </div>


            {/* =================================
                ADD HABIT BUTTON
            ================================== */}

            <div className="add-habit-container">

                <div className="add-habit-info">

                    <strong>
                        Create a new habit
                    </strong>

                    <span>
                        Set when and how often you want to do it.
                    </span>

                </div>


                <button
                    className="add-habit-button"
                    onClick={() =>
                        setShowAddHabit(true)
                    }
                >
                    + Add Habit
                </button>

            </div>


            {/* =================================
                HABIT TABLE
            ================================== */}

            <div className="habit-table-container">

                <table className="habit-table">

                    <thead>

                        <tr>

                            <th className="habit-name-header">
                                Habit
                            </th>


                            {Array.from(
                                { length: daysInMonth },
                                (_, index) => {

                                    const day =
                                        index + 1;


                                    const isToday =
                                        isCurrentMonth &&
                                        today.getDate() === day;


                                    return (

                                        <th
                                            key={day}
                                            className={
                                                isToday
                                                    ? "today-column"
                                                    : ""
                                            }
                                        >

                                            <div className="day-number">
                                                {day}
                                            </div>


                                            <div className="day-name">

                                                {new Date(
                                                    currentYear,
                                                    currentMonth,
                                                    day
                                                ).toLocaleDateString(
                                                    "default",
                                                    {
                                                        weekday:
                                                            "short"
                                                    }
                                                )}

                                            </div>

                                        </th>

                                    );

                                }
                            )}


                            <th className="progress-header">
                                Progress
                            </th>


                            <th className="action-header">
                                Action
                            </th>

                        </tr>

                    </thead>


                    <tbody>

                        {habits.map((habit) => (

                            <tr key={habit.id}>


                                <td className="habit-name">

                                    <div>
                                        {habit.name}
                                    </div>

                                    <small>
                                        {habit.time}
                                    </small>

                                </td>


                                {Array.from(
                                    { length: daysInMonth },
                                    (_, index) => {

                                        const day =
                                            index + 1;


                                        const isToday =
                                            isCurrentMonth &&
                                            today.getDate() === day;


                                        const isCompleted =
                                            habit.completed[day];


                                        return (

                                            <td
                                                key={day}
                                                className={
                                                    isToday
                                                        ? "today-column"
                                                        : ""
                                                }
                                            >

                                                <button
                                                    className={
                                                        isCompleted
                                                            ? "habit-checkbox checked"
                                                            : "habit-checkbox"
                                                    }

                                                    onClick={() =>
                                                        toggleHabit(
                                                            habit.id,
                                                            day
                                                        )
                                                    }
                                                >

                                                    {isCompleted
                                                        ? "✓"
                                                        : ""
                                                    }

                                                </button>

                                            </td>

                                        );

                                    }
                                )}


                                <td className="progress-cell">

                                    <div className="progress-wrapper">

                                        <div className="progress-bar">

                                            <div
                                                className="progress-fill"

                                                style={{
                                                    width:
                                                        `${getCompletionPercentage(habit)}%`
                                                }}
                                            />

                                        </div>


                                        <span>
                                            {getCompletionPercentage(habit)}%
                                        </span>

                                    </div>

                                </td>


                                <td className="action-cell">

                                    <button
                                        className="delete-habit"

                                        onClick={() =>
                                            deleteHabit(
                                                habit.id
                                            )
                                        }
                                    >
                                        ×
                                    </button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>


            {/* =================================
                ADD HABIT MODAL
            ================================== */}

            {showAddHabit && (

                <div className="habit-modal-overlay">

                    <div className="habit-modal">


                        {/* Modal Header */}

                        <div className="habit-modal-header">

                            <div>

                                <h2>
                                    Add New Habit
                                </h2>

                                <p>
                                    Create a routine you want to maintain.
                                </p>

                            </div>


                            <button
                                className="modal-close"
                                onClick={() =>
                                    setShowAddHabit(false)
                                }
                            >
                                ×
                            </button>

                        </div>


                        {/* Habit Name */}

                        <div className="form-group">

                            <label>
                                Habit Name
                            </label>

                            <input
                                type="text"

                                placeholder="e.g. Morning Workout"

                                value={habitName}

                                onChange={(event) =>
                                    setHabitName(
                                        event.target.value
                                    )
                                }

                                autoFocus
                            />

                        </div>


                        {/* Date + Time */}

                        <div className="form-row">


                            <div className="form-group">

                                <label>
                                    Start Date
                                </label>

                                <input
                                    type="date"

                                    value={startDate}

                                    onChange={(event) =>
                                        setStartDate(
                                            event.target.value
                                        )
                                    }
                                />

                            </div>


                            <div className="form-group">

                                <label>
                                    Time
                                </label>

                                <input
                                    type="time"

                                    value={habitTime}

                                    onChange={(event) =>
                                        setHabitTime(
                                            event.target.value
                                        )
                                    }
                                />

                            </div>

                        </div>


                        {/* Days */}

                        <div className="form-group">

                            <label>
                                Repeat On
                            </label>


                            <div className="days-selector">

                                {weekDays.map((day) => (

                                    <button
                                        key={day}

                                        type="button"

                                        className={
                                            selectedDays.includes(day)
                                                ? "day-selector selected"
                                                : "day-selector"
                                        }

                                        onClick={() =>
                                            toggleDay(day)
                                        }
                                    >
                                        {day}
                                    </button>

                                ))}

                            </div>

                        </div>


                        {/* Modal Actions */}

                        <div className="modal-actions">

                            <button
                                className="cancel-button"

                                onClick={() =>
                                    setShowAddHabit(false)
                                }
                            >
                                Cancel
                            </button>


                            <button
                                className="save-habit-button"

                                onClick={addHabit}
                            >
                                Add Habit
                            </button>

                        </div>


                    </div>

                </div>

            )}

        </div>

    );

}

export default HabitTracker;