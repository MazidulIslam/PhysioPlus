import React from "react";

const Contact = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center text-info my-5">Get in touch</h1>
      <div className="row">
        <div className="col-md-6 col-sm-12 m3">
          <h3>Physio Plus</h3>
          <p>
            <strong>Address :</strong>
            {"  995 Villa Street, Mountain View, CA 94041"}
          </p>
          <p>
            <strong>Phone :</strong>
            {"  +10330 678 0850"}
          </p>
          <p>
            <strong>Email :</strong>
            {"  contact@physioplus.com"}
          </p>
        </div>
        <div className="col-md-6 col-sm-12 m3">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Name
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Phone
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your phone number with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                placeholder="Leave a message here"
                id="floatingTextarea"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
