import React from "react";
import { Link } from "react-router-dom";
import "./service.css";

const Service = ({ service }) => {
  const { id, img, title, department } = service;
  return (
    <div>
      <div class="col">
        <div class="card shadow-lg rounded">
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 class="card-title">{title}</h3>
            <h5 class="card-title">{department}</h5>
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
