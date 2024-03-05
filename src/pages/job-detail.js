import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import banner_1 from "../assets/images/images/banner/1.jpg"
import thumb from "../assets/images/images/gallery/thumb/pic1.jpg"
import thumb2 from "../assets/images/images/gallery/thumb/pic2.jpg"
import thumb3 from "../assets/images/images/gallery/thumb/pic3.jpg"
import thumb4 from "../assets/images/images/gallery/thumb/pic4.jpg"
import thumb5 from "../assets/images/images/gallery/thumb/pic5.jpg"
import thumb6 from "../assets/images/images/gallery/thumb/pic6.jpg"
import thumb7 from "../assets/images/images/gallery/thumb/pic7.jpg"
import thumb8 from "../assets/images/images/gallery/thumb/pic8.jpg"
import thumb9 from "../assets/images/images/gallery/thumb/pic9.jpg"
import thumb10 from "../assets/images/images/gallery/thumb/pic10.jpg"
// import thumb11 from "../assets/images/images/gallery/thumb/pic11.jpg"
import thumb12 from "../assets/images/images/gallery/thumb/pic12.jpg"
import video_bg from "../assets/images/images/video-bg.jpg"
import logo_dark from "../assets/images/images/logo-dark.png"
// import add_gb  from "../assets/images/images/logo-dark.png"
import f_bg from "../assets/images/images/f-bg.jpg"
import add_bg from "../assets/images/images/add-bg.jpg"
import pic1 from "../assets/images/images/jobs-company/pic1.jpg"
import job_detail from "../assets/images/images/job-detail-bg.jpg"
import Signup_Pop from "../components/Signup_Pop"
import LoginPop from "../components/LoginPop"
import { BASEURL } from "../common/config";
import PublicHeader from "../components/PublicHeader"


