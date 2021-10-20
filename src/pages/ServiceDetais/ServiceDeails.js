import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./serviceDetails.css";

const ServiceDeails = () => {
  const { serviceId } = useParams();
  const [serviceDetails, setServiceDetails] = useState({});
  useEffect(() => {
    const url = `https://api.npoint.io/00d7644e0f143d43a867`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let details = data.find((servic) => servic.id === serviceId);
        console.log(details);
        setServiceDetails(details);
      });
  }, []);

  return (
    <div>
      <div class="row row-cols-1 row-cols-md-1 g-5 mx-5 mb-5 container mx-auto">
        <div class="col">
          <h1 class="card-title my-5 text-center text-info">Service</h1>
          <div class="card">
            <img src={serviceDetails?.img} class="card-img-top" alt="" />
            <div class="card-body">
              <h4 class="card-title text-success">{serviceDetails?.title}</h4>
              <h5 class="card-title text-info">{serviceDetails?.department}</h5>
              <p class="card-text">{serviceDetails?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDeails;
