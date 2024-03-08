import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios"
import logo from "../assets/images/images/sator-logo.svg";
import { useEffect, useState } from "react";
import { BASEURL } from "../common/config";
// import logo_white from "../assets/images/images/logo-white.png"

export default function Dash_Header() {
  const location = useLocation();

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("myzoda-user");
    navigate("/");
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCrypto, setFilteredCrypto] = useState([]);

  useEffect(() => {
    const apiUrl = `${BASEURL}/api/data`;
    axios
      .get(apiUrl)
      .then((res) => {
        if (res.status === 200) {
          const cryptoArray = Object.values(res.data.data);
          setFilteredCrypto(cryptoArray); 
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  return (
    <div>
      <header id="header-admin-wrap" className="header-admin-fixed">
        {/* <!-- Header Start --> */}
        <div id="header-admin">
          <div className="container d-flex align-items-center justify-content-between">
            {/* <!-- Left Side Content --> */}
            <div className="header-left">
              <div className="nav-btn-wrap">
                <a className="nav-btn-admin" id="sidebarCollapse">
                  <span className="fa fa-angle-left"></span>
                </a>
              </div>
            </div>
            {/* <!-- Left Side Content End -->
                    
                    <!-- Right Side Content --> */}
            {/* <div className="header-right">
              <ul className="header-widget-wrap">
                <form
                  action=""
                  className=" d-flex align-items-center justify-content-between"
                >
              <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
        />
                  <button>Search</button>
                </form>
              {filteredCrypto && Object.values(filteredCrypto).map(cryptoItem => (
            <div style={{position:"absolute", height:"150px", display:"block" }} className="border border-danger" key={cryptoItem.id}>
                <ul>
                    <li>{cryptoItem.name}</li>
                </ul>
            </div>
        ))}
              </ul>
            </div> */}
            {/* <!-- Right Side Content End --> */}
          </div>
        </div>
        {/* <!-- Header End --> */}
      </header>

      {/* <!-- Sidebar Holder --> */}
      <nav id="sidebar-admin-wraper">
        <div className="page-logo">
          <Link to="/dashboard">
            Myzoda
          </Link>
        </div>

        <div className="admin-nav scrollbar-macosx">
          <ul>
            <li className="">
              <Link to="/dashboard">
                <i className="fa fa-home"></i>
                <span className="admin-nav-text">Dashboard</span>
              </Link>
            </li>

            <li>
              <Link
                to="/javascript:;"
                data-bs-toggle="modal"
                data-bs-target="#logout-dash-profile"
              >
                <i className="fa fa-share-square"></i>
                <span className="admin-nav-text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!-- Sidebar Holder --> */}
      <nav id="sidebar-admin-wraper">
        <div className="page-logo">
          <Link to="/dashboard" style={{color:"white", fontSize:"30px"}}>
           Myzoda
          </Link>
        </div>

        <div className="admin-nav scrollbar-macosx">
          <ul>
            <li
              className=""
              style={{
                backgroundColor: location.pathname.includes("/dashboard")
                  ? "#f9fcff"
                  : "",
              }}
            >
              <Link
                to="/dashboard"
                style={{
                  color: location.pathname.includes("/dashboard")
                    ? "#62C29F"
                    : "",
                }}
              >
                <i className="fa fa-home"></i>
                <span className="admin-nav-text">Dashboard</span>
              </Link>
            </li>

            <li
              style={{
                backgroundColor: location.pathname.includes(
                  "/dash-manage-wallet"
                )
                  ? "#f9fcff"
                  : "",
              }}
            >
              <Link
                to="/dash-manage-wallet"
                style={{
                  color: location.pathname.includes("/dash-manage-wallet")
                    ? "#62C29F"
                    : "",
                }}
              >
                <i className="fa fa-envelope"></i>
                <span className="admin-nav-text">Manage Wallet</span>
              </Link>
            </li>
            <li onClick={logout}>
              <Link to="">
                <i className="fa fa-share-square"></i>
                <span className="admin-nav-text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
