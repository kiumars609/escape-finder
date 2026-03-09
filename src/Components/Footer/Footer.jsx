import React from "react";
import "./style.css";
import logo from "../../assets/images/logo/logo.png";

export default function Footer() {
  return (
    <>
      <div className="container-fluid">
        <div className="row footer">
          <div className="col-12 h-75 bg-warning">
            <div className="row">
              <div className="col-12 col-md-4 bg-danger d-flex">
                <img src={logo} alt="logo" className="logo" />
                <h5>
                    Find the best escape rooms around you.
                </h5>
              </div>
              <div className="col-12 col-md-3 bg-danger">a</div>
              <div className="col-12 col-md-2 bg-danger">a</div>
              <div className="col-12 col-md-2 bg-danger">a</div>
              <div className="col-12 col-md-2 bg-danger"></div>
            </div>
          </div>
          <div className="col-12 h-25 d-flex align-items-center justify-content-center">
            <h5>© 2026 EscapeFinder. Built with Me.</h5>
          </div>
        </div>
      </div>
    </>
  );
}
