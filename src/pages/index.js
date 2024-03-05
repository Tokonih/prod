import React from "react";
import { Link } from "react-router-dom";
import logo_11 from "../assets/images/images/logo-11.png";
import "../styles/datepicker.css";
import "../styles/dropzone.css";
// import "../styles/flaticon.css"
import "../styles/scrollbar.css";
import "../styles/style.css";
import aboutPic1 from "../assets/images/images/home-11/about-pic1.png";
import higPic2 from "../assets/images/images/home-8/hig-pic2.png";
import pic1 from "../assets/images/images/home-7/img-bx/pic1.jpg";
import u_1 from "../assets/images/images/main-slider/slider2/user/u-1.jpg";
import u_2 from "../assets/images/images/main-slider/slider2/user/u-2.jpg";
import u_3 from "../assets/images/images/main-slider/slider2/user/u-3.jpg";
import u_4 from "../assets/images/images/main-slider/slider2/user/u-4.jpg";
import u_5 from "../assets/images/images/main-slider/slider2/user/u-5.jpg";
import u_6 from "../assets/images/images/main-slider/slider2/user/u-6.jpg";
import icon_2 from "../assets/images/images/main-slider/slider2/icon-2.png";
import right_pic1 from "../assets/images/images/home-11/banner-bg/right-pic1.jpg";
import icon_1 from "../assets/images/images/main-slider/slider2/icon-1.png";
import bx_pic3 from "../assets/images/images/home-7/img-bx/pic3.jpg";
import testimonial_pic1 from "../assets/images/images/home-6/testimonial/pic1.jpg";
import testimonial_pic2 from "../assets/images/images/home-6/testimonial/pic2.jpg";
import testimonial_pic3 from "../assets/images/images/home-6/testimonial/pic3.jpg";
import testimonial_3d_pic from "../assets/images/images/home-8/testimonial-3d-pic.png";
import bg10 from "../assets/images/images/blog/latest/bg10.jpg"
import bg11 from "../assets/images/images/blog/latest/bg11.jpg"
import bg12 from "../assets/images/images/blog/latest/bg12.jpg"
import logo_white from "../assets/images/images/logo-white.png"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Signup_Pop from "../components/Signup_Pop";
import LoginPop from "../components/LoginPop";
import PublicHeader from "../components/PublicHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASEURL } from "../common/config";
export default function Index() {
  const NextArrow = (props) => <div {...props} className="slick-next"></div>;
  const PrevArrow = (props) => <div {...props} className="slick-prev"></div>;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const testimonialSlides = [
    {
      id: 1,
      name: "Guy Hawkins",
      position: "Software Engineering at Google",
      description:
        "I just got a job that I applied for via careerfy! I used the site all the time during my job hunt. Get notification every day and you can easily apply directly.",
      image: testimonial_pic1,
      thumbnail: testimonial_pic1,
    },

    {
      id: 2,
      name: "Collis Pon",
      position: "UI/UX Designer",
      description:
        "I just got a job that I applied for via careerfy! I used the site all the time during my job hunt. Get notification every day and you can easily apply directly.",
      image: testimonial_pic2,
      thumbnail: testimonial_pic2,
    },

    {
      id: 3,
      name: "Peter Hawkins",
      position: "Medical Professed ",
      description:
        "I just got a job that I applied for via careerfy! I used the site all the time during my job hunt. Get notification every day and you can easily apply directly.",
      image: testimonial_pic3,
      thumbnail: testimonial_pic3,
    },

    // Add more testimonial slides as needed
  ];

  const testimonialSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        testimonialSettings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [recentArticle, setResentArticle] = useState()


  useEffect(()=>{
      const getArticle = async () => {
          let api_url = BASEURL + "/articles/" 
          console.log(api_url)
          // const headers = { Authorization: `Bearer ${token}` };
          try {
              const res = await axios.get(api_url);
              console.log(res.data.data)
              setResentArticle(res.data.data.slice(0, 3))
          } catch (err) {
              console.log(err);
          }
      };
      getArticle()
  },[])

  const [jobCategory, setJobCategory] = useState();
  const [JobCategoryID, setJobCategoryId] = useState();
  const [location, setLocation] = useState()

  
  // Job category
  useEffect(() => {
    fetch("http://localhost:7300/job-categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setJobCategory(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        console.error("Fetch error:", error.message);
      });
  }, []);


  const handleJobCategory = (event) => {
    setJobCategoryId(event.target.options[event.target.selectedIndex].value);
  };



  const handleSearch = (e) => {
    e.preventDefault()


}

  return (
    <div>
     <PublicHeader/>

      {/* CONTENT START */}
      <div className="page-content">
        {/* BANNER START */}
        <div className="twm-home-11-banner-section" style={{ height:'auto' }}>
          <div className="container">
            <div className="row">
              {/* Left Section */}
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="twm-bnr-left-section">
                  <div className="twm-bnr-title-large">
                    It’s Easy to Find Your{" "}
                    <span className="site-text-primary">Dream Job </span>
                  </div>
                  <div className="twm-bnr-discription">
                    Your dream job is waiting for you.
                  </div>
                  <div className="twm-bnr-search-bar">
                    <form onSubmit={handleSearch}>
                      <div className="row">
                        {/* All Category */}
                        <div className="form-group col-xl-4 col-lg-12 col-md-12">
                          <label>Type</label>
                          <select
                            className="wt-search-bar-select selectpicker"
                            data-live-search="true"
                            title=""
                            id="j-All_Category"
                            data-bv-field="size"
                            onChange={handleJobCategory}
                            value={JobCategoryID}
                          >
                            <option>Select Category</option>
                            {jobCategory &&
                              jobCategory.map((cat) => (
                                <option key={cat._id} value={cat._id}>
                                  {cat.name}
                                </option>
                              ))}
                          </select>
                        </div>

                        {/* Location */}
                        <div className="form-group col-xl-5 col-lg-12 col-md-12">
                          <label>Location</label>
                          <div className="twm-inputicon-box">
                            <input
                              name="username"
                              type="text"
                              required
                              className="form-control"
                              placeholder="Enter country..."
                              onChange={(e)=>setLocation(e.target.value)}
                              value={location}
                            />
                            <i className="twm-input-icon fas fa-map-marker-alt"></i>
                          </div>
                        </div>

                        {/* Find job btn */}
                        <div className="form-group col-xl-3 col-lg-6 col-md-6 col-sm-6">
                          <Link to={`/searched-job-list/${JobCategoryID}?location_id=${location}`} type="" className="site-button">
                            Find Job
                          </Link>
                        </div>
                      </div>
                    </form>
                  </div>

                 
                </div>
              </div>

              {/* Right Section */}
              <div className="col-xl-6 col-lg-6 col-md-12 twm-bnr-right-main">
                <div className="twm-bnr-right-content">
                  <div className="bnr-media-wrap">
                    <div className="bnr-media">
                      <img src={right_pic1} alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*     BANNER END  */}

        {/* ABOUT SECTION START */}
        <div className="section-full p-t120 p-b90 site-bg-white twm-about-1-area">
          <div className="container">
            <div className="twm-about-1-section-wrap">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="twm-about-1-section">
                    <div className="twm-media">
                      <img src={aboutPic1} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="twm-about-1-section-right">
                    <div className="section-head left wt-small-separator-outer">
                      <div className="wt-small-separator site-text-primary">
                        <div>About </div>
                      </div>
                      <h2 className="wt-title">
                        Millions of jobs. Find the one that’s right for you.
                      </h2>
                    </div>
                    <ul className="description-list">
                      <li>
                        <i className="feather-check"></i>
                        Full lifetime access
                      </li>
                      <li>
                        <i className="feather-check"></i>
                        20+ downloadable resources
                      </li>
                      <li>
                        <i className="feather-check"></i>
                        Certificate of completion
                      </li>
                      <li>
                        <i className="feather-check"></i>
                        Free Trial 7 Days
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="twm-about-1-bottom-wrap">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="twm-card-blocks">
                    <div className="twm-icon pink">
                      <img src={icon_2} alt="" />
                    </div>
                    <div className="twm-content">
                      <div className="tw-count-number text-clr-pink">
                        <span className="counter">98</span> +
                      </div>
                      <p className="icon-content-info">Job For Countries </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="twm-card-blocks-2">
                    <div className="twm-pics">
                      <span>
                        <img src={u_1} alt="" />
                      </span>
                      <span>
                        <img src={u_2} alt="" />
                      </span>
                      <span>
                        <img src={u_3} alt="" />
                      </span>
                      <span>
                        <img src={u_4} alt="" />
                      </span>
                      <span>
                        <img src={u_5} alt="" />
                      </span>
                      <span>
                        <img src={u_6} alt="" />
                      </span>
                    </div>
                    <div className="twm-content">
                      <div className="tw-count-number text-clr-green">
                        <span className="counter">3</span>K+
                      </div>
                      <p className="icon-content-info">Jobs Done</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="twm-card-blocks">
                    <div className="twm-icon">
                      <img src={icon_1} alt="" />
                    </div>
                    <div className="twm-content">
                      <div className="tw-count-number text-clr-sky">
                        <span className="counter">12</span>K+
                      </div>
                      <p className="icon-content-info">Companies Jobs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ABOUT SECTION END  */}

        {/* HOW TO GET YOUR JOB SECTION START */}
        <div className="section-full p-t120 p-b90 site-bg-light twm-how-t-get-wrap7">
          <div className="container">
            <div className="twm-how-t-get-section">
              <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-12">
                  <div className="twm-how-t-get-section-left">
                    <div className="section-head left wt-small-separator-outer">
                      <div className="wt-small-separator site-text-primary">
                        <div>How to get your job</div>
                      </div>
                      <h2 className="wt-title">
                        Build Your Personal Account Profile
                      </h2>
                      <p>
                        Create an account for job information that you wanted,
                        get notification every day, and you can easily apply
                        directly to the company you want. Create an account now
                        for free.
                      </p>
                    </div>
                    <div className="twm-how-t-get-bottom">
                      <Link to="/about-1" className="site-button">
                        Edit Profile
                      </Link >
                      <div className="twm-left-icon-bx">
                        <div className="twm-left-icon-media site-bg-primary">
                          <i className="flaticon-bell site-text-white"></i>
                        </div>
                        <div className="twm-left-icon-content">
                          <h4 className="icon-title">New Interview</h4>
                          <p>You have a new interview today</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-12">
                  <div className="twm-how-t-get-section-right">
                    <div className="twm-media">
                      <img src={higPic2} alt="#" />
                    </div>
                    <div className="twm-left-img-bx bounce">
                      <div className="twm-left-img-media">
                        <img src={pic1} alt="#" />
                      </div>
                      <div className="twm-left-img-content">
                        <h4 className="icon-title">Complete your profile</h4>
                        <p>95% Completed</p>
                      </div>
                    </div>
                    <div className="twm-profile-card bounce2">
                      <div className="twm-profile-pic">
                        <img src={bx_pic3} alt="#" />
                      </div>
                      <div className="twm-profile-info">
                        <h4 className="twm-profile-name">Devid Smith</h4>
                        <div className="twm-profile-position">
                          UI/UX Designer
                        </div>
                        {/* Uncomment the following line when handling click events */}
                        {/* <a className="site-button-link  underline" onClick={this.handleHireClick}>Hire Me!</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* HOWTO GET YOUR JOB SECTION START */}
      </div>

      {/*  Jobs Category START  */}
      <div className="section-full p-t120 p-b90 site-bg-white job-categories-home-5-wrap twm-bdr-bottom-1">
        <div className="container">
          <div className="section-head center wt-small-separator-outer">
            <div className="wt-small-separator site-text-primary">
              <div>Browse By Category</div>
            </div>
            <h2 className="wt-title">Find the job that’s perfect for you.</h2>
          </div>
        </div>
        <div className="section-content twm-jobs-grid-h5-section-outer">
          <div
            className="twm-jobs-grid-h5-section overlay-wraper"
            style={{ backgroundImage: "url(images/home-5/cate-bg.jpg)" }}
          >
            <div className="overlay-main site-bg-primary opacity-09"></div>
            <Slider {...settings}>
              <div className=" row d-flex align-items-center justify-content-center gap-2">
                <div className="job-categories-home-5 col-lg-3">
                  <div className="twm-media cat-bg-clr-1">
                    <div className="flaticon-deal"></div>
                  </div>
                  <div className="twm-content">
                    <Link to="/job-detail">Marketing & Sale</Link >
                    <div className="twm-jobs-available">
                      1526 Jobs Available
                    </div>
                  </div>
                </div>

                <div className="job-categories-home-5 col-lg-3">
                  <div className="twm-media cat-bg-clr-1">
                    <div className="flaticon-deal"></div>
                  </div>
                  <div className="twm-content">
                    <Link to="/job-detail">Marketing & Sale</Link >
                    <div className="twm-jobs-available">
                      1526 Jobs Available
                    </div>
                  </div>
                </div>

                <div className="job-categories-home-5 col-lg-3">
                  <div className="twm-media cat-bg-clr-1">
                    <div className="flaticon-deal"></div>
                  </div>
                  <div className="twm-content">
                    <Link to="/job-detail">Marketing & Sale</Link >
                    <div className="twm-jobs-available">
                      1526 Jobs Available
                    </div>
                  </div>
                </div>

                <div className="job-categories-home-5 col-lg-3">
                  <div className="twm-media cat-bg-clr-1">
                    <div className="flaticon-deal"></div>
                  </div>
                  <div className="twm-content">
                    <Link to="/job-detail">Marketing & Sale</Link >
                    <div className="twm-jobs-available">
                      1526 Jobs Available
                    </div>
                  </div>
                </div>

                <div className="job-categories-home-5 col-lg-3">
                  <div className="twm-media cat-bg-clr-1">
                    <div className="flaticon-deal"></div>
                  </div>
                  <div className="twm-content">
                    <Link to="/job-detail">Marketing & Sale</Link >
                    <div className="twm-jobs-available">
                      1526 Jobs Available
                    </div>
                  </div>
                </div>

                <div className="job-categories-home-5 col-lg-3">
                  <div className="twm-media cat-bg-clr-1">
                    <div className="flaticon-deal"></div>
                  </div>
                  <div className="twm-content">
                    <Link to="/job-detail">Marketing & Sale</Link >
                    <div className="twm-jobs-available">
                      1526 Jobs Available
                    </div>
                  </div>
                </div>
              </div>

              <div className=" row d-flex align-items-center justify-content-center gap-2">
                <div className="job-categories-home-5 col-lg-3">
                  <div className="twm-media cat-bg-clr-1">
                    <div className="flaticon-deal"></div>
                  </div>
                  <div className="twm-content">
                    <Link to="/job-detail">Marketing & Sale</Link >
                    <div className="twm-jobs-available">
                      1526 Jobs Available
                    </div>
                  </div>
                </div>

                <div className="job-categories-home-5 col-lg-3">
                  <div className="twm-media cat-bg-clr-1">
                    <div className="flaticon-deal"></div>
                  </div>
                  <div className="twm-content">
                    <Link to="/job-detail">Marketing & Sale</Link >
                    <div className="twm-jobs-available">
                      1526 Jobs Available
                    </div>
                  </div>
                </div>

                <div className="job-categories-home-5 col-lg-3">
                  <div className="twm-media cat-bg-clr-1">
                    <div className="flaticon-deal"></div>
                  </div>
                  <div className="twm-content">
                    <Link to="/job-detail">Marketing & Sale</Link >
                    <div className="twm-jobs-available">
                      1526 Jobs Available
                    </div>
                  </div>
                </div>

                <div className="job-categories-home-5 col-lg-3">
                  <div className="twm-media cat-bg-clr-1">
                    <div className="flaticon-deal"></div>
                  </div>
                  <div className="twm-content">
                    <Link to="/job-detail">Marketing & Sale</Link >
                    <div className="twm-jobs-available">
                      1526 Jobs Available
                    </div>
                  </div>
                </div>

                <div className="job-categories-home-5 col-lg-3">
                  <div className="twm-media cat-bg-clr-1">
                    <div className="flaticon-deal"></div>
                  </div>
                  <div className="twm-content">
                    <Link to="/job-detail">Marketing & Sale</Link >
                    <div className="twm-jobs-available">
                      1526 Jobs Available
                    </div>
                  </div>
                </div>

                <div className="job-categories-home-5 col-lg-3">
                  <div className="twm-media cat-bg-clr-1">
                    <div className="flaticon-deal"></div>
                  </div>
                  <div className="twm-content">
                    <Link to="/job-detail">Marketing & Sale</Link >
                    <div className="twm-jobs-available">
                      1526 Jobs Available
                    </div>
                  </div>
                </div>
              </div>

              <div className=" row d-flex align-items-center justify-content-center gap-2">
                <div className="job-categories-home-5 col-lg-3">
                  <div className="twm-media cat-bg-clr-1">
                    <div className="flaticon-deal"></div>
                  </div>
                  <div className="twm-content">
                    <Link to="/job-detail">Marketing & Sale</Link >
                    <div className="twm-jobs-available">
                      1526 Jobs Available
                    </div>
                  </div>
                </div>

                <div className="job-categories-home-5 col-lg-3">
                  <div className="twm-media cat-bg-clr-1">
                    <div className="flaticon-deal"></div>
                  </div>
                  <div className="twm-content">
                    <Link to="/job-detail">Marketing & Sale</Link >
                    <div className="twm-jobs-available">
                      1526 Jobs Available
                    </div>
                  </div>
                </div>

                <div className="job-categories-home-5 col-lg-3">
                  <div className="twm-media cat-bg-clr-1">
                    <div className="flaticon-deal"></div>
                  </div>
                  <div className="twm-content">
                    <Link to="/job-detail">Marketing & Sale</Link >
                    <div className="twm-jobs-available">
                      1526 Jobs Available
                    </div>
                  </div>
                </div>

                <div className="job-categories-home-5 col-lg-3">
                  <div className="twm-media cat-bg-clr-1">
                    <div className="flaticon-deal"></div>
                  </div>
                  <div className="twm-content">
                    <Link to="/job-detail">Marketing & Sale</Link >
                    <div className="twm-jobs-available">
                      1526 Jobs Available
                    </div>
                  </div>
                </div>

                <div className="job-categories-home-5 col-lg-3">
                  <div className="twm-media cat-bg-clr-1">
                    <div className="flaticon-deal"></div>
                  </div>
                  <div className="twm-content">
                    <Link to="/job-detail">Marketing & Sale</Link >
                    <div className="twm-jobs-available">
                      1526 Jobs Available
                    </div>
                  </div>
                </div>

                <div className="job-categories-home-5 col-lg-3">
                  <div className="twm-media cat-bg-clr-1">
                    <div className="flaticon-deal"></div>
                  </div>
                  <div className="twm-content">
                    <Link to="/job-detail">Marketing & Sale</Link >
                    <div className="twm-jobs-available">
                      1526 Jobs Available
                    </div>
                  </div>
                </div>
              </div>
              {/* Add more slides for each category */}
            </Slider>
          </div>
        </div>
      </div>
      {/*  Recruiters END */}

      {/* OUR BLOG STYART */}
      <div className="section-full p-t120 p-b90 site-bg-light-purple">
        <div className="container">
          {/* TITLE START */}
          <div className="section-head center wt-small-separator-outer">
            <div className="wt-small-separator site-text-primary">
              <div>Our Blogs</div>
            </div>
            <h2 className="wt-title">Latest Article</h2>
          </div>
          {/* TITLE END */}

          <div className="section-content">
            <div className="twm-blog-post-3-outer-wrap">
              <div className="row d-flex justify-content-center">
                {
                  recentArticle && recentArticle.map((data)=>(

                    <Link  to={`/blog/${data._id}`} className="col-lg-4 col-md-6 col-sm-12">
                      {/* Block one */}
                      <div className="blog-post twm-blog-post-3-outer">
                        <div className="wt-post-media">
                          <figure to="" style={{height:"300px", width: "100%"}}>
                            <img src={data.image} alt="" style={{height:"100%", width:"100%", objectFit:"cover", aspectRatio:"4/3"}} />
                          </figure >
                        </div>
                        <div className="wt-post-info">
                          <div className="wt-post-meta ">
                            <ul>
                              <li className="post-date">{data.createdAt.slice(0,10)}</li>
                              <li className="post-author">
                                By <>{data.user_id.fullName}</ >
                              </li>
                            </ul>
                          </div>
                          <div className="wt-post-title ">
                            <h4 className="post-title">
                              <>
                               {data.title}
                              </>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                }

                {/* <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="blog-post twm-blog-post-3-outer">
                    <div className="wt-post-media">
                      <Link to="/blog-single">
                        <img src={bg11} alt="" />
                      </Link >
                    </div>
                    <div className="wt-post-info">
                      <div className="wt-post-meta ">
                        <ul>
                          <li className="post-date">March 05, 2023</li>
                          <li className="post-author">
                            By <Link to="/candidate-detail">David Wish</Link >
                          </li>
                        </ul>
                      </div>
                      <div className="wt-post-title ">
                        <h4 className="post-title">
                          <Link to="/blog-single">
                            5 things to know about the March.
                          </Link >
                        </h4>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="blog-post twm-blog-post-3-outer">
                    <div className="wt-post-media">
                      <Link to="/blog-single">
                        <img src={bg12} alt="" />
                      </Link >
                    </div>
                    <div className="wt-post-info">
                      <div className="wt-post-meta ">
                        <ul>
                          <li className="post-date">March 05, 2023</li>
                          <li className="post-author">
                            By <Link to="/candidate-detail">Mike Doe</Link >
                          </li>
                        </ul>
                      </div>
                      <div className="wt-post-title ">
                        <h4 className="post-title">
                          <Link to="/blog-single">
                            Job Board is the most important
                          </Link >
                        </h4>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* OUR BLOG END  */}

      {/* Testimonial START */}
      <div className="section-full p-t120 p-b90 site-bg-white twm-testimonial-page8-wrap">
        <div className="container">
          {/* TITLE START */}
          <div className="section-head center wt-small-separator-outer">
            <div className="wt-small-separator site-text-primary">
              <div>Testimonials</div>
            </div>
            <h2 className="wt-title">Jobseeker reviews through Joblance.</h2>
          </div>
          {/* TITLE END */}
          <div className="twm-testimonial-page8-section">
            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="twm-testimonial-page8-left">
                  <div className="twm-media bounce2">
                    <img src={testimonial_3d_pic} alt="#" />
                  </div>
                  <div className="testimonial-outline-text-small">
                    <span>Jobseeker</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="twm-testimonial-page8-right">
                  <div className="testimonial-thumb-1-wrap">
                    <Slider {...settings}>
                      {testimonialSlides.map((testimonial) => (
                        <div key={testimonial.id} className="twm-testi-content">
                          <div className="t-testimonial-top">
                            <div className="t-quote">
                              <i className="fa fa-quote-left"></i>
                            </div>
                          </div>
                          <div className="twm-testi-media">
                            <img
                              src={testimonial}
                              alt={`testimonial-${testimonial.id}`}
                            />
                          </div>
                          <div className="t-discription">
                            {testimonial.description}
                          </div>
                          <div className="twm-testi-detail">
                            <div className="twm-testi-name text-bold fw-semibold mt-2 mb-2">
                              {testimonial.name}
                            </div>
                            <div className="twm-testi-position  mt-2 mb-2">
                              {testimonial.position}
                            </div>
                            <div className="d-flex align-items-center justify-content-start gap-2">
                              <img
                                key={testimonial.id}
                                src={testimonial.image}
                                alt={`testimonial-${testimonial.id}`}
                                style={{ borderRadius: "50%", height: "50px" }}
                              />

                              <img
                                key={testimonial.id}
                                src={testimonial.image}
                                alt={`testimonial-${testimonial.id}`}
                                style={{ borderRadius: "50%", height: "50px" }}
                              />

                              <img
                                key={testimonial.id}
                                src={testimonial.image}
                                alt={`testimonial-${testimonial.id}`}
                                style={{ borderRadius: "50%", height: "50px" }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                  {/* Testimonial Thumbnails */}
                  {/* <Slider className="testimonial-thumbpic-1" {...settings}>
                                        {testimonialSlides.map((testimonial) => (
                                            <div key={testimonial.id} className="swiper-slide">
                                                <div className="twm-testi-media">
                                                    <img src={testimonial.thumbnail} alt={`testimonial-thumb-${testimonial.id}`} />
                                                </div>
                                            </div>
                                        ))}
                                    </Slider> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial END */}

      <Signup_Pop />
      <LoginPop />

      {/* FOOTER START */}
      <footer className="footer-dark">
        <div className="container">
          {/* NEWS LETTER SECTION START */}
          <div className="ftr-nw-content">
            <div className="row">
              <div className="col-md-5">
                <div className="ftr-nw-title">
                  Join our email subscription now to get updates on new jobs and notifications.
                </div>
              </div>
              <div className="col-md-7">
                <form>
                  <div className="ftr-nw-form">
                    <input
                      name="news-letter"
                      className="form-control"
                      placeholder="Enter Your Email"
                      type="text"
                    />
                    <button className="ftr-nw-subcribe-btn">Subscribe Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* NEWS LETTER SECTION END */}
          {/* FOOTER BLOCKES START */}
          <div className="footer-top">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <div className="widget widget_about">
                  <div className="logo-footer clearfix">
                    <Link to="/index">
                      <img src={logo_white} alt="" />
                    </Link >
                  </div>
                  <p>Many desktop publishing packages and web page editors now.</p>
                  <ul className="ftr-list">
                    <li>
                      <p>
                        <span>Address :</span>65 Sunset CA 90026, USA
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Email :</span>example@max.com
                      </p>
                    </li>
                    <li>
                      <p>
                        <span>Call :</span>555-555-1234
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9 col-md-12">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="widget widget_services ftr-list-center">
                      <h3 className="widget-title">For Candidate</h3>
                      <ul>
                        <li>
                          <Link to="/dashboard">User Dashboard</Link >
                        </li>
                        <li>
                          <Link to="/dash-resume-alert">Alert resume</Link >
                        </li>
                        <li>
                          <Link to="/candidate-grid">Candidates</Link >
                        </li>
                        <li>
                          <Link to="/blog-list">Blog List</Link >
                        </li>
                        <li>
                          <Link to="/blog-single">Blog single</Link >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="widget widget_services ftr-list-center">
                      <h3 className="widget-title">For Employers</h3>
                      <ul>
                        <li>
                          <Link to="/dash-post-job">Post Jobs</Link >
                        </li>
                        <li>
                          <Link to="/blog-grid">Blog Grid</Link >
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link >
                        </li>
                        <li>
                          <Link to="/job-list">Jobs Listing</Link >
                        </li>
                        <li>
                          <Link to="/job-detail">Jobs details</Link >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="widget widget_services ftr-list-center">
                      <h3 className="widget-title">Helpful Resources</h3>
                      <ul>
                        <li>
                          <Link to="/faq">FAQs</Link >
                        </li>
                        <li>
                          <Link to="/employer-detail">Employer detail</Link >
                        </li>
                        <li>
                          <Link to="/dash-my-profile">Profile</Link >
                        </li>
                        <li>
                          <Link to="/error-404">404 Page</Link >
                        </li>
                        <li>
                          <Link to="/pricing">Pricing</Link >
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="widget widget_services ftr-list-center">
                      <h3 className="widget-title">Quick Link s</h3>
                      <ul>
                        <li>
                          <Link to="/index">Home</Link >
                        </li>
                        <li>
                          <Link to="/about-1">About us</Link >
                        </li>
                        <li>
                          <Link to="/dash-bookmark">Bookmark</Link >
                        </li>
                        <li>
                          <Link to="/job-grid">Jobs</Link >
                        </li>
                        <li>
                          <Link to="/employer-list">Employer</Link >
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* FOOTER COPYRIGHT */}
          <div className="footer-bottom">
            <div className="footer-bottom-info">
              <div className="footer-copy-right">
                <span className="copyrights-text">
                  Copyright © 2023 by thewebmax All Rights Reserved.
                </span>
              </div>
              <ul className="social-icons">
                <li>
                  <Link to="/javascript:void(0);" className="fab fa-facebook-f"></Link >
                </li>
                <li>
                  <Link to="/javascript:void(0);" className="fab fa-twitter"></Link >
                </li>
                <li>
                  <Link to="/javascript:void(0);" className="fab fa-instagram"></Link >
                </li>
                <li>
                  <Link to="/javascript:void(0);" className="fab fa-youtube"></Link >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* FOOTER END  */}
    </div>
  );
}
