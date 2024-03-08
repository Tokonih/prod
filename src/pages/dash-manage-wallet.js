import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dash_Header from "../components/Dashheader";
import { BASEURL } from "../common/config";
import axios from "axios";

export default function Manage_Wallet({ data, showBuyInput }) {
    const [wallet, setWallet] = useState([]);
    const [showInputIndex, setShowInputIndex] = useState(-1);
    const [amount, setAmount] = useState('');
    const [show, setShow] = useState(false)
    const [currentPrice, setCurrentPrice] = useState(0); 
    const [idx, setIndex] = useState(-1)
    
    useEffect(() => {
        try {
            const userWallet = JSON.parse(localStorage.getItem("myzoda-user"));
            if (userWallet && userWallet.wallet) {
                setWallet(userWallet.wallet);
            } else {
                console.log("Wallet data not found in local storage.");
            }
        } catch (error) {
            console.error("Error retrieving wallet data from local storage:", error);
        }
    }, []);

    const removeFromWallet = (symbol) => {
        try {
            const confirmDelete = window.confirm(`Are you sure you want to remove the wallet for ${symbol}?`);
            if (!confirmDelete) {
                return; 
            }
            
            let userData = JSON.parse(localStorage.getItem("myzoda-user"));
            if (userData && userData.wallet) {
                const updatedWallet = userData.wallet.filter(wallet => wallet.symbol !== symbol);
                userData.wallet = updatedWallet;
                localStorage.setItem("myzoda-user", JSON.stringify(userData));
                setWallet(updatedWallet);
            } else {
                console.log("User data or wallet not found in local storage.");
            }
        } catch (error) {
            console.error("Error removing wallet from local storage:", error);
        }
    }
    
    // const showInput = (index) => {
    //     setShowInputIndex(index);
    // };

    // const buyCrypto = (symbol, index) => {
    //     try {
    //         let userData = JSON.parse(localStorage.getItem("myzoda-user"));
    //         let userWallet = userData.wallet.find((crypto) => crypto.symbol === symbol);
            
    //         setShow(true);
    //         setIndex(index);
            
    //         let quantity = amount / userWallet.currentPrice;
    //         let walletQuantity = userWallet.quantity + quantity;
            
    //         userWallet.quantity = walletQuantity;
            
    //         userData.wallet[index] = userWallet;
            
    //         localStorage.setItem("myzoda-user", JSON.stringify(userData));
    
    //         console.log("Quantity updated successfully:", walletQuantity);
    //     } catch (error) {
    //         console.error("Error updating quantity in local storage:", error);
    //     }
    // };
    const buyCrypto = (symbol, index) => {
        try {
            let userData = JSON.parse(localStorage.getItem("myzoda-user"));
            let userWallet = userData.wallet.find((crypto) => crypto.symbol === symbol);
            
            setShow(true);
            setIndex(index);
            
            let quantity = amount / userWallet.currentPrice;
            let walletQuantity = userWallet.quantity + quantity;
            
            // Calculate the total amount spent
            let totalAmountSpent = amount;
            
            // Check if the total amount spent is greater than the user's balance
            if (totalAmountSpent > userData.balance) {
                alert("Insufficient balance. Please add funds to your account.");
                return;
            }
            
            // Subtract the total amount spent from the user's balance
            userData.balance -= totalAmountSpent;
            
            // Update the quantity in the user's wallet
            userWallet.quantity = walletQuantity;
            
            // Update the user's data in the wallet array
            userData.wallet[index] = userWallet;
            
            // Update the local storage
            localStorage.setItem("myzoda-user", JSON.stringify(userData));
    
            console.log("Quantity updated successfully:", walletQuantity);
            console.log("Balance updated successfully:", userData.balance);
        } catch (error) {
            console.error("Error updating quantity and balance in local storage:", error);
        }
    };
    
    
    return (
        <div>
            <div className="page-wraper">
                <Dash_Header />
                <div id="content">
                    <div className="content-admin-main">
                        <div className="wt-admin-right-page-header clearfix">
                            <h2>Manage wallet</h2> 
                            <div className="breadcrumbs"><a href="#">Home</a><a href="#">Dasboard</a><span>My Product Listing</span></div>
                        </div>
                        <div className="panel panel-default">
                            <div className="panel-heading wt-panel-heading p-a20">
                                <div className="row">
                                    <div className="col"><h4 className="panel-tittle m-a0"><i className="fa fa-suitcase"></i> wallet Details</h4></div>
                                    <div className="col-auto"><Link to="/dash-post-wallet" className="btn btn-primary">Add a wallet</Link></div>
                                </div>
                            </div>
                            <div className="panel-body wt-panel-body p-a20 m-b30 ">
                                <div className="twm-D_table p-a20 table-responsive">
                                    <table id="wallet_bookmark_table" className="table table-bordered twm-bookmark-list-wrap">
                                        <thead>
                                            <tr>
                                               <th>Name</th>
                                               <th>Symbol</th>
                                               <th>Price</th>
                                               <th>Quantity</th>
                                               {show ? ( <th>Enter Amount</th>) : null}
                                               <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {wallet.map((data, index) => (
                                                <tr key={index}>
                                                    <td>{data.name}</td>
                                                    <td>{data.symbol}</td>
                                                    <td>{data.currentPrice}</td>
                                                    <td>{data.quantity}</td>
                                                    {show && (
                                                        <td>
                                                           {
                                                             index === idx ? <input
                                                             type="number"
                                                             placeholder="Enter amount"
                                                             className="w-100 p-2 border outline"
                                                             value={amount}
                                                             onChange={(e) => setAmount(e.target.value)}
                                                         /> :""
                                                           }
                                                        </td>
                                                    )}
                                                    <td>
                                                        <div className="twm-table-controls">
                                                            <ul className="twm-DT-controls-icon list-unstyled">
                                                                <li>
                                                                    <button onClick={() => removeFromWallet(data.symbol)} title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                        <span className="far fa-trash-alt"></span>
                                                                    </button>
                                                                </li>
                                                                <li>
                                                                    <button title="Buy" data-bs-toggle="tooltip" data-bs-placement="top" onClick={() => buyCrypto(data.symbol,index)} >
                                                                        Buy
                                                                    </button>
                                                                </li>
                                                                {show && (
                                                                    <li>
                                                                        <button onClick={() => buyCrypto(data.symbol,index)}>
                                                                            Confirm
                                                                        </button>
                                                                    </li>
                                                                )}
                                                            </ul>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Name</th>
                                                <th>Symbol</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                {showBuyInput && <th>Enter Amount</th>}
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
    );
}
