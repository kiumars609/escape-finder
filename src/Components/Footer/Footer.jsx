import React from "react";
import "./style.css";
import logo from "../../assets/images/logo/logo.png";

export default function Footer() {
  return (
    <>
      <div className="container-fluid footer">
      <div className="container">
        <div className="row gy-4 footer-top">
          <div className="col-12 col-md-4">
            <img src={logo} alt="logo" className="logo mb-3" />
            <h5 className="footer-text">
              Find the best escape room <br /> experiences near you.
            </h5>
          </div>

          <div className="col-12 col-md-3 d-flex flex-column">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled m-0">
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

          <div className="col-12 col-md-2">
            <h5 className="text-white mb-3">Connect With Us</h5>
            <ul className="list-unstyled m-0">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Email
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Support
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Partnership
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3">
            <h5 className="text-white mb-3">Follow Us</h5>
            <ul className="list-unstyled m-0">
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-light text-decoration-none">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row footer-bottom">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <h5 className="m-0">© 2026 EscapeFinder. Built with Me.</h5>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
