import React from "react";
import "./style.css";
import Describe from "./Describe";
import ButtonSection from "./ButtonSection";
import SearchSection from "./SearchSection";

export default function SubHeader({ handleFilteredChange, roomsData }) {
  return (
    <>
      <div className="container-fluid sub-header">
        <div className="row">
          <div className="col-12 col-md-12 main">
            <Describe />
            <ButtonSection />
            <SearchSection
              roomsData={roomsData}
              handleFilteredChange={handleFilteredChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}
