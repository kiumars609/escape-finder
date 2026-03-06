import React from "react";

export default function ButtonSection() {
  return (
    <div className="col-12 col-md-6 bg-warning button-section mt-5">
      <button className="btn btn-primary text-white col-12 col-md-4 px-5 rounded-3">
        Explore Now
      </button>

      <button className="btn btn-primary text-white col-12 col-md-4 px-5">
        View Favorites
      </button>
    </div>
  );
}
