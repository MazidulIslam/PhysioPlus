import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { signInWithGoogle, logInWithEmailAndPassword } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const onSubmit = (data) => {
    logInWithEmailAndPassword(data).then((result) => {
      history.push(redirect_uri);
    });
    console.log(data);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      history.push(redirect_uri);
      console.log(redirect_uri);
    });
  };
  return (
    <>
      <div className="mx-auto w-25  shadow-lg rounded App">
        <form className="my-5 pt-5" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border border-success border-2 rounded shadow"
            placeholder="email"
            type="email"
            {...register("email")}
          />
          <br />
          <br />
          <input
            className="border border-success border-2 rounded shadow"
            placeholder="password"
            type="password"
            {...register("password")}
          />
          <br />
          <br />
          <input type="submit" className="btn btn-success" />
        </form>
        <div>-------------or-------------</div>
        <Button className="mb-2" variant="warning" onClick={handleGoogleSignIn}>
          Continue with Google
        </Button>
        <div>
          <p className="pb-5">
            New to Physio Plus? <Link to="/registration">Register now</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
