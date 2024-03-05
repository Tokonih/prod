import { Link } from "react-router-dom"
import pic1 from "../assets/images/images/candidates/pic1.jpg"
import pic2 from "../assets/images/images/candidates/pic2.jpg"
import pic3 from "../assets/images/images/candidates/pic3.jpg"
import pic4 from "../assets/images/images/candidates/pic4.jpg"
import pic5 from "../assets/images/images/candidates/pic5.jpg"
// import logo_white from "../assets/images/images/logo-white.png"
import logo from "../assets/images/images/logo-dark.png"
import Dash_Header from "../components/Dashheader"



export default function DashMessages() {
  return (
    <div>
      <div className="page-wraper">
        <Dash_Header />

      

        {/* <!-- Page Content Holder --> */}
        <div id="content">
          <div className="content-admin-main">
            <div className="wt-admin-right-page-header clearfix">
              <h2>Messages</h2>
              <div className="breadcrumbs">
                <a href="#">Home</a>
                <a href="#">Dasboard</a>
                <span>Messages</span>
              </div>
            </div>

            <div className="wt-admin-dashboard-msg-2">
              {/* <!--Left Msg section--> */}
              <div className="wt-dashboard-msg-user-list">
                <div className="user-msg-list-btn-outer">
                  <button className="user-msg-list-btn-close">Close</button>
                  <button className="user-msg-list-btn-open">User Message</button>
                </div>
                {/* <!-- Search Section Start--> */}
                <div className="wt-dashboard-msg-search">
                  <div className="input-group">
                    <input
                      className="form-control"
                      placeholder="Search Messages"
                      type="text"
                    />
                    <button className="btn" type="button">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
                {/* <!-- Search Section End-->
                        
                        <!-- Search Section End--> */}
                <div className="msg-find-list">
                  <select className="wt-select-box bs-select-hidden form-select form-select-lg mb-3">
                    <option>Recent Chats</option>
                    <option>Short by Time</option>
                    <option>Short by Unread</option>
                  </select>
                </div>
                {/* <!-- Search Section End-->
                        
                        <!-- user msg list start--> */}
                <div
                  id="msg-list-wrap"
                  className="wt-dashboard-msg-search-list scrollbar-macosx"
                >
                  <div className="wt-dashboard-msg-search-list-wrap">
                    <a href="javascript:;" className="msg-user-info clearfix">
                      <div className="msg-user-timing">2 hours ago</div>
                      <div className="msg-user-info-pic">
                        <img src={pic1} alt="" />
                      </div>
                      <div className="msg-user-info-text">
                        <div className="msg-user-name">Rustin Duza</div>
                        <div className="msg-user-discription">
                          All created by our Global
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="wt-dashboard-msg-search-list-wrap">
                    <a href="javascript:;" className="msg-user-info clearfix">
                      <div className="msg-user-timing">4 hours ago</div>
                      <div className="msg-user-info-pic">
                        <img src={pic2} alt="" />
                      </div>
                      <div className="msg-user-info-text">
                        <div className="msg-user-name">Peter Hawkins</div>
                        <div className="msg-user-discription">
                          All created by our Global
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="wt-dashboard-msg-search-list-wrap">
                    <a href="javascript:;" className="msg-user-info clearfix">
                      <div className="msg-user-timing">Fri</div>
                      <div className="msg-user-info-pic">
                        <img src={pic3} alt="" />
                      </div>
                      <div className="msg-user-info-text">
                        <div className="msg-user-name">Ralph Johnson</div>
                        <div className="msg-user-discription">
                          All created by our Global
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="wt-dashboard-msg-search-list-wrap">
                    <a href="javascript:;" className="msg-user-info clearfix">
                      <div className="msg-user-timing">Thu</div>
                      <div className="msg-user-info-pic">
                        <img src={pic4} alt="" />
                      </div>
                      <div className="msg-user-info-text">
                        <div className="msg-user-name">Randall Henderson</div>
                        <div className="msg-user-discription">
                          All created by our Global
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="wt-dashboard-msg-search-list-wrap">
                    <a href="javascript:;" className="msg-user-info clearfix">
                      <div className="msg-user-timing">16/07/2019</div>
                      <div className="msg-user-info-pic">
                        <img src={pic5} alt="" />
                      </div>
                      <div className="msg-user-info-text">
                        <div className="msg-user-name">Randall Warren</div>
                        <div className="msg-user-discription">
                          All created by our Global
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="wt-dashboard-msg-search-list-wrap">
                    <a href="javascript:;" className="msg-user-info clearfix">
                      <div className="msg-user-timing">16/07/2019</div>
                      <div className="msg-user-info-pic">
                        <img src={pic1} alt="" />
                      </div>
                      <div className="msg-user-info-text">
                        <div className="msg-user-name">Christina Fischer </div>
                        <div className="msg-user-discription">
                          All created by our Global
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="wt-dashboard-msg-search-list-wrap">
                    <a href="javascript:;" className="msg-user-info clearfix">
                      <div className="msg-user-timing">16/07/2019</div>
                      <div className="msg-user-info-pic">
                        <img src={pic2} alt="" />
                      </div>
                      <div className="msg-user-info-text">
                        <div className="msg-user-name">Wanda Willis</div>
                        <div className="msg-user-discription">
                          All created by our Global
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="wt-dashboard-msg-search-list-wrap">
                    <a href="javascript:;" className="msg-user-info clearfix">
                      <div className="msg-user-timing">16/07/2019</div>
                      <div className="msg-user-info-pic">
                        <img src={pic3} alt="" />
                      </div>
                      <div className="msg-user-info-text">
                        <div className="msg-user-name">Peter Hawkins</div>
                        <div className="msg-user-discription">
                          All created by our Global
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="wt-dashboard-msg-search-list-wrap">
                    <a href="javascript:;" className="msg-user-info clearfix">
                      <div className="msg-user-timing">16/07/2019</div>
                      <div className="msg-user-info-pic">
                        <img src={pic4} alt="" />
                      </div>
                      <div className="msg-user-info-text">
                        <div className="msg-user-name">Kathleen Moreno</div>
                        <div className="msg-user-discription">
                          All created by our Global
                        </div>
                      </div>
                    </a>
                  </div>

                  <div className="wt-dashboard-msg-search-list-wrap">
                    <a href="javascript:;" className="msg-user-info clearfix">
                      <div className="msg-user-timing">16/07/2019</div>
                      <div className="msg-user-info-pic">
                        <img src={pic5} alt="" />
                      </div>
                      <div className="msg-user-info-text">
                        <div className="msg-user-name">Wanda Montgomery </div>
                        <div className="msg-user-discription">
                          All created by our Global
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                {/* <!-- user msg list End--> */}
              </div>

              {/* <!--Right Msg section--> */}
              <div className="wt-dashboard-msg-box">
                <div className="single-msg-user-name-box">
                  <div className="single-msg-short-discription">
                    <h4 className="single-msg-user-name">Rustin Duza</h4>
                    Independent Web Designers and Developers.
                  </div>
                  <a href="#" className="message-action">
                    <i className="far fa-trash-alt"></i> Delete Conversation
                  </a>
                </div>
                <div
                  id="msg-chat-wrap"
                  className="single-user-msg-conversation scrollbar-macosx"
                >
                  <div className="single-user-comment-wrap">
                    <div className="row">
                      <div className="col-xl-9 col-lg-12">
                        <div className="single-user-comment-block clearfix">
                          <div className="single-user-com-pic">
                            <img src={pic2} alt="" />
                          </div>
                          <div className="single-user-com-text">
                            Breaking the endless cycle of meaningless text
                            message conversations starts with only talking to
                            someone who offers interesting topics opinions.
                          </div>
                          <div className="single-user-msg-time">12:13 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-user-comment-wrap sigle-user-reply">
                    <div className="row justify-content-end">
                      <div className="col-xl-9 col-lg-12">
                        <div className="single-user-comment-block clearfix">
                          <div className="single-user-com-pic">
                            <img src={pic1} alt="" />
                          </div>
                          <div className="single-user-com-text">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour.
                          </div>
                          <div className="single-user-msg-time">12:37 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-user-comment-wrap">
                    <div className="row">
                      <div className="col-xl-9 col-lg-12">
                        <div className="single-user-comment-block clearfix">
                          <div className="single-user-com-pic">
                            <img src={pic2} alt="" />
                          </div>
                          <div className="single-user-com-text">
                            Breaking the endless cycle of meaningless text
                            message conversations starts with only talking to
                            someone who offers interesting topics opinions.
                          </div>
                          <div className="single-user-msg-time">12:13 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-user-comment-wrap sigle-user-reply">
                    <div className="row justify-content-end">
                      <div className="col-xl-9 col-lg-12">
                        <div className="single-user-comment-block clearfix">
                          <div className="single-user-com-pic">
                            <img src={pic1} alt="" />
                          </div>
                          <div className="single-user-com-text">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour.
                          </div>
                          <div className="single-user-msg-time">12:37 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-user-comment-wrap">
                    <div className="row">
                      <div className="col-xl-9 col-lg-12">
                        <div className="single-user-comment-block clearfix">
                          <div className="single-user-com-pic">
                            <img src={pic2} alt="" />
                          </div>
                          <div className="single-user-com-text">
                            Breaking the endless cycle of meaningless text
                            message conversations starts with only talking to
                            someone who offers interesting topics opinions.
                          </div>
                          <div className="single-user-msg-time">12:13 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="single-user-comment-wrap sigle-user-reply">
                    <div className="row justify-content-end">
                      <div className="col-xl-9 col-lg-12">
                        <div className="single-user-comment-block clearfix">
                          <div className="single-user-com-pic">
                            <img src={pic1} alt="" />
                          </div>
                          <div className="single-user-com-text">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered alteration
                            in some form, by injected humour.
                          </div>
                          <div className="single-user-msg-time">12:37 PM</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-msg-reply-comment ">
                  <div className="input-group">
                    <textarea
                      className="form-control"
                      placeholder="Type a message here"
                    ></textarea>
                    <button className="btn" type="button">
                      <i className="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </div>
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
                <h4 className="modal-title">Do you want to delete your profile?</h4>
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
                <h4 className="modal-title">Do you want to Logout your profile?</h4>
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
            <li><a className="theme-skin skin-1" href="dash-messagesa39b.html?theme=css/skin/skin-1"></a></li>
            <li><a className="theme-skin skin-2" href="dash-messages61e7.html?theme=css/skin/skin-2"></a></li>
            <li><a className="theme-skin skin-3" href="dash-messagescce5.html?theme=css/skin/skin-3"></a></li>
            <li><a className="theme-skin skin-4" href="dash-messages13f7.html?theme=css/skin/skin-4"></a></li>
            <li><a className="theme-skin skin-5" href="dash-messages19a6.html?theme=css/skin/skin-5"></a></li>
            <li><a className="theme-skin skin-6" href="dash-messagesfe5c.html?theme=css/skin/skin-6"></a></li>
            <li><a className="theme-skin skin-7" href="dash-messagesab47.html?theme=css/skin/skin-7"></a></li>
            <li><a className="theme-skin skin-8" href="dash-messages5f8d.html?theme=css/skin/skin-8"></a></li>
            <li><a className="theme-skin skin-9" href="dash-messages5663.html?theme=css/skin/skin-9"></a></li>
            <li><a className="theme-skin skin-10" href="dash-messages28ac.html?theme=css/skin/skin-10"></a></li>
            
        </ul>           
        
    </div>    
</div>
<!-- STYLE SWITCHER END ==== --> */}
    </div>
  );
}
