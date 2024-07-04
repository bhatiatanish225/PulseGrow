import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            className={`collapse navbar-collapse justify-content-center hidden lg:flex ${menuOpen ? 'show' : ''}`}
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
                <Link className="nav-link" to="clients" smooth={true} duration={500} onClick={toggleMenu}>
                  <span className="rolling-text">Clients</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact" smooth={true} duration={500} onClick={toggleMenu}>
                  <span className="rolling-text">Contact</span>
                </Link>
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
          <div className=" close-menu cursor-pointer ti-close" onClick={toggleMenu}></div>
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
                    <li>
                      <div className="o-hidden">
                        <div className="link cursor-pointer dmenu">
                          <Link className="fill-text" to="home" smooth={true} duration={500} onClick={toggleMenu}>
                            Home
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="o-hidden">
                        <div className="link cursor-pointer dmenu">
                          <Link className="fill-text" to="services" smooth={true} duration={500} onClick={toggleMenu}>
                            Services
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="o-hidden">
                        <div className="link cursor-pointer dmenu">
                          <Link className="fill-text" to="creations" smooth={true} duration={500} onClick={toggleMenu}>
                            Our Creations
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="o-hidden">
                        <div className="link cursor-pointer dmenu">
                          <Link className="fill-text" to="clients" smooth={true} duration={500} onClick={toggleMenu}>
                            Clients
                          </Link>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="o-hidden">
                        <div className="link cursor-pointer dmenu">
                          <Link className="fill-text" to="contact" smooth={true} duration={500} onClick={toggleMenu}>
                            Contact
                          </Link>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="cont-info">
                  <div className="item mb-50">
                    <h6 className="sub-title mb-15 opacity-7">Address</h6>
                    <h5>
                      TIET
                      <br /> Patiala, Punjab
                    </h5>
                  </div>
                  <div className="item mb-50">
                    <h6 className="sub-title mb-15 opacity-7">Social Media</h6>
                    <ul className="rest social-text">
                      <li>
                        <a href="https://www.instagram.com/pulse_grow/" className="hover-this">
                          <span className="hover-anim">Instagram</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="item mb-40">
                    <h6 className="sub-title mb-15 opacity-7">Contact Us</h6>
                    <h5>
                      <a href="mailto:rgahlot_be22@thapar.edu">rgahlot_be22@thapar.edu</a>
                      <a href="mailto:tbhatia0225@gmail.com">tbhatia0225@gmail.com</a>
                    </h5>
                    <h5 className="underline mt-10">
                      <a href="tel:+9112239954">+91 8112239954</a>
                      <a href="tel:+9306515524">+91 9306515524</a>
                    </h5>
                  </div>
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
