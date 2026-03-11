import React from "react";
import "./style.css";
import logo from "../../assets/images/logo/logo.png";

export default function Footer() {
  return (
    <>
      <div className="container-fluid footer">
      <div className="container">

        <div className="row gy-4 gx-lg-5 footer-top">

          {/* Logo Section */}
          <div className="col-12 col-md-4">
            <img src={logo} alt="logo" className="logo mb-3" />

            <h5 className="footer-text">
              Find the best escape room <br />
              experiences near you.
            </h5>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-2">
            <h5 className="footer-title">Quick Links</h5>

            <ul className="list-unstyled m-0">
              <li className="mb-2">
                <a href="#" className="footer-link">About Us</a>
              </li>

              <li className="mb-2">
                <a href="#" className="footer-link">How It Works</a>
              </li>

              <li className="mb-2">
                <a href="#" className="footer-link">Contact</a>
              </li>

              <li className="mb-2">
                <a href="#" className="footer-link">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div className="col-12 col-md-3">
            <h5 className="footer-title">Connect With Us</h5>

            <ul className="list-unstyled m-0">
              <li className="mb-2">
                <a href="#" className="footer-link">Email</a>
              </li>

              <li className="mb-2">
                <a href="#" className="footer-link">Support</a>
              </li>

              <li className="mb-2">
                <a href="#" className="footer-link">Partnership</a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-12 col-md-3">
            <h5 className="footer-title">Follow Us</h5>

            <ul className="list-unstyled m-0">
              <li className="mb-2">
                <a href="#" className="footer-link">Instagram</a>
              </li>

              <li className="mb-2">
                <a href="#" className="footer-link">Twitter</a>
              </li>

              <li className="mb-2">
                <a href="#" className="footer-link">Facebook</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="row footer-bottom">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <p className="footer-copy m-0">
              © 2026 EscapeFinder. Built with Me.
            </p>
          </div>
        </div>

      </div>
    </div>
    </>
  );
}
