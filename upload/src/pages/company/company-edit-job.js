import { Link, useParams } from "react-router-dom";
   import { useEffect, useState } from "react";
 import ComapnyNav from "../../components/CompanyNav";
import { BASEURL } from "../../common/config";
import PublicHeader from "../../components/PublicHeader";

export default function CompanyEditJob() {
    const {jobId} = useParams()

    const [jobTitle, setJobTitle] = useState();
  const [jobCategory, setJobCategory] = useState();
  const [JobCategoryID, setJobCategoryId] = useState();
  const [jobType, setJobType] = useState();
   const [salary, setSalary] = useState();
  const [experiece, setExperience] = useState();
  const [Qualification, setQualification] = useState();
  const [gender, setGender] = useState();
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  
  const [description, setDescription] = useState();
  const [requirement, setRequirement] = useState();
  const [responsabilities, setResponsabilities] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [err, setErr] = useState(false);


// 


 


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

 

  const handleJobCategory = (event) => {
    setJobCategoryId(event.target.options[event.target.selectedIndex].value);
  };

  const postJob = (e) => {
    e.preventDefault();
    if (
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

  return(  <div>
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
                            className="form-control date-picker"
                            name="company_Email"
                            type="text"
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
                            className="form-control date-picker"
                            name="company_Email"
                            type="text"
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

          </div>
        </div>
      </div>
      {/* <!-- OUR BLOG END --> */}



    </div>
    {/* <!-- CONTENT END --> */}
  </div>)

  
}
