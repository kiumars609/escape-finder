import React from "react";

export default function Info() {
  return (
    <>
      <div className="room-hero-info">
        <span className="eyebrow">Premium Escape Experience</span>
        <h1>SEVEN</h1>
        <p className="room-meta">Suitable for 2–6 people</p>

        <div className="difficulty-row">
          <span>Difficulty Level</span>
          <div className="difficulty-stars" aria-label="5 out of 6 difficulty">
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span className="star-muted">★</span>
          </div>
        </div>

        <p className="room-description">
          Face the seven deadly sins in a dark, story-driven challenge where
          every decision tests your mind, courage, and teamwork. Can you resist
          temptation and escape before judgment finds you?
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
    </>
  );
}
