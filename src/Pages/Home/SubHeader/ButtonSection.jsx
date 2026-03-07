import React from "react";

export default function ButtonSection() {
  return (
    <div className="col-12 col-md-6 button-section mt-5">
      <button className="btn btn-primary text-white col-12 col-md-4 px-5 rounded-3 py-3 fs-5">
        Explore Now
      </button>

      <button className="btn border-secondary glass-btn col-12 col-md-4 px-5 rounded-3 py-3 fs-5 btn-outline-secondary">
        View Favorites
      </button>
    </div>
  );
}
