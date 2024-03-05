import { Link, useLocation } from "react-router-dom"
import pic1 from "../assets/images/images/jobs-company/pic1.jpg"
import pic2 from "../assets/images/images/jobs-company/pic2.jpg"
import pic3 from "../assets/images/images/jobs-company/pic3.jpg"
import pic4 from "../assets/images/images/jobs-company/pic4.jpg"
import pic5 from "../assets/images/images/jobs-company/pic5.jpg"
import logo from "../assets/images/images/sator-logo.svg"
// import logo_white from "../assets/images/images/logo-white.png"


export default function Dash_Header() {

        const location = useLocation();

    return (
        <div>

                <header id="header-admin-wrap" className="header-admin-fixed">

                    {/* <!-- Header Start --> */}
                    <div id="header-admin">
                        <div className="container">

                            {/* <!-- Left Side Content --> */}
                            <div className="header-left">
                                <div className="nav-btn-wrap">
                                    <a className="nav-btn-admin" id="sidebarCollapse">
                                        <span className="fa fa-angle-left"></span>
                                    </a>
                                </div>
                            </div>
                            {/* <!-- Left Side Content End -->
                    
                    <!-- Right Side Content --> */}
                            <div className="header-right">
                                <ul className="header-widget-wrap">
                                    {/* <!--Message--> */}
                                    <li className="header-widget dashboard-message-dropdown">

                                        <div className="dropdown">
                                            <a href="javascript:;" className="dropdown-toggle jobzilla-admin-messange" id="ID-MSG_dropdown" data-bs-toggle="dropdown">
                                                <i className="far fa-envelope"></i>
                                                <span className="notification-animate">4</span>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="ID-MSG_dropdown">
                                                <div className="message-list dashboard-widget-scroll">
                                                    <ul>
                                                        <li className="clearfix">
                                                            <span className="msg-avtar">
                                                                <img src={pic1} alt="" />
                                                            </span>

                                                            <div className="msg-texting">
                                                                <strong>Alexa Johnson</strong>
                                                                <small className="msg-time">
                                                                    <span className="far fa-clock p-r-5"></span>12 mins ago
                                                                </small>
                                                                <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                                            </div>
                                                        </li>
                                                        <li className="clearfix">
                                                            <span className="msg-avtar">
                                                                <img src={pic2} alt="" />
                                                            </span>

                                                            <div className="msg-texting">
                                                                <strong>Johan Smith</strong>
                                                                <small className="msg-time">
                                                                    <span className="far fa-clock p-r-5"></span>2 hours ago
                                                                </small>
                                                                <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                                            </div>
                                                        </li>
                                                        <li className="clearfix">
                                                            <span className="msg-avtar">
                                                                <img src={pic3} alt="" />
                                                            </span>

                                                            <div className="msg-texting">
                                                                <strong>Bobby Brown</strong>
                                                                <small className="msg-time">
                                                                    <span className="far fa-clock p-r-5"></span>3 hours ago
                                                                </small>
                                                                <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                                            </div>
                                                        </li>
                                                        <li className="clearfix">
                                                            <span className="msg-avtar">
                                                                <img src={pic4} alt="" />
                                                            </span>

                                                            <div className="msg-texting">
                                                                <strong>David Deo</strong>
                                                                <small className="msg-time">
                                                                    <span className="far fa-clock p-r-5"></span>4 hours ago
                                                                </small>
                                                                <p>Lorem ipsum dolor sit amet, consectetur...</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div className="message-view-all">
                                                        <a href="javascript:;">View All</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </li>

                                    {/* <!--Notification--> */}
                                    <li className="header-widget dashboard-noti-dropdown">

                                        <div className="dropdown">
                                            <a href="javascript:;" className="dropdown-toggle jobzilla-admin-notification" id="ID-NOTI_dropdown" data-bs-toggle="dropdown">
                                                <i className="far fa-bell"></i>
                                                <span className="notification-animate">8</span>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="ID-NOTI_dropdown">
                                                <div className="dashboard-widgets-header">You have 7 notifications</div>
                                                <div className="noti-list dashboard-widget-scroll">
                                                    <ul>

                                                        <li>
                                                            <a href="#">
                                                                <span className="noti-icon"><i className="far fa-bell"></i></span>
                                                                <span className="noti-texting">Devid applied for <b>Webdesigner.</b> </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="noti-icon"><i className="far fa-bell"></i></span>
                                                                <span className="noti-texting">Nikol sent you a message. </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="noti-icon"><i className="far fa-bell"></i></span>
                                                                <span className="noti-texting">lucy bookmarked your <b>SEO Expert</b> Job! </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="noti-icon"><i className="far fa-bell"></i></span>
                                                                <span className="noti-texting">Your job for <b>teacher</b> has been approved! </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <span className="noti-icon"><i className="far fa-bell"></i></span>
                                                                <span className="noti-texting">Thor applied for <b>Team Leader</b>. </span>
                                                            </a>
                                                        </li>

                                                    </ul>

                                                    <div className="noti-view-all">
                                                        <a href="javascript:;">View All</a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>



                                    </li>

                                    {/* <!--Account--> */}
                                    <li className="header-widget">
                                        <div className="dashboard-user-section">
                                            <div className="listing-user">
                                                <div className="dropdown">
                                                    <a href="javascript:;" className="dropdown-toggle" id="ID-ACCOUNT_dropdown" data-bs-toggle="dropdown">
                                                        <div className="user-name text-black">
                                                            <span>
                                                                <img src={pic1} alt="" />
                                                            </span>Nikola Tesla
                                                        </div>
                                                    </a>
                                                    <div className="dropdown-menu" aria-labelledby="ID-ACCOUNT_dropdown">

                                                        <ul>
                                                            <li><a href="dashboard.html"><i className="fa fa-home"></i>Dashboard</a></li>
                                                            <li><a href="dash-messages.html"><i className="fa fa-envelope"></i> Messages</a></li>
                                                            <li><a href="dash-my-profile.html"><i className="fa fa-user"></i> Profile</a></li>
                                                            <li><a href="index.html"><i className="fa fa-share-square"></i> Logout</a></li>
                                                        </ul>


                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                            {/* <!-- Right Side Content End --> */}

                        </div>
                    </div>
                    {/* <!-- Header End --> */}

                </header>

                {/* <!-- Sidebar Holder --> */}
                <nav id="sidebar-admin-wraper">
                    <div className="page-logo">
                        <Link to="/dashboard">
                            <img src={logo} alt="" />
                        </Link>
                    </div>

                    <div className="admin-nav scrollbar-macosx">
                        <ul>
                            <li className="">
                                <Link to="/dashboard">
                                    <i className="fa fa-home"></i>
                                    <span className="admin-nav-text">Dashboard</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/dash-company-profile">
                                    <i className="fa fa-user-tie"></i>
                                    <span className="admin-nav-text">Company Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/dash-manage-job">
                                    <i className="fa fa-suitcase"></i>
                                    <span className="admin-nav-text">Manage Jobs</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/dash-company-type">
                                    <i className="fa fa-suitcase"></i>
                                    <span className="admin-nav-text">Company Type</span>
                                </Link>
                            </li>
                             
                            <li>
                                <Link to="/dash-candidate">
                                    <i className="fa fa-user-friends"></i>
                                    <span className="admin-nav-text">Candidates</span>
                                </Link>
                            </li>

                           

                            <li>
                                <Link to="/dash-messages">
                                    <i className="fa fa-envelope"></i>
                                    <span className="admin-nav-text">Messages</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/dash-my-profile">
                                    <i className="fa fa-user"></i>
                                    <span className="admin-nav-text">My Profile</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/dash-change-password">
                                    <i className="fa fa-fingerprint"></i>
                                    <span className="admin-nav-text">Change Password</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/javascript:;"
                                    data-bs-toggle="modal"
                                    data-bs-target="#delete-dash-profile"
                                >
                                    <i className="fa fa-trash-alt"></i>
                                    <span className="admin-nav-text">Delete Profile</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/javascript:;"
                                    data-bs-toggle="modal"
                                    data-bs-target="#logout-dash-profile"
                                >
                                    <i className="fa fa-share-square"></i>
                                    <span className="admin-nav-text">Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                  {/* <!-- Sidebar Holder --> */}
        <nav id="sidebar-admin-wraper">
          <div className="page-logo">
            <Link to="/dashboard">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="admin-nav scrollbar-macosx">
            <ul>
              <li className=""   style={{ backgroundColor: location.pathname.includes('/dashboard') ? '#f9fcff' : '' }}>
                <Link to="/dashboard"style={{ color: location.pathname.includes('/dashboard') ? '#62C29F' : ''}}>
                  <i className="fa fa-home"></i>
                  <span className="admin-nav-text">Dashboard</span>
                </Link>
              </li>

              
              <li    style={{  backgroundColor: location.pathname.includes('/dash-sales-agent') ? '#f9fcff' : '' }}>
                <Link to="/dash-sales-agent" style={{ color: location.pathname.includes('/dash-sales-agent') ? '#62C29F' : '' }}>
                  <i className="fa fa-building"></i>
                  <span className="admin-nav-text">Sales Agent</span>
                </Link>
              </li>
              <li style={{  backgroundColor: location.pathname.includes('/dash-manage-company') ? '#f9fcff' : '' }}>
                <Link to="/dash-manage-company" style={{ color: location.pathname.includes('/dash-manage-company') ? '#62C29F' : '' }}>
                  <i className="fa fa-suitcase"></i>
                  <span className="admin-nav-text">Manage Companies</span>
                </Link>
              </li>

              <li style={{  backgroundColor: location.pathname.includes('/dash-company-type') ? '#f9fcff' : '' }}>
                    <Link to="/dash-company-type" style={{ color: location.pathname.includes('/dash-company-type') ? '#62C29F' : '' }}>
                        <i className="fa fa-suitcase"></i>
                        <span className="admin-nav-text">Company Type</span>
                    </Link>
                </li>
              
              <li style={{  backgroundColor: location.pathname.includes('/dash-product-category') ? '#f9fcff' : '' }}>
                <Link to="/dash-product-category" style={{ color: location.pathname.includes('/dash-product-category') ? '#62C29F' : '' }}>
                  <i className="fa fa-user-friends"></i>
                  <span className="admin-nav-text">Product Category</span>
                </Link>
              </li>

             
              <li style={{  backgroundColor: location.pathname.includes('/dash-manage-product') ? '#f9fcff' : '' }}>
                <Link to="/dash-manage-product"  style={{ color: location.pathname.includes('/dash-manage-product') ? '#62C29F' : '' }}>
                  <i className="fa fa-envelope"></i>
                  <span className="admin-nav-text">Manage Product</span>
                </Link>
              </li>

              <li style={{  backgroundColor: location.pathname.includes('/dash-manage-task') ? '#f9fcff' : '' }}>
                <Link to="/dash-manage-task"  style={{ color: location.pathname.includes('/dash-manage-task') ? '#62C29F' : '' }}>
                  <i className="fa fa-envelope"></i>
                  <span className="admin-nav-text">Manage Task</span>
                </Link>
              </li>
              

              <li style={{  backgroundColor: location.pathname.includes('/dash-manage-deal') ? '#f9fcff' : '' }}>
                <Link to="/dash-manage-deal" style={{ color: location.pathname.includes('/dash-manage-deal') ? '#62C29F' : '' }}>
                  <i className="fa fa-envelope"></i>
                  <span className="admin-nav-text">Deals</span>
                </Link>
              </li>
{/* 
              <li>
                <Link to="/dash-my-profile">
                  <i className="fa fa-user"></i>
                  <span className="admin-nav-text">My Profile</span>
                </Link>
              </li> */}

              <li>
                <Link to="/javascript:;"
                  data-bs-toggle="modal"
                  data-bs-target="#logout-dash-profile"
                  
                >
                  <i className="fa fa-share-square"></i>
                  <span className="admin-nav-text">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

             
        </div>
    )
}