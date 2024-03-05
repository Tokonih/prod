import banner_1 from "../assets/images/images/banner/1.jpg"
import icon1 from "../assets/images/images/work-process/icon1.png"
import icon4 from "../assets/images/images/work-process/icon4.png"
import icon3 from "../assets/images/images/work-process/icon3.png"
import gir_large from "../assets/images/images/gir-large.png"
import w1 from "../assets/images/images/client-logo/w1.png"
import w2 from "../assets/images/images/client-logo/w2.png"
import w3 from "../assets/images/images/client-logo/w3.png"
import w4 from "../assets/images/images/client-logo/w4.png"
import w5 from "../assets/images/images/client-logo/w5.png"
import w6 from "../assets/images/images/client-logo/w6.png"
import logo_11 from "../assets/images/images/logo-11.png";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASEURL } from "../common/config";
import { useParams } from "react-router-dom";




export default function Admin_Nav() {
    const token = localStorage.getItem("token");
    const userDetails = JSON.parse(localStorage.getItem("user-details"));
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div>
            {/* HEADERR START */}
            <header className="site-header header-style-3 h-page-11-hdr mobile-sider-drawer-menu">
                <div className="sticky-header main-bar-wraper navbar-expand-lg">
                    <div className="main-bar">
                        <div className="container-fluid clearfix">
                            <div className="logo-header">
                                <div className="logo-header-inner logo-header-one">
                                    <Link to="/">
                                        <img src={logo_11} alt="" />
                                    </Link>
                                </div>
                            </div>

                            {/* NAV Toggle Button */}
                            <button
                                id="mobile-side-drawer"
                                data-target=".header-nav"
                                data-toggle="collapse"
                                type="button"
                                className="navbar-toggler collapsed"
                            >
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar icon-bar-first"></span>
                                <span className="icon-bar icon-bar-two"></span>
                                <span className="icon-bar icon-bar-three"></span>
                            </button>

                            {/* MAIN Nav */}
                            <div className="nav-animation header-nav navbar-collapse collapse d-flex justify-content-center">
                                <ul className="nav navbar-nav">
                                    <li>
                                        {/* <Link to="/" className="link-tag">Home</Link> */}
                                    </li>
                                    <li>
                                        {/* <Link to="/job-list" className="link-tag">Jobs</Link> */}
                                    </li>
                                    <li>
                                        {/* <Link to="/employer-list" className="link-tag">Employers</Link> */}
                                    </li>
                                    <li>
                                        {/* <Link to="/about" className="link-tag">About Us</Link> */}
                                    </li>
                                    <li>
                                        {/* <Link to="/contact" className="link-tag">Contact</Link> */}
                                    </li>
                                    <li>
                                        {/* <Link to="/blog" className="link-tag">Blog</Link> */}
                                    </li>
                                </ul>
                            </div>

                            {/* Header Right Section */}
                            <div className="extra-nav header-2-nav">
                                <div className="extra-cell">
                                    <div className="header-search">
                                        <Link to="/#search" className="header-search-icon">
                                            <i className="feather-search"></i>
                                        </Link>
                                    </div>
                                </div>
                                <div className="extra-cell">
                                    <div className="header-nav-btn-section">
                                        <div className="twm-nav-btn-left">
                                       <a
                                        	    // id="sign_up_popup2"
                                                className="twm-nav-sign-up"
                                                data-bs-toggle="modal"
                                                href="#sign_up_popup2"
                                                role="button"
                                            >
                                                <i className="feather-log-in"></i> Sign Up
                                            </a> 

                                        </div>
                                        {/* {userDetails != null && userDetails.role === "company" ? <div className=" link-tag twm-nav-btn-right">
                                            <Link to="/com-post-jobs" className=" link-tag twm-nav-post-a-job">
                                                <i className=" link-tag feather-briefcase"></i> Post a job
                                            </Link>
                                        </div> : <></>} */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SITE Search */}
                    <div id="search">
                        <span className="close"></span>
                        <form
                            role="search"
                            id="searchform"
                            action="https://thewebmax.org/search"
                            method="get"
                            className="radius-xl"
                        >
                            <input
                                className="form-control"
                                value=""
                                name="q"
                                type="search"
                                placeholder="Type to search"
                            />
                            <span className="input-group-append">
                                <button type="button" className="search-btn">
                                    <i className="fa fa-paper-plane"></i>
                                </button>
                            </span>
                        </form>
                    </div>
                </div>
            </header>
            {/* HEADER END  */}
        </div>

    )
}