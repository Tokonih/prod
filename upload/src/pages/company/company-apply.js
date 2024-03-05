import { Link, useNavigate } from "react-router-dom"
import PublicHeader from "../../components/PublicHeader"
import { useEffect, useState } from "react";
import { BASEURL } from "../../common/config";
import axios from "axios";
import ComapnyNav from "../../components/CompanyNav";
export default function CompanyApply() {
    const userDetails = JSON.parse(localStorage.getItem("user-details"));
    const comDetails = JSON.parse(localStorage.getItem("com-details"));

    const token = localStorage.getItem("token");
    const [candidate, setCandidate] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`${BASEURL}/applications/company/${comDetails._id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data.data);
                setCandidate(data.data)

            })
            .catch(error => {
                console.error('Fetch error:', error.message);
            });
    }, []);

    const deleteData = (id) => {

        // const shouldDelete = window.confirm("Are you sure you want to delete?");

        // if (!shouldDelete) {
        //     return;
        // }

        fetch(`${BASEURL}/application/delete/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        }).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            return
        })
            .then(data => {
                // alert("Deleted")
            })
            .catch(error => {
                console.error('Fetch error:', error.message);
            });
    }


    return (
        <div>
            {/* <!-- HEADER START --> */}
            <PublicHeader />
            {/* <!-- HEADER END --> */}
            {/* <!-- CONTENT START --> */}
            <div class="page-content">

                {/* <!-- OUR BLOG START --> */}
                <div class="section-full p-t120  p-b90 site-bg-white">


                    <div class="container">
                        <div class="row">

                            <div class="col-xl-3 col-lg-4 col-md-12 rightSidebar m-b30">

                                <ComapnyNav />

                            </div>

                            <div class="col-xl-9 col-lg-8 col-md-12 m-b30">
                                <div class="twm-right-section-panel candidate-save-job site-bg-gray">
                                    {/* <!--Filter Short By--> */}
                                    <div class="product-filter-wrap d-flex justify-content-between align-items-center">
                                        <span class="woocommerce-result-count-left">{candidate.length} Application </span>



                                    </div>

                                    <div className="panel-body wt-panel-body">
                                        <div className="twm-D_table p-a20 table-responsive">
                                            <table id="candidate_data_table" className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                         <th>Name</th>
                                                        <th>Applied for</th>
                                                        <th>Date</th>
                                                        <th>Status</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {
                                                        candidate && candidate.map((cand) => (
                                                            <tr>
                                                                <td>
                                                                    <div className="twm-mid-content">
                                                                        <a href="#" className="twm-job-title text-dark">
                                                                            <h4>{cand.user_id.fullName}</h4>
                                                                         
                                                                        </a>

                                                                    </div>
                                                                </td>
                                                                <td>{cand.job_id.jobTitle}</td>
                                                                <td>{cand.createdAt.slice(0, 10)} at {cand.createdAt.slice(11, 19)}</td>
                                                                <td><div className="twm-jobs-category">
                                                                    {cand.approved=="pending"?<span className="bg-warning">{cand.approved}</span>:<span className="twm-bg-green">{cand.approved}</span>}
                                                                    </div></td>
                                                                <td>
                                                                    <div className="twm-table-controls">
                                                                        <ul className="twm-DT-controls-icon list-unstyled">
                                                                            <li>
                                                                                <Link to={`/view-candidate/${cand.user_id._id}`} title="View profile" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                                    <span className="fa fa-eye"></span>
                                                                                </Link>
                                                                            </li>
                                                                            <li>
                                                                                <button title="Send message" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                                    <span className="far fa-check-circle"></span>
                                                                                </button>
                                                                            </li>
                                                                            <li>
                                                                                <button onClick={() => deleteData(cand._id)} title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                                    <span className="far fa-trash-alt"></span>
                                                                                </button>
                                                                            </li>
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
                                                        <th>Applied for</th>
                                                        <th>Date</th>
                                                        <th>Status</th>
                                                        <th></th>
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
                {/* <!-- OUR BLOG END --> */}



            </div>
            {/* <!-- CONTENT END --> */}
        </div>)
}