import React from "react";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
// import Image1 from "../../assets/images/bg2.png"
import "./login.css";

export const Login = () => {
  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    console.log(response);
  };
  return (
    <div className="wrapper">
      <div className="wrap">
      <div className="image">
        {/* <img src={Image1} alt="bg" /> */}
      </div>
      <div className="input">
        <div className="row-two">
          <h1 className="head1">Hi, Welcome Back</h1>
          <span className="span"></span>
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
            <div className="rowUp2">
              <div className="hr"></div>Or<div className="hr"></div>
            </div>
        
          <GoogleLogin
            className="google"
            clientId=""
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
            <p className="accountStyle">
              Don’t have an account? <a href="/signUp">Create account</a>
            </p>
            
          </form>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  );
};