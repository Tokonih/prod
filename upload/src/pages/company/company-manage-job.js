import { Link, useNavigate } from "react-router-dom"

import { useEffect, useState } from "react"
import { BASEURL } from "../../common/config"
import ComapnyNav from "../../components/CompanyNav"
import PublicHeader from "../../components/PublicHeader"


export default function CompanyManageJob() {
    const userDetails = JSON.parse(localStorage.getItem("user-details"));
    const comDetails = JSON.parse(localStorage.getItem("com-details"));
    const token = localStorage.getItem("token");
    const navigate = useNavigate()
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch(`${BASEURL}/jobs/company/${comDetails._id}`, {
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
                setJobs(data.data)

            })
            .catch(error => {
                console.error('Fetch error:', error.message);
            });
    }, []);


    const deleteData = (id) => {

        const shouldDelete = window.confirm("Are you sure you want to delete this item?");

        if (!shouldDelete) {
            return;
        }

        fetch(`${BASEURL}/job/delete/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        }).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            return
        })
            .then(data => {
                alert("Deleted")
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
                                        <span class="woocommerce-result-count-left"> {jobs.length} jobs</span>
                                        <span class="woocommerce-result-count-right"> <Link to="/com-post-jobs" className="btn btn-primary">Create Job</Link></span>
                                    </div>

                                    <table id="" className="table table-bordered twm-bookmark-list-wrap">
                                        <thead>
                                            <tr>
                                                <th>Job Title</th>
                                                <th>Category</th>
                                                <th>Job Types</th>
                                                <th>Applications</th>
                                                <th>Created & Expired</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* <!--1--> */}
                                            {
                                                jobs && jobs.map((job) => (
                                                    <tr>

                                                        <td>
                                                            <Link to={`/com-edit-jobs/${job._id}`} className="twm-job-title text-dark">
                                                                <h4>{job.jobTitle}</h4>
                                                                <p className="twm-bookmark-address">
                                                                    <i className="feather-map-pin"></i>{job.city}, {job.country}
                                                                </p>
                                                            </Link>
                                                        </td>
                                                        <td>{job.jobCategory_id.name}</td>
                                                        <td><div className="twm-jobs-category"><span className="twm-bg-green">{job.jobType}</span></div></td>
                                                        <td><a href="javascript:;" className="site-text-primary">{job.application_id.length >= 1 ? job.application_id.length + " applied" : "no applicant "}  </a></td>
                                                        <td>
                                                            <div>{job.startDate.slice(0, 10)}</div>
                                                            <div>{job.endDate.slice(0, 10)}</div>
                                                        </td>

                                                        <td>
                                                            <div className="twm-table-controls">
                                                                <ul className="twm-DT-controls-icon list-unstyled">
                                                                    <li>
                                                                        <Link title="View profile" to={`/com-edit-jobs/${job._id}`} data-bs-toggle="tooltip" data-bs-placement="top">
                                                                            <span className="fa fa-eye"></span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to={`/com-edit-jobs/${job._id}`} title="Edit" data-bs-toggle="tooltip" data-bs-placement="top">
                                                                            <span className="far fa-edit"></span>
                                                                        </Link>
                                                                    </li>
                                                                    <li>
                                                                        <button onClick={() => deleteData(job._id)} title="Delete" data-bs-toggle="tooltip" data-bs-placement="top">
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
                                                <th>Job Title</th>
                                                <th>Category</th>
                                                <th>Job Types</th>
                                                <th>Applications</th>
                                                <th>Created & Expired</th>
                                                <th>Action</th>
                                            </tr>
                                        </tfoot>
                                    </table>


                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!-- OUR BLOG END --> */}



            </div>
            {/* <!-- CONTENT END --> */}
        </div>

    )
}