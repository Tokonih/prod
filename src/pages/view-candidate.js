import LoginPop from "../components/LoginPop"
import PublicHeader from "../components/PublicHeader"
import Signup_Pop from "../components/Signup_Pop"
import f_bg from "../assets/images/images/f-bg.jpg"
import banner_1 from "../assets/images/images/banner/1.jpg"
import candidateBG from "../assets/images/images/candidates/candidate-bg2.jpg";
import { useEffect, useState } from "react"
import { BASEURL } from "../common/config"
import axios from "axios"
import { useParams, useLocation } from "react-router-dom"


export default function ViewCandidate() {

    const [userData, setUserData] = useState({});
    const [skills, setSkills] = useState([]);
    const [employments, setemployments] = useState([]);
    const [educationList, seteducationList] = useState([]);
    let user_id = useParams().id;
    
    const search = useLocation().search;
    const app_id = new URLSearchParams(search).get('app_id');

    

    useEffect(() => {
        // console.log(app_id, "User id " + user_id)
        const getUser = async () => {
            let api_url = BASEURL + "/user/" + user_id;
            try {

                const res = await axios.get(api_url,);
                console.log(res.data.data);
                setUserData(res.data.data)

            } catch (err) {
                console.log(err);
            }
        };
        getUser();
        getSkills();
        getWork();
        getEducation()
    }, []);

    const getSkills = async () => {
        let api_url = `${BASEURL}/skill/user/${user_id}`;
        try {

            const res = await axios.get(api_url);
            console.log(res.data.data);
            setSkills(res.data.data)

        } catch (err) {
            console.log(err);
        }
    };

    const getWork = async () => {
        console.log(`${BASEURL}/work/user/${user_id}`);
        let api_url = `${BASEURL}/work/user/${user_id}`;
        try {

            const res = await axios.get(api_url);
            console.log(res.data.data);
            setemployments(res.data.data)

        } catch (err) {
            console.log(err);
        }
    };

    const getEducation = async () => {
        console.log(`${BASEURL}/education/user/${user_id}`);
        let api_url = `${BASEURL}/education/user/${user_id}`;
        try {

            const res = await axios.get(api_url);
            console.log(res.data.data);
            seteducationList(res.data.data)

        } catch (err) {
            console.log(err);
        }
    };


    const applicationData = {
        user_id: user_id,
        app_id: app_id
    }
    console.log(applicationData)

    const hireApplicant = () => {
        const api_url = BASEURL + "/applicant/hire/" 
        axios.post(api_url, applicationData)
        .then((res)=> console.log(res.data))
        .catch((err)=> console.log(err))
    }

    return (<>
        <div >

            <PublicHeader />

            {/* CONTENT START */}
            <div className="page-content">




                {/* <!-- Employer List START --> */}
                {/* <!-- OUR BLOG START --> */}
                <div class="section-full p-t12  p-b90 site-bg-white">


                    <div class="container">
                        <div class="section-full p-b90 bg-white">
                            <div class="twm-candi-self-wrap-2 overlay-wraper" >
                                <div class="overlay-main site-bg-primary opacity-01"></div>
                                <div class="container">
                                    <div class="twm-candi-self-info-2">
                                        <div class="twm-candi-self-top">
                                            <div class="twm-media">
                                                <img src={userData.profileImage} alt="#" />
                                            </div>
                                            <div class="twm-mid-content">

                                                <h4 class="twm-job-title">{userData.fullName}</h4>

                                                <p>{userData.experience}</p>
                                                <p class="twm-candidate-address"><i class="feather-map-pin"></i>{userData.city} {userData.country}</p>

                                            </div>
                                        </div>

                                        <div class="twm-candi-self-bottom">
                                            <button onClick={hireApplicant} class="site-button">Hire Now</button>
                                            <a href="files/pdf-sample.pdf" class="site-button secondry">Download CV</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="container">


                                <div class="section-content">

                                    <div class="row d-flex justify-content-center">

                                        <div class="col-lg-9 col-md-12">
                                            {/* <!-- Candidate detail START --> */}
                                            <div class="cabdidate-de-info">

                                                <div class="twm-s-info-wrap mb-5">
                                                    <h4 class="section-head-small mb-4">Profile Info</h4>
                                                    <div class="twm-s-info-4">
                                                        <div class="row">


                                                            <div class="col-md-6">
                                                                <div class="twm-s-info-inner">
                                                                    <i class="fas fa-venus-mars"></i>
                                                                    <span class="twm-title">Gender</span>
                                                                    <div class="twm-s-info-discription">{userData.gender}</div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="twm-s-info-inner">
                                                                    <i class="fas fa-mobile-alt"></i>
                                                                    <span class="twm-title">Phone</span>
                                                                    <div class="twm-s-info-discription">{userData.phone}</div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="twm-s-info-inner">
                                                                    <i class="fas fa-at"></i>
                                                                    <span class="twm-title">Email</span>
                                                                    <div class="twm-s-info-discription">{userData.email}</div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="twm-s-info-inner">
                                                                    <i class="fas fa-book-reader"></i>
                                                                    <span class="twm-title">Qualification</span>
                                                                    <div class="twm-s-info-discription">{userData.qualification}</div>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <div class="twm-s-info-inner">
                                                                    <i class="fas fa-book-reader"></i>
                                                                    <span class="twm-title">Experience</span>
                                                                    <div class="twm-s-info-discription">{userData.experience}</div>
                                                                </div>
                                                            </div>


                                                        </div>

                                                    </div>
                                                </div>

                                                <h4 class="twm-s-title m-t0">About Me</h4>
                                                <p>{userData.description}</p>



                                                <h4 class="twm-s-title">Skills</h4>

                                                <div class="tw-sidebar-tags-wrap">
                                                    <div class="tagcloud">
                                                        {skills.map((data) => {
                                                            return (<> <a href="javascript:void(0)">{data.name}</a></>)
                                                        })}

                                                    </div>
                                                </div>

                                                <h4 class="twm-s-title">Work Experience</h4>
                                                <div class="twm-timing-list-wrap">

                                                    {employments.map((data) => {
                                                        return (<>
                                                            <div class="twm-timing-list">
                                                                <div class="twm-time-list-date">{data.startDate} to {data.endDate} </div>
                                                                <div class="twm-time-list-title">{data.company}</div>
                                                                <div class="twm-time-list-position">{data.jobTitle}</div>
                                                                <div class="twm-time-list-discription">
                                                                    <p>{data.notes}</p>
                                                                </div>
                                                            </div>
                                                        </>)
                                                    })}



                                                </div>

                                                <h4 class="twm-s-title">Education & Training</h4>
                                                <div class="twm-timing-list-wrap">

                                                    {educationList.map((data) => {
                                                        return (<>
                                                            <div class="twm-timing-list">
                                                                <div class="twm-time-list-date">{data.startDate} to {data.endDate} </div>
                                                                <div class="twm-time-list-title"> {data.education_level}  </div>
                                                                <div class="twm-time-list-position"> {data.school}</div>
                                                                 
                                                            </div></>)
                                                    })}



                                                </div>


                                            </div>












                                        </div>



                                    </div>

                                </div>

                            </div>

                        </div>
                        {/* <!-- Candidate Detail V2 END -->      */}
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

    </>)
}