import { Link } from "react-router-dom";
import pic1 from "../assets/images/images/candidates/pic1.jpg";
// import logo_white from "../assets/images/images/logo-white.png"
import logo from "../assets/images/images/logo-dark.png";
import Dash_Header from "../components/Dashheader";
import { useEffect, useState } from "react";
import { BASEURL } from "../common/config";
import axios from "axios";

export default function DashPostProductCategory() {

  const [category, setCategory ] = useState();

  const [err, setErr] = useState(false);


const[ loading, setLoading] = useState(false)
  const postJobCategory = (e) => {
    e.preventDefault();
    setLoading(true)
    if (
      category === undefined
    ) {
      setErr(true);
      return;
    }

    const companyType = {
 
        category: category,

    };
    console.log(companyType);

    let apiURL =  "https://sartor-server-beta.onrender.com/api/v1/admin/product/category/create"

    let adminToken = localStorage.getItem("sator-agent-token");
    console.log(adminToken)
    
    const headers = {
        's-token': `${adminToken}`, 
        'Content-Type': 'application/json', 
    };

    axios.post(apiURL, companyType, {headers})
    .then((res)=> {
        console.log(res.data)
        alert("category created")
    }).catch((err)=>{
        console.log(err)
    })
    .finally(()=>{
      setLoading(false)
    })

  };

  return (
    <div>
      <div classcategory="page-wraper">
        <Dash_Header />

        {/* <!-- Page Content Holder --> */}
        <div id="content">
          <div classcategory="content-admin-main">
            <div classcategory="wt-admin-right-page-header clearfix">
              <h2>Post Product Category</h2>
              <div classcategory="breadcrumbs">
                <a href="#">Home</a>
                <a href="#">Dasboard</a>
                <span>Product Category Form</span>
              </div>
            </div>

            {/* <!--Basic Information--> */}
            <div classcategory="panel panel-default">
              <div classcategory="panel-heading wt-panel-heading p-a20">
                <h4 classcategory="panel-tittle m-a0">
                  <i classcategory="fa fa-suitcase"></i>Product Category
                </h4>
              </div>
              <div classcategory="panel-body wt-panel-body p-a20 m-b30 ">
                <form onSubmit={postJobCategory}>
                  <div classcategory="row">
                    {/* <!--Job title-->             */}
                

                   

                      {/* <!--Start Date--> */}
                      <div classcategory="col-xl-4 col-lg-6 col-md-12">
                      <div classcategory="form-group">
                        <label>category</label>
                        <div classcategory="ls-inputicon-box">
                          <input
                            classcategory="form-control"
                            category="company_Email"
                            type="text"
                            placeholder="Drugs"
                            onChange={(e) => setCategory(e.target.value)}
                            value={category}
                          />
                          <i classcategory="fs-input-icon fa fa-map-pin"></i>
                        </div>
                        <div style={{color: "red"}}>
                          {err === true && category === undefined ? (
                            <span>Enter job category category  </span>
                          ) : (
                            category === null
                          )}
                        </div>
                      </div>
                    </div>

                    

               



                  

                    <div classcategory="col-lg-12 col-md-12">
                      <div classcategory="text-left">
                        <button type="submit" classcategory="site-button m-r5">
                        {loading ? "processing" : "  Publish Company Type"}
                        </button>
                        {/* <button
                          type="submit"
                          classcategory="site-button outline-primary"
                        >
                          Save Draft
                        </button> */}
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
          classcategory="modal fade twm-model-popup"
          id="delete-dash-profile"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-hidden="true"
        >
          <div classcategory="modal-dialog">
            <div classcategory="modal-content">
              <div classcategory="modal-header">
                <button
                  type="button"
                  classcategory="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div classcategory="modal-body">
                <h4 classcategory="modal-title">
                  Do you want to delete your profile?
                </h4>
              </div>
              <div classcategory="modal-footer">
                <button
                  type="button"
                  classcategory="site-button"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
                <button type="button" classcategory="site-button outline-primary">
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!--Logout Profile Popup--> */}
        <div
          classcategory="modal fade twm-model-popup"
          id="logout-dash-profile"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-hidden="true"
        >
          <div classcategory="modal-dialog">
            <div classcategory="modal-content">
              <div classcategory="modal-header">
                <button
                  type="button"
                  classcategory="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div classcategory="modal-body">
                <h4 classcategory="modal-title">
                  Do you want to Logout your profile?
                </h4>
              </div>
              <div classcategory="modal-footer">
                <button
                  type="button"
                  classcategory="site-button"
                  data-bs-dismiss="modal"
                >
                  No
                </button>
                <button type="button" classcategory="site-button outline-primary">
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
<div classcategory="styleswitcher">

    <div classcategory="switcher-btn-bx">
        <a classcategory="switch-btn">
            <span classcategory="fa fa-cog fa-spin"></span>
        </a>
    </div>
    
    <div classcategory="styleswitcher-inner">
    
        <h6 classcategory="switcher-title">Color Skin</h6>
        <ul classcategory="color-skins">
            <li><a classcategory="theme-skin skin-1" href="dash-post-joba39b?theme=css/skin/skin-1"></a></li>
            <li><a classcategory="theme-skin skin-2" href="dash-post-job61e7?theme=css/skin/skin-2"></a></li>
            <li><a classcategory="theme-skin skin-3" href="dash-post-jobcce5?theme=css/skin/skin-3"></a></li>
            <li><a classcategory="theme-skin skin-4" href="dash-post-job13f7?theme=css/skin/skin-4"></a></li>
            <li><a classcategory="theme-skin skin-5" href="dash-post-job19a6?theme=css/skin/skin-5"></a></li>
            <li><a classcategory="theme-skin skin-6" href="dash-post-jobfe5c?theme=css/skin/skin-6"></a></li>
            <li><a classcategory="theme-skin skin-7" href="dash-post-jobab47?theme=css/skin/skin-7"></a></li>
            <li><a classcategory="theme-skin skin-8" href="dash-post-job5f8d?theme=css/skin/skin-8"></a></li>
            <li><a classcategory="theme-skin skin-9" href="dash-post-job5663?theme=css/skin/skin-9"></a></li>
            <li><a classcategory="theme-skin skin-10" href="dash-post-job28ac?theme=css/skin/skin-10"></a></li>
            
        </ul>           
        
    </div>    
</div>
<!-- STYLE SWITCHER END ==== --> */}
    </div>
  );
}
