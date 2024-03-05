import { Link } from "react-router-dom"
import PublicHeader from "../../components/PublicHeader"
import UserNav from "../../components/UserNav"
import { useEffect, useState } from "react";
import { BASEURL } from "../../common/config";
import axios from "axios";
export default function UserResume() {
    const userDetails = JSON.parse(localStorage.getItem("user-details"));
    const token = localStorage.getItem("token");
    const [jobTitle, setjobTitle] = useState("");
    const [company, setcompany] = useState("");
    const [startDate, setstartDate] = useState();
    const [endDate, setendDate] = useState();
    const [jobStatus, setjobStatus] = useState("");
    const [notes, setnotes] = useState("");
    const [city, setCity] = useState("");
    const [employments, setemployments] = useState([]);
    const [skill, setSkill] = useState("");
    const [educationLevel, setEducationLevel] = useState("");
    const [course, setCourse] = useState("");
    const [school, setSchool] = useState("");

    const [eduStart, seteduStart] = useState("");
    const [eduEnd, seteduEnd] = useState("");

    const [skills, setSkills] = useState([]);
    const [educationList, seteducationList] = useState([]);
    const [refresh, setRefresh] = useState(0);


    useEffect(() => {
        const getUser = async () => {
            console.log(`${BASEURL}/work/user/${userDetails._id}`);
            let api_url = `${BASEURL}/work/user/${userDetails._id}`;
            const headers = { Authorization: `Bearer ${token}` };
            try {

                const res = await axios.get(api_url);
                console.log(res.data.data);
                setemployments(res.data.data)

            } catch (err) {
                console.log(err);
            }
        };
        const getSkills = async () => {
            console.log(`${BASEURL}/skill/user/${userDetails._id}`);
            let api_url = `${BASEURL}/skill/user/${userDetails._id}`;
            const headers = { Authorization: `Bearer ${token}` };
            try {

                const res = await axios.get(api_url);
                console.log(res.data.data);
                setSkills(res.data.data)

            } catch (err) {
                console.log(err);
            }
        };

        const getEducation = async () => {
            console.log(`${BASEURL}/education/user/${userDetails._id}`);
            let api_url = `${BASEURL}/education/user/${userDetails._id}`;
            const headers = { Authorization: `Bearer ${token}` };
            try {

                const res = await axios.get(api_url);
                console.log(res.data.data);
                seteducationList(res.data.data)

            } catch (err) {
                console.log(err);
            }
        };

        getEducation();
        getSkills();
        getUser();
    }, [refresh]);


    const saveEmpolyment = async (event) => {
        event.preventDefault();
        let userData = {
            jobTitle: jobTitle,
            company: company,
            startDate: startDate,
            endDate: endDate,
            jobStatus: jobStatus,
            notes: notes,
            city: city,
            user_id: userDetails._id
        }
        console.log(userData);

        let api_url = BASEURL + "/work";

        await axios.post(api_url, userData).then((res) => {
            console.log(res.data);
            alert("Employment Saved")
            setRefresh(refresh + 1)

        }).catch((err) => {
            console.log(err);
        });
    }
    const deleteEmployment = async (data) => {

        let api_url = `${BASEURL}/work/deletes`;
        await axios.post(api_url, { id: data });
        alert("Employment deleted")
        setRefresh(refresh + 1)
    }


    const saveSkill = async (event) => {
        event.preventDefault();
        let userData = {
            name: skill,
            user_id: userDetails._id
        }
        console.log(userData);

        let api_url = BASEURL + "/skill";

        await axios.post(api_url, userData).then((res) => {
            console.log(res.data);
            setRefresh(refresh + 1)

        }).catch((err) => {
            console.log(err);
        });
    }
    const deleteSkill = async (data) => {

        let api_url = `${BASEURL}/skill/deletes`;
        await axios.post(api_url, { id: data });
        alert("Skill deleted")
        setRefresh(refresh + 1)
    }


    const saveEducation = async (event) => {
        event.preventDefault();
        let userData = {
            user_id: userDetails._id,
            startDate: eduStart,
            endDate: eduEnd,
            school: school,
            course: course,
            education_level: educationLevel
        }
        console.log(userData);

        let api_url = BASEURL + "/education";

        await axios.post(api_url, userData).then((res) => {
            console.log(res.data);
            setRefresh(refresh + 1)
            

        }).catch((err) => {
            console.log(err);
        });
    }
    const deleteEducation = async (data) => {

        let api_url = `${BASEURL}/education/deletes`;
        await axios.post(api_url, { id: data });
        alert("Education deleted")
        setRefresh(refresh + 1)
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

                                <UserNav />

                            </div>

                            <div class="col-xl-9 col-lg-8 col-md-12 m-b30">
                                <div class="twm-right-section-panel site-bg-gray">

                                    {/* <!--Key Skills--> */}
                                    <div class="panel panel-default mb-3">
                                        <div class="panel-heading wt-panel-heading p-a20 panel-heading-with-btn ">
                                            <h4 class="panel-tittle m-a0">Key Skills</h4>
                                            <a data-bs-toggle="modal" href="#Key_Skills" role="button" title="Edit" class="site-text-primary">
                                                <span class="fa fa-edit"></span>
                                            </a>
                                        </div>
                                        <div class="panel-body wt-panel-body p-a20 ">
                                            <div class="tw-sidebar-tags-wrap">
                                                <div class="tagcloud">
                                                    {skills.map((data) => {
                                                        return (<a href="javascript:void(0)" onClick={() => deleteSkill(data._id)}>{data.name} <span class="fa fa-trash"></span></a>)
                                                    })}

                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--Modal popup --> */}
                                        <div class="modal fade twm-saved-jobs-view" id="Key_Skills" tabindex="-1">
                                            <div class="modal-dialog modal-dialog-centered">
                                                <div class="modal-content">
                                                    <form onSubmit={saveSkill}>

                                                        <div class="modal-header">
                                                            <h2 class="modal-title">Key Skills</h2>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>

                                                        <div class="modal-body">
                                                            <p>It is the first thing recruiters notice in your profile. Write concisely what makes you unique and right person for the job you are looking for.</p>

                                                            <div class="form-group">
                                                                <input class="form-control" type="text"
                                                                    onChange={(e) => setSkill(e.target.value)}
                                                                    value={skill}
                                                                />
                                                            </div>

                                                        </div>

                                                        <div class="modal-footer">

                                                            <button type="button" class="site-button" data-bs-dismiss="modal">Close</button>
                                                            <button type="submit" class="site-button" data-bs-dismiss="modal">Save</button>

                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!--Employment--> */}
                                    <div class="panel panel-default mb-3">
                                        <div class="panel-heading wt-panel-heading p-a20 panel-heading-with-btn ">
                                            <h4 class="panel-tittle m-a0">Employment</h4>
                                            <a data-bs-toggle="modal" href="#Employment" role="button" title="Edit" class="site-text-primary">
                                                <span class="fa fa-edit"></span>
                                            </a>
                                        </div>
                                        <div class="panel-body wt-panel-body p-a20 ">
                                            <div className="row">
                                                {employments.map((data, index) => {
                                                    return (<>
                                                        <div className="col-md-4">
                                                            <div className="card p-3">
                                                                <div class="twm-panel-inner">
                                                                    <p><b>{data.jobTitle}</b></p>
                                                                    <p>{data.company}</p>
                                                                    <p>{data.startDate} - {data.endDate} </p>
                                                                    <p>{data.jobStatus}</p>
                                                                    <p>{data.note}</p>
                                                                    <a href="javascript:void(0)" className="text-danger" onClick={(e) => deleteEmployment(data._id)}>Delete<span class="fa fa-trash"></span></a>
                                                                </div>
                                                            </div>
                                                        </div></>)
                                                })}
                                            </div>
                                        </div>

                                        {/* <!--Employment --> */}
                                        <div class="modal fade twm-saved-jobs-view" id="Employment" tabindex="-1">
                                            <div class="modal-dialog modal-dialog-centered">
                                                <div class="modal-content">
                                                    <form onSubmit={saveEmpolyment}>

                                                        <div class="modal-header">
                                                            <h2 class="modal-title">Add Employment</h2>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>

                                                        <div class="modal-body">

                                                            <div class="row">
                                                                <div class="col-xl-12 col-lg-12">
                                                                    <div class="form-group">
                                                                        <label>Your Designation</label>
                                                                        <div class="ls-inputicon-box">
                                                                            <input class="form-control"
                                                                                onChange={(e) => setjobTitle(e.target.value)}
                                                                                value={jobTitle}
                                                                                type="text" placeholder="Enter Your Designation" />
                                                                            <i class="fs-input-icon fa fa-address-card"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-6 col-lg-12">
                                                                    <div class="form-group">
                                                                        <label>Your Organization</label>
                                                                        <div class="ls-inputicon-box">
                                                                            <input class="form-control" type="text"
                                                                                onChange={(e) => setcompany(e.target.value)}
                                                                                value={company}
                                                                                placeholder="Enter Your Organization" />
                                                                            <i class="fs-input-icon fa fa-building"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-6 col-lg-12">
                                                                    <div class="form-group">
                                                                        <label>City</label>
                                                                        <div class="ls-inputicon-box">
                                                                            <input class="form-control" type="text"
                                                                                onChange={(e) => setCity(e.target.value)}
                                                                                value={city}
                                                                                placeholder="Enter City of work" />
                                                                            <i class="fs-input-icon fa fa-building"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-xl-12 col-lg-12">
                                                                    <div class="form-group">
                                                                        <label>Is this your current company?</label>
                                                                        <div class="row twm-form-radio-inline">

                                                                            <div class="col-md-6">
                                                                                <input class="form-check-input" type="radio" name="jobstatus" value="current" id="flexRadioDefault1" onChange={(e) => setjobStatus(e.target.value)} />
                                                                                <label class="form-check-label" for="flexRadioDefault1">
                                                                                    Yes
                                                                                </label>
                                                                            </div>
                                                                            <div class="col-md-6">
                                                                                <input class="form-check-input" type="radio" name="jobstatus" value="old" id="S_no" onChange={(e) => setjobStatus(e.target.value)} />
                                                                                <label class="form-check-label" for="S_no">
                                                                                    No
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* <!--Start Date--> */}
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <label>Started Working From</label>
                                                                        <div class="ls-inputicon-box">
                                                                        <select class="wt-select-box selectpicker form-control"
                                                                                onChange={(e) => setstartDate(e.target.value)}
                                                                                data-live-search="true" title="" data-bv-field="size">
                                                                                <option class="bs-title-option" value="">Select Year</option>
                                                                                <option value="2001"> 2001</option>
                                                                                <option value="2002"> 2002</option>
                                                                                <option value="2003"> 2003</option>
                                                                                <option value="2004"> 2004</option>
                                                                                <option value="2005"> 2005</option>
                                                                                <option value="2006"> 2006</option>
                                                                                <option value="2007"> 2007</option>
                                                                                <option value="2008"> 2008</option>
                                                                                <option value="2009"> 2009</option>
                                                                                <option value="2010"> 2010</option>
                                                                                <option value="2011"> 2011</option>
                                                                                <option value="2012"> 2012</option>
                                                                                <option value="2013"> 2013</option>
                                                                                <option value="2014"> 2014</option>
                                                                                <option value="2015"> 2015</option>
                                                                                <option value="2016"> 2016</option>
                                                                                <option value="2017"> 2017</option>

                                                                            </select>
                                                                             <i class="fs-input-icon far fa-calendar"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* <!--End Date--> */}
                                                                <div class="col-md-6">
                                                                    <div class="form-group">
                                                                        <label>Worked Till</label>
                                                                        <div class="ls-inputicon-box">
                                                                        <select class="wt-select-box selectpicker form-control"
                                                                                onChange={(e) => setendDate(e.target.value)}
                                                                                data-live-search="true" title="" data-bv-field="size">
                                                                                <option class="bs-title-option" value="">Select Year</option>
                                                                                <option value="2001"> 2001</option>
                                                                                <option value="2002"> 2002</option>
                                                                                <option value="2003"> 2003</option>
                                                                                <option value="2004"> 2004</option>
                                                                                <option value="2005"> 2005</option>
                                                                                <option value="2006"> 2006</option>
                                                                                <option value="2007"> 2007</option>
                                                                                <option value="2008"> 2008</option>
                                                                                <option value="2009"> 2009</option>
                                                                                <option value="2010"> 2010</option>
                                                                                <option value="2011"> 2011</option>
                                                                                <option value="2012"> 2012</option>
                                                                                <option value="2013"> 2013</option>
                                                                                <option value="2014"> 2014</option>
                                                                                <option value="2015"> 2015</option>
                                                                                <option value="2016"> 2016</option>
                                                                                <option value="2017"> 2017</option>

                                                                            </select>
                                                                            <i class="fs-input-icon far fa-calendar"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12">
                                                                    <div class="form-group mb-0">
                                                                        <label>Describe your Job Profile</label>
                                                                        <textarea class="form-control" rows="3" placeholder="Describe your Job"
                                                                            onChange={(e) => setnotes(e.target.value)}
                                                                            value={notes}
                                                                        ></textarea>
                                                                    </div>
                                                                </div>

                                                            </div>


                                                        </div>

                                                        <div class="modal-footer">

                                                            <button type="button" class="site-button" data-bs-dismiss="modal">Close</button>
                                                            <button type="submit" class="site-button" data-bs-dismiss="modal" >Save</button>

                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* <!--Education--> */}
                                    <div class="panel panel-default mb-3">
                                        <div class="panel-heading wt-panel-heading p-a20 panel-heading-with-btn ">
                                            <h4 class="panel-tittle m-a0">Education</h4>
                                            <a data-bs-toggle="modal" href="#Education" role="button" title="Edit" class="site-text-primary">
                                                <span class="fa fa-edit"></span>
                                            </a>
                                        </div>
                                        <div class="panel-body wt-panel-body p-a20 ">
                                            <div class="twm-panel-inner">
                                                <p>Mention your employment details including your current and previous company work experience</p>
                                                <h4>Schools attended</h4>
                                                <hr/>
                                                {educationList.map((data) => {
                                                    return (<>
                                                        <p>{data.startDate} to {data.endDate}</p>
                                                        <p><b>{data.course} - {data.school}</b></p>
                                                        <hr/>
                                                        <a href="javascript:void(0)" className="text-danger" onClick={(e) => deleteEducation(data._id)}>Delete<span class="fa fa-trash"></span></a>

                                                        <hr/>
                                                    </>)
                                                })}

                                            </div>
                                        </div>

                                        {/* <!--Education --> */}
                                        <div class="modal fade twm-saved-jobs-view" id="Education" tabindex="-1">
                                            <div class="modal-dialog modal-dialog-centered">
                                                <div class="modal-content">
                                                    <form onSubmit={saveEducation}>

                                                        <div class="modal-header">
                                                            <h2 class="modal-title">Education</h2>
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>

                                                        <div class="modal-body">
                                                            <div class="row">

                                                                <div class="col-xl-12 col-lg-12">
                                                                    <div class="form-group">
                                                                        <label>Education</label>
                                                                        <div class="ls-inputicon-box">
                                                                            <select class="wt-select-box selectpicker form-control"
                                                                                onChange={(e) => setEducationLevel(e.target.value)}
                                                                                data-live-search="true" title="" data-bv-field="size">
                                                                                <option class="bs-title-option" value="">Select Category</option>
                                                                                <option>First School </option>
                                                                                <option>Graduation/Diploma</option>
                                                                                <option>Masters/Post-Graduation</option>
                                                                                <option>PHD/ DOCTORATE</option>
                                                                            </select>
                                                                            <i class="fs-input-icon fa fa-user-graduate"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-xl-6 col-lg-12">
                                                                    <div class="form-group">
                                                                        <label>Course</label>
                                                                        <div class="ls-inputicon-box">
                                                                            <input class="form-control "
                                                                                onChange={(e) => setCourse(e.target.value)}
                                                                                value={course}
                                                                                data-provide="text" name="company_since" type="text" placeholder="Medicine" />
                                                                            <i class="fs-input-icon far fa-book"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-xl-6 col-lg-12">
                                                                    <div class="form-group">
                                                                        <label>University/Institute</label>
                                                                        <div class="ls-inputicon-box">
                                                                            <input class="form-control "
                                                                                onChange={(e) => setSchool(e.target.value)}
                                                                                value={school}
                                                                                name="company_since" type="text" placeholder="ICT University" />
                                                                            <i class="fs-input-icon far fa-building"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-xl-6 col-lg-12">
                                                                    <div class="form-group">
                                                                        <label>Start Year</label>
                                                                        <div class="ls-inputicon-box">
                                                                            <select class="wt-select-box selectpicker form-control"
                                                                                onChange={(e) => seteduStart(e.target.value)}
                                                                                data-live-search="true" title="" data-bv-field="size">
                                                                                <option class="bs-title-option" value="">Select Year</option>
                                                                                <option value="2001"> 2001</option>
                                                                                <option value="2002"> 2002</option>
                                                                                <option value="2003"> 2003</option>
                                                                                <option value="2004"> 2004</option>
                                                                                <option value="2005"> 2005</option>
                                                                                <option value="2006"> 2006</option>
                                                                                <option value="2007"> 2007</option>
                                                                                <option value="2008"> 2008</option>
                                                                                <option value="2009"> 2009</option>
                                                                                <option value="2010"> 2010</option>
                                                                                <option value="2011"> 2011</option>
                                                                                <option value="2012"> 2012</option>
                                                                                <option value="2013"> 2013</option>
                                                                                <option value="2014"> 2014</option>
                                                                                <option value="2015"> 2015</option>
                                                                                <option value="2016"> 2016</option>
                                                                                <option value="2017"> 2017</option>

                                                                            </select>
                                                                            <i class="fs-input-icon fa fa-user-graduate"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-xl-6 col-lg-12">
                                                                    <div class="form-group">
                                                                        <label>End Year</label>
                                                                        <div class="ls-inputicon-box">
                                                                            <select class="wt-select-box selectpicker form-control"
                                                                                onChange={(e) => seteduEnd(e.target.value)}
                                                                                data-live-search="true" title="" data-bv-field="size">
                                                                                <option class="bs-title-option" value="">Select Year</option>
                                                                                <option value="2001"> 2001</option>
                                                                                <option value="2002"> 2002</option>
                                                                                <option value="2003"> 2003</option>
                                                                                <option value="2004"> 2004</option>
                                                                                <option value="2005"> 2005</option>
                                                                                <option value="2006"> 2006</option>
                                                                                <option value="2007"> 2007</option>
                                                                                <option value="2008"> 2008</option>
                                                                                <option value="2009"> 2009</option>
                                                                                <option value="2010"> 2010</option>
                                                                                <option value="2011"> 2011</option>
                                                                                <option value="2012"> 2012</option>
                                                                                <option value="2013"> 2013</option>
                                                                                <option value="2014"> 2014</option>
                                                                                <option value="2015"> 2015</option>
                                                                                <option value="2016"> 2016</option>
                                                                                <option value="2017"> 2017</option>

                                                                            </select>
                                                                            <i class="fs-input-icon fa fa-user-graduate"></i>
                                                                        </div>
                                                                    </div>
                                                                </div>


                                                            </div>
                                                        </div>

                                                        <div class="modal-footer">

                                                            <button type="button" class="site-button" data-bs-dismiss="modal">Close</button>
                                                            <button type="submit" class="site-button" data-bs-dismiss="modal">Save</button>

                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                    </div>








                                    {/* <!--Attach Resume--> */}
                                    <div class="panel panel-default mb-3">
                                        <div class="panel-heading wt-panel-heading p-a20 panel-heading-with-btn ">
                                            <h4 class="panel-tittle m-a0">Attach Resume</h4>
                                        </div>
                                        <div class="panel-body wt-panel-body p-a20 ">
                                            <div class="twm-panel-inner">
                                                <p>Resume is the most important document recruiters look for. Recruiters generally do not look at profiles without resumes.</p>
                                                <div class="dashboard-cover-pic">
                                                    <form action="https://thewebmax.org/jobzilla/upload.php" class="dropzone"></form>
                                                    <p>Upload Resume File size is 3 MB</p>
                                                </div>

                                            </div>
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