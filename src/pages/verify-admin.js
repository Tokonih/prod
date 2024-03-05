import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { BASEURL } from "../common/config";
import right_pic1 from "../assets/images/images/home-11/banner-bg/right-pic1.jpg";
import Admin_Nav from "../components/admin-nav";
import "../styles/verify-admin.css";

export default function VerifyAdmin() {
  const [role, setRole] = useState("");
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const login = (e) => {
    e.preventDefault();

    if (email === "" || Password === "") {
      setErr(true);
      return;
    }

    setLoading(true);

    let allUsers = JSON.parse(localStorage.getItem("myzoba"));
    console.log(allUsers);
    let foundUser = allUsers.find(
      (user) => user.email == email && user.password == Password
    );

    if (!foundUser) {
      return alert("user not registered");
    }
    localStorage.setItem("myzoda-user", JSON.stringify(foundUser));
    navigate("/dashboard");
  };



  return (
    <div className="" style={{}}>
      <div className="verify-admin-modal" id="myTab2Content">
        {/* <!--Login Employer Content--> / */}
        <form action="" onSubmit={login} className="border p-3" style={{}}>
          <h2 className="modal-title text-center mb-5">Login</h2>
          <div className="tab-pane show fade" id="login-Employer">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name="username"
                    type="email"
                    // required=""
                    className="form-control"
                    placeholder="email*"
                  />
                </div>
                <div>
                  {err === true && email === "" ? (
                    <span>Enter email</span>
                  ) : (
                    email === null
                  )}
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={Password}
                    name="email"
                    type="password"
                    className="form-control"
                    // required=""
                    placeholder="Password*"
                  />
                </div>
                <div>
                  {err === true && Password === "" ? (
                    <span>Enter MISTAKE</span>
                  ) : (
                    Password === null
                  )}
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <div className=" form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="Password4"
                    />
                    <label
                      className="form-check-label rem-forgot"
                      for="Password4"
                    >
                      Remember me <a href="javascript:;">Forgot Password</a>
                    </label>
                  </div>
                </div>
              </div>

              <div className="col-md-12">
                <button className="site-button">Log in</button>
                <div className="mt-3 mb-3">
                  Don't have an account ? <Link to="/sign-up">Sign up</Link>
                  {/* <button
                                className="twm-backto-login"
                                data-bs-target="#sign_up_popup"
                                data-bs-toggle="modal"
                                data-bs-dismiss="modal"
                              >
                                Sign Up
                              </button> */}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
