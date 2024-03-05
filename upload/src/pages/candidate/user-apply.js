import { Link } from "react-router-dom"
import PublicHeader from "../../components/PublicHeader"
import UserNav from "../../components/UserNav"
import { useEffect, useState } from "react";
import { BASEURL } from "../../common/config";
import axios from "axios";
export default function UserApply() {
    const userDetails = JSON.parse(localStorage.getItem("user-details"));
    const token = localStorage.getItem("token");
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const getJob = async () => {
            let api_url = BASEURL + "/applications/user/" + userDetails._id;
            const headers = { Authorization: `Bearer ${token}` };
            try {
                const res = await axios.get(api_url, { headers });
                console.log(res.data);
                setJobs(res.data.data);
            } catch (err) {
                console.log(err);
            }
            setIsLoading(false);
        };
        getJob();
    }, []);



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

                                <UserNav />

                            </div>

                            <div class="col-xl-9 col-lg-8 col-md-12 m-b30">
                                <div class="twm-right-section-panel candidate-save-job site-bg-gray">
                                    {/* <!--Filter Short By--> */}
                                    <div class="product-filter-wrap d-flex justify-content-between align-items-center">
                                        <span class="woocommerce-result-count-left">Applied 250 jobs</span>



                                    </div>

                                    <div class="twm-jobs-list-wrap">
                                        <ul>
                                            {jobs.map((data) => {
                                                return (<>
                                                    <li>
                                                        <div class="twm-jobs-list-style1 mb-5">
                                                            <div class="twm-mid-content">
                                                            <Link to={`/job-detail/${data.job_id._id}`} class="twm-job-title">
                                                                    <h4>{data.job_id.jobTitle}<span class="twm-job-post-duration"> <br />{data.job_id.createdAt}</span></h4>
                                                                </Link>
                                                                <p class="twm-job-address">{data.job_id.city} {data.job_id.country}</p>
                                                                <Link to={`/employer-detail/${data.job_id.company_id}`} class="twm-job-websites site-text-primary">View Company</Link>
                                                            </div>
                                                            <div class="twm-right-content">
                                                                <div class="twm-jobs-category green"><span class="twm-bg-green">{data.job_id.jobType}</span></div>
                                                                <div class="twm-jobs-amount">{data.job_id.offeredSalary}  <span>/ Annually</span></div>
                                                                <Link to={`/job-detail/${data.job_id._id}`} class="twm-jobs-browse site-text-primary">View Job Details</Link>
                                                            </div>
                                                        </div>
                                                    </li></>)
                                            })}



                                        </ul>
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