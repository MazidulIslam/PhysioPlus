import React from "react";

const Slider = () => {
  return (
    <div className="">
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
                  src="https://i.ibb.co/Y2h833Z/Shot-of-a-senior-woman-being-treated-by-a-physiotherapist.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1>Personalised Treatment</h1>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://i.ibb.co/vZHfFHy/Physiotherapy-Knee-Injury-Rehab-And-Massage-With-Face-Mask.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1>Trained Therapists</h1>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  src="https://i.ibb.co/FBVcqPQ/Close-up-of-female-osteopath-doing-shoulder-blade-therapy-on-young-woman.jpg"
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h1>Experienced Therapists</h1>
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
