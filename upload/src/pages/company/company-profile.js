import { Link } from "react-router-dom"
import PublicHeader from "../../components/PublicHeader"
import UserNav from "../../components/UserNav"
import { useEffect, useState } from "react";
import { BASEURL } from "../../common/config";
import axios from "axios";
import ComapnyNav from "../../components/CompanyNav";
export default function CompanyProfile() {

    const userDetails = JSON.parse(localStorage.getItem("user-details"));
    const token = localStorage.getItem("token");


    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [userData, setUserData] = useState({});
    const [website, setWebsite] = useState("");
    const [fullName, setFullName] = useState("");
    const [city, setCity] = useState("");
    const [jobtype, setJobtype] = useState("");
    const [country, setCountry] = useState("");
    const [qualification, setQualification] = useState("");
    const [language, setLanguage] = useState("");
    const [jobCategory_id, setJobCategory_id] = useState("");
    const [experience, setExperience] = useState("");
    const [currentSalary, setCurrentSalary] = useState("");
    const [age, setAge] = useState("");
    const [description, setDescription] = useState("");
    const [user_id, setUser_id] = useState(userDetails._id);
    const [jobCategory, setJobCategory] = useState();
    const [JobCategoryID, setJobCategoryId] = useState();
    const [refresh, setRefresh] = useState(0);


    useEffect(() => {
        
        getUser();
    }, refresh);

    const getUser = async () => {
        let api_url = BASEURL + "/user/" + userDetails._id;
        const headers = { Authorization: `Bearer ${token}` };
        try {

            const res = await axios.get(api_url, { headers });

            setUserData(res.data.data)
            localStorage.setItem("user-details", JSON.stringify(res.data.data))
            setFullName(res.data.data.fullName)
            setEmail(res.data.data.email)
            setPhone(res.data.data.phone)
            setQualification(res.data.data.qualification)
            setJobCategory_id(res.data.data.jobCategory_id)
            setExperience(res.data.data.experience)
            setCurrentSalary(res.data.data.currentSalary)
            setAge(res.data.data.age)
            setDescription(res.data.data.description)
            setLanguage(res.data.data.language)
            setWebsite(res.data.data.website)
            setCity(res.data.data.city)
            setCountry(res.data.data.country)
            setJobtype(res.data.data.jobtype)
        } catch (err) {
            console.log(err);
        }
    };

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
            })
            .catch((error) => {
                console.error("Fetch error:", error.message);
            });
    }, []);

    const handleJobCategory = (event) => {
        setJobCategoryId(event.target.options[event.target.selectedIndex].value);
    };


    const updateProfile = async (event) => {
       
        let userData = {
            fullName: fullName,
            city: city,
            country: country,
            profileImage: formImage,
        }
        let api_url = BASEURL + "/user/update/" + userDetails._id;
        await axios.put(api_url, userData);
        alert("Update Profile updated")
        setRefresh(refresh + 1)
    }






    const [compName, setCompName] = useState();
    const [comPhone, setComPhone] = useState();
    const [comEmail, setComEmail] = useState();
    const [comWebsite, setComWebsite] = useState();
    const [estSince, setEstSince] = useState();
    const [teamSize, setTeamSize] = useState();
    const [descript, setDescrip] = useState();
    const [formImage, setFormImage] = useState("")
    const [formBanner, setFormBanner] = useState("")
    const [comp_id, setcomp_id] = useState("")
    
    const [err, setErr] = useState(false);


    useEffect(() => {
        loadCompany()
    }, []);


    const loadCompany=(e)=>{
        fetch(`${BASEURL}/company/user/${userDetails._id}`, {
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
                console.log(data.data);
                setcomp_id(data.data._id);
                setCompName(data.data.companyName);
                setComPhone(data.data.phone);
                setComEmail(data.data.email);
                setComWebsite(data.data.website);
                setEstSince(data.data.estSince);
                setTeamSize(data.data.teamSize);
                setDescrip(data.data.Description);
                setFormImage(data.data.image);
                setFormBanner(data.data.bannerImage);
            })
            .catch((error) => {
                console.error("Fetch error:", error.message);
            });
    }

    const updateCompanyProfile = (e) => {
        e.preventDefault();
        alert(comp_id)

        const compDetails = {
            companyName: compName,
            phone: comPhone,
            email: comEmail,
            website: comWebsite,
            estSince: estSince,
            teamSize: teamSize,
            Description: descript,
            image: formImage,
            bannerImage: formBanner,
        };

        fetch(`${BASEURL}/company/update/${comp_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(compDetails),
        }).then((response)  =>  {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(async (data)  => {
                console.log(data);
                updateProfile()
                loadCompany()
                getUser();
                alert("Company profile updated");
            })
            .catch((err) => console.log(err.message));
    };


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
                                {/* <!--Filter Short By--> */}
                                <div class="twm-right-section-panel site-bg-gray">
                                    <form onSubmit={updateCompanyProfile}>

                                        <div className="panel panel-default">
                                            <div className="panel-heading wt-panel-heading p-a20">
                                                <h4 className="panel-tittle m-a0">Logo and Cover image</h4>
                                            </div>
                                            <div className="col-lg-12 col-md-12 ">
                                                <div className="dashboard-cover-pic">
                                                    <div
                                                        action="https://thewebmax.org/jobzilla/upload.php"
                                                        className="dropzone "
                                                    >
                                                        <div className="row mb-5">
                                                            <div className="col-lg-6 ">
                                                                <label className="mb-3 fw-bolder" htmlFor="">Company Logo</label>
                                                                <input type="text" placeholder="input company logo"  value={formImage} onChange={(e) => setFormImage(e.target.value)} className="form-control" />

                                                                <figure className="h-75 w-100 ">
                                                                    <img src={formImage} alt="" className="h-100 w-100" />
                                                                </figure>
                                                            </div>
                                                            <div className="col-lg-6 ">
                                                                <label className="mb-3 fw-bolder" htmlFor="">Company Banner</label>
                                                                <input type="text" placeholder="input company baner image"  value={formBanner} onChange={(e) => setFormBanner(e.target.value)} className="form-control" />
                                                                <figure className="w-100 h-75">
                                                                    <img src={formBanner} alt="" className="w-100 h-100" />
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--Basic Information--> */}
                                        <div class="panel panel-default">
                                            <div class="panel-heading wt-panel-heading p-a20">
                                                <h4 class="panel-tittle m-a0">Basic Informations</h4>
                                            </div>
                                            <div class="panel-body wt-panel-body p-a20 m-b30 ">

                                                <div class="row">

                                                    <div class="col-xl-6 col-lg-6 col-md-12">
                                                        <div class="form-group">
                                                            <label>Holder Name</label>
                                                            <div class="ls-inputicon-box">
                                                                <input class="form-control" name="company_name" type="text"
                                                                    onChange={(e) => setFullName(e.target.value)}
                                                                    value={fullName} placeholder="Devid Smith" />
                                                                <i class="fs-input-icon fa fa-user "></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6 col-lg-6 col-md-12">
                                                        <div class="form-group">
                                                            <label>Company Name</label>
                                                            <div class="ls-inputicon-box">
                                                                <input class="form-control" name="company_name" type="text"
                                                                    onChange={(e) => setCompName(e.target.value)}
                                                                    value={compName} placeholder="e.g Microsoft Inc" />
                                                                <i class="fs-input-icon fa fa-building "></i>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-xl-6 col-lg-6 col-md-12">
                                                        <div class="form-group">
                                                            <label>Phone</label>
                                                            <div class="ls-inputicon-box">
                                                                <input class="form-control" name="company_phone"
                                                                    onChange={(e) => setPhone(e.target.value)}
                                                                    value={phone}
                                                                    type="text" placeholder="e.g (251) 1234-456-7890" />
                                                                <i class="fs-input-icon fa fa-phone-alt"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-6 col-lg-6 col-md-12">
                                                        <div class="form-group">
                                                            <label>Company Phone</label>
                                                            <div class="ls-inputicon-box">
                                                                <input class="form-control" name="company_phone"
                                                                    onChange={(e) => setComPhone(e.target.value)}
                                                                    value={comPhone}
                                                                    type="text" placeholder="e.g (251) 1234-456-7890" />
                                                                <i class="fs-input-icon fa fa-phone-alt"></i>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-xl-6 col-lg-6 col-md-12">
                                                        <div class="form-group">
                                                            <label>Email Address</label>
                                                            <div class="ls-inputicon-box">
                                                                <input class="form-control" name="company_Email"
                                                                    onChange={(e) => setEmail(e.target.value)}
                                                                    value={email}
                                                                    type="email" placeholder="e.g Devid@example.com" />
                                                                <i class="fs-input-icon fas fa-at"></i>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-xl-6 col-lg-6 col-md-12">
                                                        <div class="form-group">
                                                            <label>Website</label>
                                                            <div class="ls-inputicon-box">
                                                                <input class="form-control"
                                                                    onChange={(e) => setComWebsite(e.target.value)}
                                                                    value={comWebsite}
                                                                    name="company_website" type="text" placeholder="e.g https://devsmith.net/" />
                                                                <i class="fs-input-icon fa fa-globe-americas"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-12 col-md-12">
                      <div className="form-group">
                        <label>Est. Since</label>
                        <div className="ls-inputicon-box">
                          <input
                            onChange={(e) => setEstSince(e.target.value)}
                            value={estSince}
                            className="form-control"
                            name="company_since"
                            type="text"
                            placeholder="Since..."
                          />
                          <i className="fs-input-icon fa fa-globe-americas"></i>
                        </div>
                        <div>
                          {err === true && estSince === "" ? (
                            <span>Enter est since </span>
                          ) : (
                            estSince === null
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-lg-12 col-md-12">
                      <div className="form-group city-outer-bx has-feedback">
                        <label>Team Size</label>
                        <div className="ls-inputicon-box">
                          <select
                            onChange={(e) => setTeamSize(e.target.value)}
                            value={teamSize}
                            className="wt-select-box selectpicker form-control"
                            name="team-size"
                            data-live-search="true"
                            title="team-size"
                            id="city"
                            data-bv-field="size"
                          >
                            <option className="bs-title-option" value="">
                              5-10
                            </option>
                            <option className="" value="10+">
                              10+
                            </option>
                            <option className="" value="20+">
                              20+
                            </option>
                            <option className="" value="20+">
                              50+
                            </option>
                          </select>
                          <i className="fs-input-icon fa fa-sort-numeric-up"></i>
                        </div>
                        <div>
                          {err === true && teamSize === "" ? (
                            <span>Enter team size </span>
                          ) : (
                            teamSize === null
                          )}
                        </div>
                      </div>
                    </div>


                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Description</label>
                                                            <textarea
                                                                onChange={(e) => setDescrip(e.target.value)}
                                                                value={descript}
                                                                className="form-control"
                                                                rows="3"
                                                                placeholder=" e.g Greetings! We are Galaxy Software Development Company."
                                                            ></textarea>
                                                        </div>
                                                        <div>
                                                            {err === true && descript === "" ? (
                                                                <span>Enter description</span>
                                                            ) : (
                                                                descript === null
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-12 col-md-12">
                                                        <div class="text-left">
                                                            <button type="submit" class="site-button">Save Changes</button>
                                                        </div>
                                                    </div>


                                                </div>

                                            </div>
                                        </div>


                                    </form>
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