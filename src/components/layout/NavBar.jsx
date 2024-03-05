import React, { useState, useEffect } from "react";
import "./navBar.css";
import SearchIcon from "@mui/icons-material/Search";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollPos > currentScrollPos || currentScrollPos < 10;

      setIsNavVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`arduino-nav ${isNavVisible ? "arduino-nav" : "nav-hidden"}`}
    >
      <div className="nav-top">
        <div className="nav-leftside">
          <Link to={"https://www.arduino.cc/pro/"}>
            <a className="web-links">professional</a>
          </Link>
          <Link to={"https://www.arduino.cc/education"}>
            <a className="web-links">education</a>
          </Link>
          <Link to={"https://store.arduino.cc/"}>
            <a className="web-links">store</a>
          </Link>
        </div>
        <div className="nav-rightside">
          <div id="search-box" className="search-box">
            <div className="input-icon">
              <SearchIcon />
            </div>
            <input
              className="search-input"
              type="text"
              placeholder="Search on Arduino.cc"
            />
          </div>
          <a className="application-list">
            <FilterDramaIcon />
          </a>
          <a className="sign-button">sign in</a>
        </div>
      </div>
      <nav className="navbar-bot">
        <div className="menu-container">
          <div className="logo-section">
            <a className="logo-link" href="/">
              <img src="./pictures/arduino-logo-white.png" alt="" />
            </a>
          </div>
          <div className="pages">
            <a className="page-wrapper" href="hardware">
              <Link to={"hardware"}>
                <span className="pages-link">hardware</span>
              </Link>
            </a>
            <a className="page-wrapper" href="software">
              <Link to={"software"}>
                <span className="pages-link">software</span>
              </Link>
            </a>
            <a className="page-wrapper">
              <Link to={"cloud"}>
                <span className="pages-link">cloud</span>
              </Link>
            </a>
            <a className="page-wrapper">
              <Link to={"documentation"}>
                <span className="pages-link">documentation</span>
              </Link>
            </a>
            <a className="page-wrapper">
              <Link>
                <div className="pages-link">
                  community{" "}
                  <div className="arrow">
                    <ArrowDropDownIcon />{" "}
                  </div>
                  <div className="drop-down">
                    <a>forum</a>
                    <a>discord</a>
                    <a>project hub</a>
                    <a>arduino day</a>
                    <a>user groups</a>
                  </div>
                </div>
              </Link>
            </a>
            <a className="page-wrapper">
              <Link to={"blog"}>
                <span className="pages-link">blog</span>
              </Link>
            </a>
            <a className="page-wrapper">
              <Link to={"about"}>
                <span className="pages-link">about</span>
              </Link>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
