import React from "react";
import "./slider.css";

const Slider = () => {
  return (
    <div className="slider-height">
      {/* slider section  */}
      <div className="row">
        <div className="col-md-6 col-sm-12 d-flex flex-col align-items-center">
          <h2 className="text-success mx-auto w-75">
            Exercise is a basic biological need of every man. Take care of your
            body. It's the only place you have to live.
          </h2>
        </div>
        <div className="col-md-6 col-sm-12">
          <div
            id="carouselExampleCaptions"
            className="carousel slide "
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://i.ibb.co/BsVwV57/consult-Mesa-de-trabajo-1.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="text-success fs-1 ">Personalised Treatment</h1>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://i.ibb.co/C1mwwgX/Podiatrist-examining-ankle-and-foot-of-female-patient-Woman-on-crutches-with-plaster-on-leg-consulti.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="text-success fs-1">Trained Therapists</h1>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://i.ibb.co/hXsXcst/Woman-with-injured-broken-leg-in-plaster-cast-sitting-in-doctor-office-taking-X-ray-and-crutch-Vecto.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1 className="text-success fs-1">Experienced Therapists</h1>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
