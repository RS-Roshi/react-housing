import React from "react";

function AppFooter() {
  return (
    <footer className="footer-area footer-bg">
      <div className="footer-top pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="mb-3 ml-3">
                <a href="/" className="logo">
                  <img
                    src="assets/img/nishaan_housing_logo.png"
                    alt="Nishaan"
                    style={{ maxWidth: "40%" }}
                  />
                </a>
              </div>
              <div>
                <img
                  src="assets/img/nishaan_marketing_logo.png"
                  alt="Nishaan"
                  className="mr-4"
                  style={{ maxWidth: "20%" }}
                />
                <img
                  src="assets/img/nishaan_mustafa_logo.png"
                  alt="Nishaan"
                  style={{ maxWidth: "25%" }}
                />
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="single-footer-widget single-footer-color">
                <h3>SERVICES</h3>
                <ul className="footer-list">
                  <li>
                    <a href="services.html" target="_blank">
                      <i className="bx bx-plus"></i>
                      Property on Sale
                    </a>
                  </li>
                  <li>
                    <a href="about.html" target="_blank">
                      <i className="bx bx-plus"></i>
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="team.html" target="_blank">
                      <i className="bx bx-plus"></i>
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a href="terms-condition.html" target="_blank">
                      <i className="bx bx-plus"></i>
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a href="privacy-policy.html" target="_blank">
                      <i className="bx bx-plus"></i>
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget single-footer-color pl-3">
                <h3>CONTACT INFO</h3>
                <ul className="footer-contact-list">
                  <li>
                    <span>Monday - Friday :</span> 9 am to 6 pm
                  </li>
                  <li>
                    <span>Saturday - Sunday :</span> 9 am to 2 pm
                  </li>
                  <li>
                    <span>Phone :</span>{" "}
                    <a href="tel:2151234567"> 215 - 123 - 4567</a>
                  </li>
                  <li>
                    <span>Email :</span>{" "}
                    <a href="#">
                      <span className="__cf_email__">info@nishaan.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-footer-widget single-footer-color pl-5">
                <h3>GALLERY</h3>
                <ul className="footer-gallery">
                  <li>
                    <a href="#">
                      <img src="assets/img/gallery/g-1.jpg" alt="image" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/gallery/g-2.jpg" alt="image" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/gallery/g-3.jpg" alt="image" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/gallery/g-4.jpg" alt="image" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/gallery/g-5.jpg" alt="image" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="assets/img/gallery/g-6.jpg" alt="image" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-text">
            <p>
              Copyright ® 2021 Nishaan Housing (PVT) LTD - Designed by &nbsp;
              <a href="https://instagram.com/rsroshi" target="_blank">
                RS Roshi
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
