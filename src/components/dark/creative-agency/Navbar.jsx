import React, { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    console.log("Toggling menu. Current state before toggle:", menuOpen);
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bord blur">
        <div className="container">
          <a className="logo icon-img-100" href="/">
            <img src="/logo.png" alt="logo" />
          </a>

          <div
            className={`collapse navbar-collapse justify-content-center hidden lg:flex ${
              menuOpen ? "show" : ""
            }`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav flex">
              <li className="nav-item">
                <Link className="nav-link" to="home" smooth={true} duration={500} onClick={toggleMenu}>
                  <span className="rolling-text">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="services" smooth={true} duration={500} onClick={toggleMenu}>
                  <span className="rolling-text">Services</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="creations" smooth={true} duration={500} onClick={toggleMenu}>
                  <span className="rolling-text">Our Creations</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="pricing" smooth={true} duration={500} onClick={toggleMenu}>
                  <span className="rolling-text">Pricing</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="clients" smooth={true} duration={500} onClick={toggleMenu}>
                  <span className="rolling-text">Clients</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact" smooth={true} duration={500} onClick={toggleMenu}>
                  <span className="rolling-text">Contact</span>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="/hiring"
                  onClick={() => {
                    setMenuOpen(false); // Close the menu
                  }}
                >
                  <span className="rolling-text">Hiring</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="topnav hidden lg:block">
            <div className="menu-icon cursor-pointer" onClick={toggleMenu}>
              <span className="icon ti-align-right"></span>
            </div>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="hamenu ">
          <div className="logo icon-img-100">
            <img src="/logo.png" alt="logo" />
          </div>
          <div className="close-menu cursor-pointer ti-close" onClick={toggleMenu}></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-2">
                <div className="menu-text">
                  <div className="text">
                    <h2>Menu</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="menu-links">
                  <ul className="main-menu rest">
                    {/* Other Links */}
                    <li>
                      <div className="o-hidden">
                        <div className="link cursor-pointer dmenu">
                          <a
                            href="/hiring"
                            className="fill-text"
                            onClick={() => setMenuOpen(false)}
                          >
                            Hiring
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="cont-info">
                  {/* Contact Info */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
