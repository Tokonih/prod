import React, { useEffect, useState } from "react";
import axios from "axios";
import bgImage from "../assets/images/images/banner/1.jpg";
import { Link } from "react-router-dom";

import f_bg from "../assets/images/images/f-bg.jpg"
import banner_1 from "../assets/images/images/banner/1.jpg"
import add_bg from "../assets/images/images/add-bg.jpg"
import PublicHeader from "../components/PublicHeader";
import Signup_Pop from "../components/Signup_Pop";
import LoginPop from "../components/LoginPop";
import { BASEURL } from "../common/config";


export default function JobList() {

    const token = localStorage.getItem("token");

    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const getJob = async () => {
            let api_url = BASEURL + "/jobs";
            const headers = { Authorization: `Bearer ${token}` };
            try {
                const res = await axios.get(api_url, { headers });
                console.log(res.data);
                setJobs(res.data.data);
            } catch (err) {
                console.log(err);
            }
            setIsLoading(false);
        };
        getJob();
    }, []);

    return (
        <div >

            <PublicHeader />

            {/* CONTENT START */}
            <div className="page-content">

                {/* <!-- INNER PAGE BANNER --> */}
                <div className="wt-bnr-inr overlay-wraper bg-center" style={{ backgroundImage: `url(${banner_1})` }}>
                    <div className="overlay-main site-bg-white opacity-01"></div>
                    <div className="container">
                        <div className="wt-bnr-inr-entry">
                            <div className="banner-title-outer">
                                <div className="banner-title-name">
                                    <h2 className="wt-title">The Most Exciting Jobs</h2>
                                </div>
                            </div>
                            {/* <!-- BREADCRUMB ROW -->                             */}

                            <div>
                                <ul className="wt-breadcrumb breadcrumb-style-2">
                                    <li><a href="index">Home</a></li>
                                    <li>Job List</li>
                                </ul>
                            </div>

                            {/* <!-- BREADCRUMB ROW END -->                         */}
                        </div>
                    </div>
                </div>
                {/* <!-- INNER PAGE BANNER END --> */}


                {/* <!-- Employer List START --> */}
                {/* <!-- OUR BLOG START --> */}
                <div class="section-full p-t120  p-b90 site-bg-white">


                    <div class="container">
                        <div class="row">

                            <div class="col-lg-4 col-md-12 rightSidebar">

                                <div class="side-bar">

                                    <div class="sidebar-elements search-bx">

                                        <form>

                                            <div class="form-group mb-4">
                                                <h4 class="section-head-small mb-4">Category</h4>
                                                <select class="wt-select-bar-large selectpicker" data-live-search="true"
                                                    data-bv-field="size">
                                                    <option selected>All Category</option>
                                                    <option>Web Designer</option>
                                                    <option>Developer</option>
                                                    <option>Acountant</option>
                                                </select>
                                            </div>

                                            <div class="form-group mb-4">
                                                <h4 class="section-head-small mb-4">Keyword</h4>
                                                <div class="input-group">
                                                    <input type="text" class="form-control"
                                                        placeholder="Job Title or Keyword" />
                                                    <button class="btn" type="button"><i
                                                        class="feather-search"></i></button>
                                                </div>
                                            </div>

                                            <div class="form-group mb-4">
                                                <h4 class="section-head-small mb-4">Location</h4>
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Search location" />
                                                    <button class="btn" type="button"><i
                                                        class="feather-map-pin"></i></button>
                                                </div>
                                            </div>

                                            <div class="twm-sidebar-ele-filter">
                                                <h4 class="section-head-small mb-4">Job Type</h4>
                                                <ul>
                                                    <li>
                                                        <div class=" form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="exampleCheck1" />
                                                            <label class="form-check-label"
                                                                for="exampleCheck1">Freelance</label>
                                                        </div>
                                                        <span class="twm-job-type-count">09</span>
                                                    </li>

                                                    <li>
                                                        <div class=" form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="exampleCheck2" />
                                                            <label class="form-check-label" for="exampleCheck2">Full
                                                                Time</label>
                                                        </div>
                                                        <span class="twm-job-type-count">07</span>
                                                    </li>

                                                    <li>
                                                        <div class=" form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="exampleCheck3" />
                                                            <label class="form-check-label"
                                                                for="exampleCheck3">Internship</label>
                                                        </div>
                                                        <span class="twm-job-type-count">15</span>
                                                    </li>

                                                    <li>
                                                        <div class=" form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="exampleCheck4" />
                                                            <label class="form-check-label" for="exampleCheck4">Part
                                                                Time</label>
                                                        </div>
                                                        <span class="twm-job-type-count">20</span>
                                                    </li>

                                                    <li>
                                                        <div class=" form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="exampleCheck5" />
                                                            <label class="form-check-label"
                                                                for="exampleCheck5">Temporary</label>
                                                        </div>
                                                        <span class="twm-job-type-count">22</span>
                                                    </li>

                                                    <li>
                                                        <div class=" form-check">
                                                            <input type="checkbox" class="form-check-input"
                                                                id="exampleCheck6" />
                                                            <label class="form-check-label"
                                                                for="exampleCheck6">Volunteer</label>
                                                        </div>
                                                        <span class="twm-job-type-count">25</span>
                                                    </li>

                                                </ul>
                                            </div>

                                            <div class="twm-sidebar-ele-filter">
                                                <h4 class="section-head-small mb-4">Date Posts</h4>
                                                <ul>
                                                    <li>
                                                        <div class="form-check">
                                                            <input type="radio" class="form-check-input" id="exampleradio1" />
                                                            <label class="form-check-label" for="exampleradio1">Last
                                                                hour</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="form-check">
                                                            <input type="radio" class="form-check-input" id="exampleradio2" />
                                                            <label class="form-check-label" for="exampleradio2">Last 24
                                                                hours</label>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div class="form-check">
                                                            <input type="radio" class="form-check-input" id="exampleradio3" />
                                                            <label class="form-check-label" for="exampleradio3">Last 7
                                                                days</label>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div class="form-check">
                                                            <input type="radio" class="form-check-input" id="exampleradio4" />
                                                            <label class="form-check-label" for="exampleradio4">Last 14
                                                                days</label>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div class="form-check">
                                                            <input type="radio" class="form-check-input" id="exampleradio5" />
                                                            <label class="form-check-label" for="exampleradio5">Last 30
                                                                days</label>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div class="form-check">
                                                            <input type="radio" class="form-check-input" id="exampleradio6" />
                                                            <label class="form-check-label" for="exampleradio6">All</label>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>

                                            <div class="twm-sidebar-ele-filter">
                                                <h4 class="section-head-small mb-4">Type of employment</h4>
                                                <ul>
                                                    <li>
                                                        <div class="form-check">
                                                            <input type="radio" class="form-check-input" id="Freelance1" />
                                                            <label class="form-check-label"
                                                                for="Freelance1">Freelance</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="form-check">
                                                            <input type="radio" class="form-check-input" id="FullTime1" />
                                                            <label class="form-check-label" for="FullTime1">Full
                                                                Time</label>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div class="form-check">
                                                            <input type="radio" class="form-check-input" id="Intership1" />
                                                            <label class="form-check-label"
                                                                for="Intership1">Intership</label>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div class="form-check">
                                                            <input type="radio" class="form-check-input" id="Part-Time1" />
                                                            <label class="form-check-label" for="Part-Time1">Part
                                                                Time</label>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>

                                        </form>

                                    </div>

                                    <div class="widget tw-sidebar-tags-wrap">
                                        <h4 class="section-head-small mb-4">Tags</h4>

                                        <div class="tagcloud">
                                            <a href="job-list.html">General</a>
                                            <a href="job-list.html">Jobs </a>
                                            <a href="job-list.html">Payment</a>
                                            <a href="job-list.html">Application </a>
                                            <a href="job-list.html">Work</a>
                                            <a href="job-list.html">Recruiting</a>
                                            <a href="job-list.html">Employer</a>
                                            <a href="job-list.html">Income</a>
                                            <a href="job-list.html">Tips</a>
                                        </div>
                                    </div>


                                </div>

                                <div class="twm-advertisment" >
                                    <div class="overlay"></div>
                                    <h4 class="twm-title">Recruiting?</h4>
                                    <p>Get Best Matched Jobs On your <br />
                                        Email. Add Resume NOW!</p>
                                    <a href="about-1.html" class="site-button white">Read More</a>
                                </div>

                            </div>

                            <div class="col-lg-8 col-md-12">
                                {/* <!--Filter Short By--> */}


                                <div class="row">
                                    {/* <!--Block one--> */}
                                    {jobs.map((data, index) => {

                                        return (<div class="col-lg-6 col-md-12 m-b30">

                                            <div class="twm-jobs-grid-style1">
                                                <div class="twm-media">
                                                    <img src={data.company_id.image} alt="#" />
                                                </div>
                                                <span class="twm-job-post-duration">Deadline <b>({new Date(data.endDate).getDate()} - {new Date(data.endDate).getMonth()} {new Date(data.endDate).getFullYear()})</b> </span>
                                                <div class="twm-jobs-category green"><span class="twm-bg-green">{data.jobType}</span></div>
                                                <div class="twm-mid-content">
                                                    <Link to={`/job-detail/${data._id}`} class="twm-job-title">
                                                        <h4>{data.jobTitle}</h4>
                                                    </Link>
                                                    <p class="twm-job-address">{data.city} , {data.country}
                                                    </p>
                                                    {data.company_id ? <Link to={`/job-detail/${data._id}`}
                                                        class="twm-job-websites site-text-primary">Company ({data.company_id.companyName})</Link> : <></>}
                                                </div>
                                                <div class="twm-right-content">

                                                    <div class="twm-jobs-amount">${data.offeredSalary} <span>/ Annual Salary</span></div>
                                                    <Link to={`/job-detail/${data._id}`} class="twm-jobs-browse site-text-primary">Browse
                                                        Job</Link>
                                                </div>
                                            </div>

                                        </div>)
                                    })}



                                </div>

                                <div class="pagination-outer">
                                    <div class="pagination-style1">
                                        <ul class="clearfix">
                                            <li class="prev"><a href="javascript:;"><span> <i class="fa fa-angle-left"></i>
                                            </span></a></li>
                                            <li><a href="javascript:;">1</a></li>
                                            <li class="active"><a href="javascript:;">2</a></li>
                                            <li><a href="javascript:;">3</a></li>
                                            <li><a class="javascript:;" href="javascript:;"><i
                                                class="fa fa-ellipsis-h"></i></a></li>
                                            <li><a href="javascript:;">5</a></li>
                                            <li class="next"><a href="javascript:;"><span> <i class="fa fa-angle-right"></i>
                                            </span></a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- OUR BLOG END --> */}
                {/* <!-- Employer List END --> */}



            </div>
            {/* CONTENT END*/}

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
                    {/* <!-- NEWS LETTER SECTION END -->
           <!-- FOOTER BLOCKES START -->   */}
                    <div className="footer-top">
                        <div className="row">

                            <div className="col-lg-3 col-md-12">

                                <div className="widget widget_about">
                                    <div className="logo-footer clearfix">
                                        <a href="index"><img src="images/logo-light.png" alt="" /></a>
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
                                                <li><a href="dashboard">User Dashboard</a></li>
                                                <li><a href="dash-resume-alert">Alert resume</a></li>
                                                <li><a href="candidate-grid">Candidates</a></li>
                                                <li><a href="blog-list">Blog List</a></li>
                                                <li><a href="blog-single">Blog single</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="widget widget_services ftr-list-center">
                                            <h3 className="widget-title">For Employers</h3>
                                            <ul>
                                                <li><a href="dash-post-job">Post Jobs</a></li>
                                                <li><a href="blog-grid">Blog Grid</a></li>
                                                <li><a href="contact">Contact</a></li>
                                                <li><a href="job-list">Jobs Listing</a></li>
                                                <li><a href="job-detail">Jobs details</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="widget widget_services ftr-list-center">
                                            <h3 className="widget-title">Helpful Resources</h3>
                                            <ul>
                                                <li><a href="faq">FAQs</a></li>
                                                <li><a href="employer-detail">Employer detail</a></li>
                                                <li><a href="dash-my-profile">Profile</a></li>
                                                <li><a href="error-404">404 Page</a></li>
                                                <li><a href="pricing">Pricing</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-3 col-md-6 col-sm-6">
                                        <div className="widget widget_services ftr-list-center">
                                            <h3 className="widget-title">Quick Links</h3>
                                            <ul>
                                                <li><a href="index">Home</a></li>
                                                <li><a href="about-1">About us</a></li>
                                                <li><a href="dash-bookmark">Bookmark</a></li>
                                                <li><a href="job-grid">Jobs</a></li>
                                                <li><a href="employer-list">Employer</a></li>
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
            {/* 
   <!-- BUTTON TOP START --> */}
            <button className="scroltop"><span className="fa fa-angle-up  relative" id="btn-vibrate"></span></button>

            <Signup_Pop />
            <LoginPop />


        </div>
    );
}
