import { Link } from "react-router-dom"
import pic5 from "../assets/images/images/candidates/pic5.jpg"
import logo from "../assets/images/images/logo-dark.png"
import logo_white from "../assets/images/images/logo-white.png"
import Dash_Header from "../components/Dashheader"

export default function DashChangePassword() {
    return (
        <div>



            <div className="page-wraper">

                <Dash_Header />

              

                {/* <!-- Page Content Holder --> */}
                <div id="content">

                    <div className="content-admin-main">

                        <div className="wt-admin-right-page-header clearfix">
                            <h2>Change Password!</h2>
                            <div className="breadcrumbs">
                                <Link to="#">Home</Link> <Link to="#">Dasboard</Link><span>Change Password</span></div>
                        </div>

                        {/* <!--Change Pawssword--> */}

                        <div className="panel panel-default">
                            <div className="panel-heading wt-panel-heading p-a20">
                                <h4 className="panel-tittle m-a0">Change Password</h4>
                            </div>
                            <div className="panel-body wt-panel-body p-a20 ">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>Old Password</label>
                                                <div className="ls-inputicon-box">
                                                    <input className="form-control wt-form-control" name="company_name" type="password" placeholder="" />
                                                    <i className="fs-input-icon fas fa-asterisk "></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <label>New Password</label>
                                                <div className="ls-inputicon-box">
                                                    <input className="form-control wt-form-control" name="company_name" type="password" placeholder="" />
                                                    <i className="fs-input-icon fas fa-asterisk"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <label>Confirm New Password</label>
                                                <div className="ls-inputicon-box">
                                                    <input className="form-control wt-form-control" name="company_name" type="password" placeholder="" />
                                                    <i className="fs-input-icon fas fa-asterisk"></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                            <div className="text-left">
                                                <button type="submit" className="site-button">Save Changes</button>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>


                    </div>

                </div>

                {/* <!--Delete Profile Popup-->/ */}
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
                <li><a className="theme-skin skin-1Link to="dash-change-passworda39b.html?theme=css/skin/skin-1"></a></li>
                <li><a className="theme-skin skin-2Link to="dash-change-password61e7.html?theme=css/skin/skin-2"></a></li>
                <li><a className="theme-skin skin-3Link to="dash-change-passwordcce5.html?theme=css/skin/skin-3"></a></li>
                <li><a className="theme-skin skin-4Link to="dash-change-password13f7.html?theme=css/skin/skin-4"></a></li>
                <li><a className="theme-skin skin-5Link to="dash-change-password19a6.html?theme=css/skin/skin-5"></a></li>
                <li><a className="theme-skin skin-6Link to="dash-change-passwordfe5c.html?theme=css/skin/skin-6"></a></li>
                <li><a className="theme-skin skin-7Link to="dash-change-passwordab47.html?theme=css/skin/skin-7"></a></li>
                <li><a className="theme-skin skin-8Link to="dash-change-password5f8d.html?theme=css/skin/skin-8"></a></li>
                <li><a className="theme-skin skin-9Link to="dash-change-password5663.html?theme=css/skin/skin-9"></a></li>
                <li><a className="theme-skin skin-10Link to="dash-change-password28ac.html?theme=css/skin/skin-10"></a></li>
                
            </ul>           
            
        </div>    
    </div> */}
            {/* <!-- STYLE SWITCHER END ==== --> */}

        </div>
    )
}