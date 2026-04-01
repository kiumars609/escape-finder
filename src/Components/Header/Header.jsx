import React from "react";
import "./style.css";
import logo from "../../assets/images/logo/logo.png";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header className="col-12">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="logo col-3 col-md-3 d-flex justify-content-center">
              <img src={logo} className="img-fluid w-50" alt="logo" />
            </div>

            {/* Navbar */}
            <div className="col-9 col-md-9 ">
              <nav className="navbar navbar-expand-lg bg-transparent navbar-dark">
                <div className="container-fluid">
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item mx-3">
                        <Link to={"/"} className="nav-link fs-5 active">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item mx-3">
                        <a className="nav-link fs-5" href="#">
                          Explore
                        </a>
                      </li>
                      <li className="nav-item mx-3">
                        <a className="nav-link fs-5" href="#">
                          Favorites
                        </a>
                      </li>
                    </ul>

                    <form className="d-flex me-5" role="search">
                      <button className="btn btn-primary text-white col-12 px-5 rounded-3">
                        Find Rooms
                      </button>
                    </form>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
