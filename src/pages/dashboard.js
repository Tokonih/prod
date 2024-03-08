import { Link, useNavigate } from "react-router-dom";
import pic1 from "../assets/images/images/candidates/pic1.jpg";
import pic2 from "../assets/images/images/candidates/pic2.jpg"
import pic3 from "../assets/images/images/candidates/pic3.jpg"
import pic4 from "../assets/images/images/candidates/pic4.jpg"
import pic5 from "../assets/images/images/candidates/pic5.jpg"
import logo_white from "../assets/images/images/logo-white.png"
import logo from "../assets/images/images/logo-dark.png"
import Dash_Header from "../components/Dashheader";
import { useEffect, useState } from "react";
import { BASEURL } from "../common/config";
import axios from "axios";
import "../styles/style.css"
;

export default function Dashboard() {
  
    const [sales, setSales] = useState()
    const [allCrypto, setAllCrypto] = useState()
    const [crypto, setCrypto] = useState(null)
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredCrypto, setFilteredCrypto] = useState([]);
    const navigate = useNavigate()

    useEffect(()=>{
        const apiUrl = `${BASEURL}/api/data`
        axios.get(apiUrl)
        .then((res)=> {
            if (res.status === 200) {
                const cryptoArray = Object.values(res.data.data);
                const firstFourCrypto = cryptoArray.slice(0, 4);
                setCrypto(firstFourCrypto);
                setAllCrypto(res.data.data)
                setFilteredCrypto(cryptoArray);
            }
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    
  // Function to handle search
  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    
    const filteredCrypto = Object.entries(crypto)
        .filter(([key, cryptoItem]) =>
            cryptoItem.name.toLowerCase().includes(searchTerm) || 
            cryptoItem.symbol.toLowerCase().includes(searchTerm)
        )
        .map(([key, cryptoItem]) => cryptoItem);
        
    setFilteredCrypto(filteredCrypto);
};



    let userData = JSON.parse(localStorage.getItem("myzoda-user"))
    console.log(userData)
   
    const userWallet = userData.wallet
    const totalQuantity = userWallet.reduce((total, crypto) => total + crypto.quantity, 0)



    return (
        <div>



            <div className="link-tag page-wraper">

                <Dash_Header />

              

                {/* <!-- Page Content Holder --> */}
                <div id="content">

                    <div className="link-tag content-admin-main">

                        <div className="link-tag wt-admin-right-page-header clearfix">
                            <h2>$ {userData.balance}</h2>
                            <Link to="/dash-fund-wallet">Fund Account</Link>
                            <div className="link-tag breadcrumbs"><a href=" #">Home</a><span> My referral code:  {userData.myRefCode}</span></div>

                            <div>
                            <div className="header-right">
              <ul className="header-widget-wrap">
                <form
                  action=""
                  className=""
                >
              <input
            type="text"
            placeholder="Search for coin"
            value={searchTerm}
            onChange={handleSearch}
            style={{padding: "10px"}}
        />
                 {
                    searchTerm ? (<div style={{display: "block"}}>
                    {filteredCrypto && Object.values(filteredCrypto).map(cryptoItem => (
            <div style={{zIndex:"1",height:"150px", display:"block" }} className="" key={cryptoItem.id}>
                <ul>
                    <li style={{listStyle: "none", background: "white", padding: "10px"}}>{cryptoItem.name}</li>
                </ul>
            </div>
        ))}
                    </div>) : null    
                  }
                </form>
              
              </ul>
            </div>
                            </div>
                        </div>

                        <div className="link-tag twm-dash-b-blocks mb-5">
                            <div className="link-tag row">
                            {crypto && Object.keys(crypto).map((key) => (
                <div key={key} className="link-tag col-xl-3 col-lg-6 col-md-12 mb-3">
                    <div className="link-tag panel panel-default">
                        <div className="link-tag panel-body wt-panel-body gradi-1 dashboard-card ">
                            <div className="link-tag wt-card-wrap">
                            <div className="link-tag wt-card-icon"><i className="link-tag far fa-file-alt"></i></div>
                                <div className="link-tag wt-card-right wt-total-active-listing counter ">{crypto[key].symbol}</div>
                                <div className="link-tag wt-card-bottom ">
                                    <h4 className="link-tag m-b0">{crypto[key].price}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
                    
                            </div>
                        </div>

                        <div className="link-tag twm-pro-view-chart-wrap">
                            <div className="link-tag row">
                                <div className="link-tag col-xl-6 col-lg-12 col-md-12 mb-4">
                                    <div className="link-tag panel panel-default site-bg-white">
                                        <div className="link-tag panel-heading wt-panel-heading p-a20">
                                            <h4 className="link-tag panel-tittle m-a0"><i className="link-tag far fa-chart-bar"></i>Market Trend</h4>
                                        </div>
                                        <div className="link-tag panel-body wt-panel-body twm-pro-view-chart">
                                            <canvas id="profileViewChart"></canvas>
                                        </div>
                                    </div>

                                </div>


                                <div className="link-tag col-xl-6 col-lg-12 col-md-12 mb-4">
                                    <div className="link-tag panel panel-default">
                                        <div className="link-tag panel-heading wt-panel-heading p-a20 d-flex align-items-center justify-content-between">
                                            <h4 className="link-tag panel-tittle m-a0">My wallet</h4>
                                            <h4 className="link-tag panel-tittle m-a0">$ {totalQuantity? totalQuantity : 0 }</h4>
                                        </div>
                                        <div className="link-tag panel-body wt-panel-body bg-white">
                                            <div className="link-tag dashboard-messages-box-scroll scrollbar-macosx">
                                            {
                                           userWallet && userWallet.map((crypto)=>(

                                                <div className="link-tag dashboard-messages-box d-flex align-items-center justify-content-between">
                                                    <div className="link-tag dashboard-message-area">
                                                        <h5>{crypto.symbol}</h5>
                                                        <p>{crypto.currentPrice}</p>
                                                    </div>
                                                    <div className="link-tag dashboard-message-area">
                                                        <p>{crypto.quantity}</p>
                                                    </div>
                                                </div>
                                                ))
                                            }


                                              
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                <div className="link-tag col-lg-12 col-md-12 mb-4">
                                    <div className="link-tag panel panel-default site-bg-white m-t30">
                                        <div className="link-tag panel-heading wt-panel-heading p-a20">
                                            <h4 className="link-tag panel-tittle m-a0"><i className="link-tag far fa-list-alt"></i>Trending Cryptocurrencies</h4>
                                        </div>
                                        <div className="link-tag panel-body wt-panel-body">

                                            <div className="link-tag dashboard-list-box list-box-with-icon">
                                                <ul>

                                                    {
                                                      allCrypto && Object.values(allCrypto).map((crypto)=>(
                                                            <li>
                                                                <i className="link-tag fas fa-dollar-sign text-success list-box-icon"></i>{crypto.name} 
                                                                <a href=" #" className="link-tag close-list-item color-lebel clr-red">
                                                                {crypto.price}
                                                                </a>
                                                            </li>
                                                      
                                                  )  )} 
                                                </ul>

                                            </div>

                                        </div>
                                    </div>
                                </div>

                               
                            </div>
                        </div>

                    </div>

                </div>

                {/* <!--Delete Profile Popup-->/ */}
                <div className="link-tag modal fade twm-model-popup" id="delete-dash-profile" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                    <div className="link-tag modal-dialog">
                        <div className="link-tag modal-content">
                            <div className="link-tag modal-header">
                                <button type="button" className="link-tag btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="link-tag modal-body">
                                <h4 className="link-tag modal-title">Do you want to delete your profile?</h4>
                            </div>
                            <div className="link-tag modal-footer">
                                <button type="button" className="link-tag site-button" data-bs-dismiss="modal">No</button>
                                <button type="button" className="link-tag site-button outline-primary">Yes</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!--Logout Profile Popup--> */}
                <div className="link-tag modal fade twm-model-popup" id="logout-dash-profile" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
                    <div className="link-tag modal-dialog">
                        <div className="link-tag modal-content">
                            <div className="link-tag modal-header">
                                <button type="button" className="link-tag btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="link-tag modal-body">
                                <h4 className="link-tag modal-title">Do you want to Logout your profile?</h4>
                            </div>
                            <div className="link-tag modal-footer">
                                <button type="button" className="link-tag site-button" data-bs-dismiss="modal">No</button>
                                <button type="button" className="link-tag site-button outline-primary">Yes</button>
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
 




</script> */}

        </div>
    )
}