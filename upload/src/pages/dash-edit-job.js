import { Link, useParams } from "react-router-dom";
import pic1 from "../assets/images/images/candidates/pic1.jpg";
// import logo_white from "../assets/images/images/logo-white.png"
import logo from "../assets/images/images/logo-dark.png";
import Dash_Header from "../components/Dashheader";
import { useEffect, useState } from "react";
import { BASEURL } from "../common/config";

export default function EditJob() {
    const {jobId} = useParams()

  const [companies, setCompanies] = useState([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState();
  const [jobTitle, setJobTitle] = useState();
  const [jobCategory, setJobCategory] = useState();
  const [JobCategoryID, setJobCategoryId] = useState();
  const [jobType, setJobType] = useState();
  // const [compoa] = useState()
  const [salary, setSalary] = useState();
  const [experiece, setExperience] = useState();
  const [Qualification, setQualification] = useState();
  const [gender, setGender] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
//   const [location, setLocation] = useState();
 
  const [description, setDescription] = useState();
  const [requirement, setRequirement] = useState();
  const [responsabilities, setResponsabilities] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [err, setErr] = useState(false);


// 


// Get Company 
  useEffect(() => {
    fetch(`${BASEURL}/company`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setCompanies(data.data);
      })
      .catch((error) => {
        console.error("Fetch error:", error.message);
      });
  }, []);


  useEffect(() => {
        fetch(`${BASEURL}/job/${jobId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => {
            console.log(data.data)
            setJobTitle(data.data.jobTitle)
            // setJobCategory(data.data.name)
            setJobType(data.data.jobType)
             
            setSalary(data.data.offeredSalary)
            // setSelectedCompanyId(data.dats.company_id._id)
            setStartDate(data.data.startDate)
            setEndDate(data.data.endDate)
            setDescription(data.data.jobDescription)
            setCity(data.data.city)
            setCountry(data.data.country)
            setQualification(data.data.qualification)
            setExperience(data.data.experience)
            setGender(data.data.gender)

            setRequirement(data.data.requirement)
            setResponsabilities(data.data.responsabilities)
            

            
          })
          .catch((error) => {
            console.log("Fetch error:", error.message);
          });
      }, [jobId]);


  // Job category
  useEffect(() => {
    fetch(`${BASEURL}/job-categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setJobCategory(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        console.error("Fetch error:", error.message);
      });
  }, []);

  const handleCompanySelect = (event) => {
    setSelectedCompanyId(event.target.value);
  };

  const handleJobCategory = (event) => {
    setJobCategoryId(event.target.options[event.target.selectedIndex].value);
  };

  const postJob = (e) => {
    e.preventDefault();
    if (
      selectedCompanyId === undefined ||
      jobTitle === undefined ||
      JobCategoryID === undefined ||
      jobType === undefined ||
      salary === undefined ||
      experiece === undefined ||
      Qualification === undefined ||
      gender === undefined ||
      country === undefined ||
      city === undefined ||
    //   location === undefined ||
      
      description === undefined ||
      startDate === undefined ||
      endDate === undefined
    ) {
      alert("fill form ");
      setErr(true);
      return;
    }

    const jobData = {
      jobTitle: jobTitle,
      jobType: jobType,
      offeredSalary: salary,
      experience: experiece,
      qualification: Qualification,
      gender: gender,
      country: country,
      city: city,
      requirement:requirement,
      responsabilities:responsabilities,
      startDate: startDate,
      endDate: endDate,
      jobCategory_id: JobCategoryID,
      jobDescription: description,
      company_id: selectedCompanyId,
    };
    console.log(jobData);
    
    fetch(`${BASEURL}/job/update/${jobId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(jobData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Job Updated")
        console.log(data)})
      .catch((error) => console.error("Fetch error:", error.message));
  };

  return (
    <div>
      <div className="page-wraper">
        <Dash_Header />

        {/* <!-- Page Content Holder --> */}
        <div id="content">
          <div className="content-admin-main">
            <div className="wt-admin-right-page-header clearfix">
              <h2>Edit a Job</h2>
              <div className="breadcrumbs">
                <a href="#">Home</a>
                <a href="#">Dasboard</a>
                <span>Job Submission Form</span>
              </div>
            </div>

            {/* <!--Basic Information--> */}
            <div className="panel panel-default">
              <div className="panel-heading wt-panel-heading p-a20">
                <h4 className="panel-tittle m-a0">
                  <i className="fa fa-suitcase"></i>Job Details
                </h4>
              </div>
              <div className="panel-body wt-panel-body p-a20 m-b30 ">
                <form onSubmit={postJob}>
                  <div className="row">
                    {/* <!--Job title-->             */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Job Title</label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_name"
                            type="text"
                            placeholder="Devid Smith"
                            onChange={(e) => setJobTitle(e.target.value)}
                            value={jobTitle}
                          />
                          <i className="fs-input-icon fa fa-address-card"></i>
                        </div>
                        <div>
                          {err === true && jobTitle === undefined ? (
                            <span>Enter Job title</span>
                          ) : (
                            jobTitle === null
                          )}
                        </div>
                      </div>
                    </div>

                    {/* <!--Job Category-->  */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group city-outer-bx has-feedback">
                        <label>Job Category</label>
                        <div className="ls-inputicon-box ">
                          <select
                            className="wt-select-box selectpicker form-select form-select-lg mb-3"
                            data-live-search="true"
                            title=""
                            id="j-category"
                            data-bv-field="size"
                            onChange={handleJobCategory}
                            value={JobCategoryID}
                          >
                            <option value="">Select Category</option>
                            {jobCategory &&
                              jobCategory.map((cat) => (
                                <option key={cat._id} value={cat._id}>
                                  {cat.name}
                                </option>
                              ))}
                          </select>

                          <i className="fs-input-icon fa fa-border-all"></i>
                        </div>
                        <div>
                          {err === true && jobCategory === undefined ? (
                            <span>Enter job category</span>
                          ) : (
                            jobCategory === null
                          )}
                        </div>
                      </div>
                    </div>

                    {/* <!--Job Type-->  */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Job Type</label>
                        <div className="ls-inputicon-box">
                          <select
                            className="wt-select-box selectpicker form-select form-select-lg mb-3"
                            data-live-search="true"
                            title=""
                            id="s-category"
                            data-bv-field="size"
                            onChange={(e) => setJobType(e.target.value)}
                            value={jobType}
                          >
                            <option className="bs-title-option" value="">
                              Select Category
                            </option>
                            <option value="FUll time">Full Time</option>
                            <option value="Freelance">Freelance</option>
                            <option value="Part time">Part Time</option>
                            <option value="Intership">Internship</option>
                            <option value="Temporary">Temporary</option>
                          </select>
                          <i className="fs-input-icon fa fa-file-alt"></i>
                        </div>
                        <div>
                          {err === true && jobType === undefined ? (
                            <span>Enter job type</span>
                          ) : (
                            jobType === null
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Company</label>
                        <div className="ls-inputicon-box">
                          <select
                            className="wt-select-box selectpicker form-select form-select-lg mb-3"
                            data-live-search="true"
                            title=""
                            id="s-category"
                            data-bv-field="size"
                            // onChange={(e)=>setSelectedCompanyId(e.target.value)}
                            // value={selectedCompanyId}
                            onChange={handleCompanySelect}
                            value={selectedCompanyId}
                          >
                            <option className="bs-title-option" value="">
                              Select Company
                            </option>

                            {companies &&
                              companies.map((comp) => (
                                <option key={comp._id} value={comp._id}>
                                  {comp.companyName}
                                </option>
                              ))}
                          </select>
                          <i className="fs-input-icon fa fa-file-alt"></i>
                        </div>
                        <div>
                          {err === true && selectedCompanyId === undefined ? (
                            <span>Enter company </span>
                          ) : (
                            selectedCompanyId === null
                          )}
                        </div>
                      </div>
                    </div>

                    {/* <!--Offered Salary-->  */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Offered Salary</label>
                        <div className="ls-inputicon-box">
                          <select
                            className="wt-select-box selectpicker form-select form-select-lg mb-3"
                            data-live-search="true"
                            title=""
                            id="salary"
                            data-bv-field="size"
                            onChange={(e) => setSalary(e.target.value)}
                            value={salary}
                          >
                            <option className="bs-title-option" value="">
                              Salary
                            </option>
                            <option value="$500">$500</option>
                            <option value="$1000">$1000</option>
                            <option value="$1500">$1500</option>
                            <option value="$2000">$2000</option>
                            <option value="$2500">$2500</option>
                          </select>
                          <i className="fs-input-icon fa fa-dollar-sign"></i>
                        </div>
                        <div>
                          {err === true && salary === undefined ? (
                            <span>Enter salary</span>
                          ) : (
                            salary === null
                          )}
                        </div>
                      </div>
                    </div>

                    {/* <!--Experience-->  */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Experience</label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_Email"
                            type="text"
                            placeholder="E.g. Minimum 3 years"
                            onChange={(e) => setExperience(e.target.value)}
                            value={experiece}
                          />
                          <i className="fs-input-icon fa fa-user-edit"></i>
                        </div>
                        <div>
                          {err === true && experiece === undefined ? (
                            <span>Enter experience</span>
                          ) : (
                            experiece === null
                          )}
                        </div>
                      </div>
                    </div>

                    {/* <!--Qualification-->  */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Qualification</label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_Email"
                            type="text"
                            placeholder="Qualification Title"
                            onChange={(e) => setQualification(e.target.value)}
                            value={Qualification}
                          />
                          <i className="fs-input-icon fa fa-user-graduate"></i>
                        </div>
                        <div>
                          {err === true && Qualification === undefined ? (
                            <span>Enter qualification</span>
                          ) : (
                            Qualification === null
                          )}
                        </div>
                      </div>
                    </div>

                    {/* <!--Gender-->  */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Gender</label>
                        <div className="ls-inputicon-box">
                          <select
                            className="wt-select-box selectpicker form-select form-select-lg mb-3"
                            data-live-search="true"
                            title=""
                            id="gender"
                            data-bv-field="size"
                            onChange={(e) => setGender(e.target.value)}
                            value={gender}
                          >
                            <option className="bs-title-option" value="">
                              Gender
                            </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Both">Both</option>
                          </select>
                          <i className="fs-input-icon fa fa-venus-mars"></i>
                        </div>
                        <div>
                          {err === true && gender === undefined ? (
                            <span>Enter company name</span>
                          ) : (
                            gender === null
                          )}
                        </div>
                      </div>
                    </div>

                    {/* <!--Country-->  */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>Country</label>
                        <div className="ls-inputicon-box">
                          <select
                            className="wt-select-box selectpicker form-select form-select-lg mb-3"
                            data-live-search="true"
                            title=""
                            id="country"
                            data-bv-field="size"
                            onChange={(e) => setCountry(e.target.value)}
                            value={country}
                          >
                            <option className="bs-title-option" value="">
                              Country
                            </option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Antigua and Barbuda">
                              Antigua and Barbuda
                            </option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="The Bahamas">The Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                          </select>
                          <i className="fs-input-icon fa fa-globe-americas"></i>
                        </div>
                        <div>
                          {err === true && country === undefined ? (
                            <span>Enter country</span>
                          ) : (
                            country === null
                          )}
                        </div>
                      </div>
                    </div>

                    {/* <!--City-->  */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>City</label>
                        <div className="ls-inputicon-box">
                          <select
                            className="wt-select-box selectpicker  form-select form-select-lg mb-3"
                            data-live-search="true"
                            title=""
                            id="city"
                            data-bv-field="size"
                            onChange={(e) => setCity(e.target.value)}
                            value={city}
                          >
                            <option className="bs-title-option" value="">
                              City
                            </option>
                            <option value="Sydney">Sydney</option>
                            <option value="Melbourne">Melbourne</option>
                            <option value="Brisbane">Brisbane</option>
                            <option value="Perth">Perth</option>
                            <option value="Adelaide">Adelaide</option>
                            <option value="Gold Coast">Gold Coast</option>
                            <option value="Cranbourne">Cranbourne</option>
                            <option value="Newcastle">Newcastle</option>
                            <option value="Wollongong">Wollongong</option>
                            <option value="Geelong">Geelong</option>
                            <option value="Hobart">Hobart</option>
                            <option value="Townsville">Townsville</option>
                            <option value="Ipswich">Ipswich</option>
                          </select>
                          <i className="fs-input-icon fa fa-map-marker-alt"></i>
                        </div>
                        <div>
                          {err === true && city === undefined ? (
                            <span>Enter city</span>
                          ) : (
                            city === null
                          )}
                        </div>
                      </div>
                    </div>

                    {/* <!--Start Date--> */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>start Date</label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_Email"
                            type="date"
                            placeholder="Los Angeles"
                            onChange={(e) => setStartDate(e.target.value)}
                            value={startDate}
                          />
                          <i className="fs-input-icon fa fa-map-pin"></i>
                        </div>
                        <div>
                          {err === true && startDate === undefined ? (
                            <span>Enter start date </span>
                          ) : (
                            startDate === null
                          )}
                        </div>
                      </div>
                    </div>

                    

                    {/* <!--End Date--> */}
                    <div className="col-xl-4 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label>End Date</label>
                        <div className="ls-inputicon-box">
                          <input
                            className="form-control"
                            name="company_Email"
                            type="date"
                            placeholder="Los Angeles"
                            onChange={(e) => setEndDate(e.target.value)}
                            value={endDate}
                          />
                          <i className="fs-input-icon fa fa-map-pin"></i>
                        </div>
                        <div>
                          {err === true && endDate === undefined ? (
                            <span>Enter end date </span>
                          ) : (
                            endDate === null
                          )}
                        </div>
                      </div>
                    </div>

                    

                    

                    {/* <!--Description--> */}
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Description</label>
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="Greetings! We are Galaxy Software Development Company. We hope you enjoy our services and quality."
                          onChange={(e) => setDescription(e.target.value)}
                          value={description}
                        ></textarea>
                      </div>
                      <div>
                        {err === true && description === undefined ? (
                          <span>Enter description</span>
                        ) : (
                          description === null
                        )}
                      </div>
                    </div>

                    {/* <!--Description--> */}
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Requirements</label>
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="Greetings! We are Galaxy Software Development Company. We hope you enjoy our services and quality."
                          onChange={(e) => setRequirement(e.target.value)}
                          value={requirement}
                        ></textarea>
                      </div>
                      <div>
                        {err === true && requirement === undefined ? (
                          <span>Enter Requirements</span>
                        ) : (
                          requirement === null
                        )}
                      </div>
                    </div>
                      {/* <!--Description--> */}
                      <div className="col-md-12">
                      <div className="form-group">
                        <label>Responsabilities</label>
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="Greetings! We are Galaxy Software Development Company. We hope you enjoy our services and quality."
                          onChange={(e) => setResponsabilities(e.target.value)}
                          value={responsabilities}
                        ></textarea>
                      </div>
                      <div>
                        {err === true && responsabilities === undefined ? (
                          <span>Enter Responsabilities</span>
                        ) : (
                          responsabilities === null
                        )}
                      </div>
                    </div>

                    

                    <div className="col-lg-12 col-md-12">
                      <div className="text-left">
                        <button type="submit" className="site-button m-r5">
                          Update Job
                        </button>
                        {/* <button
                          type="submit"
                          className="site-button outline-primary"
                        >
                          Save Draft
                        </button> */}
                      </div>
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
            <li><a className="theme-skin skin-1" href="dash-post-joba39b?theme=css/skin/skin-1"></a></li>
            <li><a className="theme-skin skin-2" href="dash-post-job61e7?theme=css/skin/skin-2"></a></li>
            <li><a className="theme-skin skin-3" href="dash-post-jobcce5?theme=css/skin/skin-3"></a></li>
            <li><a className="theme-skin skin-4" href="dash-post-job13f7?theme=css/skin/skin-4"></a></li>
            <li><a className="theme-skin skin-5" href="dash-post-job19a6?theme=css/skin/skin-5"></a></li>
            <li><a className="theme-skin skin-6" href="dash-post-jobfe5c?theme=css/skin/skin-6"></a></li>
            <li><a className="theme-skin skin-7" href="dash-post-jobab47?theme=css/skin/skin-7"></a></li>
            <li><a className="theme-skin skin-8" href="dash-post-job5f8d?theme=css/skin/skin-8"></a></li>
            <li><a className="theme-skin skin-9" href="dash-post-job5663?theme=css/skin/skin-9"></a></li>
            <li><a className="theme-skin skin-10" href="dash-post-job28ac?theme=css/skin/skin-10"></a></li>
            
        </ul>           
        
    </div>    
</div>
<!-- STYLE SWITCHER END ==== --> */}
    </div>
  );
}
