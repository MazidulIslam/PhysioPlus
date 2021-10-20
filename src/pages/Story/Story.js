import React from "react";
import "./Story.css";

const Story = ({ story }) => {
  const { img, name, speech } = story;

  return (
    <div>
      <div class="col">
        <div class="card shadow-lg rounded">
          <img src={img} class="card-img-top rounded" alt="..." />
          <div class="card-body">
            <h3 class="card-title">{name}</h3>
            <p class="card-title">
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
