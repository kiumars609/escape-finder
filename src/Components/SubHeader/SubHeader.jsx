import React from "react";
import "./style.css";
import Describe from "./Describe";

export default function SubHeader() {
  return (
    <>
      <div className="container-fluid sub-header">
        <div className="row">
          <div className="col-12 col-md-12 bg-danger main">
            <Describe />
          </div>
        </div>
      </div>
    </>
  );
}
