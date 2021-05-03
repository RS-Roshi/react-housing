import React from "react";
import { Link } from "react-router-dom";

function AppHeader() {
  return (
    <>
      <header className="top-header">
        <div className="container-fluid">
          <div className="container-max">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-2">
                <ul className="top-header-left">
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-9 col-md-10">
                <ul className="top-header-right">
                  <li>
                    <i className="flaticon-location"></i>
                    Islamabad, Pakistan 44000
                  </li>
                  <li>
                    <i className="flaticon-email"></i>
                    <a href="#">
                      <span className="__cf_email__">info@nishaan.com</span>
                    </a>
                  </li>
                  <li>
                    <i className="flaticon-phone"></i>
                    <a href="tel:+">+92 311 551 0145</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="navbar-area">
        <div className="mobile-nav">
          <Link href="/" className="logo">
            <img
              src="{{asset('assets/img/nishaan_housing_logo.png')}}"
              width="100"
              alt="Logo"
            />
          </Link>
        </div>

        <div className="top-nav main-nav">
          <div className="container-fluid">
            <nav className="container-max navbar navbar-expand-md navbar-light ">
              <a className="navbar-brand" href="/">
                <img
                  src="assets/img/nishaan_housing_logo.png"
                  width="100"
                  alt="Logo"
                />
              </a>
              <div
                className="collapse navbar-collapse mean-menu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link active">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/project" className="nav-link">
                      Projects
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/builder" className="nav-link">
                      Builders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/team" className="nav-link">
                      Team
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                      Contact
                    </Link>
                  </li>
                </ul>
                <div className="appointment-btn">
                  <a href="#" className="default-btn default-sante-fe">
                    Schedule appointment
                    <i className="bx bx-right-arrow-alt"></i>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppHeader;
