import { Link } from "react-router-dom";
import Logout_Pop from "./Logout";

export default function ComapnyNav() {
    const token = localStorage.getItem("token");
    const userDetails = JSON.parse(localStorage.getItem("user-details"));
    const comDetails = JSON.parse(localStorage.getItem("com-details"));

    return <div>
        <Logout_Pop />
        <div class="side-bar-st-1">

            <div class="twm-candidate-profile-pic">

                <img src={userDetails.profileImage} alt="" />
                <div class="upload-btn-wrapper">

                    <div id="upload-image-grid"></div>
                </div>

            </div>
            <div class="twm-mid-content text-center">
                <Link to="candidate-detail.html" class="twm-job-title">
                    <h4>{comDetails.companyName}</h4>
                </Link>
                <p>{userDetails.jobtype ?? ""} </p>
                <p><b>Employer</b></p>
            </div>

            <div class="twm-nav-list-1">
                <ul>
                    <li class="active"><Link to="/com-dashboard"><i class="fa fa-tachometer-alt"></i> Dashboard</Link></li>
                    <li><Link to="/com-profile"><i class="fa fa-user"></i> My Profile</Link></li>
                    <li><Link to="/com-jobs"><i class="fa fa-user"></i> Manage Jobs</Link></li>
                    <li><Link to="/com-application"><i class="fa fa-suitcase"></i> Job Application</Link></li>
                    <li><Link to="candidate-chat.html"><i class="fa fa-comments"></i>Messages</Link></li>
                    <li><Link to="candidate-change-password.html"><i class="fa fa-fingerprint"></i> Change Password</Link></li>
                    <li>
                        <Link to="/javascript:0;"
                            data-bs-toggle="modal"
                            data-bs-target="#logout-dash-profile"
                        >
                            <i className="fa fa-share-square"></i>
                            <span className="admin-nav-text">Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    </div>
}