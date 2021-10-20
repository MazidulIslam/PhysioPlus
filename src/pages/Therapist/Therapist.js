import React from "react";
import { Link } from "react-router-dom";

const Therapist = ({ therapist }) => {
  const { id, img, name, designation } = therapist;
  return (
    <div>
      <div class="col">
        <div class="card shadow-lg rounded">
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 class="card-title">{name}</h3>
            <h5 class="card-title">{designation}</h5>
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
