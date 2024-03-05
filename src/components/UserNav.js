import { Link } from "react-router-dom";
import Logout_Pop from "./Logout";

export default function UserNav() {
    const token=localStorage.getItem("token");
    const userDetails=JSON.parse(localStorage.getItem("user-details"));
    return <div>
        <Logout_Pop/>
        <div class="side-bar-st-1">

            <div class="twm-candidate-profile-pic">

                <img src="images/user-avtar/pic4.jpg" alt="" />
                <div class="upload-btn-wrapper">

                    <div id="upload-image-grid"></div>
                    <button class="site-button button-sm">Upload Photo</button>
                    <input type="file" name="myfile" id="file-uploader" accept=".jpg, .jpeg, .png" />
                </div>

            </div>
            <div class="twm-mid-content text-center">
                <Link to="candidate-detail.html" class="twm-job-title">
                    <h4>{userDetails.fullName} </h4>
                </Link>
                <p>{userDetails.jobtype??""} </p>
            </div>

            <div class="twm-nav-list-1">
                <ul>
                    <li class="active"><Link to="/my-dashboard"><i class="fa fa-tachometer-alt"></i> Dashboard</Link></li>
                    <li><Link to="/my-profile"><i class="fa fa-user"></i> My Profile</Link></li>
                    <li><Link to="/my-resume"><i class="fa fa-receipt"></i> My Resume</Link></li>
                    <li><Link to="/my-chat"><i class="fa fa-comments"></i>Chat</Link></li>
                    <li><Link to="/my-article"><i class="fa fa-comments"></i>My Article</Link></li>
                    <li><Link to="/my-application"><i class="fa fa-suitcase"></i> Applied Jobs</Link></li>
                    <li><Link to="candidate-saved-jobs.html"><i class="fa fa-file-download"></i> Saved Jobs</Link></li>  
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