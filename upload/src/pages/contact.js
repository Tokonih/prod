import { Link } from "react-router-dom";
import banner_1 from "../assets/images/images/banner/1.jpg"
import f_bg from "../assets/images/images/f-bg.jpg"
import logo_11 from "../assets/images/images/logo-11.png";
import logo_white from "../assets/images/images/logo-white.png"
import Signup_Pop from "../components/Signup_Pop";
import LoginPop from "../components/LoginPop";
import PublicHeader from "../components/PublicHeader";


export default function Contact() {
    return (
        <div>

            <body data-anm=".anm">


                <div className="page-wraper">

                    {/* <!-- HEADER START --> */}
                    <PublicHeader/>
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
                                            <h2 className="wt-title">Contact Us</h2>
                                        </div>
                                    </div>
                                    {/* <!-- BREADCRUMB ROW -->                             */}

                                    <div>
                                        <ul className="wt-breadcrumb breadcrumb-style-2">
                                            <li><a className="link-tag" href="index">Home</a></li>
                                            <li>Contact Us</li>
                                        </ul>
                                    </div>

                                    {/* <!-- BREADCRUMB ROW END --> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- INNER PAGE BANNER END --> */}

                        {/* <!-- CONTACT FORM --> */}
                        <div className="section-full twm-contact-one">
                            <div className="section-content">
                                <div className="container">

                                    {/* <!-- CONTACT FORM--> */}
                                    <div className="contact-one-inner">
                                        <div className="row">

                                            <div className="col-lg-6 col-md-12">
                                                <div className="contact-form-outer">

                                                    {/* <!-- TITLE START--> */}
                                                    <div className="section-head left wt-small-separator-outer">
                                                        <h2 className="wt-title">Send Us a Message</h2>
                                                        <p>Feel free to contact us and we will get back to you as soon as we can.</p>
                                                    </div>
                                                    {/* <!-- TITLE END-->  */}

                                                    <form className="cons-contact-form" method="post" action="https://thewebmax.org/jobzilla/form-handler2.php">
                                                        <div className="row">

                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="form-group mb-3">
                                                                    <input name="username" type="text" required className="form-control" placeholder="Name" />
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="form-group mb-3">
                                                                    <input name="email" type="text" className="form-control" required placeholder="Email" />
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="form-group mb-3">
                                                                    <input name="phone" type="text" className="form-control" required placeholder="Phone" />
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="form-group mb-3">
                                                                    <input name="subject" type="text" className="form-control" required placeholder="Subject" />
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
                                                    </form>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-12">
                                                <div className="contact-info-wrap">

                                                    <div className="contact-info">
                                                        <div className="contact-info-section">

                                                            <div className="c-info-column">
                                                                <div className="c-info-icon"><i className=" fas fa-map-marker-alt"></i></div>
                                                                <h3 className="twm-title">In the bay area?</h3>
                                                                <p>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA</p>
                                                            </div>

                                                            <div className="c-info-column">
                                                                <div className="c-info-icon custome-size"><i className="fas fa-mobile-alt"></i></div>
                                                                <h3 className="twm-title">Feel free to contact us</h3>
                                                                <p><a className="link-tag" href="tel:+216-761-8331">+2 900 234 4241</a></p>
                                                                <p><a className="link-tag" href="tel:+216-761-8331">+2 900 234 3219</a></p>
                                                            </div>

                                                            <div className="c-info-column">
                                                                <div className="c-info-icon"><i className="fas fa-envelope"></i></div>
                                                                <h3 className="twm-title">Support</h3>
                                                                <p>infohelp@gmail.com</p>
                                                                <p>support12@gmail.com</p>
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
                        <div className="gmap-outline">
                            <div className="google-map">
                                <div style={{ width: '100%' }}>
                                    <iframe height="460" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.8534521658976!2d-118.2533646842856!3d34.073270780600225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6fd9829c6f3%3A0x6ecd11bcf4b0c23a!2s1363%20Sunset%20Blvd%2C%20Los%20Angeles%2C%20CA%2090026%2C%20USA!5e0!3m2!1sen!2sin!4v1620815366832!5m2!1sen!2sin"></iframe>
                                </div>
                            </div>
                        </div>


                    </div>
                    {/* <!-- CONTENT END --> */}

                    {/* <!-- FOOTER START --> */}
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
                            {/* <!-- NEWS LETTER SECTION END --> */}
                            {/* <!-- FOOTER BLOCKES START -->   */}
                            <div className="footer-top">
                                <div className="row">

                                    <div className="col-lg-3 col-md-12">

                                        <div className="widget widget_about">
                                            <div className="logo-footer clearfix">
                                                <a className="link-tag" href="index"><img src={logo_white} alt="" /></a>
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
                                                        <li><a className="link-tag" href="dashboard">User Dashboard</a></li>
                                                        <li><a className="link-tag" href="dash-resume-alert">Alert resume</a></li>
                                                        <li><a className="link-tag" href="candidate-grid">Candidates</a></li>
                                                        <li><a className="link-tag" href="blog-list">Blog List</a></li>
                                                        <li><a className="link-tag" href="blog-single">Blog single</a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6 col-sm-6">
                                                <div className="widget widget_services ftr-list-center">
                                                    <h3 className="widget-title">For Employers</h3>
                                                    <ul>
                                                        <li><a className="link-tag" href="dash-post-job">Post Jobs</a></li>
                                                        <li><a className="link-tag" href="blog-grid">Blog Grid</a></li>
                                                        <li><a className="link-tag" href="contact">Contact</a></li>
                                                        <li><a className="link-tag" href="job-list">Jobs Listing</a></li>
                                                        <li><a className="link-tag" href="job-detail">Jobs details</a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6 col-sm-6">
                                                <div className="widget widget_services ftr-list-center">
                                                    <h3 className="widget-title">Helpful Resources</h3>
                                                    <ul>
                                                        <li><a className="link-tag" href="faq">FAQs</a></li>
                                                        <li><a className="link-tag" href="employer-detail">Employer detail</a></li>
                                                        <li><a className="link-tag" href="dash-my-profile">Profile</a></li>
                                                        <li><a className="link-tag" href="error-404">404 Page</a></li>
                                                        <li><a className="link-tag" href="pricing">Pricing</a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="col-lg-3 col-md-6 col-sm-6">
                                                <div className="widget widget_services ftr-list-center">
                                                    <h3 className="widget-title">Quick Links</h3>
                                                    <ul>
                                                        <li><a className="link-tag" href="index">Home</a></li>
                                                        <li><a className="link-tag" href="about-1">About us</a></li>
                                                        <li><a className="link-tag" href="dash-bookmark">Bookmark</a></li>
                                                        <li><a className="link-tag" href="job-grid">Jobs</a></li>
                                                        <li><a className="link-tag" href="employer-list">Employer</a></li>
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
                                        <li><a className="link-tag" href="javascript:void(0);-f"></a></li>
                                        <li><a className="link-tag" href="javascript:void(0);"></a></li>
                                        <li><a className="link-tag" href="javascript:void(0);m"></a></li>
                                        <li><a className="link-tag" href="javascript:void(0);"></a></li>
                                    </ul>

                                </div>

                            </div>

                        </div>

                    </footer>
                    {/* <!-- FOOTER END --> */}

                    {/* <!-- BUTTON TOP START --> */}
                    <button className="scroltop"><span className="fa fa-angle-up  relative" id="btn-vibrate"></span></button>

                    <Signup_Pop />
                    <LoginPop />

                </div>


                {/* <!-- STYLE SWITCHER  ======= -->  */}
                <div className="styleswitcher">

                    <div className="switcher-btn-bx">
                        <a className="switch-btn">
                            <span className="fa fa-cog fa-spin"></span>
                        </a>
                    </div>
                    {/*  
 <div className="styleswitcher-inner">
 
     <h6 className="switcher-title">Color Skin</h6>
     <ul className="color-skins">
         <li><a className="theme-skin skin-1" className="link-tag" href="contacta39b?theme=css/skin/skin-1"></a></li>
         <li><a className="theme-skin skin-2" className="link-tag" href="contact61e7?theme=css/skin/skin-2"></a></li>
         <li><a className="theme-skin skin-3" className="link-tag" href="contactcce5?theme=css/skin/skin-3"></a></li>
         <li><a className="theme-skin skin-4" className="link-tag" href="contact13f7?theme=css/skin/skin-4"></a></li>
         <li><a className="theme-skin skin-5" className="link-tag" href="contact19a6?theme=css/skin/skin-5"></a></li>
         <li><a className="theme-skin skin-6" className="link-tag" href="contactfe5c?theme=css/skin/skin-6"></a></li>
         <li><a className="theme-skin skin-7" className="link-tag" href="contactab47?theme=css/skin/skin-7"></a></li>
         <li><a className="theme-skin skin-8" className="link-tag" href="contact5f8d?theme=css/skin/skin-8"></a></li>
         <li><a className="theme-skin skin-9" className="link-tag" href="contact5663?theme=css/skin/skin-9"></a></li>
         <li><a className="theme-skin skin-10" className="link-tag" href="contact28ac?theme=css/skin/skin-10"></a></li>
         
     </ul>           
     
 </div>     */}
                </div>
                {/* <!-- STYLE SWITCHER END ==== --> */}


            </body>

        </div>
    )
}