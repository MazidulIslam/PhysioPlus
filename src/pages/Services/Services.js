import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const url = `https://api.npoint.io/00d7644e0f143d43a867`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      {/* Our Services  */}
      <div className="services text-center">
        <h2 className="pt-5">Our Services</h2>
        <div className="mx-auto border border-success w-75 m-5"></div>
        <div>
          <div class="row row-cols-1 row-cols-md-3 g-4 mb-5 container mx-auto">
            {services.map((service) => (
              <Service key={service.id} service={service}></Service>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
