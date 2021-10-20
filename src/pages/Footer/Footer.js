import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="App text-white container">
        <div className="row pt-5">
          <div className="col-md-4 col-sm-12">
            <h3>Physio Plus</h3>
            <p className="text-start px-4">
              Top class latest and evidence-based physiotherapy treatment from
              the comfort of your own home. Service provided by highly qualify
              and certified professional physiotherapist, who are Registered
              from BPA (Bangladesh Physio Therapy Association). and WCPT (World
              Confederation for Physical Therapy) in DhakLink city.
            </p>
          </div>
          <div className="col-md-4 col-sm-12">
            <h3>Our Services</h3>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/services"
                >
                  Service 4
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/services">
                  Service 3
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/services">
                  Service 2
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/services">
                  Service 1
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-sm-12">
            <h3>Quick Links</h3>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/services">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/therapists">
                  Therapist
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <nav className="row bg-dark text-white p-3 mt-5">
          <div className="col-md-6 col-sm-12">
            <span>&copy;</span> Copyright 2021 <strong>Physio Plus</strong>
          </div>
          <div className="col-md-6 col-sm-12">
            <p>
              Devoloped by <Link to="/home">Mazidul Islam</Link>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
