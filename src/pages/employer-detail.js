import banner_1 from "../assets/images/images/banner/1.jpg"
import video_bg from "../assets/images/images/video-bg.jpg"
import f_bg from "../assets/images/images/f-bg.jpg"
import logo_dark from "../assets/images/images/logo-dark.png"
import employer_bg from "../assets/images/images/employer-bg.jpg"
import pic1 from "../assets/images/images/jobs-company/pic1.jpg"
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
import thumb11 from "../assets/images/images/gallery/thumb/pic11.jpg"
import thumb12 from "../assets/images/images/gallery/thumb/pic12.jpg"
import compIc1 from "../assets/images/images/jobs-company/pic1.jpg"
import compIc2 from "../assets/images/images/jobs-company/pic2.jpg"
import compIc3 from "../assets/images/images/jobs-company/pic3.jpg"
import Signup_Pop from "../components/Signup_Pop"
import LoginPop from "../components/LoginPop"
import PublicHeader from "../components/PublicHeader"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { BASEURL } from "../common/config";
import { useParams } from "react-router-dom";


export default function EmployerDetail() {
    const token = localStorage.getItem("token");

    const [company, setCompany] = useState({});
    const [jobs, setJobs] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    let com_id = useParams().id;

    useEffect(() => {
        setIsLoading(true);
        const getJob = async () => {
            let api_url = BASEURL + `/company/${com_id}`;
            const headers = { Authorization: `Bearer ${token}` };
            try {
                const res = await axios.get(api_url, { headers });
                
                setCompany(res.data.data);
            } catch (err) {
                console.log(err);
            }
            setIsLoading(false);
        };
        getJob();
    }, []);



    useEffect(() => {
        fetch(`${BASEURL}/jobs/company/${com_id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data.data);
                setJobs(data.data)

            })
            .catch(error => {
                console.error('Fetch error:', error.message);
            });
    }, []);

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
                {/* <!-- HEADER END --> */}


                {/* <!-- CONTENT START --> */}
                <div className="page-content">

                    {/* <!-- INNER PAGE BANNER --> */}
                    <div className="wt-bnr-inr overlay-wraper bg-center" style={{ backgroundImage: `url(${banner_1})` }}>
                        <div className="overlay-main site-bg-white opacity-01"></div>
                        <div className="container">
                            <div className="wt-bnr-inr-entry">
                                <div className="banner-title-outer">
                                    <div className="banner-title-name">
                                        <h2 className="wt-title">{company.companyName}</h2>
                                    </div>
                                </div>
                                {/* <!-- BREADCRUMB ROW -->                          */}

                                <div>
                                    <ul className="wt-breadcrumb breadcrumb-style-2">
                                        <li><a href="index.html">Home</a></li>
                                        <li>Employer Detail</li>
                                    </ul>
                                </div>

                                {/* <!-- BREADCRUMB ROW END -->*/}
                            </div>
                        </div>
                    </div>
                    {/* <!-- INNER PAGE BANNER END -->

        <!-- Employer Detail START --> */}
                    <div className="section-full  p-t120 p-b90 bg-white">
                        <div className="container">


                            <div className="section-content">
                                <div className="row d-flex justify-content-center">

                                    <div className="col-lg-8 col-md-12">
                                        {/* <!-- Candidate detail START --> */}
                                        <div className="cabdidate-de-info">
                                            <div className="twm-employer-self-wrap">
                                                <div className="twm-employer-self-info">
                                                    <div className="twm-employer-self-top">
                                                        <div className="twm-media-bg">
                                                            <img src={company.bannerImage} className="bannerSize" alt="#" />
                                                        </div>


                                                        <div className="twm-mid-content">

                                                            <div className="twm-media">
                                                                <img src={company.image} alt="#" />
                                                            </div>

                                                            <h4 className="twm-job-title">{company.companyName}</h4>
                                                             <a href={company.website} className="twm-employer-websites site-text-primary">{company.website}</a>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <h4 className="twm-s-title">About Company</h4>

                                            <p>{company.Description} </p>





                                            <h4 className="twm-s-title">Available Jobs ({jobs.length})</h4>
                                            <div className="twm-jobs-list-wrap">
                                                <ul>
                                                    {jobs.map((e) => {
                                                        return (<li>
                                                            <div className="twm-jobs-list-style1 mb-5">
                                                                <div className="twm-content">
                                                                <Link to={`/job-detail/${e._id}`} className="twm-job-title text-dark">
                                                                        <h4>{e.jobTitle}<span className="twm-job-post-duration"></span></h4>
                                                                        <p className="twm-job-address">Expreience: {e.experience}</p>
                                                                    </Link>
                                                                 </div>
                                                                <div className="twm-mind-content">
                                                                <div className="twm-jobs-amount">{e.offeredSalary} <span>/ Annualy</span></div>
                                                                    <p className="twm-job-address">{e.city} {e.country}</p>
                                                                </div>
                                                                <div className="twm-right-content">
                                                                    <div className="twm-jobs-category green"><span className="twm-bg-green">{e.jobType}</span></div>
                                                                    <p className="twm-job-address">Gender: {e.gender}</p>
                                                                    <Link to={`/job-detail/${e._id}`} className="twm-jobs-browse site-text-primary">Browse Job</Link>
                                                                </div>
                                                            </div>
                                                        </li>)
                                                    })}



                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-12 rightSidebar">

                                        <div className="side-bar-2">




                                            <div className="twm-s-info-wrap mb-5">
                                                <h4 className="section-head-small mb-4">Profile Info</h4>
                                                <div className="twm-s-info">
                                                    <ul>

                                                        <li>
                                                            <div className="twm-s-info-inner">
                                                                <i className="fas fa-mobile-alt"></i>
                                                                <span className="twm-title">Phone</span>
                                                                <div className="twm-s-info-discription">{company.phone}</div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="twm-s-info-inner">
                                                                <i className="fas fa-at"></i>
                                                                <span className="twm-title">Email</span>
                                                                <div className="twm-s-info-discription">{company.email}</div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="twm-s-info-inner">
                                                                <i className="fas fa-book-reader"></i>
                                                                <span className="twm-title">Website</span>
                                                                <div className="twm-s-info-discription">{company.website}</div>
                                                            </div>
                                                        </li>


                                                    </ul>

                                                </div>
                                            </div>

                                            {token == null ? <></> : <div className="twm-s-contact-wrap mb-5">
                                                <h4 className="section-head-small mb-4">Contact us</h4>
                                                <div className="twm-s-contact">
                                                    <div className="row">

                                                        <div className="col-lg-12">
                                                            <div className="form-group mb-3">
                                                                <input name="username" type="text" required className="form-control" placeholder="Name" />
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12">
                                                            <div className="form-group mb-3">
                                                                <input name="email" type="text" className="form-control" required placeholder="Email" />
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12">
                                                            <div className="form-group mb-3">
                                                                <input name="phone" type="text" className="form-control" required placeholder="Phone" />
                                                            </div>
                                                        </div>


                                                        <div className="col-lg-12">
                                                            <div className="form-group mb-3">
                                                                <textarea name="message" className="form-control" rows="3" placeholder="Message"></textarea>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <button type="submit" className="site-button">Submit Now</button>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>}


                                        </div>


                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                    {/* <!-- Employer Detail END -->*/}


                </div>
                {/* <!-- CONTENT END -->

    <!-- FOOTER START --> */}
                <footer className="footer-dark" style={{ backgroundImage: f_bg }}>
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
                {/* <!-- FOOTER END -->

    <!-- BUTTON TOP START --> */}
                <button className="scroltop"><span className="fa fa-angle-up  relative" id="btn-vibrate"></span></button>

                <Signup_Pop />
                <LoginPop />
                {/* <!--Model Popup Section End--> */}

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
        <li><a className="theme-skin skin-1" href="employer-detaila39b.html?theme=css/skin/skin-1"></a></li>
        <li><a className="theme-skin skin-2" href="employer-detail61e7.html?theme=css/skin/skin-2"></a></li>
        <li><a className="theme-skin skin-3" href="employer-detailcce5.html?theme=css/skin/skin-3"></a></li>
        <li><a className="theme-skin skin-4" href="employer-detail13f7.html?theme=css/skin/skin-4"></a></li>
        <li><a className="theme-skin skin-5" href="employer-detail19a6.html?theme=css/skin/skin-5"></a></li>
        <li><a className="theme-skin skin-6" href="employer-detailfe5c.html?theme=css/skin/skin-6"></a></li>
        <li><a className="theme-skin skin-7" href="employer-detailab47.html?theme=css/skin/skin-7"></a></li>
        <li><a className="theme-skin skin-8" href="employer-detail5f8d.html?theme=css/skin/skin-8"></a></li>
        <li><a className="theme-skin skin-9" href="employer-detail5663.html?theme=css/skin/skin-9"></a></li>
        <li><a className="theme-skin skin-10" href="employer-detail28ac.html?theme=css/skin/skin-10"></a></li>
        
    </ul>           
    
</div>    
</div> */}
            {/* <!-- STYLE SWITCHER END ==== --> */}

        </div>


    )
}