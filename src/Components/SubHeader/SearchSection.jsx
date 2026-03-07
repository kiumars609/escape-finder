import React from "react";

export default function SearchSection() {
  return (
    <>
      <div className="col-12 col-md-10 mt-5 search-section rounded-2 px-5">
        {/* <input type="search" className="col-12 col-md-3 rounded-1" /> */}

        <div className="col-4 bg-danger">
          <div className="search-box">
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
        </div>

        <div className="col-3 bg-warning">a</div>
        <div className="col-3 bg-success">a</div>
        <div className="col-2 bg-white">a</div>
      </div>
    </>
  );
}
