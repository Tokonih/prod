import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/images/images/logo-dark.png"
import Dash_Header from "../components/Dashheader"
import { useEffect, useState } from "react"
import { BASEURL } from "../common/config"

import axios from "axios"


export default function ManageDeal() {
    const token = localStorage.getItem("token");
    const navigate = useNavigate()
    const [dealName, setDealName] = useState()
    useEffect(()=>{
        const apiUrl = BASEURL + "/sales-agent/deal/all"
        let adminToken = localStorage.getItem("sator-agent-token")
        const headers = {
            's-token': `${adminToken}`, 
            'Content-Type': 'application/json', 
          };
    
        axios.get(apiUrl, {headers})
        .then((res)=> {
            console.log(res.data.data)
            setDealName(res.data.data)
           
        }).catch((err)=>{
            console.log(err)
        })

    }, [])

    // const deleteData = (id) => {

    //     const shouldDelete = window.confirm("Are you sure you want to delete?");

    //     if (!shouldDelete) {
    //         return;
    //     }

    //     const deleteData = {
    //         id: id
    //     }
    //     console.log(deleteData)

    //     const apiUrl = `https://sartor-server-beta.onrender.com/api/v1/sales-agent/company/type/delete`
    //     let adminToken = localStorage.getItem("sator-agent-token")
     
    //     const headers = {
    //         's-token': `${adminToken}`, 
    //         'Content-Type': 'application/json', 
    //       };
    
    //     axios.delete(apiUrl, {headers, data:deleteData })
 
    //     .then((res)=> {
    //         console.log(res)
    //         setDealName((prevSales) => prevSales.filter(item => item.id !== id));
           
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    //   }

      const editCompany = (id) => {
            navigate(`/dash-edit-deal/${id}`)
      }


   

    return (
        <div>
            <div className="page-wraper">

                <Dash_Header />

              
                {/* <!-- Page Content Holder --> */}
                <div id="content">

                    <div className="content-admin-main">

                        <div className="wt-admin-right-page-header clearfix">
                            <h2>Manage Deal</h2> 
                            <div className="breadcrumbs"><a href="#">Home</a><a href="#">Dasboard</a><span>Deal</span></div>
                        </div>

                        {/* <!--Basic Information--> */}
                        <div className="panel panel-default">
                            <div className="panel-heading wt-panel-heading p-a20">
                                <div className="row">
                                    <div className="col"><h4 className="panel-tittle m-a0"><i className="fa fa-suitcase"></i> Deal</h4></div>
                                    <div className="col-auto"><Link to="/dash-post-deal" className="btn btn-primary">Post Deal</Link></div>
                                </div>
                            </div>
                            <div className="panel-body wt-panel-body p-a20 m-b30 ">
                                <div className="twm-D_table p-a20 table-responsive">
                                    <table id="companyType_bookmark_table" className="table table-bordered twm-bookmark-list-wrap">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                        
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <!--1--> */}
                                            {
                                                dealName && dealName.map((comp)=>(
                                                    <tr>
                                                        
                                                    
                                                        <td>{comp.dealName}</td>
                                                  

                                                        <td>
                                                            <div className="twm-table-controls">
                                                                <ul className="twm-DT-controls-icon list-unstyled">
                                                                    <li>
                                                                        <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                            <span className="fa fa-eye"></span>
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button onClick={()=> editCompany(comp._id)} title="Edit" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                            <span className="far fa-edit"></span>
                                                                        </button>
                                                                    </li>
                                                                    {/* <li>
                                                                        <button onClick={()=>deleteData(comp._id)} title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                            <span className="far fa-trash-alt"></span>
                                                                        </button>
                                                                    </li> */}
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                         

                                        </tbody>
                                        <tfoot>
                                            <tr>
                                            <th>Name</th>
                                                <th>Action</th>

                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                {/* <!--Delete Profile Popup--> */}
                <div className="modal fade twm-model-popup" id="delete-dash-profile" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h4 className="modal-title">Do you want to delete your profile?</h4>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="site-button" data-bs-dismiss="modal">No</button>
                                <button type="button" className="site-button outline-primary">Yes</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!--Logout Profile Popup--> */}
                <div className="modal fade twm-model-popup" id="logout-dash-profile" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h4 className="modal-title">Do you want to Logout your profile?</h4>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="site-button" data-bs-dismiss="modal">No</button>
                                <button type="button" className="site-button outline-primary">Yes</button>
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
    <script  src="js/switcher.js"></script><!-- SHORTCODE FUCTIONS  --> */}

            {/* <!-- STYLE SWITCHER  ======= --> 
    <div className="styleswitcher">
    
        <div className="switcher-btn-bx">
            <a className="switch-btn">
                <span className="fa fa-cog fa-spin"></span>
            </a>
        </div>
        
        <div className="styleswitcher-inner">
        
            <h6 className="switcher-title">Color Skin</h6>
            <ul className="color-skins">
                <li><a className="theme-skin skin-1" href="dash-manage-companyTypea39b.html?theme=css/skin/skin-1"></a></li>
                <li><a className="theme-skin skin-2" href="dash-manage-companyType61e7.html?theme=css/skin/skin-2"></a></li>
                <li><a className="theme-skin skin-3" href="dash-manage-companyTypecce5.html?theme=css/skin/skin-3"></a></li>
                <li><a className="theme-skin skin-4" href="dash-manage-companyType13f7.html?theme=css/skin/skin-4"></a></li>
                <li><a className="theme-skin skin-5" href="dash-manage-companyType19a6.html?theme=css/skin/skin-5"></a></li>
                <li><a className="theme-skin skin-6" href="dash-manage-companyTypefe5c.html?theme=css/skin/skin-6"></a></li>
                <li><a className="theme-skin skin-7" href="dash-manage-companyTypeab47.html?theme=css/skin/skin-7"></a></li>
                <li><a className="theme-skin skin-8" href="dash-manage-companyType5f8d.html?theme=css/skin/skin-8"></a></li>
                <li><a className="theme-skin skin-9" href="dash-manage-companyType5663.html?theme=css/skin/skin-9"></a></li>
                <li><a className="theme-skin skin-10" href="dash-manage-companyType28ac.html?theme=css/skin/skin-10"></a></li>
                
            </ul>           
            
        </div>    
    </div>
    <!-- STYLE SWITCHER END ==== --> */}

        </div>
    )
}