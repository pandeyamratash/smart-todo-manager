import { useState } from "react";
import "./calendar.css";

function Calendar() {

    const today = new Date();

    const [currentDate, setCurrentDate] = useState(
        new Date(today.getFullYear(), today.getMonth(), 1)
    );

    const [showEventForm, setShowEventForm] = useState(false);

    const [events, setEvents] = useState([
        {
            id: 1,
            title: "Morning Workout",
            date: "2026-08-22",
            time: "07:00",
            type: "habit"
        },
        {
            id: 2,
            title: "Complete DSA Assignment",
            date: "2026-08-24",
            time: "09:00",
            type: "task"
        }
    ]);

    const [newEvent, setNewEvent] = useState({
        title: "",
        date: "",
        time: "",
        type: "task"
    });


    /* ==========================================
       MONTH INFORMATION
    ========================================== */

    const year = currentDate.getFullYear();

    const month = currentDate.getMonth();

    const monthName = currentDate.toLocaleString("default", {
        month: "long"
    });


    /* ==========================================
       DAYS IN MONTH
    ========================================== */

    const daysInMonth = new Date(
        year,
        month + 1,
        0
    ).getDate();


    /* ==========================================
       FIRST DAY OF MONTH
    ========================================== */

    const firstDay = new Date(
        year,
        month,
        1
    ).getDay();


    /* ==========================================
       PREVIOUS MONTH
    ========================================== */

    const previousMonth = () => {

        setCurrentDate(
            new Date(
                year,
                month - 1,
                1
            )
        );

    };


    /* ==========================================
       NEXT MONTH
    ========================================== */

    const nextMonth = () => {

        setCurrentDate(
            new Date(
                year,
                month + 1,
                1
            )
        );

    };


    /* ==========================================
       TODAY
    ========================================== */

    const goToToday = () => {

        setCurrentDate(
            new Date(
                today.getFullYear(),
                today.getMonth(),
                1
            )
        );

    };


    /* ==========================================
       FORMAT DATE
    ========================================== */

    const formatDate = (year, month, day) => {

        return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    };


    /* ==========================================
       ADD EVENT
    ========================================== */

    const handleAddEvent = (e) => {

        e.preventDefault();

        if (!newEvent.title || !newEvent.date) {
            return;
        }

        const event = {
            id: Date.now(),
            ...newEvent
        };

        setEvents([
            ...events,
            event
        ]);

        setNewEvent({
            title: "",
            date: "",
            time: "",
            type: "task"
        });

        setShowEventForm(false);
    };


    /* ==========================================
       DELETE EVENT
    ========================================== */

    const deleteEvent = (id) => {

        setEvents(
            events.filter(
                event => event.id !== id
            )
        );

    };


    /* ==========================================
       CHANGE INPUT
    ========================================== */

    const handleInputChange = (e) => {

        const {
            name,
            value
        } = e.target;

        setNewEvent({
            ...newEvent,
            [name]: value
        });

    };


    /* ==========================================
       BUILD CALENDAR DAYS
    ========================================== */

    const calendarDays = [];


    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {

        calendarDays.push(
            <div
                className="calendar-day muted"
                key={`empty-${i}`}
            />
        );

    }


    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {

        const dateString = formatDate(
            year,
            month,
            day
        );

        const dayEvents = events.filter(
            event => event.date === dateString
        );


        const cellDate = new Date(year, month, day);
        const startOfToday = new Date(today.getFullYear(),
        today.getMonth(),
        today.getDate()
    );

const isToday =
    cellDate.getTime() === startOfToday.getTime();

const isPast =
    cellDate < startOfToday;


        calendarDays.push(

            <div
    className={`calendar-day 
        ${isToday ? "today" : ""} 
        ${isPast ? "past" : ""}
    `}
    key={day}
>

                <span className="day-number">
                    {day}
                </span>


                <div className="day-events">

                    {dayEvents.map(event => (

                        <div
                            key={event.id}
                            className={`calendar-event ${
                                event.type === "habit"
                                    ? "habit-event"
                                    : "task-event"
                            }`}
                        >

                            <div className="event-content">

                                <strong>
                                    {event.title}
                                </strong>

                                {event.time && (
                                    <small>
                                        {event.time}
                                    </small>
                                )}

                            </div>


                            <button
                                className="delete-event"
                                onClick={() =>
                                    deleteEvent(event.id)
                                }
                            >
                                ×
                            </button>

                        </div>

                    ))}

                </div>

            </div>

        );

    }


    /* ==========================================
       UPCOMING EVENTS
    ========================================== */

    const upcomingEvents = [...events]
        .filter(event => {
            return new Date(event.date) >= new Date(
                today.getFullYear(),
                today.getMonth(),
                today.getDate()
            );
        })
        .sort(
            (a, b) =>
                new Date(a.date) -
                new Date(b.date)
        );


    return (

        <div className="calendar-page">


            {/* ==================================
                HEADER
            ================================== */}

            <div className="calendar-header">

                <div>

                    <h1>
                        Calendar
                    </h1>

                    <p>
                        Plan your tasks, habits and important events.
                    </p>

                </div>


                <button
                    className="calendar-add-button"
                    onClick={() =>
                        setShowEventForm(true)
                    }
                >
                    + Add Event
                </button>

            </div>



            {/* ==================================
                CONTROLS
            ================================== */}

            <div className="calendar-controls">

                <div className="calendar-navigation">

                    <button
                        className="calendar-nav-button"
                        onClick={previousMonth}
                    >
                        ←
                    </button>


                    <button
                        className="calendar-today-button"
                        onClick={goToToday}
                    >
                        Today
                    </button>


                    <button
                        className="calendar-nav-button"
                        onClick={nextMonth}
                    >
                        →
                    </button>

                </div>


                <h2>
                    {monthName} {year}
                </h2>


                <select className="calendar-view-select">

                    <option>
                        Month
                    </option>

                    <option>
                        Week
                    </option>

                    <option>
                        Day
                    </option>

                </select>

            </div>



            {/* ==================================
                CALENDAR
            ================================== */}

            <div className="calendar-container">


                <div className="calendar-weekdays">

                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>

                </div>


                <div className="calendar-grid">

                    {calendarDays}

                </div>

            </div>



            {/* ==================================
                UPCOMING
            ================================== */}

            <div className="upcoming-section">

                <div className="upcoming-header">

                    <h2>
                        Upcoming
                    </h2>

                    <p>
                        Your upcoming tasks and events.
                    </p>

                </div>


                <div className="upcoming-list">

                    {upcomingEvents.length === 0 ? (

                        <p className="no-events">
                            No upcoming events.
                        </p>

                    ) : (

                        upcomingEvents.map(event => (

                            <div
                                className="upcoming-item"
                                key={event.id}
                            >

                                <div className="upcoming-date">

                                    <strong>
                                        {new Date(
                                            event.date + "T00:00:00"
                                        ).getDate()}
                                    </strong>

                                    <span>
                                        {new Date(
                                            event.date + "T00:00:00"
                                        ).toLocaleString(
                                            "default",
                                            { month: "short" }
                                        )}
                                    </span>

                                </div>


                                <div className="upcoming-info">

                                    <strong>
                                        {event.title}
                                    </strong>

                                    <span>
                                        {event.type === "habit"
                                            ? "Habit"
                                            : "Task"}
                                        {" · "}
                                        {event.time || "No time set"}
                                    </span>

                                </div>

                            </div>

                        ))

                    )}

                </div>

            </div>



            {/* ==================================
                ADD EVENT MODAL
            ================================== */}

            {showEventForm && (

                <div className="event-overlay">

                    <div className="event-modal">


                        <div className="event-modal-header">

                            <div>

                                <h2>
                                    Add New Event
                                </h2>

                                <p>
                                    Create an event for your calendar.
                                </p>

                            </div>


                            <button
                                className="close-event"
                                onClick={() =>
                                    setShowEventForm(false)
                                }
                            >
                                ×
                            </button>

                        </div>


                        <form
                            onSubmit={handleAddEvent}
                            className="event-form"
                        >


                            <div className="form-group">

                                <label>
                                    Event Title
                                </label>

                                <input
                                    type="text"
                                    name="title"
                                    placeholder="e.g. Complete DSA assignment"
                                    value={newEvent.title}
                                    onChange={handleInputChange}
                                    required
                                />

                            </div>


                            <div className="form-row">

                                <div className="form-group">

                                    <label>
                                        Date
                                    </label>

                                    <input
                                        type="date"
                                        name="date"
                                        value={newEvent.date}
                                        onChange={handleInputChange}
                                        required
                                    />

                                </div>


                                <div className="form-group">

                                    <label>
                                        Time
                                    </label>

                                    <input
                                        type="time"
                                        name="time"
                                        value={newEvent.time}
                                        onChange={handleInputChange}
                                    />

                                </div>

                            </div>


                            <div className="form-group">

                                <label>
                                    Type
                                </label>

                                <select
                                    name="type"
                                    value={newEvent.type}
                                    onChange={handleInputChange}
                                >

                                    <option value="task">
                                        Task
                                    </option>

                                    <option value="habit">
                                        Habit
                                    </option>

                                </select>

                            </div>


                            <div className="event-form-actions">

                                <button
                                    type="button"
                                    className="cancel-event"
                                    onClick={() =>
                                        setShowEventForm(false)
                                    }
                                >
                                    Cancel
                                </button>


                                <button
                                    type="submit"
                                    className="save-event"
                                >
                                    Add Event
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            )}

        </div>
    );
}

export default Calendar;