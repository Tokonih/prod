import { Link } from "react-router-dom"
import pic1 from "../assets/images/images/jobs-company/pic1.jpg"
import pic2 from "../assets/images/images/jobs-company/pic2.jpg"
import pic3 from "../assets/images/images/jobs-company/pic3.jpg"
import pic4 from "../assets/images/images/jobs-company/pic4.jpg"
import pic5 from "../assets/images/images/jobs-company/pic5.jpg"
import logo from "../assets/images/images/logo-dark.png"
import Dash_Header from "../components/Dashheader"
// import logo_white from "../assets/images/images/logo-white.png"


export default function DashBookmark(){
    return(
        <div>

   

	<div className="page-wraper">
    
       <Dash_Header />       
    	
      

        {/* <!-- Page Content Holder --> */}
        <div id="content">

            <div className="content-admin-main">

                <div className="wt-admin-right-page-header clearfix">
                    <h2>Bookmark</h2>
                    <div className="breadcrumbs"><a href="#">Home</a><a href="#">Dasboard</a><span>Bookmarked Jobs</span></div>
                </div>

                <div className="twm-pro-view-chart-wrap">

                    <div className="col-lg-12 col-md-12 mb-4">
                        <div className="panel panel-default site-bg-white m-t30">
                            <div className="panel-heading wt-panel-heading p-a20">
                                <h4 className="panel-tittle m-a0"><i className="far fa-bookmark"></i>Bookmarked Jobs</h4>
                            </div>
                            <div className="panel-body wt-panel-body">
                                <div className="twm-D_table p-a20 table-responsive">
                                    <table id="jobs_bookmark_table" className="table table-bordered twm-bookmark-list-wrap">
                                        <thead>
                                            <tr>
                                                <th>Job Title</th>
                                                <th>Job Types</th>
                                                <th>Post Timing</th>
                                                <th>Applied Date</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <!--1--> */}
                                            <tr>
                                                <td>
                                                    <div className="twm-bookmark-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic1} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Senior Web Designer</h4>
                                                            </a>
                                                            <p className="twm-bookmark-address">
                                                                <i className="feather-map-pin"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                                                            </p>
                                                            <a href="#" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-green">New</span></div></td>
                                                <td><div className="twm-job-post-duration">20 days ago</div></td>
                                                <td>08/06/2023</td>
                                                <td><span className="text-clr-green2">Active</span></td>
                                                <td>
                                                    <div className="twm-table-controls">
                                                        <ul className="twm-DT-controls-icon list-unstyled">
                                                            <li>
                                                                <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="fa fa-eye"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-envelope-open"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-trash-alt"></span>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            {/* <!--2--> */}
                                            <tr>
                                                <td>
                                                    <div className="twm-bookmark-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic2} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Sr. Rolling Stock Technician</h4>
                                                            </a>
                                                            <p className="twm-bookmark-address">
                                                                <i className="feather-map-pin"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                                                            </p>
                                                            <a href="#" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                            
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-brown">Intership</span></div></td>
                                                <td><div className="twm-job-post-duration">20 days ago</div></td>
                                                <td>08/06/2023</td>
                                                <td><span className="text-clr-green2">Active</span></td>
                                                <td>
                                                    <div className="twm-table-controls">
                                                        <ul className="twm-DT-controls-icon list-unstyled">
                                                            <li>
                                                                <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="fa fa-eye"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-envelope-open"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-trash-alt"></span>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>

                                            {/* <!--3--> */}
                                            <tr>
                                                <td>
                                                    <div className="twm-bookmark-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic3} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>IT Department Manager</h4>
                                                            </a>
                                                            <p className="twm-bookmark-address">
                                                                <i className="feather-map-pin"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                                                            </p>
                                                            <a href="#" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                            
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-purple">Fulltime</span></div></td>
                                                <td><div className="twm-job-post-duration">20 days ago</div></td>
                                                <td>08/06/2023</td>
                                                <td><span className="text-clr-green2">Active</span></td>
                                                <td>
                                                    <div className="twm-table-controls">
                                                        <ul className="twm-DT-controls-icon list-unstyled">
                                                            <li>
                                                                <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="fa fa-eye"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-envelope-open"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-trash-alt"></span>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>

                                            {/* <!--4--> */}
                                            <tr>
                                                <td>
                                                    <div className="twm-bookmark-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic4} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Art Production Specialist</h4>
                                                            </a>
                                                            <p className="twm-bookmark-address">
                                                                <i className="feather-map-pin"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                                                            </p>
                                                            <a href="#" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                            
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-sky">Freelancer</span></div></td>
                                                <td><div className="twm-job-post-duration">20 days ago</div></td>
                                                <td>08/06/2023</td>
                                                <td><span className="text-clr-green2">Active</span></td>
                                                <td>
                                                    <div className="twm-table-controls">
                                                        <ul className="twm-DT-controls-icon list-unstyled">
                                                            <li>
                                                                <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="fa fa-eye"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-envelope-open"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-trash-alt"></span>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>

                                            {/* <!--5--> */}
                                            <tr>
                                                <td>
                                                    <div className="twm-bookmark-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic5} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Recreation & Fitness Worker</h4>
                                                            </a>
                                                            <p className="twm-bookmark-address">
                                                                <i className="feather-map-pin"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                                                            </p>
                                                            <a href="#" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                            
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-golden">Temporary</span></div></td>
                                                <td><div className="twm-job-post-duration">20 days ago</div></td>
                                                <td>08/06/2023</td>
                                                <td><span className="text-clr-green2">Active</span></td>
                                                <td>
                                                    <div className="twm-table-controls">
                                                        <ul className="twm-DT-controls-icon list-unstyled">
                                                            <li>
                                                                <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="fa fa-eye"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-envelope-open"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-trash-alt"></span>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>

                                            {/* <!--6--> */}
                                            <tr>
                                                <td>
                                                    <div className="twm-bookmark-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic1} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Senior Web Designer</h4>
                                                            </a>
                                                            <p className="twm-bookmark-address">
                                                                <i className="feather-map-pin"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                                                            </p>
                                                            <a href="#" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                            
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-green">New</span></div></td>
                                                <td><div className="twm-job-post-duration">20 days ago</div></td>
                                                <td>08/06/2023</td>
                                                <td><span className="text-clr-green2">Active</span></td>
                                                <td>
                                                    <div className="twm-table-controls">
                                                        <ul className="twm-DT-controls-icon list-unstyled">
                                                            <li>
                                                                <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="fa fa-eye"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-envelope-open"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-trash-alt"></span>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            {/* <!--7--> */}
                                            <tr>
                                                <td>
                                                    <div className="twm-bookmark-list">
                                                        <div className="twm-media">
                                                            <div className="twm-media-pic">
                                                               <img src={pic2} alt="#"/>
                                                            </div>
                                                        </div>
                                                        <div className="twm-mid-content">
                                                            <a href="#" className="twm-job-title">
                                                                <h4>Sr. Rolling Stock Technician</h4>
                                                            </a>
                                                            <p className="twm-bookmark-address">
                                                                <i className="feather-map-pin"></i>1363-1385 Sunset Blvd Los Angeles, CA 90026, USA
                                                            </p>
                                                            <a href="#" className="twm-job-websites site-text-primary">https://thewebmax.com</a>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                </td>
                                                <td><div className="twm-jobs-category"><span className="twm-bg-green">New</span></div></td>
                                                <td><div className="twm-job-post-duration">20 days ago</div></td>
                                                <td>08/06/2023</td>
                                                <td><span className="text-clr-green2">Active</span></td>
                                                <td>
                                                    <div className="twm-table-controls">
                                                        <ul className="twm-DT-controls-icon list-unstyled">
                                                            <li>
                                                                <button title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="fa fa-eye"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-envelope-open"></span>
                                                                </button>
                                                            </li>
                                                            <li>
                                                                <button title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                    <span className="far fa-trash-alt"></span>
                                                                </button>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Job Title</th>
                                                <th>Job Types</th>
                                                <th>Post Timing</th>
                                                <th>Applied Date</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                                                      
            </div>

    	</div>

        {/* <!--Delete Profile Popup--> */}
        <div className="modal fade twm-model-popup" id="delete-dash-profile" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"  aria-hidden="true">
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





{/* <!-- STYLE SWITCHER  ======= -->  */}
<div className="styleswitcher">

    <div className="switcher-btn-bx">
        <a className="switch-btn">
            <span className="fa fa-cog fa-spin"></span>
        </a>
    </div>
    
    <div className="styleswitcher-inner">
    
        <h6 className="switcher-title">Color Skin</h6>
        <ul className="color-skins">
            <li><a className="theme-skin skin-1" href="dash-bookmarka39b.html?theme=css/skin/skin-1"></a></li>
            <li><a className="theme-skin skin-2" href="dash-bookmark61e7.html?theme=css/skin/skin-2"></a></li>
            <li><a className="theme-skin skin-3" href="dash-bookmarkcce5.html?theme=css/skin/skin-3"></a></li>
            <li><a className="theme-skin skin-4" href="dash-bookmark13f7.html?theme=css/skin/skin-4"></a></li>
            <li><a className="theme-skin skin-5" href="dash-bookmark19a6.html?theme=css/skin/skin-5"></a></li>
            <li><a className="theme-skin skin-6" href="dash-bookmarkfe5c.html?theme=css/skin/skin-6"></a></li>
            <li><a className="theme-skin skin-7" href="dash-bookmarkab47.html?theme=css/skin/skin-7"></a></li>
            <li><a className="theme-skin skin-8" href="dash-bookmark5f8d.html?theme=css/skin/skin-8"></a></li>
            <li><a className="theme-skin skin-9" href="dash-bookmark5663.html?theme=css/skin/skin-9"></a></li>
            <li><a className="theme-skin skin-10" href="dash-bookmark28ac.html?theme=css/skin/skin-10"></a></li>
            
        </ul>           
        
    </div>    
</div>
{/* <!-- STYLE SWITCHER END ==== --> */}



</div>
    )
}