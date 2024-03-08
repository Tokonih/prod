import { Link, useNavigate, useParams } from "react-router-dom";

import Dash_Header from "../components/Dashheader";
import { useEffect, useState } from "react";
import { BASEURL } from "../common/config";
import axios from "axios";

export default function Create_wallet() {
  const [crypto, setCrypto] = useState(null);
  const [err, setErr] = useState(false);
  const navigate = useNavigate()


useEffect(()=>{
    const apiUrl = `${BASEURL}/api/data`
    axios.get(apiUrl)
    .then((res)=> {
        if (res.status === 200) {
            const cryptoArray = Object.values(res.data.data);
            const firstFourCrypto = cryptoArray;
            setCrypto(firstFourCrypto);
        }
    }).catch((err)=>{
        console.log(err)
    })
}, [])

const createWallet = (e) => {
  e.preventDefault();

  const selectedSymbol = e.target.elements["s-crypto"].value;

  const selectedCrypto = Object.values(crypto).find((currency) => currency.symbol === selectedSymbol);

  if (selectedCrypto) {
    const newWallet = {
      name: selectedCrypto.name,
      symbol: selectedCrypto.symbol,
      quantity: 0,
      currentPrice: selectedCrypto.price
    };
    try {
      let userData = JSON.parse(localStorage.getItem("myzoda-user")) || { wallet: [] };
      userData.wallet.push(newWallet);
      localStorage.setItem("myzoda-user", JSON.stringify(userData));
      console.log("Wallet created:", newWallet);
      alert("Wallet created:");
      navigate("/dash-manage-wallet")
    } catch (error) {
      console.error("Error saving wallet data to local storage:", error);
    }
  } else {
    console.error("Selected cryptocurrency not found in the data");
  }
};


  return (
    <div>
      <div className="page-wraper">
        <Dash_Header />

        {/* <!-- Page Content Holder --> */}
        <div id="content">
          <div className="content-admin-main">
            <div className="wt-admin-right-page-header clearfix">
              <h2>Create wallet</h2>
              <div className="breadcrumbs">
                <a href="#">Home</a>
                <a href="#">Dasboard</a>
                <span> wallet Form</span>
              </div>
            </div>

            {/* <!--Basic Information--> */}
            <div className="panel panel-default">
              <div className="panel-heading wt-panel-heading p-a20">
                <h4 className="panel-tittle m-a0">
                  <i className="fa fa-suitcase"></i>wallet
                </h4>
              </div>
              <div className="panel-body wt-panel-body p-a20 m-b30 ">
                <form onSubmit={createWallet}>
                  <div className="row">
                 

                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>crypto</label>
                        <div className="ls-inputicon-box">
                        <select
                className="wt-select-box selectpicker form-select form-select-lg mb-3"
                data-live-search="true"
                title=""
                id="s-crypto"
                data-bv-field="size"
              >
                <option className="bs-title-option" value="">
                  Select crypto
                </option>
                {crypto &&
                  Object.values(crypto).map((currency) => (
                    <option key={currency.symbol} value={currency.symbol}>
                      {currency.symbol}
                    </option>
                  ))}
              </select>
                          <i className="fs-input-icon fa fa-file-alt"></i>
                        </div>
                        <div>
                          {err === true && !crypto ? (
                            <span>Enter crypto </span>
                          ) : (
                            crypto === null
                          )}
                        </div>
                      </div>
                    </div>


                 
                  </div>

                  <div className="col-lg-12 col-md-12">
                    <div className="text-left">
                      <button type="submit" className="site-button m-r5">
                      Create wallet
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

    
    </div>
  );
}
