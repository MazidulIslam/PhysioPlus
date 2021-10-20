import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const TherapistDetails = () => {
  const { therapistId } = useParams();
  const [therapistDetails, setTherapistDetails] = useState({});
  useEffect(() => {
    const url = `https://api.npoint.io/c65607289d147f2f9974`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const theraistDetail = data.find(
          (tDetails) => tDetails.id === therapistId
        );
        console.log(theraistDetail);
        setTherapistDetails(theraistDetail);
      });
  }, []);

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-1 g-5 mx-5 mb-5 container mx-auto">
        <div className="col">
          <h1 className="card-title my-5 text-center text-info">Therapist</h1>
          <div className="card">
            <img src={therapistDetails?.img} className="card-img-top" alt="" />
            <div className="card-body">
              <h4 className="card-title text-success">
                {therapistDetails?.name}
              </h4>
              <h5 className="card-title text-info">
                {therapistDetails?.designation}
              </h5>
              <p>
                Hello! My name is <strong> {therapistDetails?.name} </strong>and
                I am a Licensed <strong>{therapistDetails?.designation}</strong>{" "}
                with over five years of experience providing therapy services. I
                have worked in a wide range of therapeutic settings including:
                inpatient psychiatric hospitalization, partial and intensive
                outpatient care, and managing a private practice in the Austin
                community. I work with clients affected by depression, anxiety,
                substance use, trauma and relationship challenges from
                individual, group and family work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TherapistDetails;
