import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";

const Navbar = () => {
    //creating an instance of useNavigate hook
    let navigate = useNavigate();

    //using location hook to see which tab of the navbar is active
    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
      }, [location]);
  return (
    <>
      <ContentWrapper>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              theBuletin
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/india">
                    India
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/world">
                    World
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/politics">
                    Politics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Technology
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Education
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </ContentWrapper>
    </>
  );
};

export default Navbar;
