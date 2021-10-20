import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Footer from "../Footer/Footer";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInWithGoogle, signUpWithEmailPassword } = useAuth();
  const onSubmit = (data) => {
    signUpWithEmailPassword(data);
  };
  return (
    <div>
      <div className="col-md-12 col-sm-12 mx-auto w-25  shadow-lg rounded App">
        <form className="my-5 pt-4" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border border-success border-2 rounded shadow"
            placeholder="name"
            {...register("displayName")}
          />
          <br />
          <br />
          <input
            className="border border-success border-2 rounded shadow"
            placeholder="email"
            type="email"
            {...register("email", { required: true })}
          />
          <br />
          {errors.email && (
            <span className="text-danger">This field is required</span>
          )}
          <br />
          <br />
          <input
            className="border border-success border-2 rounded shadow"
            placeholder="enter password"
            type="password"
            {...register("password", { required: true })}
          />
          <br />
          {errors.password && (
            <span className="text-danger">This field is required</span>
          )}
          <br />
          <br />
          <input type="submit" className="mt-3 btn btn-success" />
        </form>
        <div>-------------or-------------</div>
        <Button className="mb-2" variant="warning" onClick={signInWithGoogle}>
          Continue with Google
        </Button>
        <div>
          <p className="pb-5">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
