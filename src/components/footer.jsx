import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/homes/Someekoron_Logo.png";

const Footer = () => (
  <div className="" >
    <div className="footer-section">
    <div className="container">
      <div className="text-center py-5">
        <h1 className="fw-bold mb-4">Get Started with Someekoron</h1>
        <p className="fs-16 m-0">
        Take your project management to the next level with Someekoron. 
        Get in touch with us today for a personalized demo <br /> or to discuss 
        how we can tailor our software to your needs.{" "}
        </p>
        
        <span className="text-center">
                  <Link
                    class="button-2 mt-4"
                    type="button"
                    to="/registration"
                  >
                    Get it free
                  </Link>
                </span>
      </div>
    </div>

    <footer className="pt-4 mt-5">

      
      <div className="container px-5">
        <div className="row border-top border-bottom border-light py-3">
            <div className="col-lg-3">
                <img src={logo} className="logo-footer"/>
                <p className="m-0 mt-3">
              <i className="fab fa-facebook pe-3 fs-5"></i>
              <i className="fab fa-instagram pe-3 fs-5"></i>
              <i className="fab fa-linkedin pe-3 fs-5"></i>
            </p>
            </div>

            <div className="col-lg-3 mt-2">
                <p className="fs-18 fw-600">Solutions</p>
                <Link className="text-decoration-none" ><p className="fs-14 mb-1 fw-500">Quotation Make</p></Link>
                <Link className="text-decoration-none"><p className="fs-14 mb-1 fw-500">Project Budget</p></Link>
                <Link className="text-decoration-none"><p className="fs-14 mb-1 fw-500">Project Task</p></Link>
                <Link className="text-decoration-none"><p className="fs-14 mb-1 fw-500">Team Collaboration</p></Link>
                <Link className="text-decoration-none"><p className="fs-14 mb-1 fw-500">Documents Hub</p></Link>
                <Link className="text-decoration-none"><p className="fs-14 mb-1 fw-500">Supplier Management</p></Link>
                
                
            </div>

            <div className="col-lg-3 mt-2">
                <p className="fs-18 fw-600">Resources</p>
                <Link className="text-decoration-none"><p className="fs-14 mb-1 fw-500">User Guide</p></Link>
                <Link className="text-decoration-none"><p className="fs-14 mb-1 fw-500">Blogs</p></Link>
                <Link className="text-decoration-none"><p className="fs-14 mb-1 fw-500">Purchasing & licensing</p></Link>
                <Link className="text-decoration-none"><p className="fs-14 mb-1 fw-500">Technical Support</p></Link>

                
                
            </div>
            <div className="col-lg-3 mt-2">
                <p className="fs-18 fw-600">About Us</p>
                <Link className="text-decoration-none"><p className="fs-14 mb-1 fw-500">Contact</p></Link>
                <Link className="text-decoration-none"><p className="fs-14 mb-1 fw-500">Team</p></Link>
                

                
                
            </div>
        </div>
      </div>

      <div className="footer-copyright fs-14 text-center py-3">
        Copyright © 2023 Someekoron. {" "}
        <Link className="text-secondary ol" target="blank" to="https://mpairtech.com/">
            Product of mPair Technologies Ltd. 
        </Link>
      </div>
    </footer>
    </div>
  </div>
);
export default Footer;
