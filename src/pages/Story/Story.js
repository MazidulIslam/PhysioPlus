import React from "react";
import "./Story.css";

const Story = ({ story }) => {
  const { img, name, speech } = story;

  return (
    <div>
      <div className="col">
        <div className="card shadow-lg rounded">
          <img src={img} className="card-img-top rounded" alt="..." />
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <p className="card-title">
              <span className="fs-1">❝</span>
              {speech}
              <br />
              <span className="fs-1 mt-5">❞</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Story;
