import { Link, useParams } from "react-router-dom";
import pic1 from "../assets/images/images/candidates/pic1.jpg";
// import logo_white from "../assets/images/images/logo-white.png"
import logo from "../assets/images/images/logo-dark.png";
import Dash_Header from "../components/Dashheader";
import { useEffect, useState } from "react";
import { BASEURL } from "../common/config";
import axios from "axios";

export default function PostDeal() {
    const {companyId} = useParams()

  const [companies, setCompanies] = useState([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState();

  const [Product, setProduct] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState();

  
  const [dealName, setdealName] = useState();
  const [err, setErr] = useState(false);




  
  useEffect(() => {
    const getCompany = async () => {
        let api_url =`https://sartor-server-beta.onrender.com/api/v1/sales-agent/company/all`;
        let adminToken = localStorage.getItem("sator-agent-token");
        console.log(adminToken)
        
        const headers = {
            's-token': `${adminToken}`, 
            'Content-Type': 'application/json', 
        };
        try {
            const res = await axios.get(api_url, {headers});
            console.log(res.data.data);
            setCompanies(res.data.data)
     
   
        } catch (err) {
            console.log(err);
        }
    };
    getCompany();
}, []);


useEffect(() => {
    const getProduct = async () => {
        let api_url =`https://sartor-server-beta.onrender.com/api/v1/admin/product/all`;
        let adminToken = localStorage.getItem("sator-agent-token");
        console.log(adminToken)
        
        const headers = {
            's-token': `${adminToken}`, 
            'Content-Type': 'application/json', 
        };
        try {
            const res = await axios.get(api_url, {headers});
            console.log(res.data.data);
            setProduct(res.data.data)
     
   
        } catch (err) {
            console.log(err);
        }
    };
    getProduct();
}, []);






  
  const handleCompanySelect = (event) => {
    setSelectedCompanyId(event.target.value);
  };

    
  const handleProductSelect = (event) => {
    setSelectedProductId(event.target.value);
  };


  const [loading, setLoading ] = useState(false)
  const createDeal = (e) => {
    e.preventDefault();
    setLoading(true)
    if (
      selectedCompanyId === undefined ||
      !dealName 
    ) {

      setErr(true);
      return;
    }

    const companyData = {
    
      dealName:dealName,
      companyID:selectedCompanyId,
      productID:selectedProductId
    };
    console.log(companyData);
    

    let apiURL = "https://sartor-server-beta.onrender.com/api/v1/sales-agent/deal" 
    let adminToken = localStorage.getItem("sator-agent-token");

    
    const headers = {
        's-token': `${adminToken}`, 
        'Content-Type': 'application/json', 
    };

    axios.post(apiURL, companyData, {headers})
    .then((res)=> {
        console.log(res.data)
        alert("Deal created")
    }).catch((err)=>{
        console.log(err)
    })
    .finally(()=>{
      setLoading(false)
    })
  };

  return (
    <div>
      <div className="page-wraper">
        <Dash_Header />

        {/* <!-- Page Content Holder --> */}
        <div id="content">
          <div className="content-admin-main">
            <div className="wt-admin-right-page-header clearfix">
              <h2>Create Deal</h2>
              <div className="breadcrumbs">
                <a href="#">Home</a>
                <a href="#">Dasboard</a>
                <span> Deal Form</span>
              </div>
            </div>

            {/* <!--Basic Information--> */}
            <div className="panel panel-default">
              <div className="panel-heading wt-panel-heading p-a20">
                <h4 className="panel-tittle m-a0">
                  <i className="fa fa-suitcase"></i>Deal
                </h4>
              </div>
              <div className="panel-body wt-panel-body p-a20 m-b30 ">
                <form onSubmit={createDeal}>
                  <div className="row">
                    {/* <!--Job title-->             */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Deal name </label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_name"
                            type="text"
                            placeholder="Pharm star"
                            onChange={(e) => setdealName(e.target.value)}
                            value={dealName}
                          />
                          <i className="fs-input-icon fa fa-address-card"></i>
                        </div>
                        <div>
                          {err === true && !dealName  ? (
                            <span>Enter Deal Name</span>
                          ) : (
                            dealName === null
                          )}
                        </div>
                      </div>
                    </div>

          

                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Company</label>
                        <div className="ls-inputicon-box">
                          <select
                            className="wt-select-box selectpicker form-select form-select-lg mb-3"
                            data-live-search="true"
                            title=""
                            id="s-category"
                            data-bv-field="size"
                            // onChange={(e)=>setSelectedCompanyId(e.target.value)}
                            // value={selectedCompanyId}
                            onChange={handleCompanySelect}
                            value={selectedCompanyId}
                          >
                            <option className="bs-title-option" value="">
                              Select Company
                            </option>

                            {companies &&
                              companies.map((comp) => (
                                <option key={comp._id} value={comp._id}>
                                  {comp.companyName}
                                </option>
                              ))}
                          </select>
                          <i className="fs-input-icon fa fa-file-alt"></i>
                        </div>
                        <div>
                          {err === true && !selectedCompanyId  ? (
                            <span>Enter company </span>
                          ) : (
                            selectedCompanyId === null
                          )}
                        </div>
                      </div>
                    </div>

                    
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Product</label>
                        <div className="ls-inputicon-box">
                          <select
                            className="wt-select-box selectpicker form-select form-select-lg mb-3"
                            data-live-search="true"
                            title=""
                            id="s-category"
                            data-bv-field="size"
                            // onChange={(e)=>setSelectedCompanyId(e.target.value)}
                            // value={selectedCompanyId}
                            onChange={handleProductSelect}
                            value={selectedProductId}
                          >
                            <option className="bs-title-option" value="">
                              Select Product
                            </option>

                            {Product &&
                              Product.map((comp) => (
                                <option key={comp._id} value={comp._id}>
                                  {comp.productName}
                                </option>
                              ))}
                          </select>
                          <i className="fs-input-icon fa fa-file-alt"></i>
                        </div>
                        <div>
                          {err === true && !selectedCompanyId  ? (
                            <span>Enter Product </span>
                          ) : (
                            selectedCompanyId === null
                          )}
                        </div>
                      </div>
                    </div>

        

                 


                  </div>

                  <div className="col-lg-12 col-md-12">
                      <div className="text-left">
                        <button type="submit" className="site-button m-r5">
                          
                          {loading ? "processing... " : "post deal"}
                        </button>
                        {/* <button
                          type="submit"
                          className="site-button outline-primary"
                        >
                          Save Draft
                        </button> */}
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
<div className="styleswitcher">

    <div className="switcher-btn-bx">
        <a className="switch-btn">
            <span className="fa fa-cog fa-spin"></span>
        </a>
    </div>
    
    <div className="styleswitcher-inner">
    
        <h6 className="switcher-title">Color Skin</h6>
        <ul className="color-skins">
            <li><a className="theme-skin skin-1" href="dash-post-joba39b?theme=css/skin/skin-1"></a></li>
            <li><a className="theme-skin skin-2" href="dash-post-job61e7?theme=css/skin/skin-2"></a></li>
            <li><a className="theme-skin skin-3" href="dash-post-jobcce5?theme=css/skin/skin-3"></a></li>
            <li><a className="theme-skin skin-4" href="dash-post-job13f7?theme=css/skin/skin-4"></a></li>
            <li><a className="theme-skin skin-5" href="dash-post-job19a6?theme=css/skin/skin-5"></a></li>
            <li><a className="theme-skin skin-6" href="dash-post-jobfe5c?theme=css/skin/skin-6"></a></li>
            <li><a className="theme-skin skin-7" href="dash-post-jobab47?theme=css/skin/skin-7"></a></li>
            <li><a className="theme-skin skin-8" href="dash-post-job5f8d?theme=css/skin/skin-8"></a></li>
            <li><a className="theme-skin skin-9" href="dash-post-job5663?theme=css/skin/skin-9"></a></li>
            <li><a className="theme-skin skin-10" href="dash-post-job28ac?theme=css/skin/skin-10"></a></li>
            
        </ul>           
        
    </div>    
</div>
<!-- STYLE SWITCHER END ==== --> */}
    </div>
  );
}
