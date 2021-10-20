import React from "react";
import { Link } from "react-router-dom";

const Therapist = ({ therapist }) => {
  const { id, img, name, designation } = therapist;
  return (
    <div>
      <div className="col">
        <div className="card shadow-lg rounded">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <h5 className="card-title">{designation}</h5>
            <Link to={`/therapist/${id}`}>
              <button className="btn btn-warning">Therapist Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Therapist;
