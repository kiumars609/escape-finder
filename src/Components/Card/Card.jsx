import React from "react";
import "./style.css";

export default function Card({item}) {
  return (
    <>
      <div className="escape-card mx-auto" style={{ backgroundImage: `url(${item.main_image})` }}>
        <div className="card-overlay"></div>

        <div className="card-angle">{item.time}'</div>

        <div className="card-bottom">
          <div className="card-main">
            <div className="book-now">
              <svg className="book-icon" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>
                BOOK
                <br />
                NOW
              </span>
            </div>

            <div className="main-info">
              <h2 className="room-title">{item.title}</h2>
              <p className="room-subtitle">
                {item.subtitle}
              </p>
            </div>
          </div>

          <div className="extra-info">
            <p>SUITABLE FOR 2-6 PEOPLE</p>
            <p>Difficulty level: 🔒 🔒 🔒 🔒 🔓</p>
          </div>
        </div>
      </div>
    </>
  );
}
