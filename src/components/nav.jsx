import React from "react";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/images/homes/Someekoron_Logo.png";
import book from "../assets/images/homes/book.png";
import blog from "../assets/images/homes/pages.png";
import devContact from "../assets/images/homes/chat-bubble.png";

const Nav = () => {

  useEffect(() => {
    const handleScroll = () => {
      const navBar = document.getElementById("navBar");
      if (window.scrollY > 22) {
        navBar.classList.add("scrolled");
      } else {
        navBar.classList.remove("scrolled");
      }
    };
    import('react').then(() => {
      window.addEventListener('scroll', handleScroll);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav class="navbar container bg-white navbar-expand-md py-3 navFontstl sticky-top" id="navBar">
        <div class="container-fluid p-0">
          <Link class="navbar-brand d-flex align-items-center" to="/">           
              <img src={logo} class="logo pe-2" alt="ProjectBook Logo" />
              
          </Link>
          <button
            class="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse text-center" id="navbarNav">
            <ul class="navbar-nav me-auto mx-5 mb-lg-0 nav1 fs-16 fw-500">
              <li class="nav-item me-4">
                <Link class="nav-link active navfontm" to="/Solutions">
                  Solutions
                </Link>
              </li>
              <li class="nav-item me-4 nav1">
                <Link class="nav-link active navfontm" to="/Pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item me-4 nav1">
              <div className="dropdown">
                  <Link
                    className="nav-link active navfontm"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Resources
                    <i className="fa-solid fa-chevron-down ms-2 fs-14"></i>
                  </Link>
                  <div className="dropdown-menu resource-sub-menu rounded-4 bg-white" id="services">
                    <div className="container px-2">
                      <div className="justify-content-center p-1">
                        <Link className="txdNone sub-nav" to="/cloud">
                          <div className="prodHeight p-2 d-flex mb-2">
                            <div className="me-2 nav-icon-box">
                            <img
                              src={book}
                              height={30}
                              alt=""
                            />
                            </div>
                            <div>
                            <p className="fs-6 m-0">User Guide</p>
                            <p className="fs-11 text-secondary m-0">Have a look on how someekoron process your project accounts.</p>
                          
                            </div>
                            </div>
                        </Link>
                        <Link className="txdNone sub-nav" to="/cloud">
                          <div className="prodHeight p-2 d-flex mb-2">
                            <div className="me-2 nav-icon-box">
                            <img
                              src={blog}
                              height={30}
                              alt=""
                            />
                            </div>
                           
                            <div>
                            <p className="fs-6 m-0">Blog Article</p>
                            <p className="fs-11 text-secondary m-0">Have a look on how someekoron process your project accounts.</p>
                          
                            </div>
                          </div>
                        </Link>
                        <Link className="txdNone sub-nav" to="/cloud">
                          <div className="prodHeight p-2 d-flex">
                            <div className="me-2 nav-icon-box">
                            <img
                              src={devContact}
                              height={30}
                              alt=""
                            />
                            </div>
                            
                            <div>
                            <p className="fs-6 m-0">Developer Contact</p>
                            <p className="fs-11 text-secondary m-0">Have a look on how someekoron process your project accounts.</p>
                          
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              
             
            </ul>
            <ul class="navbar-nav d-flex">
              <li class="nav-item me-4 ">
                <Link
                  class="button-1"
                  type="button"
                  to="/contact"
                >
                  Create Account
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="button-sign"
                  type="button"
                  to="/contact"
                >
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
