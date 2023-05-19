import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Registration.css";
import { FaLock } from "react-icons/fa";

interface RegistrationProps {}

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  stateProvince: string;
  password: string;
  confirmPassword: string;
  mentalCondition: string;
  gender: string;
}

export const Registration: React.FC<RegistrationProps> = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    stateProvince: "",
    password: "",
    confirmPassword: "",
    mentalCondition: "",
    gender: "",
  });

  const [gender, setGender] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Here!");

    try {
      const response = await axios.post(
        "http://localhost:4000/user/register",
        formValues
      );
      if (response.status === 201) {
        const { userDetails } = response.data;
        console.log("User registered:", userDetails);
        navigate("/login");
      } else {
        console.log("Registration failed", response.data);
      }
    } catch (error) {
      console.log("Error occurred:", error);
    }

    // console.log("form submitted");
  };
  return (
    <>
      <head>
        ...
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
        />
        <script
          src="https://kit.fontawesome.com/ac459c9ddb.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        <div className="background">
          <div className="Frame1">
            <div className="Frame2">
              <div className="mind-connect">
                <div className="mind-connect-text">MindConnect</div>
                <div className="Frame6"></div>
              </div>
            </div>
            <div className="parentFrame3">
              <div className="Frame3">
                <form onSubmit={handleSubmit}>
                  <div className="parentForm">
                    <div className="Frame4">
                      <div className="Frame5">
                        <div>
                          <div className="registration">Registration</div>
                        </div>
                        <div className="Frame6"></div>
                      </div>
                      <div className="Frame7">
                        <div className="Frame8">
                          <div className="form-group1">
                            <label
                              className="form-group-box"
                              htmlFor="firstName"
                            >
                              Firstname
                            </label>

                            <input
                              type="text"
                              name="firstName"
                              placeholder="Enter FirstName"
                              value={formValues.firstName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group1">
                            <label
                              className="form-group-box"
                              htmlFor="lastName"
                            >
                              Lastname
                            </label>

                            <input
                              type="text"
                              name="lastName"
                              placeholder="Enter LastName"
                              value={formValues.lastName}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="Frame9">
                          <div className="form-group1">
                            <div className="form-label">
                              <label className="form-group-box" htmlFor="email">
                                Email
                              </label>
                            </div>
                            <input
                              type="email"
                              name="email"
                              placeholder="Enter email address"
                              value={formValues.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group1">
                            <label
                              className="form-group-box"
                              htmlFor="mentalCondition"
                            >
                              Mental Condition{" "}
                              <span id="option">(Optional)</span>
                            </label>
                            <select
                              name="mentalCondition"
                              value={formValues.mentalCondition}
                              onChange={handleChange}
                              title="select"
                            >
                              <option value="" className="placeholder-option">
                                Please select
                              </option>
                              <option value="Depression">Depression</option>
                              <option value="Anxiety">Anxiety</option>
                              <option value="Stress">Stress</option>
                            </select>
                          </div>
                        </div>
                        <div className="Frame10">
                          <div className="form-group1">
                            <div className="form-label">
                              <label
                                className="form-group-box"
                                htmlFor="country"
                              >
                                Country
                              </label>
                            </div>
                            <input
                              type="text"
                              name="country"
                              placeholder="Enter Country"
                              value={formValues.country}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div className="form-group1">
                            <div className="form-label">
                              <label
                                className="form-group-box"
                                htmlFor="stateProvince"
                              >
                                State/Province
                              </label>
                            </div>
                            <input
                              type="text"
                              name="stateProvince"
                              placeholder="Enter your State/Province of residence"
                              value={formValues.stateProvince}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="Frame11">
                          <div className="form-group1">
                            <div className="form-label">
                              <label
                                className="form-group-box"
                                htmlFor="password"
                              >
                                Password
                              </label>
                            </div>

                            <div className="password-input">
                              <FaLock className="lock-icon" />
                              <input
                                id="input-password"
                                type="password"
                                name="password"
                                required
                                placeholder="Enter password"
                                value={formValues.password}
                                onChange={handleChange}
                              />
                            </div>
                          </div>

                          <div className="form-group1">
                            <div className="form-label">
                              <label
                                className="form-group-box"
                                htmlFor="confrimPassword"
                              >
                                Confrim Password
                              </label>
                            </div>
                            <div className="password-input">
                              <FaLock className="lock-icon" />
                              <input
                                id="input-confirmPassword"
                                type="password"
                                name="confirmPassword"
                                required
                                placeholder="Enter password"
                                value={formValues.password}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="Frame12">
                          <div className="Frame13">
                            <label className="Frame14">Gender</label>
                          </div>
                          <div className="frame15">
                            <div className="form-check1">
                              <input
                                type="radio"
                                name="gender"
                                id="male"
                                value="male"
                                onChange={(e) => setGender(e.target.value)}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="male"
                              >
                                Male
                              </label>
                            </div>
                            <div className="form-check1">
                              <input
                                type="radio"
                                name="gender"
                                id="female"
                                value="female"
                                onChange={(e) => setGender(e.target.value)}
                              />

                              <label
                                className="form-check-label"
                                htmlFor="female"
                              >
                                Female
                              </label>
                            </div>
                            <div className="form-check1">
                              <input
                                type="radio"
                                name="gender"
                                id="other"
                                value="other"
                                onChange={(e) => setGender(e.target.value)}
                              />

                              <label
                                className="form-check-label"
                                htmlFor="other"
                              >
                                Other
                              </label>
                            </div>
                            <div className="form-check1">
                              <input
                                type="radio"
                                name="gender"
                                id="prefer-not-to-say"
                                value="prefer-not-to-say"
                                onChange={(e) => setGender(e.target.value)}
                              />

                              <label
                                className="form-check-label"
                                htmlFor="prefer-not-to-say"
                              >
                                Prefer not to say
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="frame16">
                      <div className="frame17">
                        <div>
                          <button type="submit" className="btn-btn-primary">
                            <span className="create-account-button">
                              Create account
                            </span>
                          </button>
                        </div>
                        <div className="form-group-text-center">
                          <p>
                            Already have an account?{" "}
                            <a href="/login" className="no-underline">
                              Sign in
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="form-group-text-center-bottom">
                        <p className="break-line">
                          By creating an account you agree to our{" "}
                          <a href="#" className="no-underline">
                            Privacy Policies
                          </a>{" "}
                          and{" "}
                          <a href="#" className="no-underline">
                            Terms
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};
