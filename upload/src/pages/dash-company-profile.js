import pic1 from "../assets/images/images/jobs-company/pic1.jpg"
import comp_pic from "../assets/images/images/candidates/pic5.jpg"
import { Link } from "react-router-dom"
import logo_white from "../assets/images/images/logo-white.png"
import logo from "../assets/images/images/logo-dark.png"
import Dash_Header from "../components/Dashheader"



export default function DashCompanyProfile(){
    return(
        <div>

   

	<div className="page-wraper">
    
        <Dash_Header />             
    	
    

        {/* <!-- Page Content Holder --> */}
        <div id="content">

            <div className="content-admin-main">

            	<div className="wt-admin-right-page-header clearfix">
                    <h2>Company Profile!</h2>
                    <div className="breadcrumbs"><a href="#">Home</a><a href="#">Dasboard</a><span>Company Profile!</span></div>
                </div>

                {/* <!--Logo and Cover image--> */}
                <div className="panel panel-default">
                    <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">Logo and Cover image</h4>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 p-b0 m-b30 ">
                        
                        <div className="row">
                                
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    
                                    <div className="dashboard-profile-pic">
                                        <div className="dashboard-profile-photo">
                                            <img src={pic1} alt=""/>
                                            <div className="upload-btn-wrapper">
                                                <div id="upload-image-grid"></div>
                                                <button className="site-button button-sm">Upload Photo</button>
                                                <input type="file" name="myfile" id="file-uploader" accept=".jpg, .jpeg, .png"/>
                                            </div>
                                        </div>
                                        <p><b>Company Logo :- </b> Max file size is 1MB, Minimum dimension: 136 x 136 And Suitable files are .jpg & .png</p>
                                    </div>

                                </div> 
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="dashboard-cover-pic">
                                    <form action="https://thewebmax.org/jobzilla/upload.php" className="dropzone"></form>
                                    <p><b>Background Banner Image :- </b> Max file size is 1MB, Minimum dimension: 770 x 310 And Suitable files are .jpg & .png</p> 
                                </div>                                    
                            </div>

                        </div>
                                    
                    </div>
                </div> 

                {/* <!--Basic Information-->/ */}
                <div className="panel panel-default">
                    <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">Basic Informations</h4>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 m-b30 ">
                        <form>
                            <div className="row">
                                                
                                    <div className="col-xl-4 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Company Name</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control" name="company_name" type="text" placeholder="Devid Smith"/>
                                                <i className="fs-input-icon fa fa-user "></i>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-4 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control" name="company_phone" type="text" placeholder="(251) 1234-456-7890"/>
                                                <i className="fs-input-icon fa fa-phone-alt"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control" name="company_Email" type="email" placeholder="Devid@example.com"/>
                                                <i className="fs-input-icon fa fa-envelope"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Website</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control" name="company_website" type="text" placeholder="https://.../"/>
                                                <i className="fs-input-icon fa fa-globe-americas"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Est. Since</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control" name="company_since" type="text" placeholder="Since..."/>
                                                <i className="fs-input-icon fa fa-globe-americas"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 col-lg-12 col-md-12">
                                        <div className="form-group city-outer-bx has-feedback">
                                            <label>Team Size</label>
                                            <div className="ls-inputicon-box">  
                                                <select className="wt-select-box selectpicker" name="team-size" data-live-search="true" title="team-size" id="city" data-bv-field="size">
                                                    <option className="bs-title-option" value="">5-10</option>
                                                    <option className="" value="">10+</option>
                                                    <option className="" value="">20+</option>
                                                    <option className="" value="">50+</option>
                                                </select>
                                                <i className="fs-input-icon fa fa-sort-numeric-up"></i>
                                            </div>
                                            
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea className="form-control" rows="3" placeholder="Greetings! We are Galaxy Software Development Company."></textarea>
                                        </div>
                                    </div>
                                   
                                                                                                
                                    <div className="col-lg-12 col-md-12">                                   
                                        <div className="text-left">
                                            <button type="submit" className="site-button">Save Changes</button>
                                        </div>
                                    </div> 
                                                                        
                                
                            </div>
                       </form>             
                    </div>
                </div>

                {/* <!--Photo gallery-->/ */}
                <div className="panel panel-default">
                    <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">Photo Gallery</h4>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 m-b30 ">
                        
                        <div className="row">
                                
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <form action="https://thewebmax.org/jobzilla/upload.php" className="dropzone"></form>
                                </div>
                            </div>
                                                                                            
                            <div className="col-lg-12 col-md-12">                                   
                                <div className="text-left">
                                    <button type="submit" className="site-button">Save Changes</button>
                                </div>
                            </div> 
                                                                    
                            
                        </div>
                                 
                    </div>
                </div>

                {/* <!--Video gallery--> */}
                <div className="panel panel-default">

                    <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">Video Gallery</h4>
                    </div>

                    <div className="panel-body wt-panel-body p-a20 m-b30 ">
                        <div className="row">

                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>Youtube</label>
                                    <div className="ls-inputicon-box input_fields_youtube"> 
                                        <input className="form-control wt-form-control" name="mytext[]" type="text" placeholder="https://www.youtube.com/"/>
                                        <i className="fs-input-icon fab fa-youtube"></i>
                                    </div>
                                    <div className="text-right m-tb10">
                                        <button className="add_field_youtube">Add More Fields <i className="fa fa-plus"></i></button>
                                    </div>
                                </div>                                    
                            </div>
                            
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <label>Vimeo</label>
                                    <div className="ls-inputicon-box input_fields_vimeo"> 
                                        <input className="form-control wt-form-control" name="mytext[]" type="text" placeholder="https://vimeo.com/"/>
                                        <i className="fs-input-icon fab fa-vimeo-v"></i>
                                    </div>
                                    <div className="text-right m-tb10">
                                        <button className="add_field_vimeo">Add More Fields <i className="fa fa-plus"></i></button>
                                    </div>                                        
                                </div> 
                            </div>
                            
                            <div className="col-lg-12 col-md-12">
                                <div className="custome-video-upload form-group">
                                    <label>Custom Video</label>
                                    <form action="https://thewebmax.org/jobzilla/upload.php" className="dropzone"></form>
                                </div> 
                            </div> 
                            
                            <div className="col-lg-12 col-md-12">                                   
                                <div className="text-left">
                                    <button type="submit" className="site-button">Save Changes</button>
                                </div>
                            </div> 

                        </div>           
                    </div> 
                    
                </div>

                {/* <!--Social Network-->/ */}
                <div className="panel panel-default">
                    <div className="panel-heading wt-panel-heading p-a20">
                        <h4 className="panel-tittle m-a0">Social Network</h4>
                    </div>
                    <div className="panel-body wt-panel-body p-a20 m-b30 ">
                        <form>
                            <div className="row">
                                   
                                    <div className="col-lg-4 col-md-6">
                                        <div className="form-group">
                                            <label>Facebook</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://www.facebook.com/"/>
                                                <i className="fs-input-icon fab fa-facebook-f"></i>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-4 col-md-6">    
                                        <div className="form-group">
                                            <label>Twitter</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://twitter.com/"/>
                                                <i className="fs-input-icon fab fa-twitter"></i>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-4 col-md-6">    
                                        <div className="form-group">
                                            <label>linkedin</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://in.linkedin.com/"/>
                                                <i className="fs-input-icon fab fa-linkedin-in"></i>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-4 col-md-6">     
                                        <div className="form-group">
                                            <label>Whatsapp</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://www.whatsapp.com/"/>
                                                <i className="fs-input-icon fab fa-whatsapp"></i>
                                            </div>
                                        </div>
                                    </div> 
                                    
                                    <div className="col-lg-4 col-md-6">                               
                                        <div className="form-group">
                                            <label>Instagram</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://www.instagram.com/"/>
                                                <i className="fs-input-icon fab fa-instagram"></i>
                                            </div>
                                        </div>
                                    </div>    
                                        
                                    <div className="col-lg-4 col-md-6">    
                                        <div className="form-group">
                                            <label>Pinterest</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://in.pinterest.com/"/>
                                                <i className="fs-input-icon fab fa-pinterest-p"></i>
                                            </div>
                                        </div>                 
                                    </div>
                                    
                                    <div className="col-lg-4 col-md-6">    
                                        <div className="form-group">
                                            <label>Tumblr</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://www.tumblr.com/"/>
                                                <i className="fs-input-icon fab fa-tumblr"></i>
                                            </div>
                                        </div>                                                                                          
                                    </div>
                                    
                                    <div className="col-lg-4 col-md-6">    
                                        <div className="form-group">
                                            <label>Youtube</label>
                                            <div className="ls-inputicon-box"> 
                                                <input className="form-control wt-form-control" name="company_name" type="text" placeholder="https://www.youtube.com/"/>
                                                <i className="fs-input-icon fab fa-youtube"></i>
                                            </div>
                                        </div>                  
                                    </div> 
                                                                                                
                                <div className="col-lg-12 col-md-12">                                   
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
<script  src="js/switcher.js"></script><!-- SHORTCODE FUCTIONS  --> */}


</div>

    )
}