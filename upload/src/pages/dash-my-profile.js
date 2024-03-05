import { Link } from "react-router-dom"
import pic1 from "../assets/images/images/candidates/pic1.jpg"
// import logo_white from "../assets/images/images/logo-white.png"
import logo from "../assets/images/images/logo-dark.png"
import Dash_Header from "../components/Dashheader"


export default function DashMyProfile() {
    return (
        <div>



            <div className="page-wraper">

                <Dash_Header />

        

                {/* <!-- Page Content Holder --> */}
                <div id="content">

                    <div className="content-admin-main">


                        <div className="wt-admin-right-page-header clearfix">
                            <h2>My Profile</h2>
                            <div className="breadcrumbs"><a href="#">Home</a><a href="#">Dasboard</a><span>Profile</span></div>
                        </div>

                        <form>
                            <div className="panel panel-default">
                                <div className="panel-heading wt-panel-heading p-a20">
                                    <h4 className="panel-tittle m-a0">Update Profile Image</h4>
                                </div>
                                <div className="panel-body wt-panel-body p-a20 m-b30 bg-white">

                                    <div className="dashboard-profile-section clearfix">
                                        <div className="dashboard-profile-pic">
                                            <div className="dashboard-profile-photo">
                                                <img src={pic1} alt="" />
                                                <div className="upload-btn-wrapper">
                                                    <div id="upload-image-grid"></div>
                                                    <button className="site-button button-sm">Upload Photo</button>
                                                    <input type="file" name="myfile" id="file-uploader" accept=".jpg, .jpeg, .png" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            {/* <!--Basic Information--> */}
                            <div className="panel panel-default">
                                <div className="panel-heading wt-panel-heading p-a20">
                                    <h4 className="panel-tittle m-a0">Basic Informations</h4>
                                </div>
                                <div className="panel-body wt-panel-body p-a20 m-b30 ">

                                    <div className="row">

                                        <div className="col-xl-4 col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <label>Your Name</label>
                                                <div className="ls-inputicon-box">
                                                    <input className="form-control" name="company_name" type="text" placeholder="Devid Smith" />
                                                    <i className="fs-input-icon fa fa-user "></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <label>Phone</label>
                                                <div className="ls-inputicon-box">
                                                    <input className="form-control" name="company_phone" type="text" placeholder="(251) 1234-456-7890" />
                                                    <i className="fs-input-icon fa fa-phone-alt"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <label>Email Address</label>
                                                <div className="ls-inputicon-box">
                                                    <input className="form-control" name="company_Email" type="email" placeholder="Devid@example.com" />
                                                    <i className="fs-input-icon fas fa-at"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <label>Website</label>
                                                <div className="ls-inputicon-box">
                                                    <input className="form-control" name="company_website" type="text" placeholder="https://.../" />
                                                    <i className="fs-input-icon fa fa-globe-americas"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <label>Job Title</label>
                                                <div className="ls-inputicon-box">
                                                    <input className="form-control" name="company_since" type="text" placeholder="Job Title" />
                                                    <i className="fs-input-icon fa fa-address-card"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-6 col-md-12">
                                            <div className="form-group city-outer-bx has-feedback">
                                                <label>Job Type</label>
                                                <div className="ls-inputicon-box">
                                                    <select className="wt-select-box selectpicker" name="Job type" data-live-search="true" title="Job Type" id="city" data-bv-field="size">
                                                        <option className="bs-title-option" value="">Full Time</option>
                                                        <option className="" value="">Part time</option>
                                                        <option className="" value="">Freelance</option>
                                                    </select>
                                                    <i className="fs-input-icon fa fa-file-alt"></i>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <label>Qualification</label>
                                                <div className="ls-inputicon-box">
                                                    <input className="form-control" name="company_since" type="text" placeholder="Qualification" />
                                                    <i className="fs-input-icon fa fa-user-graduate"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-6 col-md-12">
                                            <div className="form-group">
                                                <label>Language</label>
                                                <div className="ls-inputicon-box">
                                                    <input className="form-control" name="company_since" type="text" placeholder="e.x English, Spanish" />
                                                    <i className="fs-input-icon fa fa-language"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-4 col-lg-6 col-md-12">
                                            <div className="form-group city-outer-bx has-feedback">
                                                <label>Job Category</label>
                                                <div className="ls-inputicon-box">
                                                    <select className="wt-select-box selectpicker" name="Job type" data-live-search="true" title="Job Category" id="j-category" data-bv-field="size">
                                                        <option className="bs-title-option" value="">IT & Software</option>
                                                        <option className="" value="">Accountant</option>
                                                        <option className="" value="">Bank Services</option>
                                                        <option className="" value="">Hospital</option>
                                                    </select>
                                                    <i className="fs-input-icon fa fa-border-all"></i>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-xl-3 col-lg-6 col-md-12">
                                            <div className="form-group city-outer-bx has-feedback">
                                                <label>Experience</label>
                                                <div className="ls-inputicon-box">
                                                    <select className="wt-select-box selectpicker" name="Job type" data-live-search="true" title="Experience" id="Experience" data-bv-field="size">
                                                        <option>Select Experience</option>
                                                        <option>Begginer</option>
                                                        <option>01 Years</option>
                                                        <option>02 Years</option>
                                                        <option>03 Years</option>
                                                        <option>04 Years</option>
                                                        <option>05 Years</option>
                                                    </select>
                                                    <i className="fs-input-icon fa fa-user-edit"></i>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-xl-3 col-lg-6 col-md-12">
                                            <div className="form-group city-outer-bx has-feedback">
                                                <label>Current Salary</label>
                                                <div className="ls-inputicon-box">
                                                    <select className="wt-select-box selectpicker" name="Job type" data-live-search="true" title="Current Salary" id="c_salary" data-bv-field="size">
                                                        <option>Select Current Salary</option>
                                                        <option>10-20 K</option>
                                                        <option>20-30 K</option>
                                                        <option>30-40 K</option>
                                                        <option>40-50 K</option>
                                                    </select>
                                                    <i className="fs-input-icon fa fa-dollar-sign"></i>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-xl-3 col-lg-6 col-md-12">
                                            <div className="form-group city-outer-bx has-feedback">
                                                <label>Expected Salary</label>
                                                <div className="ls-inputicon-box">
                                                    <select className="wt-select-box selectpicker" name="Job type" data-live-search="true" title="Expected Salary" id="e-salary" data-bv-field="size">
                                                        <option>Select Expected Salary</option>
                                                        <option>10-20 K</option>
                                                        <option>20-30 K</option>
                                                        <option>30-40 K</option>
                                                        <option>40-50 K</option>
                                                    </select>
                                                    <i className="fs-input-icon fa fa-dollar-sign"></i>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-xl-3 col-lg-12 col-md-12">
                                            <div className="form-group city-outer-bx has-feedback">
                                                <label>Age</label>
                                                <div className="ls-inputicon-box">
                                                    <select className="wt-select-box selectpicker" name="Job type" data-live-search="true" title="Expected Salary" id="Age" data-bv-field="size">
                                                        <option>Select Age</option>
                                                        <option>20 Years+</option>
                                                        <option>25+ Years</option>
                                                        <option>30+ Years</option>
                                                        <option>35+ Years</option>
                                                    </select>
                                                    <i className="fs-input-icon fa fa-child"></i>
                                                </div>

                                            </div>
                                        </div>





                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Description</label>
                                                <textarea className="form-control" rows="3">Greetings! We are Galaxy Software Development Company. We hope you enjoy our services and quality.</textarea>
                                            </div>
                                        </div>


                                        <div className="col-lg-12 col-md-12">
                                            <div className="text-left">
                                                <button type="submit" className="site-button">Save Changes</button>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                            </div>

                            {/* <!--Social Network--> */}
                            <div className="panel panel-default">
                                <div className="panel-heading wt-panel-heading p-a20">
                                    <h4 className="panel-tittle m-a0">Social Network</h4>
                                </div>
                                <div className="panel-body wt-panel-body p-a20 m-b30 ">

                                    <div className="row">

                                        <div className="col-lg-4 col-md-6">
                                            <div className="form-group">
                                                <label>Facebook</label>
                                                <div className="ls-inputicon-box">
                                                    <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://www.facebook.com/" />
                                                    <i className="fs-input-icon fab fa-facebook-f"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="form-group">
                                                <label>Twitter</label>
                                                <div className="ls-inputicon-box">
                                                    <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://twitter.com/" />
                                                    <i className="fs-input-icon fab fa-twitter"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="form-group">
                                                <label>linkedin</label>
                                                <div className="ls-inputicon-box">
                                                    <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://in.linkedin.com/" />
                                                    <i className="fs-input-icon fab fa-linkedin-in"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="form-group">
                                                <label>Whatsapp</label>
                                                <div className="ls-inputicon-box">
                                                    <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://www.whatsapp.com/" />
                                                    <i className="fs-input-icon fab fa-whatsapp"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="form-group">
                                                <label>Instagram</label>
                                                <div className="ls-inputicon-box">
                                                    <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://www.instagram.com/" />
                                                    <i className="fs-input-icon fab fa-instagram"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="form-group">
                                                <label>Pinterest</label>
                                                <div className="ls-inputicon-box">
                                                    <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://in.pinterest.com/" />
                                                    <i className="fs-input-icon fab fa-pinterest-p"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="form-group">
                                                <label>Tumblr</label>
                                                <div className="ls-inputicon-box">
                                                    <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://www.tumblr.com/" />
                                                    <i className="fs-input-icon fab fa-tumblr"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="form-group">
                                                <label>Youtube</label>
                                                <div className="ls-inputicon-box">
                                                    <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://www.youtube.com/" />
                                                    <i className="fs-input-icon fab fa-youtube"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="text-left">
                                                <button type="submit" className="site-button">Save Changes</button>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                            </div>
                        </form>


                    </div>

                </div>

                {/* <!--Delete Profile Popup--> */}
                <div className="modal fade twm-model-popup" id="delete-dash-profile" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h4 className="modal-title">Do you want to delete your profile?</h4>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="site-button" data-bs-dismiss="modal">No</button>
                                <button type="button" className="site-button outline-primary">Yes</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!--Logout Profile Popup--> */}
                <div className="modal fade twm-model-popup" id="logout-dash-profile" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h4 className="modal-title">Do you want to Logout your profile?</h4>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="site-button" data-bs-dismiss="modal">No</button>
                                <button type="button" className="site-button outline-primary">Yes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

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

<!-- STYLE SWITCHER  ======= --> 
<div className="styleswitcher">

    <div className="switcher-btn-bx">
        <a className="switch-btn">
            <span className="fa fa-cog fa-spin"></span>
        </a>
    </div>
    
    <div className="styleswitcher-inner">
    
        <h6 className="switcher-title">Color Skin</h6>
        <ul className="color-skins">
            <li><a className="theme-skin skin-1" href="dash-my-profilea39b.html?theme=css/skin/skin-1"></a></li>
            <li><a className="theme-skin skin-2" href="dash-my-profile61e7.html?theme=css/skin/skin-2"></a></li>
            <li><a className="theme-skin skin-3" href="dash-my-profilecce5.html?theme=css/skin/skin-3"></a></li>
            <li><a className="theme-skin skin-4" href="dash-my-profile13f7.html?theme=css/skin/skin-4"></a></li>
            <li><a className="theme-skin skin-5" href="dash-my-profile19a6.html?theme=css/skin/skin-5"></a></li>
            <li><a className="theme-skin skin-6" href="dash-my-profilefe5c.html?theme=css/skin/skin-6"></a></li>
            <li><a className="theme-skin skin-7" href="dash-my-profileab47.html?theme=css/skin/skin-7"></a></li>
            <li><a className="theme-skin skin-8" href="dash-my-profile5f8d.html?theme=css/skin/skin-8"></a></li>
            <li><a className="theme-skin skin-9" href="dash-my-profile5663.html?theme=css/skin/skin-9"></a></li>
            <li><a className="theme-skin skin-10" href="dash-my-profile28ac.html?theme=css/skin/skin-10"></a></li>
            
        </ul>           
        
    </div>    
</div>
<!-- STYLE SWITCHER END ==== --> */}

        </div>
    )
}