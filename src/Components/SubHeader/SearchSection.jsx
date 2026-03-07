import React from "react";

export default function SearchSection() {
  return (
    <>
      <div className="col-12 col-md-10 mt-5 search-section rounded-2 px-5">
        {/* Search Room */}
        <div className="search-box col-12 col-md-3">
          <svg
            className="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>

          <input type="text" placeholder="Search rooms..." />
        </div>

        {/* Difficulty */}
        <div className="dropdown">
          <select className="dropdown-btn">
            <option>Difficulty</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
            <option>Expert</option>
          </select>

          <span className="arrow">▾</span>
        </div>

        {/* Players */}
        <div className="dropdown">
          <select className="dropdown-btn">
            <option>Players</option>
            <option>4 Person</option>
            <option>5 Person</option>
            <option>6 Person</option>
            <option>7 Person</option>
            <option>8 Person</option>
          </select>

          <span className="arrow">▾</span>
        </div>

        {/* City */}
        <div className="dropdown">
          <select className="dropdown-btn">
            <option>City</option>
            <option>Mashhad</option>
            <option>Yerevan</option>
            <option>Tehran</option>
          </select>

          <span className="arrow">▾</span>
        </div>

        <button className="btn btn-primary text-white col-12 col-md-2 px-5 rounded-3">
          Search
        </button>
      </div>
    </>
  );
}
