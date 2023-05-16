import React, { useState } from "react";
import "./resetpassword.css";
import { IoKeyOutline } from "react-icons/io5";
import axios from "axios";

const ResetPassword = () => {
  const [isReset, setIsReset] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const searchParams = new URLSearchParams(document.location.search);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newPassword.length < 4) setError("minimum length for password is 4");
    else if (newPassword === confirmPassword) {
      setIsReset(true);
      // Code to reset password goes here
      try {
        axios.post(`/api/reset-password`, {
          password: newPassword,
          token: searchParams.get("token"),
        });
      } catch (e) {
        console.log(e);
        setError("an error occurred");
      }
    } else {
      setError("Passwords do not match!");
    }
  };

  const renderError = () => {
    setTimeout(() => {
      setError("");
    }, 5000);
    return <p style={{ color: "red" }}>{error}</p>;
  };

  return (
    <div className="reset-password-main">
      <div className="reset-container">
        {isReset ? (
          <p>Password has been reset successfully!</p>
        ) : (
          <form onSubmit={handleSubmit} className="reset-form">
            <div className="reset-main-form">
              <h2 className="reset-heading">Reset Password</h2>

              <label htmlFor="newpass">New Password</label>
              <div className="input-container">
                <IoKeyOutline className="icon" />
                <input
                  type="password"
                  placeholder="Enter your new password"
                  id="newpass"
                  name="newpass"
                  value={newPassword}
                  onChange={(event) => setNewPassword(event.target.value)}
                />
              </div>
              <label htmlFor="confirmpass">Confirm Password</label>
              <div className="input-container">
                <IoKeyOutline className="icon" />
                <input
                  type="password"
                  placeholder="Confirm password"
                  id="confirmpass"
                  name="confirmpass"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </div>
            </div>

            <button type="submit">Reset Password</button>
          </form>
        )}
       <div>{error && renderError()}</div>
      </div>
    </div>
  );
};

export default ResetPassword;
