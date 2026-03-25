import React from "react";
import Layout from "../../Components/Layout/Layout";
import "./style.css";

export default function Room() {
  return (
    <>
      <Layout>
        <main>
          <section className="room-hero">
            <div className="room-hero-overlay"></div>

            <div className="container room-hero-content">
              <div className="room-hero-image">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                  alt="Escape room"
                />
              </div>

              <div className="room-hero-info">
                <span className="eyebrow">Premium Escape Experience</span>
                <h1>SEVEN</h1>
                <p className="room-meta">Suitable for 2–6 people</p>

                <div className="difficulty-row">
                  <span>Difficulty Level</span>
                  <div
                    className="difficulty-stars"
                    aria-label="5 out of 6 difficulty"
                  >
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="star-muted">★</span>
                  </div>
                </div>

                <p className="room-description">
                  Face the seven deadly sins in a dark, story-driven challenge
                  where every decision tests your mind, courage, and teamwork.
                  Can you resist temptation and escape before judgment finds
                  you?
                </p>

                <div className="room-features">
                  <div className="feature-card">
                    <span className="feature-label">Duration</span>
                    <strong>60 min</strong>
                  </div>
                  <div className="feature-card">
                    <span className="feature-label">Players</span>
                    <strong>2–6</strong>
                  </div>
                  <div className="feature-card">
                    <span className="feature-label">Category</span>
                    <strong>Thriller</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="booking-section">
            <div className="container booking-grid">
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
                    <input
                      type="email"
                      id="email"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label for="team">Team Name</label>
                      <input type="text" id="team" placeholder="Optional" />
                    </div>
                    <div className="form-group">
                      <label for="coupon">Coupon Code</label>
                      <input
                        type="text"
                        id="coupon"
                        placeholder="Enter code if any"
                      />
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
                    <span>
                      I have read and agree to the rules and booking policy.
                    </span>
                  </label>

                  <button type="submit" className="submit-btn">
                    Confirm Booking
                  </button>
                </form>
              </div>
            </div>
          </section>

          <section className="info-strip">
            <div className="container info-strip-inner">
              <div>
                <span className="section-kicker">Why choose us</span>
                <h2>Become the hero of a unique story for 60 minutes</h2>
              </div>
              <a href="#" className="outline-btn">
                Explore More Rooms
              </a>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
