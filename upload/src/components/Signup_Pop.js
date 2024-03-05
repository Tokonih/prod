import axios from "axios";
import { useState } from "react";
import { BASEURL } from "../common/config";

export default function Signup_Pop() {
    const [role, setRole] = useState("candidate");
    const [fullName, setFullName] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [err, setErr] = useState(false);

    const switchRole = (e) => {
        setRole(e)
    }

    const signup = (e) => {
        e.preventDefault();

        if (email === "" || password === "") {
            setErr(true);
            return;
        }
        if (role === "") {
            setErr(true);
            return;

        }



        const signupData = {
            email: email,
            password: password,
            fullName: fullName,
            userName: fullName,
            phone: phone,
            role: role,
        };

        console.log(signupData);


        axios.post(`${BASEURL}/create-user`, signupData).then((res) => {
          
            if (res.data.message == null) {
                alert("User Registered in");
                localStorage.setItem("user-details", JSON.stringify(res.data.newUser))
                localStorage.setItem("token", res.data.token)
                if(res.data.newUser.role==="company"){
                    window.location.href = "/com-dashboard";
                  }else{
                    window.location.href = "/my-dashboard"
                  }
            } else {
                alert(res.data.message);
            }

        }).catch((err) => {
            alert(err.message)
            console.log(err.message)
        })

    };

    return (
        <div>
            <div className="modal fade twm-sign-up" id="sign_up_popup" aria-hidden="true" aria-labelledby="sign_up_popupLabel" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <form onSubmit={signup}>

                            <div className="modal-header">
                                <h2 className="modal-title" id="sign_up_popupLabel">Sign Up</h2>
                                <p>Sign Up and get access to all the features of Joblance</p>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                                <div className="twm-tabs-style-2">
                                    <ul className="nav nav-tabs" id="myTab" role="tablist">

                                        {/* <!--Signup Candidate-->   */}
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" data-bs-toggle="tab" onClick={() => switchRole("candidate")} data-bs-target="#sign-candidate" type="button"><i className="fas fa-user-tie"></i>Candidate</button>
                                        </li>
                                        {/* <!--Signup Employer--> */}
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" data-bs-toggle="tab" onClick={() => switchRole("company")} data-bs-target="#sign-Employer" type="button"><i className="fas fa-building"></i>Employer</button>
                                        </li>

                                    </ul>
                                    <div className="tab-content" id="myTabContent">
                                        {/* <!--Signup Candidate Content-->   */}
                                        <div className="tab-pane fade show active" >
                                            <div className="row">

                                                <div className="col-lg-12">
                                                    <div className="form-group mb-3">
                                                        <input name="text" type="text" required="" className="form-control" placeholder="Full Name*"
                                                            onChange={(e) => setFullName(e.target.value)} />
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-group mb-3">
                                                        <input name="email" type="text" className="form-control" required="" placeholder="Email*"
                                                            onChange={(e) => setEmail(e.target.value)} />
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-group mb-3">
                                                        <input name="phone" type="text" className="form-control" required="" placeholder="Phone*"
                                                            onChange={(e) => setPhone(e.target.value)} />
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-group mb-3">
                                                        <input name="password" type="text" className="form-control" required="true" placeholder="Password*"
                                                            onChange={(e) => setPassword(e.target.value)} />
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-group mb-3">
                                                        <div className=" form-check">
                                                            <input type="checkbox" className="form-check-input" id="agree1" />
                                                            <label className="form-check-label" for="agree1">I agree to the <a href="javascript:;">Terms and conditions</a></label>
                                                            <p>Already registered?
                                                                <button className="twm-backto-login" data-bs-target="#sign_up_popup2" data-bs-toggle="modal" data-bs-dismiss="modal">Log in here</button>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <button type="submit" className="site-button">Sign Up</button>
                                                </div>
                                                <div className="col-md-12">
                                                    <a
                                                        className="twm-nav-sign-up site-button mt-3"
                                                        data-bs-toggle="modal"
                                                        href="#sign_up_popup2"
                                                        role="button"
                                                    >
                                                        <i className="feather-log-in "></i> Login
                                                    </a>
                                                    {/* <button type="submit" className="site-button mt-3"  href="#sign_up_popup2">Login</button> */}
                                                </div>

                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>



                        </form>
                    </div>
                </div>

            </div>
        </div>

    )
}