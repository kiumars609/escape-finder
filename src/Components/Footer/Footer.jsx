import React from "react";
import "./style.css";
import logo from "../../assets/images/logo/logo.png";

export default function Footer() {
  return (
    <>
      <div className="container-fluid">
        <div className="row footer">
          <div className="col-12 h-75">
            <div className="row">
              <div className="col-12 col-md-4 bg-danger d-flex flex-column align-items-center">
                <img src={logo} alt="logo" className="logo" />
                <h5>
                  Find the best escape room <br /> experiences near you.
                </h5>
              </div>
              <div className="col-12 col-md-3 bg-danger">
                <h5 className="text-white mb-3">Quick Links</h5>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#" className="text-decoration-none text-light">
                      About Us
                    </a>
                  </li>

                  <li className="mb-2">
                    <a href="#" className="text-decoration-none text-light">
                      How It Works
                    </a>
                  </li>

                  <li className="mb-2">
                    <a href="#" className="text-decoration-none text-light">
                      Contact
                    </a>
                  </li>

                  <li className="mb-2">
                    <a href="#" className="text-decoration-none text-light">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-2 bg-danger">b</div>
              <div className="col-12 col-md-2 bg-danger">c</div>
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