export default function JobDetail() {

    const userDetails = JSON.parse(localStorage.getItem("user-details"));
    const token = localStorage.getItem("token");


    const [jobDetail, setJobDetail] = useState({});
    const [comDetail, setComDetail] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const [applyName, setapplyName] = useState();
    const [applyEmail, setapplyEmail] = useState("");
    const [applyMessage, setapplyMessage] = useState("");
    const [cvLink, setcvLink] = useState("");

    let job_id = useParams().id;

    useEffect(() => {
        if (userDetails != null) {
            setapplyName(userDetails.fullName)
            setapplyEmail(userDetails.email)
        }
        setIsLoading(true);
        const getJob = async () => {
            let api_url = BASEURL + `/job/${job_id}`;
            const headers = { Authorization: `Bearer ${token}` };
            try {
                const res = await axios.get(api_url, { headers });
                console.log(res.data);
                setJobDetail(res.data.data);
                setComDetail(res.data.data.company_id);
            } catch (err) {
                console.log(err);
            }
            setIsLoading(false);
        };
        getJob();
    }, []);

    const applyJob = (e) => {
        e.preventDefault();
        alert("Hele")
        const application = {
            job_id: job_id,
            user_id: userDetails._id,
            company_id: comDetail._id,
            message: applyMessage,
            cv_link: cvLink,

        };
        console.log(application);

        fetch(`${BASEURL}/apply`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(application),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                alert("Job Application sent.... Please wait for Approval or keep applying to other roles")
            })
            .catch((error) => console.error("Fetch error:", error.message));
    };


    return (

        <div>

            {/* <!-- LOADING AREA START ===== --> */}
            {/* <div className="loading-area">
    <div className="loading-box"></div>
    <div className="loading-pic">
        <div className="wrapper">
            <div className="cssload-loader"></div>
        </div>
    </div>
</div> */}
            {/* <!-- LOADING AREA  END ====== --> */}

            <div className="page-wraper">

                {/* <!-- HEADER START --> */}
                <PublicHeader />
                {/* <!-- HEADER END -->

  
    <!-- CONTENT START --> */}
                <div className="page-content">

                    {/* <!-- INNER PAGE BANNER --> */}
                    <div className="wt-bnr-inr overlay-wraper bg-center" style={{ backgroundImage: `url(${banner_1})` }}>
                        <div className="overlay-main site-bg-white opacity-01"></div>
                        <div className="container">
                            <div className="wt-bnr-inr-entry">
                                <div className="banner-title-outer">
                                    <div className="banner-title-name">
                                        <h2 className="wt-title">{jobDetail.jobTitle}</h2>
                                    </div>
                                </div>
                                {/* <!-- BREADCRUMB ROW -->*/}

                                <div>
                                    <ul className="wt-breadcrumb breadcrumb-style-2">
                                        <li><a href="index.html">Home</a></li>
                                        <li>Job Detail</li>
                                    </ul>
                                </div>

                                {/* <!-- BREADCRUMB ROW END -->*/}
                            </div>
                        </div>
                    </div>
                    {/* <!-- INNER PAGE BANNER END --> */}



                    {/* <!-- OUR BLOG START --> */}
                    <div className="section-full  p-t120 p-b90 bg-white">
                        <div className="container">

                            {/* <!-- BLOG SECTION START --> */}
                            <div className="section-content">
                                <div className="row d-flex justify-content-center">

                                    <div className="col-lg-8 col-md-12">
                                        {/* <!-- Candidate detail START --> */}
                                        <div className="cabdidate-de-info">
                                            <div className="twm-job-self-wrap">
                                                <div className="twm-job-self-info">
                                                    <div className="twm-job-self-top">
                                                        <div className="twm-media-bg">
                                                            {comDetail.bannerImage != null ? <img src={comDetail.bannerImage} alt="#" className="bannerSize" /> : <></>}
                                                            <div className="twm-jobs-category green"><span className="twm-bg-green">New</span></div>
                                                        </div>


                                                        <div className="twm-mid-content">

                                                            <div className="twm-media">
                                                                {comDetail.image ? <img src={comDetail.image} alt="#" /> : <></>}
                                                            </div>

                                                            <h4 className="twm-job-title">{jobDetail.jobTitle} <span className="twm-job-post-duration">/ {new Date(jobDetail.startDate).getDate()} - {new Date(jobDetail.startDate).getMonth()} {new Date(jobDetail.startDate).getFullYear()}</span></h4>
                                                            <p className="twm-job-address"><i className="feather-map-pin"></i>{jobDetail.city} , {jobDetail.country}</p>
                                                            <div className="twm-job-self-mid">
                                                                <div className="twm-job-self-mid-left">
                                                                    <a href="https://themeforest.net/user/thewebmax/portfolio" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                                    <div className="twm-jobs-amount">$ {jobDetail.offeredSalary} <span>/ Annual  Salary</span></div>
                                                                </div>
                                                                <div className="twm-job-apllication-area">Application ends:
                                                                    <span className="twm-job-apllication-date">({new Date(jobDetail.endDate).getDate()} - {new Date(jobDetail.endDate).getMonth()} {new Date(jobDetail.endDate).getFullYear()})</span>
                                                                </div>
                                                            </div>

                                                            {token == null ? <div className="twm-job-self-bottom">
                                                                <a
                                                                    className="twm-nav-sign-up site-button"
                                                                    data-bs-toggle="modal"
                                                                    href="#sign_up_popup"
                                                                    role="button"
                                                                >
                                                                    Signup To Apply
                                                                </a>
                                                            </div> : <div className="twm-job-self-bottom">
                                                                <a className="site-button" data-bs-toggle="modal" href="#apply_job_popup" role="button">
                                                                    Apply Now
                                                                </a>
                                                            </div>}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <h4 className="twm-s-title">Job Description:</h4>

                                            <p>{jobDetail.jobDescription}
                                            </p>


                                            <h4 className="twm-s-title">Requirments:</h4>
                                            <ul className="description-list-2">
                                                <li>
                                                    <i className="feather-check"></i>
                                                    {jobDetail.requirement}
                                                </li>


                                            </ul>

                                            <h4 className="twm-s-title">Responsabilities:</h4>
                                            <ul className="description-list-2">
                                                <li>
                                                    <i className="feather-check"></i>
                                                    {jobDetail.responsabilities}
                                                </li>

                                            </ul>




                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-12 rightSidebar">

                                        <div className="side-bar mb-4">
                                            <div className="twm-s-info2-wrap mb-5">
                                                <div className="twm-s-info2">
                                                    <h4 className="section-head-small mb-4">Job Information</h4>

                                                    <ul className="twm-job-hilites2">

                                                        <li>
                                                            <div className="twm-s-info-inner">
                                                                <i className="fas fa-calendar-alt"></i>
                                                                <span className="twm-title">Date Posted</span>
                                                                <div className="twm-s-info-discription">{new Date(jobDetail.startDate).getDate()} - {new Date(jobDetail.startDate).getMonth()} {new Date(jobDetail.startDate).getFullYear()}</div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="twm-s-info-inner">
                                                                <i className="fas fa-map-marker-alt"></i>
                                                                <span className="twm-title">Location</span>
                                                                <div className="twm-s-info-discription">{jobDetail.city} , {jobDetail.country}</div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="twm-s-info-inner">
                                                                <i className="fas fa-user-tie"></i>
                                                                <span className="twm-title">Job Title</span>
                                                                <div className="twm-s-info-discription">{jobDetail.jobTitle} </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="twm-s-info-inner">
                                                                <i className="fas fa-clock"></i>
                                                                <span className="twm-title">Experience</span>
                                                                <div className="twm-s-info-discription">{jobDetail.experience} </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="twm-s-info-inner">
                                                                <i className="fas fa-suitcase"></i>
                                                                <span className="twm-title">Qualification</span>
                                                                <div className="twm-s-info-discription">{jobDetail.qualification} </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="twm-s-info-inner">
                                                                <i className="fas fa-venus-mars"></i>
                                                                <span className="twm-title">Gender</span>
                                                                <div className="twm-s-info-discription">{jobDetail.gender}</div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="twm-s-info-inner">

                                                                <i className="fas fa-money-bill-wave"></i>
                                                                <span className="twm-title">Offered Salary</span>
                                                                <div className="twm-s-info-discription">{jobDetail.offeredSalary} / Annual Salary</div>
                                                            </div>
                                                        </li>

                                                    </ul>

                                                </div>
                                            </div>

                                            {/* <div className="widget tw-sidebar-tags-wrap">
                                                <h4 className="section-head-small mb-4">Job Skills</h4>

                                                <div className="tagcloud">
                                                    <a href="javascript:void(0)">Html</a>
                                                    <a href="javascript:void(0)">Python</a>
                                                    <a href="javascript:void(0)">WordPress</a>
                                                    <a href="javascript:void(0)">JavaScript</a>
                                                    <a href="javascript:void(0)">Figma</a>
                                                    <a href="javascript:void(0)">Angular</a>
                                                    <a href="javascript:void(0)">Reactjs</a>
                                                    <a href="javascript:void(0)">Drupal</a>
                                                    <a href="javascript:void(0)">Joomla</a>
                                                </div>
                                            </div> */}

                                        </div>

                                        <div className="twm-s-info3-wrap mb-5">
                                            <div className="twm-s-info3">
                                                <div className="twm-s-info-logo-section">
                                                    <div className="twm-media">
                                                        <img src={comDetail.image} alt="#" />
                                                    </div>
                                                    <h4 className="twm-title">{jobDetail.jobTitle} </h4>
                                                </div>
                                                <ul>

                                                    <li>
                                                        <div className="twm-s-info-inner">
                                                            <i className="fas fa-building"></i>
                                                            <span className="twm-title">Company</span>
                                                            <div className="twm-s-info-discription">{comDetail.companyName}</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="twm-s-info-inner">
                                                            <i className="fas fa-mobile-alt"></i>
                                                            <span className="twm-title">Phone</span>
                                                            <div className="twm-s-info-discription">{comDetail.phone}</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="twm-s-info-inner">
                                                            <i className="fas fa-at"></i>
                                                            <span className="twm-title">Email</span>
                                                            <div className="twm-s-info-discription">{comDetail.email}</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="twm-s-info-inner">
                                                            <i className="fas fa-desktop"></i>
                                                            <span className="twm-title">Website</span>
                                                            <div className="twm-s-info-discription">{comDetail.website}</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="twm-s-info-inner">
                                                            <i className="fas fa-map-marker-alt"></i>
                                                            <span className="twm-title">Address</span>
                                                            <div className="twm-s-info-discription">1363-1385 Sunset Blvd Angeles, CA
                                                                90026 ,USA</div>
                                                        </div>
                                                    </li>

                                                </ul>
                                                <Link to={"/employer-detail/" + comDetail._id} className=" site-button">Vew Profile</Link>

                                            </div>
                                        </div>




                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                    {/* <!-- OUR BLOG END -->           */}


                </div>
                {/* <!-- CONTENT END -->

    <!-- FOOTER START --> */}
                <footer className="footer-dark" style={{ backgroundImage: `url(${f_bg})` }}>
                    <div className="container">

                        {/* <!-- NEWS LETTER SECTION START --> */}
                        <div className="ftr-nw-content">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="ftr-nw-title">
                                        Join our email subscription now to get updates
                                        on new jobs and notifications.
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <form>
                                        <div className="ftr-nw-form">
                                            <input name="news-letter" className="form-control" placeholder="Enter Your Email" type="text" />
                                            <button className="ftr-nw-subcribe-btn">Subscribe Now</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {/* <!-- NEWS LETTER SECTION END -->
            <!-- FOOTER BLOCKES START -->   */}
                        <div className="footer-top">
                            <div className="row">

                                <div className="col-lg-3 col-md-12">

                                    <div className="widget widget_about">
                                        <div className="logo-footer clearfix">
                                            <a href="index.html"><img src="images/logo-light.png" alt="" /></a>
                                        </div>
                                        <p>Many desktop publishing packages and web page editors now.</p>
                                        <ul className="ftr-list">
                                            <li><p><span>Address :</span>65 Sunset CA 90026, USA </p></li>
                                            <li><p><span>Email :</span>example@max.com</p></li>
                                            <li><p><span>Call :</span>555-555-1234</p></li>
                                        </ul>
                                    </div>

                                </div>

                                <div className="col-lg-9 col-md-12">
                                    <div className="row">

                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="widget widget_services ftr-list-center">
                                                <h3 className="widget-title">For Candidate</h3>
                                                <ul>
                                                    <li><a href="dashboard.html">User Dashboard</a></li>
                                                    <li><a href="dash-resume-alert.html">Alert resume</a></li>
                                                    <li><a href="candidate-grid.html">Candidates</a></li>
                                                    <li><a href="blog-list.html">Blog List</a></li>
                                                    <li><a href="blog-single.html">Blog single</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="widget widget_services ftr-list-center">
                                                <h3 className="widget-title">For Employers</h3>
                                                <ul>
                                                    <li><a href="dash-post-job.html">Post Jobs</a></li>
                                                    <li><a href="blog-grid.html">Blog Grid</a></li>
                                                    <li><a href="contact.html">Contact</a></li>
                                                    <li><a href="job-list.html">Jobs Listing</a></li>
                                                    <li><a href="job-detail.html">Jobs details</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="widget widget_services ftr-list-center">
                                                <h3 className="widget-title">Helpful Resources</h3>
                                                <ul>
                                                    <li><a href="faq.html">FAQs</a></li>
                                                    <li><a href="employer-detail.html">Employer detail</a></li>
                                                    <li><a href="dash-my-profile.html">Profile</a></li>
                                                    <li><a href="error-404.html">404 Page</a></li>
                                                    <li><a href="pricing.html">Pricing</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="widget widget_services ftr-list-center">
                                                <h3 className="widget-title">Quick Links</h3>
                                                <ul>
                                                    <li><a href="index.html">Home</a></li>
                                                    <li><a href="about-1.html">About us</a></li>
                                                    <li><a href="dash-bookmark.html">Bookmark</a></li>
                                                    <li><a href="job-grid.html">Jobs</a></li>
                                                    <li><a href="employer-list.html">Employer</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                        {/* <!-- FOOTER COPYRIGHT --> */}
                        <div className="footer-bottom">

                            <div className="footer-bottom-info">

                                <div className="footer-copy-right">
                                    <span className="copyrights-text">Copyright © 2023 by thewebmax All Rights Reserved.</span>
                                </div>
                                <ul className="social-icons">
                                    <li><a href="javascript:void(0);" className="fab fa-facebook-f"></a></li>
                                    <li><a href="javascript:void(0);" className="fab fa-twitter"></a></li>
                                    <li><a href="javascript:void(0);" className="fab fa-instagram"></a></li>
                                    <li><a href="javascript:void(0);" className="fab fa-youtube"></a></li>
                                </ul>

                            </div>

                        </div>

                    </div>

                </footer>
                {/* <!-- FOOTER END --> */}

                {/* <!-- BUTTON TOP START --> */}
                <button className="scroltop"><span className="fa fa-angle-up  relative" id="btn-vibrate"></span></button>

                {/* <!--apply job popup --> */}
                <div className="modal fade" id="apply_job_popup" aria-hidden="true" tabindex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title" id="sign_up_popupLabel">Apply For This Job</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                                <div className="apl-job-inpopup">
                                    {/* <!--Basic Information--> */}
                                    <div className="panel panel-default">
                                        <form onSubmit={applyJob}>
                                            <div className="panel-body wt-panel-body p-a20 ">

                                                <div className="twm-tabs-style-1">

                                                    <div className="row">
                                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                                            <div className="form-group">
                                                                <label>Your Name</label>
                                                                <div className="ls-inputicon-box">
                                                                    <input className="form-control" name="company_name"
                                                                        onChange={(e) => setapplyName(e.target.value)}
                                                                        value={applyName}
                                                                        type="text" placeholder="Devid Smith" />
                                                                    <i className="fs-input-icon fa fa-user "></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                                            <div className="form-group">
                                                                <label>Email Address</label>
                                                                <div className="ls-inputicon-box">
                                                                    <input className="form-control" name="company_Email"
                                                                        onChange={(e) => setapplyEmail(e.target.value)}
                                                                        value={applyEmail}
                                                                        type="email" placeholder="Devid@example.com" />
                                                                    <i className="fs-input-icon fas fa-at"></i>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label>Message</label>
                                                                <textarea className="form-control" rows="3"
                                                                    onChange={(e) => setapplyMessage(e.target.value)}
                                                                    value={applyMessage}
                                                                    placeholder="Message sent to the employer"></textarea>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12 col-md-12">
                                                            <div className="form-group">
                                                                <label>Upload Link</label>
                                                                <input className="form-control" name="company_Email"
                                                                    onChange={(e) => setcvLink(e.target.value)}
                                                                    value={cvLink}
                                                                    type="text" placeholder="Devid@example.com" />                                                            <small>If you do not have a resume document, you may write your brief professional profile <a className="site-text-primary" href="javascript:void(0);">here</a></small>
                                                            </div>
                                                        </div>



                                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                                            <div className="text-left">
                                                                <button type="submit" className="site-button" > Send Application</button>
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
                    </div>

                </div>

                <Signup_Pop />
                <LoginPop />

            </div>



            {/* <!-- JAVASCRIPT  FILES ========================================= --> 
<script  src="js/jquery-3.6.0.min.js"></script><!-- JQUERY.MIN JS -->
<script  src="js/popper.min.js"></script><!-- POPPER.MIN JS -->
<script  src="js/bootstrap.min.js"></script><!-- BOOTSTRAP.MIN JS -->
<script  src="js/magnific-popup.min.js"></script><!-- MAGNIFIC-POPUP JS -->
<script  src="js/waypoints.min.js"></script><!-- WAYPOINTS JS -->
<script  src="js/counterup.min.js"></script><!-- COUNTERUP JS -->
<script  src="js/waypoints-sticky.min.js"></script><!-- STICKY HEADER -->
<script  src="js/isotope.pkgd.min.js"></script><!-- MASONRY  -->
<script  src="js/imagesloaded.pkgd.min.js"></script><!-- MASONRY  -->
<script  src="js/owl.carousel.min.js"></script><!-- OWL  SLIDER  -->
<script  src="js/theia-sticky-sidebar.js"></script><!-- STICKY SIDEBAR  -->
<script  src="js/lc_lightbox.lite.js" ></script><!-- IMAGE POPUP -->
<script  src="js/bootstrap-select.min.js"></script><!-- Form js -->
<script  src="js/dropzone.js"></script><!-- IMAGE UPLOAD  -->
<script  src="js/jquery.scrollbar.js"></script><!-- scroller -->
<script  src="js/bootstrap-datepicker.js"></script><!-- scroller -->
<script  src="js/jquery.dataTables.min.js"></script><!-- Datatable -->
<script  src="js/dataTables.bootstrap5.min.js"></script><!-- Datatable -->
<script  src="js/chart.js"></script><!-- Chart -->
<script  src="js/bootstrap-slider.min.js"></script><!-- Price range slider -->
<script  src="js/swiper-bundle.min.js"></script><!-- Swiper JS -->
<script  src="js/custom.js"></script><!-- CUSTOM FUCTIONS  -->
<script  src="js/switcher.js"></script><!-- SHORTCODE FUCTIONS  --> */}

            {/* <!-- STYLE SWITCHER  ======= --> 
<div className="styleswitcher">

<div className="switcher-btn-bx">
    <a className="switch-btn">
        <span className="fa fa-cog fa-spin"></span>
    </a>
</div>

<div className="styleswitcher-inner">

    <h6 className="switcher-title">Color Skin</h6>
    <ul className="color-skins">
        <li><a className="theme-skin skin-1" href="job-detaila39b.html?theme=css/skin/skin-1"></a></li>
        <li><a className="theme-skin skin-2" href="job-detail61e7.html?theme=css/skin/skin-2"></a></li>
        <li><a className="theme-skin skin-3" href="job-detailcce5.html?theme=css/skin/skin-3"></a></li>
        <li><a className="theme-skin skin-4" href="job-detail13f7.html?theme=css/skin/skin-4"></a></li>
        <li><a className="theme-skin skin-5" href="job-detail19a6.html?theme=css/skin/skin-5"></a></li>
        <li><a className="theme-skin skin-6" href="job-detailfe5c.html?theme=css/skin/skin-6"></a></li>
        <li><a className="theme-skin skin-7" href="job-detailab47.html?theme=css/skin/skin-7"></a></li>
        <li><a className="theme-skin skin-8" href="job-detail5f8d.html?theme=css/skin/skin-8"></a></li>
        <li><a className="theme-skin skin-9" href="job-detail5663.html?theme=css/skin/skin-9"></a></li>
        <li><a className="theme-skin skin-10" href="job-detail28ac.html?theme=css/skin/skin-10"></a></li>
        
    </ul>           
    
</div>    
</div> */}
            {/* <!-- STYLE SWITCHER END ==== --> */}

        </div>
    )
}