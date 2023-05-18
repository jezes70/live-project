import React from "react";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
// import { Image } from "./assets/";
import "./login.css";

export const Login = () => {
  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
  };
  return (
    <div className="wrapper">
      <div className="image">
        <div className="image-div "></div>
      </div>
      <div className="input">
        <div className="row-two">
          <h1>Hi! Welcome Back</h1>
          <div className="inputDiv">
            <form action="">
              <div className="input-control">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="input-control">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Your Password"
                />
                <a className="forgotPassword" href="/forgotPassword">
                  Forgot password?
                </a>
                <div>
                  <button className="loginButton" type="submit">
                    Login
                  </button>
                </div>
              </div>
            </form>
            <div className="rowUp2">
              <div className="hr"></div>Or<div className="hr"></div>
            </div>
          </div>

          <GoogleLogin
            className="google"
            clientId=""
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <div className="rowUp">
            <p className="accountStyle">
              Don’t have an account? <a href="/signUp">Create account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
