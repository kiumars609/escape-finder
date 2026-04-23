import React from "react";

export default function BookingPanel({
  selectedDate,
  selectedSlot,
  setSelectedSlot,
  selectedSlots,
  currentDate,
  handleSubmit,
  handleChange,
  formData,
  roomDetail,
}) {
  const selectedMonth = currentDate.toLocaleString("en-US", {
    month: "long",
  });

  return (
    <div className="booking-panel">
      <div className="section-head">
        <span className="section-kicker">Step 2</span>
        <h2>Choose time & complete booking</h2>
      </div>

      <div className="slot-block">
        <h3>Available time slots</h3>

        {!selectedDate ? (
          <p>Please select a date first.</p>
        ) : selectedSlots.length > 0 ? (
          <div className="slot-list">
            {selectedSlots.map((slot) => (
              <button
                key={slot}
                type="button"
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
      </div>

      <div className="price-box">
        <div>
          <span className="price-label">Price</span>
          <strong>${roomDetail.price}</strong>
        </div>

        <p>
          {selectedDate && selectedSlot
            ? `For ${selectedMonth} ${selectedDate} / ${selectedSlot}`
            : "For one team / selected time slot"}
        </p>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fullname">Full Name</label>
            <input
              name="fullname"
              type="text"
              id="fullname"
              placeholder="Enter your full name"
              value={formData.fullname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              name="phone"
              type="tel"
              id="phone"
              placeholder="+971..."
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="team">Team Name</label>
            <input
              name="teamName"
              type="text"
              id="team"
              placeholder="Optional"
              value={formData.teamName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="coupon">Coupon Code</label>
            <input type="text" id="coupon" placeholder="Enter code if any" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="source">Where did you hear about us?</label>
          <select id="source">
            <option value="">Select one</option>
            <option>Social Media / Facebook</option>
            <option>Friend / Known</option>
            <option>Web Page</option>
            <option>Article / Magazine</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="comments">Comments</label>
          <textarea
            id="comments"
            rows="5"
            placeholder="Write your notes here..."
          ></textarea>
        </div>

        <label className="checkbox-row">
          <input type="checkbox" />
          <span>I have read and agree to the rules and booking policy.</span>
        </label>

        <button type="submit" className="submit-btn">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
