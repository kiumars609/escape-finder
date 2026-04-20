import React, { useState } from "react";
import Calendar from "./Calendar/Calendar";
import BookingPanel from "./BookingPanel/BookingPanel";
import { useNavigate } from "react-router-dom";

export default function Booking() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2, 1));
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const navigate = useNavigate();

  const slotsByDate = {
    "2026-03-22": ["12:00", "14:30", "17:00"],
    "2026-03-23": [
      "12:00",
      "13:30",
      "15:00",
      "16:30",
      "18:00",
      "19:30",
      "21:00",
    ],
    "2026-03-24": ["12:30", "16:00", "19:00"],
    "2026-03-25": ["10:00", "14:00", "17:30"],
    "2026-04-26": ["13:00", "15:30", "21:00"],
    "2026-04-27": ["11:30", "16:30", "18:00"],
    "2026-04-28": ["12:00", "15:00", "19:30"],
    "2026-03-29": ["14:00", "17:00"],
    "2026-03-30": ["13:00", "16:00", "20:00"],
    "2026-03-31": ["12:00", "18:00", "21:30"],
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const selectedDateString =
    selectedDate !== null
      ? `${year}-${String(month + 1).padStart(2, "0")}-${String(selectedDate).padStart(2, "0")}`
      : null;

  const selectedSlots = selectedDateString
    ? slotsByDate[selectedDateString] || []
    : [];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedDate || !selectedSlot) {
      alert("Koni");
      return;
    }

    navigate("/payment", {
      state: {
        date: selectedDate,
        time: selectedSlot,
      },
    });
  };

  return (
    <section className="booking-section">
      <div className="container booking-grid">
        <Calendar
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          setSelectedSlot={setSelectedSlot}
        />

        <BookingPanel
          selectedDate={selectedDate}
          selectedSlot={selectedSlot}
          setSelectedSlot={setSelectedSlot}
          selectedSlots={selectedSlots}
          currentDate={currentDate}
          handleSubmit={handleSubmit}
        />
      </div>
    </section>
  );
}
