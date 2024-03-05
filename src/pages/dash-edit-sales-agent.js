import { Link, useParams } from "react-router-dom";
import logo from "../assets/images/images/logo-dark.png";
import Dash_Header from "../components/Dashheader";
import { useEffect, useState } from "react";
import { BASEURL } from "../common/config";
import axios from "axios";

export default function EditSalesAgent() {
  const [fullName, setFullName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const [estSince, setEstSince] = useState();
  const [teamSize, setTeamSize] = useState();
  const [descript, setDescrip] = useState();
  const [image, setImage] = useState("")
  const [id, setId ] = useState()

  const [err, setErr] = useState(false);
  const { agentId } = useParams();

  useEffect(()=>{
    const apiUrl = `${BASEURL}/sales-agent/single/${agentId}`
    let adminToken = localStorage.getItem("sator-agent-token")
    const headers = {
        's-token': `${adminToken}`, 
        'Content-Type': 'application/json', 
      };

    axios.get(apiUrl, {headers})
    .then((res)=> {
        console.log(res.data.data)
        setFullName(res.data.data.fullName);
        setPhone(res.data.data.phone);
        setEmail(res.data.data.email);
        setAddress(res.data.data.address);
        setImage(res.data.data.image)
        setId(res.data.data._id)

       
    }).catch((err)=>{
        console.log(err)
    })

}, [])

  const updateAgentProfile = (e) => {
    e.preventDefault();
    if (
      fullName === "" ||
      phone === "" ||
      email === "" ||
      address === "" 
    ) {
      setErr(true);
      return;
    }

    const agentDetails = {
      id:id, 
      fullName: fullName,
      phone: phone,
      email: email,
      address: address,
      image: image,
    };

    // let adminToken = localStorage.getItem("sator-agent-token")

    const apiUrl = `${BASEURL}/sales-agent/edit`
    let adminToken = localStorage.getItem("sator-agent-token")
    const headers = {
        's-token': `${adminToken}`, 
        'Content-Type': 'application/json', 
      };

    axios.put(apiUrl, {headers}, {agentDetails})
    .then((res)=> {
        console.log(res)
        alert("sales agent uodated")
    }).catch((err)=>{
        console.log(err)
    })


    // fetch(`${BASEURL}/sales-agent/edit}`, {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(agentDetails),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! Status: ${response.status}`);
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     alert("Agent profile updated");
    //   })
    //   .catch((err) => console.log(err.message));
  };

  return (
    <body>
      <div className="page-wraper">
        <Dash_Header />

        {/* <!-- Page Content Holder --> */}
        <div id="content">
          <div className="content-admin-main">
            <div className="wt-admin-right-page-header clearfix">
              <h2>Edit Company Profile!</h2>
              {/* <div className="breadcrumbs">
                <a href="#">Home</a>
                <a href="#">Dasboard</a>
                <span>Company Profile!</span>
              </div> */}
            </div>

            {/* <!--Logo and Cover image--> */}
            <div className="panel panel-default">
              <div className="panel-heading wt-panel-heading p-a20">
                <h4 className="panel-tittle m-a0">Logo and Cover image</h4>
              </div>
              <div className="col-lg-12 col-md-12 ">
                <div className="dashboard-cover-pic">
                  <div
                    action="https://thewebmax.org/jobzilla/upload.php"
                    className="dropzone "
                  >
                    <div className="row mb-5">
                      <div className="col-lg-6 ">
                        <label className="mb-3 fw-bolder" htmlFor="">Company logo</label>
                        <input type="text" placeholder="input company logo" onChange={(e) => setImage(e.target.value)} className="form-control" />

                        <figure className="h-75 w-100 ">
                          <img src={image} alt="" className="h-100 w-100" />
                        </figure>
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
                <form onSubmit={updateAgentProfile}>
                  <div className="row">
                    <div className="col-xl-4 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Company Name</label>
                        <div className="ls-inputicon-box">
                          <input
                            onChange={(e) => setFullName(e.target.value)}
                            value={fullName}
                            className="form-control"
                            name="company_name"
                            type="text"
                            placeholder="Devid Smith"
                          />
                          <i className="fs-input-icon fa fa-user "></i>
                        </div>
                        <div>
                          {err === true && fullName === "" ? (
                            <span>Enter company name</span>
                          ) : (
                            fullName === null
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
                          {err === true && phone === "" ? (
                            <span>Enter phone number</span>
                          ) : (
                            phone === null
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
                          {err === true && email === "" ? (
                            <span>Enter email</span>
                          ) : (
                            email === null
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Address</label>
                        <div className="ls-inputicon-box">
                          <input
                            onChange={(e) => setAddress(e.target.value)}
                            value={address}
                            className="form-control"
                            name="company_address"
                            type="text"
                            placeholder="Abuja"
                          />
                          <i className="fs-input-icon fa fa-globe-americas"></i>
                        </div>
                        <div>
                          {err === true && address === "" ? (
                            <span>Enter address</span>
                          ) : (
                            address === null
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
                </form>
              </div>
            </div>


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
