import React, { useEffect, useState } from "react";
import Therapist from "../Therapist/Therapist";

const Therapists = () => {
  const [therapists, setTherapists] = useState([]);
  useEffect(() => {
    const url = `https://api.npoint.io/c65607289d147f2f9974`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTherapists(data));
  }, []);
  return (
    <div>
      {/* Our Therapists  */}
      <div className="therapists text-center">
        <h2 className="pt-5">Our Therapists</h2>
        <div className="mx-auto border border-success w-75 m-5"></div>
        <div>
          <div class="row row-cols-1 row-cols-md-2 g-4 mb-5 container mx-auto">
            {therapists.map((therapist) => (
              <Therapist key={therapist.id} therapist={therapist}></Therapist>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Therapists;
