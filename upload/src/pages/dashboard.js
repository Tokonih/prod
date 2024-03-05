import { Link } from "react-router-dom";
import pic1 from "../assets/images/images/candidates/pic1.jpg";
import pic2 from "../assets/images/images/candidates/pic2.jpg"
import pic3 from "../assets/images/images/candidates/pic3.jpg"
import pic4 from "../assets/images/images/candidates/pic4.jpg"
import pic5 from "../assets/images/images/candidates/pic5.jpg"
import logo_white from "../assets/images/images/logo-white.png"
import logo from "../assets/images/images/logo-dark.png"
import Dash_Header from "../components/Dashheader";

export default function Dashboard() {
    return (
        <div>



            <div className="link-tag page-wraper">

                <Dash_Header />

              

                {/* <!-- Page Content Holder --> */}
                <div id="content">

                    <div className="link-tag content-admin-main">

                        <div className="link-tag wt-admin-right-page-header clearfix">
                            <h2>Hello, Nikola Tesla</h2>
                            <div className="link-tag breadcrumbs"><a href=" #">Home</a><span>Dasboard</span></div>
                        </div>

                        <div className="link-tag twm-dash-b-blocks mb-5">
                            <div className="link-tag row">
                                <div className="link-tag col-xl-3 col-lg-6 col-md-12 mb-3">
                                    <div className="link-tag panel panel-default">
                                        <div className="link-tag panel-body wt-panel-body gradi-1 dashboard-card ">
                                            <div className="link-tag wt-card-wrap">
                                                <div className="link-tag wt-card-icon"><i className="link-tag far fa-address-book"></i></div>
                                                <div className="link-tag wt-card-right wt-total-active-listing counter ">25</div>
                                                <div className="link-tag wt-card-bottom ">
                                                    <h4 className="link-tag m-b0">Posted Jobs</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="link-tag col-xl-3 col-lg-6 col-md-12 mb-3">
                                    <div className="link-tag panel panel-default">
                                        <div className="link-tag panel-body wt-panel-body gradi-2 dashboard-card ">
                                            <div className="link-tag wt-card-wrap">
                                                <div className="link-tag wt-card-icon"><i className="link-tag far fa-file-alt"></i></div>
                                                <div className="link-tag wt-card-right  wt-total-listing-view counter ">435</div>
                                                <div className="link-tag wt-card-bottom">
                                                    <h4 className="link-tag m-b0">Total Applications</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="link-tag col-xl-3 col-lg-6 col-md-12 mb-3">
                                    <div className="link-tag panel panel-default">
                                        <div className="link-tag panel-body wt-panel-body gradi-3 dashboard-card ">
                                            <div className="link-tag wt-card-wrap">
                                                <div className="link-tag wt-card-icon"><i className="link-tag far fa-envelope"></i></div>
                                                <div className="link-tag wt-card-right wt-total-listing-review counter ">28</div>
                                                <div className="link-tag wt-card-bottom">
                                                    <h4 className="link-tag m-b0">Messages</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="link-tag col-xl-3 col-lg-6 col-md-12 mb-3">
                                    <div className="link-tag panel panel-default">
                                        <div className="link-tag panel-body wt-panel-body gradi-4 dashboard-card ">
                                            <div className="link-tag wt-card-wrap">
                                                <div className="link-tag wt-card-icon"><i className="link-tag far fa-bell"></i></div>
                                                <div className="link-tag wt-card-right wt-total-listing-bookmarked counter ">18</div>
                                                <div className="link-tag wt-card-bottom">
                                                    <h4 className="link-tag m-b0">Notifications</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="link-tag twm-pro-view-chart-wrap">
                            <div className="link-tag row">
                                <div className="link-tag col-xl-6 col-lg-12 col-md-12 mb-4">
                                    <div className="link-tag panel panel-default site-bg-white">
                                        <div className="link-tag panel-heading wt-panel-heading p-a20">
                                            <h4 className="link-tag panel-tittle m-a0"><i className="link-tag far fa-chart-bar"></i>Your Profile Views</h4>
                                        </div>
                                        <div className="link-tag panel-body wt-panel-body twm-pro-view-chart">
                                            <canvas id="profileViewChart"></canvas>
                                        </div>
                                    </div>

                                </div>


                                <div className="link-tag col-xl-6 col-lg-12 col-md-12 mb-4">
                                    <div className="link-tag panel panel-default">
                                        <div className="link-tag panel-heading wt-panel-heading p-a20">
                                            <h4 className="link-tag panel-tittle m-a0">Inbox</h4>
                                        </div>
                                        <div className="link-tag panel-body wt-panel-body bg-white">
                                            <div className="link-tag dashboard-messages-box-scroll scrollbar-macosx">

                                                <div className="link-tag dashboard-messages-box">
                                                    <div className="link-tag dashboard-message-avtar"><img src={pic1} alt="" /></div>
                                                    <div className="link-tag dashboard-message-area">
                                                        <h5>Lucy Smith<span>18 June 2023</span></h5>
                                                        <p>Bring to the table win-win survival strategies to ensure proactive domination. at the end of the day, going forward, a new normal that has evolved from generation.</p>
                                                    </div>
                                                </div>

                                                <div className="link-tag dashboard-messages-box">
                                                    <div className="link-tag dashboard-message-avtar"><img src={pic2} alt="" /></div>
                                                    <div className="link-tag dashboard-message-area">
                                                        <h5>Richred paul<span>19 June 2023</span></h5>
                                                        <p>Bring to the table win-win survival strategies to ensure proactive domination. at the end of the day, going forward, a new normal that has evolved from generation.</p>
                                                    </div>
                                                </div>

                                                <div className="link-tag dashboard-messages-box">
                                                    <div className="link-tag dashboard-message-avtar"><img src={pic3} alt="" /></div>
                                                    <div className="link-tag dashboard-message-area">
                                                        <h5>Jon Doe<span>20 June 2023</span></h5>
                                                        <p>Bring to the table win-win survival strategies to ensure proactive domination. at the end of the day, going forward, a new normal that has evolved from generation.</p>
                                                    </div>
                                                </div>

                                                <div className="link-tag dashboard-messages-box">
                                                    <div className="link-tag dashboard-message-avtar"><img src={pic4} alt="" /></div>
                                                    <div className="link-tag dashboard-message-area">
                                                        <h5>Thomas Smith<span>22 June 2023</span></h5>
                                                        <p>Bring to the table win-win survival strategies to ensure proactive domination. at the end of the day, going forward, a new normal that has evolved from generation. </p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                <div className="link-tag col-lg-12 col-md-12 mb-4">
                                    <div className="link-tag panel panel-default site-bg-white m-t30">
                                        <div className="link-tag panel-heading wt-panel-heading p-a20">
                                            <h4 className="link-tag panel-tittle m-a0"><i className="link-tag far fa-list-alt"></i>Recent Activities</h4>
                                        </div>
                                        <div className="link-tag panel-body wt-panel-body">

                                            <div className="link-tag dashboard-list-box list-box-with-icon">
                                                <ul>
                                                    <li>
                                                        <i className="link-tag fa fa-envelope text-success list-box-icon"></i>Nikol Tesla has sent you <a href=" #" className="link-tag text-success">private message!</a>
                                                        <a href=" #" className="link-tag close-list-item color-lebel clr-red">
                                                            <i className="link-tag far fa-trash-alt"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <i className="link-tag fa fa-suitcase text-primary list-box-icon"></i>Your job for
                                                        <a href=" #" className="link-tag text-primary">Web Designer</a>
                                                        has been approved!
                                                        <a href=" #" className="link-tag close-list-item color-lebel clr-red">
                                                            <i className="link-tag far fa-trash-alt"></i>
                                                        </a>
                                                    </li>

                                                    <li>
                                                        <i className="link-tag fa fa-bookmark text-warning list-box-icon"></i>
                                                        Someone bookmarked your
                                                        <a href=" #" className="link-tag text-warning">SEO Expert</a>
                                                        Job listing!
                                                        <a href=" #" className="link-tag close-list-item color-lebel clr-red">
                                                            <i className="link-tag far fa-trash-alt"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <i className="link-tag fa fa-tasks text-info list-box-icon"></i>
                                                        Your job listing Core
                                                        <a href=" #" className="link-tag text-info">PHP Developer</a> for Site Maintenance is expiring!
                                                        <a href=" #" className="link-tag close-list-item color-lebel clr-red">
                                                            <i className="link-tag far fa-trash-alt"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <i className="link-tag fa fa-paperclip text-success list-box-icon"></i>
                                                        You have new application for
                                                        <a href=" #" className="link-tag text-success"> UI/UX Developer & Designer! </a>
                                                        <a href=" #" className="link-tag close-list-item color-lebel clr-red">
                                                            <i className="link-tag far fa-trash-alt"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <i className="link-tag fa fa-suitcase text-danger list-box-icon"></i>
                                                        Your Magento Developer job expire
                                                        <a href=" #" className="link-tag text-danger">Renew</a>  now it.
                                                        <a href=" #" className="link-tag close-list-item color-lebel clr-red">
                                                            <i className="link-tag far fa-trash-alt"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <i className="link-tag fa fa-star site-text-orange list-box-icon"></i>
                                                        David cope left a
                                                        <a href=" #" className="link-tag site-text-orange"> review 4.5</a> for Real Estate Logo
                                                        <a href=" #" className="link-tag close-list-item color-lebel clr-red">
                                                            <i className="link-tag far fa-trash-alt"></i>
                                                        </a>
                                                    </li>
                                                </ul>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="link-tag col-lg-12 col-md-12 mb-4">
                                    <div className="link-tag panel panel-default">
                                        <div className="link-tag panel-heading wt-panel-heading p-a20">
                                            <h4 className="link-tag panel-tittle m-a0">Recent Applicants</h4>
                                        </div>
                                        <div className="link-tag panel-body wt-panel-body bg-white">
                                            <div className="link-tag twm-dashboard-candidates-wrap">
                                                <div className="link-tag row">

                                                    <div className="link-tag col-xl-6 col-lg-12 col-md-12">
                                                        <div className="link-tag twm-dash-candidates-list">
                                                            <div className="link-tag twm-media">
                                                                <div className="link-tag twm-media-pic">
                                                                    <img src={pic1} alt="#" />
                                                                </div>

                                                            </div>
                                                            <div className="link-tag twm-mid-content">
                                                                <a href=" #" className="link-tag twm-job-title">
                                                                    <h4>Wanda Montgomery </h4>
                                                                </a>
                                                                <p>Charted Accountant</p>

                                                                <div className="link-tag twm-fot-content">
                                                                    <div className="link-tag twm-left-info">
                                                                        <p className="link-tag twm-candidate-address"><i className="link-tag feather-map-pin"></i>New York</p>
                                                                        <div className="link-tag twm-jobs-vacancies">$20<span>/ Day</span></div>
                                                                    </div>
                                                                    <div className="link-tag twm-right-btn">

                                                                        <ul className="link-tag twm-controls-icon list-unstyled">
                                                                            <li>
                                                                                <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                                    <span className="link-tag fa fa-eye"></span>
                                                                                </button>
                                                                            </li>
                                                                            <li>
                                                                                <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                                    <span className="link-tag far fa-envelope-open"></span>
                                                                                </button>
                                                                            </li>
                                                                            <li>
                                                                                <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                                    <span className="link-tag far fa-trash-alt"></span>
                                                                                </button>
                                                                            </li>
                                                                        </ul>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="link-tag col-xl-6 col-lg-12 col-md-12">
                                                        <div className="link-tag twm-dash-candidates-list">
                                                            <div className="link-tag twm-media">
                                                                <div className="link-tag twm-media-pic">
                                                                    <img src={pic2} alt="#" />
                                                                </div>

                                                            </div>
                                                            <div className="link-tag twm-mid-content">
                                                                <a href=" #" className="link-tag twm-job-title">
                                                                    <h4>Peter Hawkins</h4>
                                                                </a>
                                                                <p>Medical Professed</p>

                                                                <div className="link-tag twm-fot-content">
                                                                    <div className="link-tag twm-left-info">
                                                                        <p className="link-tag twm-candidate-address"><i className="link-tag feather-map-pin"></i>New York</p>
                                                                        <div className="link-tag twm-jobs-vacancies">$7<span>/ Hour</span></div>
                                                                    </div>
                                                                    <div className="link-tag twm-right-btn">

                                                                        <ul className="link-tag twm-controls-icon list-unstyled">
                                                                            <li>
                                                                                <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                                    <span className="link-tag fa fa-eye"></span>
                                                                                </button>
                                                                            </li>
                                                                            <li>
                                                                                <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                                    <span className="link-tag far fa-envelope-open"></span>
                                                                                </button>
                                                                            </li>
                                                                            <li>
                                                                                <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                                    <span className="link-tag far fa-trash-alt"></span>
                                                                                </button>
                                                                            </li>
                                                                        </ul>

                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="link-tag col-xl-6 col-lg-12 col-md-12">
                                                        <div className="link-tag twm-dash-candidates-list">
                                                            <div className="link-tag twm-media">
                                                                <div className="link-tag twm-media-pic">
                                                                    <img src={pic3} alt="#" />
                                                                </div>

                                                            </div>
                                                            <div className="link-tag twm-mid-content">
                                                                <a href=" #" className="link-tag twm-job-title">
                                                                    <h4>Ralph Johnson  </h4>
                                                                </a>
                                                                <p>Bank Manger</p>

                                                                <div className="link-tag twm-fot-content">
                                                                    <div className="link-tag twm-left-info">
                                                                        <p className="link-tag twm-candidate-address"><i className="link-tag feather-map-pin"></i>New York</p>
                                                                        <div className="link-tag twm-jobs-vacancies">$180<span>/ Day</span></div>
                                                                    </div>
                                                                    <div className="link-tag twm-right-btn">
                                                                        <ul className="link-tag twm-controls-icon list-unstyled">
                                                                            <li>
                                                                                <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                                    <span className="link-tag fa fa-eye"></span>
                                                                                </button>
                                                                            </li>
                                                                            <li>
                                                                                <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                                    <span className="link-tag far fa-envelope-open"></span>
                                                                                </button>
                                                                            </li>
                                                                            <li>
                                                                                <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                                    <span className="link-tag far fa-trash-alt"></span>
                                                                                </button>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="link-tag col-xl-6 col-lg-12 col-md-12">
                                                        <div className="link-tag twm-dash-candidates-list">
                                                            <div className="link-tag twm-media">
                                                                <div className="link-tag twm-media-pic">
                                                                    <img src={pic4} alt="#" />
                                                                </div>

                                                            </div>
                                                            <div className="link-tag twm-mid-content">
                                                                <a href=" #" className="link-tag twm-job-title">
                                                                    <h4>Randall Henderson </h4>
                                                                </a>
                                                                <p>IT Contractor</p>

                                                                <div className="link-tag twm-fot-content">
                                                                    <div className="link-tag twm-left-info">
                                                                        <p className="link-tag twm-candidate-address"><i className="link-tag feather-map-pin"></i>New York</p>
                                                                        <div className="link-tag twm-jobs-vacancies">$90<span>/ Week</span></div>
                                                                    </div>
                                                                    <div className="link-tag twm-right-btn">
                                                                        <ul className="link-tag twm-controls-icon list-unstyled">
                                                                            <li>
                                                                                <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                                    <span className="link-tag fa fa-eye"></span>
                                                                                </button>
                                                                            </li>
                                                                            <li>
                                                                                <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                                    <span className="link-tag far fa-envelope-open"></span>
                                                                                </button>
                                                                            </li>
                                                                            <li>
                                                                                <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                                    <span className="link-tag far fa-trash-alt"></span>
                                                                                </button>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="link-tag col-xl-6 col-lg-12 col-md-12">
                                                        <div className="link-tag twm-dash-candidates-list">
                                                            <div className="link-tag twm-media">
                                                                <div className="link-tag twm-media-pic">
                                                                    <img src={pic5} alt="#" />
                                                                </div>

                                                            </div>
                                                            <div className="link-tag twm-mid-content">
                                                                <a href=" #" className="link-tag twm-job-title">
                                                                    <h4>Christina Fischer </h4>
                                                                </a>
                                                                <p>Charity &amp; Voluntary</p>

                                                                <div className="link-tag twm-fot-content">
                                                                    <div className="link-tag twm-left-info">
                                                                        <p className="link-tag twm-candidate-address"><i className="link-tag feather-map-pin"></i>New York</p>
                                                                        <div className="link-tag twm-jobs-vacancies">$19<span>/ Hour</span></div>
                                                                    </div>
                                                                    <div className="link-tag twm-right-btn">
                                                                        <ul className="link-tag twm-controls-icon list-unstyled">
                                                                            <li>
                                                                                <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                                    <span className="link-tag fa fa-eye"></span>
                                                                                </button>
                                                                            </li>
                                                                            <li>
                                                                                <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                                    <span className="link-tag far fa-envelope-open"></span>
                                                                                </button>
                                                                            </li>
                                                                            <li>
                                                                                <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                                    <span className="link-tag far fa-trash-alt"></span>
                                                                                </button>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                </div>

                {/* <!--Delete Profile Popup-->/ */}
                <div className="link-tag modal fade twm-model-popup" id="delete-dash-profile" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                    <div className="link-tag modal-dialog">
                        <div className="link-tag modal-content">
                            <div className="link-tag modal-header">
                                <button type="button" className="link-tag btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="link-tag modal-body">
                                <h4 className="link-tag modal-title">Do you want to delete your profile?</h4>
                            </div>
                            <div className="link-tag modal-footer">
                                <button type="button" className="link-tag site-button" data-bs-dismiss="modal">No</button>
                                <button type="button" className="link-tag site-button outline-primary">Yes</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!--Logout Profile Popup--> */}
                <div className="link-tag modal fade twm-model-popup" id="logout-dash-profile" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                    <div className="link-tag modal-dialog">
                        <div className="link-tag modal-content">
                            <div className="link-tag modal-header">
                                <button type="button" className="link-tag btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="link-tag modal-body">
                                <h4 className="link-tag modal-title">Do you want to Logout your profile?</h4>
                            </div>
                            <div className="link-tag modal-footer">
                                <button type="button" className="link-tag site-button" data-bs-dismiss="modal">No</button>
                                <button type="button" className="link-tag site-button outline-primary">Yes</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* 
<!-- JAVASCRIPT  FILES ========================================= --> 
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
<script  src="js/switcher.js"></script><!-- SHORTCODE FUCTIONS  -->
 




</script> */}

        </div>
    )
}