import React from "react";
import Image from "./Image";
import Info from "./Info";

export default function Details() {
  return (
    <>
      <section className="room-hero">
        <div className="room-hero-overlay"></div>

        <div className="container room-hero-content">
          <Image />
          <Info />
        </div>
      </section>
    </>
  );
}
