import { Link, useParams } from "react-router-dom";

import Dash_Header from "../components/Dashheader";
import { useEffect, useState } from "react";
import { BASEURL } from "../common/config";
import axios from "axios";

export default function EditProduct() {
 

  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState();
  const [productName, setproductName] = useState();

  const [sellingPrice, setsellingPrice] = useState();

  const [buyingPrice, setbuyingPrice] = useState();
  const [expiryDate, setexpiryDate] = useState();
  const [unit, setunit] = useState();

  const [quantity, setquantity] = useState();
  const [productImage, setproductImage] = useState();
  const [productID, setproductID] = useState();
  const [id, setID] = useState();

  const [err, setErr] = useState(false);

  const { prodId } = useParams()

  useEffect(() => {
    
    const getProduct = async () => {
        let api_url ="https://sartor-server-beta.onrender.com/api/v1/admin/product/single/" + prodId;
        console.log(api_url)
        let adminToken = localStorage.getItem("sator-agent-token");
        
        const headers = {
            's-token': `${adminToken}`, 
            'Content-Type': 'application/json', 
        };
        try {
            const res = await axios.get(api_url, {headers});
            console.log(res.data.data);
            setbuyingPrice(res.data.data.buyingPrice)
            setproductName(res.data.data.productName)
            setquantity(res.data.data.quantity)
            setunit(res.data.data.unit)
            setexpiryDate(res.data.data.expiryDate)
            setsellingPrice(res.data.data.sellingPrice)
            setproductID(res.data.data.productID)
            setproductImage(res.data.data.productImage)
            setID(res.data.data._id)
            setCategoryId(res.data.data.categoryID)  
            console.log(id)

           
   
        } catch (err) {
            console.log(err);
        }
    };
    getProduct();
}, []);




  useEffect(() => {
    const apiUrl =
      "https://sartor-server-beta.onrender.com/api/v1/admin/product/categorys";
    let adminToken = localStorage.getItem("sator-agent-token");
    const headers = {
      "s-token": `${adminToken}`,
      "Content-Type": "application/json",
    };

    axios
      .get(apiUrl, { headers })
      .then((res) => {
        console.log(res.data.data);
        setCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCategorySelect = (event) => {
    setCategoryId(event.target.value);
  };

  // const handleJobCategory = (event) => {
  //   setJobCategoryId(event.target.options[event.target.selectedIndex].value);
  // };

  const uploadImage = async (uploadImg) => {

    const data = new FormData();
    data.append("file", uploadImg);
    data.append( "upload_preset", process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
    data.append("cloud_name", process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
    data.append("folder", "Cloudinary-React");
    console.log(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/auto/upload`)

    try {
      const response = await fetch( `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/auto/upload`,
        {
          method: "POST",
          body: data,
        }
      );
      const res = await response.json();
      console.log(res)
     
    
      return res.secure_url
      
    } catch (error) {
 
      return null
    }
  };

  const [loading, setLoading] = useState(false)
  const editProduct = async (e) => {
    e.preventDefault();
    setLoading(true)
    if (
      categoryId === undefined ||
      !productName ||
      !quantity ||
      !productImage ||
      !sellingPrice ||
      !buyingPrice ||
      !expiryDate ||
      !unit || 
      !productID
    ) {
      setErr(true);
        return;
    }

    let imageURL= await uploadImage(productImage)
    console.log(imageURL)
    console.log(productImage)
    const productFormData = new FormData();

    productFormData.append('productName', productName);
    productFormData.append('productID', productID);
    productFormData.append('categoryID', categoryId);
    productFormData.append('buyingPrice', buyingPrice);
    productFormData.append('quantity', quantity);
    productFormData.append('unit', unit);
    productFormData.append('expiryDate', expiryDate);
    productFormData.append('productImage', imageURL);
    productFormData.append('sellingPrice', sellingPrice);
    
    console.log(productFormData);

    let apiURL = "https://sartor-server-beta.onrender.com/api/v1/admin/product/edit";
    let adminToken = localStorage.getItem("sator-agent-token");

    const headers = {
      "s-token": `${adminToken}`,
      "Content-Type": "application/json",
    };

    axios
      .put(apiURL, productFormData, { headers })
      .then((res) => {
        console.log(res.data);
        alert("product updated");
      })
      .catch((err) => {
        console.log(err);
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
              <h2>Edit Product</h2>
              <div className="breadcrumbs">
                <a href="#">Home</a>
                <a href="#">Dasboard</a>
                <span> Product Form</span>
              </div>
            </div>

            {/* <!--Basic Information--> */}
            <div className="panel panel-default">
              <div className="panel-heading wt-panel-heading p-a20">
                <h4 className="panel-tittle m-a0">
                  <i className="fa fa-suitcase"></i>Product
                </h4>
              </div>
              <div className="panel-body wt-panel-body p-a20 m-b30 ">
                <form onSubmit={editProduct}>
                  <div className="row">
                    {/* <!--Job title-->             */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Product name </label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_name"
                            type="text"
                            placeholder="Panadol"
                            onChange={(e) => setproductName(e.target.value)}
                            value={productName}
                          />
                          <i className="fs-input-icon fa fa-buyingPrice-card"></i>
                        </div>
                        <div>
                          {err === true && !productName ? (
                            <span>Enter product name</span>
                          ) : (
                            productName === null
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Buying Price </label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_name"
                            type="text"
                            placeholder="6789"
                            onChange={(e) => setbuyingPrice(e.target.value)}
                            value={buyingPrice}
                          />
                          <i className="fs-input-icon fa fa-buyingPrice-card"></i>
                        </div>
                        <div>
                          {err === true && !productName ? (
                            <span>Enter buyingPrice</span>
                          ) : (
                            productName === null
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Category</label>
                        <div className="ls-inputicon-box">
                          <select
                            className="wt-select-box selectpicker form-select form-select-lg mb-3"
                            data-live-search="true"
                            title=""
                            id="s-category"
                            data-bv-field="size"
                            // onChange={(e)=>setCategoryId(e.target.value)}
                            // value={categoryId}
                            onChange={handleCategorySelect}
                            value={categoryId}
                          >
                            <option className="bs-title-option" value="">
                              Select Category
                            </option>

                            {category &&
                              category.map((comp) => (
                                <option key={comp._id} value={comp._id}>
                                  {comp.category}
                                </option>
                              ))}
                          </select>
                          <i className="fs-input-icon fa fa-file-alt"></i>
                        </div>
                        <div>
                          {err === true && !categoryId ? (
                            <span>Enter Category </span>
                          ) : (
                            categoryId === null
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>quantity</label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_quantity"
                            quantity="example@gmail.com"
                            placeholder="23"
                            onChange={(e) => setquantity(e.target.value)}
                            value={quantity}
                          />
                          <i className="fs-input-icon fa fa-user-edit"></i>
                        </div>
                        <div>
                          {err === true && !quantity ? (
                            <span>Enter quantity</span>
                          ) : (
                            quantity === null
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>unit</label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_quantity"
                            type="text"
                            placeholder="89"
                            onChange={(e) => setunit(e.target.value)}
                            value={unit}
                          />
                          <i className="fs-input-icon fa fa-user-edit"></i>
                        </div>
                        <div>
                          {err === true && !unit ? (
                            <span>Enter unit</span>
                          ) : (
                            unit === null
                          )}
                        </div>
                      </div>
                    </div>

                    {/* <!--productImage-->  */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Image</label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_quantity"
                            type="file"
                            placeholder="http // "
                            onChange={(e) => setproductImage(e.target.files[0])}
                          />
                          <i className="fs-input-icon fa fa-user-graduate"></i>
                        </div>
                        <div>
                          {err === true && !productImage ? (
                            <span>Enter productImage</span>
                          ) : (
                            productImage === null
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Expiry Date</label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_quantity"
                            type="date"
                            placeholder="medstar "
                            onChange={(e) => setexpiryDate(e.target.value)}
                            value={expiryDate}
                          />
                          <i className="fs-input-icon fa fa-venus-mars"></i>
                        </div>
                        <div>
                          {err === true && !expiryDate ? (
                            <span>Enter manager Name</span>
                          ) : (
                            expiryDate === null
                          )}
                        </div>
                      </div>
                    </div>

                    {/* <!--Gender-->  */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Selling Price</label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_quantity"
                            type="text"
                            placeholder="234"
                            onChange={(e) => setsellingPrice(e.target.value)}
                            value={sellingPrice}
                          />
                          <i className="fs-input-icon fa fa-venus-mars"></i>
                        </div>
                        <div>
                          {err === true && !sellingPrice ? (
                            <span>Enter manager quantity</span>
                          ) : (
                            sellingPrice === null
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  
                    {/* <!--Gender-->  */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>product ID</label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_quantity"
                            type="text"
                            placeholder="234"
                            onChange={(e) => setproductID(e.target.value)}
                            value={productID}
                          />
                          <i className="fs-input-icon fa fa-venus-mars"></i>
                        </div>
                        <div>
                          {err === true && !productID ? (
                            <span>Enter Product Id</span>
                          ) : (
                            productID === null
                          )}
                        </div>
                      </div>
                    </div>
                  

                  <div className="col-lg-12 col-md-12">
                    <div className="text-left">
                      <button type="submit" className="site-button m-r5">
                        {loading ? "processing" : "update Product"}
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
<script  src="js/productImagesloaded.pkgd.min.js"></script><!-- MASONRY  -->
<script  src="js/owl.carousel.min.js"></script><!-- OWL  SLIDER  -->
<script  src="js/theia-sticky-sidebar.js"></script><!-- STICKY SIDEBAR  -->
<script  src="js/lc_lightbox.lite.js" ></script><!-- productImage POPUP -->
<script  src="js/bootstrap-select.min.js"></script><!-- Form js -->
<script  src="js/dropzone.js"></script><!-- productImage UPLOAD  -->
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
