import React, { useState } from "react";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const days = [];
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  const emptyDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    emptyDays.push(null);
  }

  const calendarDays = [...emptyDays, ...days];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDate(null);
    setSelectedSlot(null);
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDate(null);
    setSelectedSlot(null);
  };

  const availableDates = {
    "2026-03-22": 3,
    "2026-03-23": 7,
    "2026-03-24": 7,
    "2026-03-25": 5,
    "2026-03-26": 2,
  };

  const slotsByDate = {
    "2026-03-22": ["12:00", "14:30", "17:00"],
    "2026-03-23": ["11:00", "13:30", "15:00", "18:00", "20:30"],
    "2026-03-24": ["12:30", "16:00", "19:00"],
    "2026-03-25": ["10:00", "14:00"],
    "2026-03-26": ["13:00", "15:30", "21:00"],
  };

  const selectedDateString =
    selectedDate !== null
      ? `${year}-${String(month + 1).padStart(2, "0")}-${String(selectedDate).padStart(2, "0")}`
      : null;

  const selectedSlots = selectedDateString
    ? slotsByDate[selectedDateString] || []
    : [];

  const gridCalendar = calendarDays.map((day, index) => {
    const dateString =
      day !== null
        ? `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
        : null;

    const isAvailable = day !== null && availableDates[dateString];

    return (
      <div
        key={index}
        className={`calendar-day ${day === null ? "empty" : ""} ${isAvailable ? "available" : ""} ${selectedDate === day ? "active" : ""}`}
        onClick={() => {
          if (isAvailable) {
            setSelectedDate(day);
            setSelectedSlot(null);
          }
        }}
      >
        <span>{day}</span>
        {isAvailable && <small>{availableDates[dateString]} Available</small>}
      </div>
    );
  });

  return (
    <>
      {/* <h3>
        March 2026 (
        {month + " " + year + " " + daysInMonth + " " + firstDayOfMonth})
      </h3>
      <p>{JSON.stringify(emptyDays)}</p>
      <p>{JSON.stringify(days)}</p> */}
      <div className="calendar-topbar">
        <button onClick={handlePrevMonth}>Prev</button>
        <h3>
          {currentDate.toLocaleString("en-US", { month: "long" })} {year}
        </h3>
        <button onClick={handleNextMonth}>Next</button>
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
      <div className="calendar-grid">{gridCalendar}</div>

      <div className="slots-section">
        <h3>Available Time Slots</h3>

        {selectedDate === null ? (
          <p>Please select a date first.</p>
        ) : selectedSlots.length > 0 ? (
          <div className="slot-list">
            {selectedSlots.map((slot, index) => (
              <button
                key={index}
                className={`slot-btn ${selectedSlot === slot ? "active" : ""}`}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        ) : (
          <p>No time slots available for this date.</p>
        )}

        <p>Selected Slot: {selectedSlot}</p>

        <div className="booking-summary">
          <h3>Your Selection</h3>

          {selectedDate && selectedSlot ? (
            <p>
              Date: {currentDate.toLocaleString("en-US", { month: "long" })}{" "}
              {selectedDate}, {year}
              <br />
              Time: {selectedSlot}
            </p>
          ) : (
            <p>Please select a date and time slot.</p>
          )}
        </div>
      </div>

      <div className="calendar-card">
        <div className="section-head">
          <span className="section-kicker">Step 1</span>
          <h2>Select a date</h2>
        </div>

        <div className="calendar-topbar">
          <button className="calendar-nav-btn">&#10094;</button>
          <h3>March 2026</h3>
          <button className="calendar-nav-btn">&#10095;</button>
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
          <div className="calendar-day disabled">
            <span>1</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>2</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>3</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>4</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>5</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>6</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>7</span>
            <small>NA</small>
          </div>

          <div className="calendar-day disabled">
            <span>8</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>9</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>10</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>11</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>12</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>13</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>14</span>
            <small>NA</small>
          </div>

          <div className="calendar-day disabled">
            <span>15</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>16</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>17</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>18</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>19</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>20</span>
            <small>NA</small>
          </div>
          <div className="calendar-day disabled">
            <span>21</span>
            <small>NA</small>
          </div>

          <div className="calendar-day available">
            <span>22</span>
            <small>3 Available</small>
          </div>
          <div className="calendar-day available active">
            <span>23</span>
            <small>7 Available</small>
          </div>
          <div className="calendar-day available">
            <span>24</span>
            <small>7 Available</small>
          </div>
          <div className="calendar-day available">
            <span>25</span>
            <small>7 Available</small>
          </div>
          <div className="calendar-day available">
            <span>26</span>
            <small>7 Available</small>
          </div>
          <div className="calendar-day available">
            <span>27</span>
            <small>6 Available</small>
          </div>
          <div className="calendar-day available">
            <span>28</span>
            <small>8 Available</small>
          </div>

          <div className="calendar-day available">
            <span>29</span>
            <small>8 Available</small>
          </div>
          <div className="calendar-day available">
            <span>30</span>
            <small>7 Available</small>
          </div>
          <div className="calendar-day available">
            <span>31</span>
            <small>7 Available</small>
          </div>
        </div>
      </div>
    </>
  );
}
