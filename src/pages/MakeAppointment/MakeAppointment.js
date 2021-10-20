import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MakeAppointment = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="container m-5 mx-auto">
      <div className="col-md-12 col-sm-12 m3">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Phone
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your phone number with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Problem
            </label>
            <textarea
              className="form-control"
              placeholder="Leave a short description of your problem"
              id="floatingTextarea"
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Problem
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MakeAppointment;
