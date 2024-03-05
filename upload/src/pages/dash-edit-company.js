import { Link, useParams } from "react-router-dom";
import logo from "../assets/images/images/logo-dark.png";
import Dash_Header from "../components/Dashheader";
import { useEffect, useState } from "react";
import { BASEURL } from "../common/config";

export default function EditCompany() {
  const [compName, setCompName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [website, setWebsite] = useState();
  const [estSince, setEstSince] = useState();
  const [teamSize, setTeamSize] = useState();
  const [descript, setDescrip] = useState();
  const [formImage, setFormImage] = useState("")
  const [formBanner, setFormBanner] = useState("")
  const [err, setErr] = useState(false);
  const { compId } = useParams();

  useEffect(() => {
    fetch(`${BASEURL}/company/${compId}`, {
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
        setCompName(data.data.companyName);
        setPhone(data.data.phone);
        setEmail(data.data.email);
        setWebsite(data.data.website);
        setEstSince(data.data.estSince);
        setTeamSize(data.data.teamSize);
        setDescrip(data.data.Description);
        setFormImage(data.data.image);
        setFormBanner(data.data.bannerImage);
      })
      .catch((error) => {
        console.error("Fetch error:", error.message);
      });
  }, [compId]);

  const updateCompanyProfile = (e) => {
    e.preventDefault();
    if (
      compName === "" ||
      phone === "" ||
      email === "" ||
      website === "" ||
      estSince === "" ||
      teamSize === "" ||
      descript === ""
    ) {
      setErr(true);
      return;
    }

    const compDetails = {
      companyName: compName,
      phone: phone,
      email: email,
      website: website,
      estSince: estSince,
      teamSize: teamSize,
      Description: descript,
      image: formImage,
      bannerImage: formBanner,
    };

    fetch(`${BASEURL}/company/update/${compId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(compDetails),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert("Company profile updated");
      })
      .catch((err) => console.log(err.message));
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
                        <input type="text" placeholder="input company logo" onChange={(e) => setFormImage(e.target.value)} className="form-control" />

                        <figure className="h-75 w-100 ">
                          <img src={formImage} alt="" className="h-100 w-100" />
                        </figure>
                      </div>
                      <div className="col-lg-6 ">
                        <label className="mb-3 fw-bolder" htmlFor="">Company banner</label>
                        <input type="text" placeholder="input company baner image" onChange={(e) => setFormBanner(e.target.value)} className="form-control" />
                        <figure className="w-100 h-75">
                          <img src={formBanner} alt="" className="w-100 h-100" />
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
                <form onSubmit={updateCompanyProfile}>
                  <div className="row">
                    <div className="col-xl-4 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Company Name</label>
                        <div className="ls-inputicon-box">
                          <input
                            onChange={(e) => setCompName(e.target.value)}
                            value={compName}
                            className="form-control"
                            name="company_name"
                            type="text"
                            placeholder="Devid Smith"
                          />
                          <i className="fs-input-icon fa fa-user "></i>
                        </div>
                        <div>
                          {err === true && compName === "" ? (
                            <span>Enter company name</span>
                          ) : (
                            compName === null
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
                        <label>Website</label>
                        <div className="ls-inputicon-box">
                          <input
                            onChange={(e) => setWebsite(e.target.value)}
                            value={website}
                            className="form-control"
                            name="company_website"
                            type="text"
                            placeholder="https://.../"
                          />
                          <i className="fs-input-icon fa fa-globe-americas"></i>
                        </div>
                        <div>
                          {err === true && website === "" ? (
                            <span>Enter website</span>
                          ) : (
                            website === null
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Est. Since</label>
                        <div className="ls-inputicon-box">
                          <input
                            onChange={(e) => setEstSince(e.target.value)}
                            value={estSince}
                            className="form-control"
                            name="company_since"
                            type="text"
                            placeholder="Since..."
                          />
                          <i className="fs-input-icon fa fa-globe-americas"></i>
                        </div>
                        <div>
                          {err === true && estSince === "" ? (
                            <span>Enter est since </span>
                          ) : (
                            estSince === null
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-12 col-md-12">
                      <div className="form-group city-outer-bx has-feedback">
                        <label>Team Size</label>
                        <div className="ls-inputicon-box">
                          <select
                            onChange={(e) => setTeamSize(e.target.value)}
                            value={teamSize}
                            className="wt-select-box selectpicker"
                            name="team-size"
                            data-live-search="true"
                            title="team-size"
                            id="city"
                            data-bv-field="size"
                          >
                            <option className="bs-title-option" value="">
                              5-10
                            </option>
                            <option className="" value="10+">
                              10+
                            </option>
                            <option className="" value="20+">
                              20+
                            </option>
                            <option className="" value="20+">
                              50+
                            </option>
                          </select>
                          <i className="fs-input-icon fa fa-sort-numeric-up"></i>
                        </div>
                        <div>
                          {err === true && teamSize === "" ? (
                            <span>Enter team size </span>
                          ) : (
                            teamSize === null
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Description</label>
                        <textarea
                          onChange={(e) => setDescrip(e.target.value)}
                          value={descript}
                          className="form-control"
                          rows="3"
                          placeholder="Greetings! We are Galaxy Software Development Company."
                        ></textarea>
                      </div>
                      <div>
                        {err === true && descript === "" ? (
                          <span>Enter description</span>
                        ) : (
                          descript === null
                        )}
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
