import React from "react";

export default function Info({ room }) {
  const star = [1, 2, 3, 4, 5].map((item) =>
    room.difficulty >= item ? (
      <span>★</span>
    ) : (
      <span className="star-muted">★</span>
    ),
  );

  return (
    <>
      <div className="room-hero-info">
        <span className="eyebrow">{room.subtitle}</span>
        <h1>{room.title.toUpperCase()}</h1>
        <p className="room-meta">Suitable for {room.players} people</p>

        <div className="difficulty-row">
          <span>Difficulty Level</span>
          <div className="difficulty-stars" aria-label="5 out of 6 difficulty">
            {star}
          </div>
        </div>

        <p className="room-description">{room.subtitle}</p>

        <div className="room-features">
          <div className="feature-card">
            <span className="feature-label">Duration</span>
            <strong>{room.time} min</strong>
          </div>
          <div className="feature-card">
            <span className="feature-label">Players</span>
            <strong>{room.players}</strong>
          </div>
          <div className="feature-card">
            <span className="feature-label">Category</span>
            <strong>Horror</strong>
          </div>
        </div>
      </div>
    </>
  );
}
