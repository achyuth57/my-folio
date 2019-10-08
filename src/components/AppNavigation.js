import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

//const baseurl = "http://localhost:3000/";
const baseUrl = process.env.PUBLIC_URL;

const AppNavigation = () => {
  useEffect(() => {
    window.burgerMenu();

    window.clickMenu();
  }, []);
  return (
    <React.Fragment>
      <button
        style={{ border: "none", background: "none" }}
        className="js-colorlib-nav-toggle colorlib-nav-toggle"
        data-toggle="collapse"
        data-target="#navbar"
        aria-expanded="false"
        aria-controls="navbar"
      >
        <i></i>
      </button>
      <aside id="colorlib-aside" className="border js-fullheight">
        <div className="text-center">
          <div
            className="author-img"
            style={{
              backgroundImage: `url(${baseUrl}/assets/images/pofilo1.jpg)`
            }}
          ></div>
          <h1 id="colorlib-logo">
            <a href="index.html">Achyuth Vaddi</a>
          </h1>
          <span className="position">
            <span style={{ fontWeight: "bold" }}>UI/UX/Developer</span> in
            Hyderabad
          </span>
        </div>

        <nav id="colorlib-main-menu" role="navigation" className="navbar">
          <ul>
            <li>
              <NavLink activeClassName="active" exact to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/skills">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/education">
                Education
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/experience">
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/work">
                Work
              </NavLink>
            </li>
            {/* <li>
                <a href="#" data-nav-section="blog">
                  Blog
                </a>
              </li> */}
            <li>
              <NavLink activeClassName="active" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="colorlib-footer">
          <p>
            <small>
              &copy; Copyright All rights reserved | MyFolio
              <i className="icon-heart" aria-hidden="true"></i> by &nbsp;
              <a href="" target="_blank">
                Achyuth
              </a>
              <span>
                Recent Works &nbsp;
                <a href="" target="_blank">
                  github.com
                </a>
              </span>
            </small>
          </p>
          <ul>
            <li>
              <a href="#">
                <i className="icon-facebook2"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-twitter2"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="icon-linkedin2"></i>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </React.Fragment>
  );
};

export default AppNavigation;
