import React from "react";

export default function SearchSection({ handleFilteredChange,filters }) {
  // const difficultSelect = [1, 2, 3, 4, 5].map((n) => {
  //   n === roomsData.difficulty ? "<option>🔒</option>" : "<option>🔓</option>";
  // });

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

          <input type="text" value={filters.title} onChange={(e) => handleFilteredChange("title", e.target.value)} placeholder="Search rooms..." />
        </div>

        {/* Difficulty */}
        <div className="dropdown">
          <select
            className="dropdown-btn"
            onChange={(e) => handleFilteredChange("difficulty", Number(e.target.value))}
          >
            <option disabled>Difficulty</option>
            <option value={1}>🔒🔓🔓🔓🔓</option>
            <option value={2}>🔒🔒🔓🔓🔓</option>
            <option value={3}>🔒🔒🔒🔓🔓</option>
            <option value={4}>🔒🔒🔒🔒🔓</option>
            <option value={5}>🔒🔒🔒🔒🔒</option>
          </select>

          <span className="arrow">▾</span>
        </div>

        {/* Players */}
        <div className="dropdown">
          <select
            className="dropdown-btn"
            onChange={(e) => handleFilteredChange("players", e.target.value)}
          >
            <option disabled>Players</option>
            <option value={4}>4 Person</option>
            <option value={5}>5 Person</option>
            <option value={6}>6 Person</option>
            <option value={7}>7 Person</option>
            <option value={8}>8 Person</option>
          </select>

          <span className="arrow">▾</span>
        </div>

        {/* City */}
        <div className="dropdown">
          <select
            className="dropdown-btn"
            onChange={(e) => handleFilteredChange("city", e.target.value)}
          >
            <option disabled>City</option>
            <option value={"mashhad"}>Mashhad</option>
            <option value={"yerevan"}>Yerevan</option>
            <option value={"tehran"}>Tehran</option>
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
