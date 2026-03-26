import React from "react";
import Calendar from "./Calendar/Calendar";
import BookingPanel from "./BookingPanel/BookingPanel";

export default function Booking() {
  return (
    <>
      <section className="booking-section">
        <div className="container booking-grid">
          <Calendar />
          <BookingPanel />
        </div>
      </section>
    </>
  );
}
