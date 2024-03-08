import axios from "axios";
import { useEffect, useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import "../styles/verify-admin.css";

export default function SignUp() {
  const [phone, setPhone] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [referral, setRefferal] = useState()
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const signUP = (e) => {
    e.preventDefault();

    if (phone === "" || email === "" || password === "" || confirmPassword === "") {
      setErr(true);
      return;
    }

    if(password != confirmPassword){
        alert("password & confirm password are not the same")
        return 
    }
    
    let ref = Math.floor(Math.random() * 1000 + 1);

    setLoading(true);
    const userData = {
      email: email,
      password: password,
      phone: phone,
      myRefCode: ref,
      referral: referral,
      wallet: [],
      balance: 0,
    };
    let allUsers = JSON.parse(localStorage.getItem("myzoba")) || [];
    

    if (!Array.isArray(allUsers)) {
        allUsers = [];
    }
    
    allUsers.push(userData);

    localStorage.setItem("myzoba", JSON.stringify(allUsers));

    let getAllUsers = JSON.parse(localStorage.getItem("myzoba")) || [];
    let getReferral =  getAllUsers.find((ref, index)=> ref.referral === referral)

    let userIndex=null

    getAllUsers.forEach((ref,index) => {
  
      if(ref.myRefCode === parseInt(referral)){
        console.log(ref.myRefCode);
        userIndex = index;
      }
    });

    console.log("INDEX>>>"+userIndex)
    
   

   
    if (!userIndex) {
      console.log("Referral does not exist");
  } else {
      // Update the balance of the user with the referral
      getAllUsers[userIndex]["balance"]= getAllUsers[userIndex]["balance"] + 10;
  
      // Save the updated users array back to local 
      localStorage.setItem("myzoba", JSON.stringify(getAllUsers));
  
      console.log("Referral found and balance updated successfully");
  }

    navigate("/");
    
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
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name="email"
                    type="email"
             
                    className="form-control"
                    placeholder="email*"
                  />
                </div>
                <div>
                  {err === true && email === "" ? (
                    <span style={{ color: "crimson" }}>Enter email</span>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <input
                    onChange={(e) =>setPhone(e.target.value)}
                    value={phone}
                    name="phone"
                    type="number*"
                    // required=""
                    className="form-control"
                    placeholder="phone*"
                  />
                </div>
                <div>
                  {err === true && phone === "" ? (
                    <span style={{ color: "crimson" }}>Enter phone</span>
                  ) : null}
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    name="Password"
                    type="password"
                    className="form-control"
                    // required=""
                    placeholder="Password*"
                  />
                </div>
                <div>
                  {err === true && password === "" ? (
                    <span style={{ color: "crimson" }}>Enter Password</span>
                  ) : null}
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <input
                    onChange={(e) => setconfirmPassword(e.target.value)}
                    value={confirmPassword}
                    name="confirm password"
                    type="password"
                    className="form-control"
                    // required=""
                    placeholder="Confirm Password*"
                  />
                </div>
                <div>
                  {err === true && confirmPassword === "" ? (
                    <span style={{ color: "crimson" }}>confirm password</span>
                  ) : null}
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <input
                    onChange={(e) => setRefferal(e.target.value)}
                    value={referral}
                    name="referralCode"
                    type="text"
                    className="form-control"
                    placeholder="Referral Code (optional)"
                  />
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
                 Have an account ? 
                 
                </div>
                <Link to="/">Login</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
