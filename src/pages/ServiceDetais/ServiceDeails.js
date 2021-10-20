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
      <div className="row row-cols-1 row-cols-md-1 g-5 mx-5 mb-5 container mx-auto">
        <div className="col">
          <h1 className="card-title my-5 text-center text-info">Service</h1>
          <div className="card">
            <img src={serviceDetails?.img} className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title text-success">
                {serviceDetails?.title}
              </h4>
              <h5 className="card-title text-info">
                {serviceDetails?.department}
              </h5>
              <p className="card-text">{serviceDetails?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDeails;
