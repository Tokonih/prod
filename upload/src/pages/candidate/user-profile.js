import { Link } from "react-router-dom"
import PublicHeader from "../../components/PublicHeader"
import UserNav from "../../components/UserNav"
import { useEffect, useState } from "react";
import { BASEURL } from "../../common/config";
import axios from "axios";
export default function UserProfile() {

    const userDetails = JSON.parse(localStorage.getItem("user-details"));
    const token = localStorage.getItem("token");


    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [userData, setUserData] = useState({});
    const [website, setWebsite] = useState("");
    const [fullName, setFullName] = useState("");
    const [profileLink, setprofileLink] = useState("");
    const [city, setCity] = useState("");
    const [jobtype, setJobtype] = useState("");
    const [country, setCountry] = useState("");
    const [qualification, setQualification] = useState("");
    const [language, setLanguage] = useState("");
    const [experience, setExperience] = useState("");
    const [gender, setGender] = useState("");
    const [currentSalary, setCurrentSalary] = useState("");
    const [age, setAge] = useState("");
    const [description, setDescription] = useState("");
    const [user_id, setUser_id] = useState(userDetails._id);
    const [jobCategory, setJobCategory] = useState();
    const [JobCategoryID, setJobCategoryId] = useState("");
    const [err, setErr] = useState(false);
    const [refresh, setRefresh] = useState(0);


    useEffect(() => {
        const getUser = async () => {
            let api_url = BASEURL + "/user/" + userDetails._id;
            const headers = { Authorization: `Bearer ${token}` };
            try {

                const res = await axios.get(api_url, { headers });
                console.log(res.data);
                setUserData(res.data.data)
                localStorage.setItem("user-details", JSON.stringify(res.data.data))
                setFullName(res.data.data.fullName)
                setEmail(res.data.data.email)
                setPhone(res.data.data.phone)
                setQualification(res.data.data.qualification)
                setJobCategoryId(res.data.data.jobCategory_id)
                setExperience(res.data.data.experience)
                setCurrentSalary(res.data.data.currentSalary)
                setAge(res.data.data.age)
                setprofileLink(res.data.data.profileImage)
                setGender(res.data.data.gender)
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
        getUser();
    }, refresh);

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
        setJobCategoryId(event.target.value);
    };


    const updateProfile = async (event) => {
        event.preventDefault();
        let userData = {
            website: website,
            fullName: fullName,
            city: city,
            country: country,
            qualification: qualification,
            language: language,
            experience: experience,
            currentSalary: currentSalary,
            age: age,
            jobCategory_id: JobCategoryID,
            description: description,
            jobtype: jobtype,
            gender: gender,
            profileImage:profileLink
        }
        let api_url = BASEURL + "/user/update/" + userDetails._id;
        await axios.put(api_url, userData);
        alert("Update Profile updated")
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
                                {/* <!--Filter Short By--> */}
                                <div class="twm-right-section-panel site-bg-gray">
                                    <form onSubmit={updateProfile}>


                                        {/* <!--Basic Information--> */}
                                        <div class="panel panel-default">
                                            <div class="panel-heading wt-panel-heading p-a20">
                                                <h4 class="panel-tittle m-a0">Basic Informations</h4>
                                            </div>
                                            <div class="panel-body wt-panel-body p-a20 m-b30 ">

                                                <div class="row">
                                                    <div class="col-xl-1 col-lg-1 col-md-12">
                                                        <figure className="h-75 w-100 ">
                                                            <img src={profileLink} alt=""  className="h-100 w-100"  style={{ objectFit:"cover", borderRadius:200 }}/>
                                                        </figure>
                                                    </div>
                                                    <div class="col-xl-3 col-lg-3 col-md-12">
                                                        <div class="form-group">
                                                            <label>Profile Link</label>
                                                            <div class="ls-inputicon-box">
                                                                <input class="form-control" name="company_name" type="text"
                                                                    onChange={(e) => setprofileLink(e.target.value)}
                                                                    value={profileLink} placeholder="https://image.png" />
                                                                <i class="fs-input-icon fa fa-user "></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-lg-4 col-md-12">
                                                        <div class="form-group">
                                                            <label>Your Name</label>
                                                            <div class="ls-inputicon-box">
                                                                <input class="form-control" name="company_name" type="text"
                                                                    onChange={(e) => setFullName(e.target.value)}
                                                                    value={fullName} placeholder="Devid Smith" />
                                                                <i class="fs-input-icon fa fa-user "></i>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-xl-4 col-lg-4 col-md-12">
                                                        <div class="form-group">
                                                            <label>Phone</label>
                                                            <div class="ls-inputicon-box">
                                                                <input class="form-control" name="company_phone"
                                                                    onChange={(e) => setPhone(e.target.value)}
                                                                    value={phone}
                                                                    type="text" placeholder="(251) 1234-456-7890" />
                                                                <i class="fs-input-icon fa fa-phone-alt"></i>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-xl-4 col-lg-4 col-md-12">
                                                        <div class="form-group">
                                                            <label>Email Address</label>
                                                            <div class="ls-inputicon-box">
                                                                <input class="form-control" name="company_Email"
                                                                    onChange={(e) => setEmail(e.target.value)}
                                                                    value={email}
                                                                    type="email" placeholder="Devid@example.com" />
                                                                <i class="fs-input-icon fas fa-at"></i>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-xl-4 col-lg-4 col-md-12">
                                                        <div class="form-group">
                                                            <label>Website</label>
                                                            <div class="ls-inputicon-box">
                                                                <input class="form-control"
                                                                    onChange={(e) => setWebsite(e.target.value)}
                                                                    value={website}
                                                                    name="company_website" type="text" placeholder="https://devsmith.net/" />
                                                                <i class="fs-input-icon fa fa-globe-americas"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4 col-lg-4 col-md-12">
                                                        <div className="form-group">
                                                            <label>Gender</label>
                                                            <div className="ls-inputicon-box">
                                                                <select
                                                                    className="wt-select-box selectpicker  form-select form-select-lg mb-3"
                                                                    data-live-search="true"
                                                                    title=""
                                                                    id="gender"
                                                                    data-bv-field="size"
                                                                    onChange={(e) => setGender(e.target.value)}
                                                                    value={gender}
                                                                >
                                                                    <option className="bs-title-option" value="">
                                                                        Select Gender
                                                                    </option>
                                                                    <option value="Male">Male</option>
                                                                    <option value="Female">Female</option>

                                                                </select>
                                                                <i className="fs-input-icon fa fa-map-marker-alt"></i>
                                                            </div>
                                                            <div>
                                                                {err === true && gender === undefined ? (
                                                                    <span>Enter city</span>
                                                                ) : (
                                                                    gender === null
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div class="col-xl-4 col-lg-4 col-md-12">
                                                        <div class="form-group">
                                                            <label>Qualification</label>
                                                            <div class="ls-inputicon-box">
                                                                <input class="form-control"
                                                                    onChange={(e) => setQualification(e.target.value)}
                                                                    value={qualification}
                                                                    name="company_since" type="text" placeholder="BTech" />
                                                                <i class="fs-input-icon fa fa-user-graduate"></i>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-xl-4 col-lg-4 col-md-12">
                                                        <div class="form-group">
                                                            <label>Language</label>
                                                            <div class="ls-inputicon-box">
                                                                <input class="form-control"
                                                                    onChange={(e) => setLanguage(e.target.value)}
                                                                    value={language}
                                                                    name="company_since" type="text" placeholder="e.x English, Spanish" />
                                                                <i class="fs-input-icon fa fa-language"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-4 col-lg-4 col-md-12">
                                                        <div class="form-group">
                                                            <label>Job Type</label>
                                                            <div class="ls-inputicon-box">
                                                                <input class="form-control"
                                                                    onChange={(e) => setJobtype(e.target.value)}
                                                                    value={jobtype}
                                                                    name="company_since" type="text" placeholder="e.x Software Developer, Data Analyst" />
                                                                <i class="fs-input-icon fa fa-language"></i>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="col-xl-4 col-lg-4 col-md-12">
                                                        <div class="form-group city-outer-bx has-feedback">
                                                            <label>Job Interest</label>
                                                            <div class="ls-inputicon-box">
                                                                <select
                                                                    className="wt-select-box selectpicker form-select form-select-lg mb-3"
                                                                    data-live-search="true"
                                                                    title=""
                                                                    id="j-category"
                                                                    data-bv-field="size"
                                                                    onChange={handleJobCategory}
                                                                    value={JobCategoryID}
                                                                >
                                                                    <option value="">Select Interest</option>
                                                                    {jobCategory &&
                                                                        jobCategory.map((cat) => (
                                                                            <option key={cat._id} value={cat._id}>
                                                                                {cat.name}
                                                                            </option>
                                                                        ))}
                                                                </select>
                                                                <i class="fs-input-icon fa fa-border-all"></i>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div class="col-xl-4 col-lg-4 col-md-12">
                                                        <div class="form-group city-outer-bx has-feedback">
                                                            <label>Experience</label>
                                                            <div class="ls-inputicon-box">
                                                                <input class="form-control" name="company_since"
                                                                    onChange={(e) => setExperience(e.target.value)}
                                                                    value={experience} type="text" placeholder="05 Years" />
                                                                <i class="fs-input-icon fa fa-user-edit"></i>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div class="col-xl-4 col-lg-6 col-md-12">
                                                        <div class="form-group city-outer-bx has-feedback">
                                                            <label>Current Salary</label>
                                                            <div class="ls-inputicon-box">
                                                                <input class="form-control" name="company_since"
                                                                    onChange={(e) => setCurrentSalary(e.target.value)}
                                                                    value={currentSalary}
                                                                    type="text" placeholder="65K" />
                                                                <i class="fs-input-icon fa fa-dollar-sign"></i>
                                                            </div>
                                                        </div>
                                                    </div>



                                                    <div class="col-xl-4 col-lg-12 col-md-12">
                                                        <div class="form-group city-outer-bx has-feedback">
                                                            <label>Age</label>
                                                            <div class="ls-inputicon-box">
                                                                <input class="form-control" name="company_since"
                                                                    onChange={(e) => setAge(e.target.value)}
                                                                    value={age}
                                                                    type="text" placeholder="35 Years" />
                                                                <i class="fs-input-icon fa fa-child"></i>
                                                            </div>

                                                        </div>
                                                    </div>


                                                    <div class="col-xl-4 col-lg-6 col-md-12">
                                                        <div class="form-group city-outer-bx has-feedback">
                                                            <label>Country</label>
                                                            <div class="ls-inputicon-box">
                                                                <input class="form-control" name="company_since"
                                                                    onChange={(e) => setCountry(e.target.value)}
                                                                    value={country}
                                                                    type="text" placeholder="USA" />
                                                                <i class="fs-input-icon fa fa-globe-americas"></i>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div class="col-xl-4 col-lg-6 col-md-12">
                                                        <div class="form-group city-outer-bx has-feedback">
                                                            <label>City</label>
                                                            <div class="ls-inputicon-box">
                                                                <input class="form-control" name="company_since"
                                                                    onChange={(e) => setCity(e.target.value)}
                                                                    value={city}
                                                                    type="text" placeholder="Texas" />
                                                                <i class="fs-input-icon fa fa-globe-americas"></i>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div class="col-md-12">
                                                        <div class="form-group">
                                                            <label>Description</label>
                                                            <textarea class="form-control" rows="3"
                                                                onChange={(e) => setDescription(e.target.value)}
                                                                value={description}
                                                            ></textarea>
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