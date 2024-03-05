import { Link } from "react-router-dom";
import logo from "../assets/images/images/logo-dark.png";
import Dash_Header from "../components/Dashheader";
import { useState } from "react";
// import banner from "../assets/images/images/background/bg-3.jpg"
// import banner2 from "../assets/images/images/background/bg-2.jpg"

export default function CreateUser() {
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState();
//   const [website, setWebsite] = useState();
//   const [estSince, setEstSince] = useState();
//   const [teamSize, setTeamSize] = useState();
//   const [descript, setDescrip] = useState();
  const [err, setErr] = useState(false);

  // const []
  const CreateCompany = (e) => {
    e.preventDefault();
    if (
        userName === undefined ||
      phone === undefined ||
      email === undefined ||
      password === undefined
      
    ) {
      setErr(true);
      return;
      
    }

    const userDetails = {
        userName: userName,
        phone:phone,
        email:email,
        password:password,
       
    }
    console.log(userDetails)

    
    fetch("http://localhost:7300/create-user", {
        method:"POST",
        headers:{"Content-Type": "Application/json"},
        body:JSON.stringify(userDetails)
      })
      .then((data)=>{
          console.log(data)
          alert("Company created");
          // Navigate("/sign-in")
      })
      .catch((err)=> console.log(err.message))

      setPhone("")
      setEmail("")
      setPassword("")
      setUserName("")

      
  };

  return (
    <body>
      <div className="page-wraper">
        <Dash_Header />

        {/* <!-- Page Content Holder --> */}
        <div id="content">
          <div className="content-admin-main">
            <div className="wt-admin-right-page-header clearfix">
              <h2>Company Profile!</h2>
              <div className="breadcrumbs">
                <a href="#">Home</a>
                <a href="#">Dasboard</a>
                <span>Create user</span>
              </div>
            </div>

            {/* <!--Logo and Cover image--> */}
            <form onSubmit={CreateCompany}>

          

            {/* <!--Basic Information--> */}
            <div className="panel panel-default">
              <div className="panel-heading wt-panel-heading p-a20">
                <h4 className="panel-tittle m-a0">create user</h4>
              </div>
              <div className="panel-body wt-panel-body p-a20 m-b30 ">
                  <div className="row">
                    <div className="col-xl-4 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>User Name</label>
                        <div className="ls-inputicon-box">
                          <input
                            onChange={(e) => setUserName(e.target.value)}
                            value={userName}
                            className="form-control"
                            name="company_name"
                            type="text"
                            placeholder="Devid Smith"
                          />
                          <i className="fs-input-icon fa fa-user "></i>
                        </div>
                        <div>
                          {err === true && userName === undefined ? (
                            <span>Enter user name</span>
                          ) : (
                            userName === null
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Phone</label>
                        <div className="ls-inputicon-box">
                          <input
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            className="form-control"
                            name="company_phone"
                            type="text"
                            placeholder="(251) 1234-456-7890"
                          />
                          <i className="fs-input-icon fa fa-phone-alt"></i>
                        </div>
                        <div>
                          {err === true && phone  === undefined ? (
                            <span>Enter phone number</span>
                          ) : (
                            phone  === null
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Email Address</label>
                        <div className="ls-inputicon-box">
                          <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            className="form-control"
                            name="company_Email"
                            type="email"
                            placeholder="Devid@example.com"
                          />
                          <i className="fs-input-icon fa fa-envelope"></i>
                        </div>
                        <div>
                          {err === true && email === undefined ? (
                            <span>Enter email</span>
                          ) : (
                            email === null
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>password</label>
                        <div className="ls-inputicon-box">
                          <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="form-control"
                            name="company_website"
                            type="text"
                            placeholder="password"
                          />
                          <i className="fs-input-icon fa fa-globe-americas"></i>
                        </div>
                        <div>
                          {err === true && password === undefined ? (
                            <span>Enter password</span>
                          ) : (
                            password === null
                          )}
                        </div>
                      </div>
                    </div>


                    <div className="col-lg-12 col-md-12">
                      <div className="text-left">
                        <button type="submit" className="site-button">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            </form>
            
          
          </div>
        </div>

        {/* <!--Delete Profile Popup--> */}
        <div
          className="modal fade twm-model-popup"
          id="delete-dash-profile"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h4 className="modal-title">
                  Do you want to delete your profile?
                </h4>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="site-button"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
                <button type="button" className="site-button outline-primary">
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!--Logout Profile Popup--> */}
        <div
          className="modal fade twm-model-popup"
          id="logout-dash-profile"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h4 className="modal-title">
                  Do you want to Logout your profile?
                </h4>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="site-button"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
                <button type="button" className="site-button outline-primary">
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
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
<script  src="js/switcher.js"></script><!-- SHORTCODE FUCTIONS  -->

<!-- STYLE SWITCHER  ======= --> 
<div className="styleswitcher">

    <div className="switcher-btn-bx">
        <a className="switch-btn">
            <span className="fa fa-cog fa-spin"></span>
        </a>
    </div> */}
      {/*     
    <div className="styleswitcher-inner">
    
        <h6 className="switcher-title">Color Skin</h6>
        <ul className="color-skins">
            <li><a className="theme-skin skin-1" href="dash-company-profilea39b.html?theme=css/skin/skin-1"></a></li>
            <li><a className="theme-skin skin-2" href="dash-company-profile61e7.html?theme=css/skin/skin-2"></a></li>
            <li><a className="theme-skin skin-3" href="dash-company-profilecce5.html?theme=css/skin/skin-3"></a></li>
            <li><a className="theme-skin skin-4" href="dash-company-profile13f7.html?theme=css/skin/skin-4"></a></li>
            <li><a className="theme-skin skin-5" href="dash-company-profile19a6.html?theme=css/skin/skin-5"></a></li>
            <li><a className="theme-skin skin-6" href="dash-company-profilefe5c.html?theme=css/skin/skin-6"></a></li>
            <li><a className="theme-skin skin-7" href="dash-company-profileab47.html?theme=css/skin/skin-7"></a></li>
            <li><a className="theme-skin skin-8" href="dash-company-profile5f8d.html?theme=css/skin/skin-8"></a></li>
            <li><a className="theme-skin skin-9" href="dash-company-profile5663.html?theme=css/skin/skin-9"></a></li>
            <li><a className="theme-skin skin-10" href="dash-company-profile28ac.html?theme=css/skin/skin-10"></a></li>
            
        </ul>           
        
    </div>    
</div>
<!-- STYLE SWITCHER END ==== --> */}
    </body>
  );
}
