import React from "react";
import { Link } from "react-router-dom";
import "./service.css";

const Service = ({ service }) => {
  const { id, img, title, department } = service;
  return (
    <div>
      <div className="col">
        <div className="card shadow-lg rounded">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <h5 className="card-title">{department}</h5>
            <Link to={`/service/${id}`}>
              <button className="btn btn-warning">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
