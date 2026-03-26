import React from "react";

export default function BookingPanel() {
  return (
    <>
      <div className="booking-panel">
        <div className="section-head">
          <span className="section-kicker">Step 2</span>
          <h2>Choose time & complete booking</h2>
        </div>

        <div className="slot-block">
          <h3>Available time slots</h3>
          <div className="slot-list">
            <button className="slot-btn">12:00</button>
            <button className="slot-btn">13:30</button>
            <button className="slot-btn active">15:00</button>
            <button className="slot-btn">16:30</button>
            <button className="slot-btn">18:00</button>
            <button className="slot-btn">19:30</button>
            <button className="slot-btn">21:00</button>
          </div>
        </div>

        <div className="price-box">
          <div>
            <span className="price-label">Price</span>
            <strong>AED 420</strong>
          </div>
          <p>For one team / selected time slot</p>
        </div>

        <form className="booking-form">
          <div className="form-row">
            <div className="form-group">
              <label for="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group">
              <label for="phone">Phone</label>
              <input type="tel" id="phone" placeholder="+971..." />
            </div>
          </div>

          <div className="form-group">
            <label for="email">E-mail</label>
            <input type="email" id="email" placeholder="your@email.com" />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label for="team">Team Name</label>
              <input type="text" id="team" placeholder="Optional" />
            </div>
            <div className="form-group">
              <label for="coupon">Coupon Code</label>
              <input type="text" id="coupon" placeholder="Enter code if any" />
            </div>
          </div>

          <div className="form-group">
            <label for="source">Where did you hear about us?</label>
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
            <label for="comments">Comments</label>
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
    </>
  );
}
