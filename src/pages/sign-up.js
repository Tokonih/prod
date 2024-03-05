import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { BASEURL } from "../common/config";
import right_pic1 from "../assets/images/images/home-11/banner-bg/right-pic1.jpg";
import Admin_Nav from "../components/admin-nav";
import "../styles/verify-admin.css";

export default function SignUp() {
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmP, setConfirmP] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState({ error: false, msg: "" });
  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const signUP = (e) => {
    e.preventDefault();

    let ref = "ref-c- " + Math.floor(Math.random() * 1000 + 1);

    setLoading(true);
    const userData = {
      email: email,
      password,
      phone: phone,
      refCode: ref,
      referral: [],
      wallet: [],
      balance: 0,
    };

    console.log(userData);

    let users = JSON.parse(localStorage.getItem("myzoba")) || [];

    users.push(userData);

    localStorage.setItem("myzoba", JSON.stringify(users));

    navigate("/");
    setLoading(false);
  };

  const switchRole = (e) => {
    setRole(e);
  };
  const handleChange = (e) => {
    const { value, name } = e.target;

    if (name == "email") {
      setEmail(value);
    } else if (name == "phone") {
      setPhone(value);
    } else if (name == "Password") {
      setPassword(value);
    } else if (name == "confirm password") {
      setConfirmP(value);
    }

    if (name == "email" && email === "") {
      setErr({ msg: "email", error: true });
      return;
    } else if (name == "phone" && phone === "") {
      setErr({ msg: "phone", error: true });
      return;
    } else if (name == "Password" && password === "") {
      setErr({ msg: "password", error: true });
      return;
    } else if (name == "confirm password" && confirmP !== password) {
      setErr({ msg: "confirm-p", error: true });
      return;
    } else {
      setErr({ msg: "", error: false });
    }
  };

  return (
    <div className="" style={{}}>
      <div className="verify-admin-modal" id="myTab2Content">
        {/* <!--sign_UP Employer Content--> / */}
        <form action="" onSubmit={signUP} className="border p-3" style={{}}>
          <h2 className="modal-title text-center mb-5">Sign up</h2>
          <div className="tab-pane show fade" id="sign_UP-Employer">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <input
                    onChange={handleChange}
                    value={email}
                    name="email"
                    type="email"
                    // required=""
                    className="form-control"
                    placeholder="email*"
                  />
                </div>
                <div>
                  {err.error === true && err.msg === "email" ? (
                    <span style={{ background: "crimson" }}>Enter email</span>
                  ) : (
                    email === null
                  )}
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <input
                    onChange={handleChange}
                    value={phone}
                    name="phone"
                    type="Phone*"
                    // required=""
                    className="form-control"
                    placeholder="phone*"
                  />
                </div>
                <div>
                  {err.error === true && err.msg === "phone" ? (
                    <span style={{ background: "crimson" }}>Enter phone</span>
                  ) : (
                    phone === null
                  )}
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <input
                    onChange={handleChange}
                    value={password}
                    name="Password"
                    type="password"
                    className="form-control"
                    // required=""
                    placeholder="Password*"
                  />
                </div>
                <div>
                  {err.error === true && err.msg === "password" ? (
                    <span style={{ background: "crimson" }}>
                      Enter Password
                    </span>
                  ) : (
                    password === null
                  )}
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <input
                    onChange={handleChange}
                    value={confirmP}
                    name="confirm password"
                    type="password"
                    className="form-control"
                    // required=""
                    placeholder="Confirm Password*"
                  />
                </div>
                <div>
                  {err.error === true && err.msg === "confirm-p" ? (
                    <span style={{ background: "crimson" }}>
                      confirm password
                    </span>
                  ) : (
                    confirmP === null
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
                <button className="site-button">
                  {loading ? "Processing..." : " Sign Up"}
                </button>
                <div className="mt-3 mb-3">
                  Don't have an account ?
                  {/* <button
                                className="twm-backto-sign_UP"
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
