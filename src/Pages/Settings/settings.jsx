import { useState } from "react";
import "./Settings.css";

function Settings({ darkMode, setDarkMode }) {

    const [editProfile, setEditProfile] = useState(false);

    const [name, setName] = useState("Amratash Pandey");
    const [email, setEmail] = useState("amratash@example.com");

    const [tempName, setTempName] = useState(name);
    const [tempEmail, setTempEmail] = useState(email);


    const openEditProfile = () => {

        setTempName(name);
        setTempEmail(email);

        setEditProfile(true);
    };


    const saveProfile = (e) => {

        e.preventDefault();

        setName(tempName);
        setEmail(tempEmail);

        setEditProfile(false);
    };


    const handleThemeChange = (e) => {

        const value = e.target.value;

        if (value === "Dark") {

            setDarkMode(true);

        } else if (value === "Light") {

            setDarkMode(false);

        } else {

            setDarkMode(false);

        }
    };


    return (
        <div className="settings-page">

            {/* HEADER */}

            <div className="settings-header">

                <div>

                    <h1>Settings</h1>

                    <p>
                        Manage your preferences and profile.
                    </p>

                </div>

            </div>


            {/* PROFILE */}

            <section className="settings-section">

                <div className="settings-section-header">

                    <div>

                        <h2>Profile</h2>

                        <p>
                            Manage your personal information.
                        </p>

                    </div>

                </div>


                <div className="profile-card">

                    <div className="profile-avatar">
                        {name.charAt(0).toUpperCase()}
                    </div>


                    <div className="profile-info">

                        <h3>
                            {name}
                        </h3>

                        <p>
                            {email}
                        </p>

                    </div>


                    <button
                        className="edit-profile-button"
                        onClick={openEditProfile}
                    >
                        Edit Profile
                    </button>

                </div>

            </section>


            {/* GENERAL */}

            <section className="settings-section">

                <div className="settings-section-header">

                    <div>

                        <h2>General</h2>

                        <p>
                            Customize your application.
                        </p>

                    </div>

                </div>


                <div className="settings-card">

                    <div className="setting-row">

                        <div className="setting-content">

                            <h3>
                                Start of the week
                            </h3>

                            <p>
                                Choose which day your week starts on.
                            </p>

                        </div>


                        <select className="settings-select">

                            <option>
                                Monday
                            </option>

                            <option>
                                Sunday
                            </option>

                        </select>

                    </div>


                    <div className="setting-row">

                        <div className="setting-content">

                            <h3>
                                Time format
                            </h3>

                            <p>
                                Choose how time is displayed.
                            </p>

                        </div>


                        <select className="settings-select">

                            <option>
                                12-hour
                            </option>

                            <option>
                                24-hour
                            </option>

                        </select>

                    </div>

                </div>

            </section>


            {/* NOTIFICATIONS */}

            <section className="settings-section">

                <div className="settings-section-header">

                    <div>

                        <h2>
                            Notifications
                        </h2>

                        <p>
                            Control your notification preferences.
                        </p>

                    </div>

                </div>


                <div className="settings-card">

                    <div className="setting-row">

                        <div className="setting-content">

                            <h3>
                                Task reminders
                            </h3>

                            <p>
                                Receive reminders for upcoming tasks.
                            </p>

                        </div>


                        <label className="toggle">

                            <input
                                type="checkbox"
                                defaultChecked
                            />

                            <span className="toggle-slider"></span>

                        </label>

                    </div>


                    <div className="setting-row">

                        <div className="setting-content">

                            <h3>
                                Habit reminders
                            </h3>

                            <p>
                                Get reminders for your habits.
                            </p>

                        </div>


                        <label className="toggle">

                            <input
                                type="checkbox"
                                defaultChecked
                            />

                            <span className="toggle-slider"></span>

                        </label>

                    </div>

                </div>

            </section>


            {/* APPEARANCE */}

            <section className="settings-section">

                <div className="settings-section-header">

                    <div>

                        <h2>
                            Appearance
                        </h2>

                        <p>
                            Customize the look of Smart Todo Manager.
                        </p>

                    </div>

                </div>


                <div className="settings-card">

                    <div className="setting-row">

                        <div className="setting-content">

                            <h3>
                                Theme
                            </h3>

                            <p>
                                Choose your preferred appearance.
                            </p>

                        </div>


                        <select
                            className="settings-select"
                            value={darkMode ? "Dark" : "Light"}
                            onChange={handleThemeChange}
                        >

                            <option value="Light">
                                Light
                            </option>

                            <option value="Dark">
                                Dark
                            </option>

                        </select>

                    </div>


                    <div className="setting-row">

                        <div className="setting-content">

                            <h3>
                                Dark mode
                            </h3>

                            <p>
                                Switch between light and dark appearance.
                            </p>

                        </div>


                        <label className="toggle">

                            <input
                                type="checkbox"
                                checked={darkMode}
                                onChange={() =>
                                    setDarkMode(!darkMode)
                                }
                            />

                            <span className="toggle-slider"></span>

                        </label>

                    </div>

                </div>

            </section>


            {/* EDIT PROFILE MODAL */}

            {editProfile && (

                <div className="profile-overlay">

                    <div className="profile-modal">

                        <div className="profile-modal-header">

                            <div>

                                <h2>
                                    Edit Profile
                                </h2>

                                <p>
                                    Update your profile information.
                                </p>

                            </div>


                            <button
                                className="close-profile"
                                onClick={() =>
                                    setEditProfile(false)
                                }
                            >
                                ×
                            </button>

                        </div>


                        <form
                            className="profile-form"
                            onSubmit={saveProfile}
                        >

                            <div className="profile-form-group">

                                <label>
                                    Name
                                </label>

                                <input
                                    type="text"
                                    value={tempName}
                                    onChange={(e) =>
                                        setTempName(e.target.value)
                                    }
                                    required
                                />

                            </div>


                            <div className="profile-form-group">

                                <label>
                                    Email
                                </label>

                                <input
                                    type="email"
                                    value={tempEmail}
                                    onChange={(e) =>
                                        setTempEmail(e.target.value)
                                    }
                                    required
                                />

                            </div>


                            <div className="profile-form-actions">

                                <button
                                    type="button"
                                    className="cancel-profile"
                                    onClick={() =>
                                        setEditProfile(false)
                                    }
                                >
                                    Cancel
                                </button>


                                <button
                                    type="submit"
                                    className="save-profile"
                                >
                                    Save Changes
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            )}

        </div>
    );
}

export default Settings;