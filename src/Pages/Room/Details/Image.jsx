import React from "react";

export default function Image({room}) {
  return (
    <>
      <div className="room-hero-image">
        <img
          src={room.main_image}
          alt={room.title}
        />
      </div>
    </>
  );
}
