import React from "react";
import "./style.css";
import logo from "../../assets/images/logo/logo.png";

export default function Footer() {
  return (
    <>
      <footer className="footer">
      <div className="container">
        <div className="row footer-row">
          <div className="col-12 col-lg-4">
            <div className="footer-brand">
              <img src={logo} alt="EscapeFinder logo" className="footer-logo" />
              <p className="footer-desc">
                Find the best escape room
                <br />
                experiences near you.
              </p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-list list-unstyled">
              <li><a href="#">About Us</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-4 col-lg-2">
            <h5 className="footer-title">Connect With Us</h5>
            <ul className="footer-list list-unstyled">
              <li><a href="#">Email</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Partnership</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-4 col-lg-3">
            <h5 className="footer-title">Follow Us</h5>
            <ul className="footer-list list-unstyled">
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2026 EscapeFinder. Built with Me.</p>
        </div>
      </div>
    </footer>
    </>
  );
}
