import React, { useState } from "react";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 1));
  const [selectedDate, setSelectedDate] = useState(23);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const availableDates = {
    "2026-03-22": 3,
    "2026-03-23": 7,
    "2026-03-24": 7,
    "2026-03-25": 7,
    "2026-03-26": 7,
    "2026-03-27": 6,
    "2026-03-28": 8,
    "2026-03-29": 8,
    "2026-03-30": 7,
    "2026-03-31": 7,
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDate(null);
  };

  const emptyDays = Array.from({ length: firstDayOfMonth }, () => null);
  const monthDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const calendarDays = [...emptyDays, ...monthDays];

  const monthLabel = currentDate.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="calendar-card">
      <div className="section-head">
        <span className="section-kicker">Step 1</span>
        <h2>Select a date</h2>
      </div>

      <div className="calendar-topbar">
        <button className="calendar-nav-btn" onClick={handlePrevMonth}>
          &#10094;
        </button>

        <h3>{monthLabel}</h3>

        <button className="calendar-nav-btn" onClick={handleNextMonth}>
          &#10095;
        </button>
      </div>

      <div className="calendar-weekdays">
        <span>Sun</span>
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>

      <div className="calendar-grid">
        {calendarDays.map((day, index) => {
          if (day === null) {
            return <div key={index} className="calendar-day empty"></div>;
          }

          const dateString = `${year}-${String(month + 1).padStart(
            2,
            "0",
          )}-${String(day).padStart(2, "0")}`;

          const availableCount = availableDates[dateString];
          const isAvailable = !!availableCount;
          const isActive = selectedDate === day;

          return (
            <div
              key={index}
              className={`calendar-day ${
                isAvailable ? "available" : "disabled"
              } ${isActive ? "active" : ""}`}
              onClick={() => {
                if (isAvailable) setSelectedDate(day);
              }}
            >
              <span>{day}</span>
              <small>
                {isAvailable ? `${availableCount} Available` : "NA"}
              </small>
            </div>
          );
        })}
      </div>
    </div>
  );
}
