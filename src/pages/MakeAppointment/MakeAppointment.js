import React from "react";

const MakeAppointment = () => {
  return (
    <div className="container m-5 mx-auto">
      <div className="col-md-12 col-sm-12 m3">
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
              Problem
            </label>
            <textarea
              class="form-control"
              placeholder="Leave a short description of your problem"
              id="floatingTextarea"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeAppointment;
