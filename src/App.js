// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import "./styles/styles.css"

// import DashBookmark from './pages/dash-bookmark';
// import DashCandidates from './pages/dash-candidates';
// import DashChangePassword from './pages/dash-chnage-password';
// import DashCompanyProfile from './pages/dash-company-profile';

import DashMessages from './pages/dash-messages';
import DashMyProfile from './pages/dash-my-profile';
import Dashboard from './pages/dashboard';

import EditJob from './pages/dash-edit-company';
import CreateUser from './pages/dash-create-user';
import ManageUsers from './pages/dash-manage-users';
import EditUser from './pages/dash-edit-user';
// import ApplyJob from './pages/dash-apply-job';

import VerifyAdmin from './pages/verify-admin';
import Searched_JobList from './pages/searched-job';
import DashSalesAgent from './pages/dash-manage-sales-agent';
import EditSalesAgent from './pages/dash-edit-sales-agent';
// import CreateSalesAgent from './pages/dash-create-sales-agent';
import Company_Type from './pages/dash-company-type';
import DashCompanyType from './pages/dash-edit-company-type';
import DashPostCompanyType from './pages/dash-post-company-type';
import ManageCompany from './pages/dash-manage-company';
import PostCompany from './pages/dash-post-company';
import DashProductType from './pages/dash-product-category';
import Product_Type from './pages/dash-product-category';
import Edit_product_category from './pages/dash-edit-product-category';
import DashPostProductCategory from './pages/dash-post-product-category';
import PostProduct from './pages/dash-post-product';
import ManageProduct from './pages/dash-manage-product';
import EditProduct from './pages/dash-edit-product';
import ManageDeal from './pages/dash-manage-deal';
import DashEditDeal from './pages/dash-edit-deal';
import PostDeal from './pages/dash-post-deal';
import ManageTask from './pages/dash-manage-task';
import SignUp from './pages/sign-up';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Index/>}/> */}
          {/* <Route path='/job-list' element={<JobList/>}/>
          <Route path='/searched-job-list/:jobCategoryID' element={<Searched_JobList/>}/>
          <Route path='/employer-list' element={<EmployerList/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/employer-detail/:id' element={<EmployerDetail/>}/>
          <Route path='/job-detail/:id' element={<JobDetail/>}/>
          <Route path='/job-detail' element={<JobDetail/>}/>
          <Route path='/view-candidate/:id' element={<ViewCandidate/>}/>
          <Route path='/my-dashboard' element={<UserDashboard/>}/> 
          <Route path='/my-profile' element={<UserProfile/>}/> 
          <Route path='/my-resume' element={<UserResume/>}/> 
          <Route path='/my-application' element={<UserApply/>}/> 
          <Route path='/my-chat' element={<UserChat/>}/>
          <Route path='/create-article' element={<CreateAticle/>}/>
          <Route path='/my-article' element={<UserArticle/>}/>
          <Route path='/edit-my-article/:articleID' element={<UserEditAticle/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/blog/:blogID' element={<BlogSingle/>}/> */}



          {/* <Route path='/com-dashboard' element={<CompanyDashboard/>}/> 
          <Route path='/com-profile' element={<CompanyProfile/>}/> 
          <Route path='/com-resume' element={<CompanyResume/>}/> 
          <Route path='/com-application' element={<CompanyApply/>}/> 
          <Route path='/com-jobs' element={<CompanyManageJob/>}/> 
          <Route path='/com-post-jobs' element={<CompanyPostJob/>}/> 
          <Route path='/com-edit-jobs/:jobId' element={<CompanyEditJob/>}/>  */}
          

          
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/' element={<VerifyAdmin/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/edit-sales-agent/:agentId' element={<EditSalesAgent/>}/>
          <Route path='/edit-company/:companyId' element={<EditJob/>}/>
       
          <Route path='/dash-manage-company' element={<ManageCompany/>}/>
          <Route path='/dash-company-type' element={<Company_Type/>}/>
          <Route path='/dash-manage-deal' element={<ManageDeal/>}/>
          <Route path='/dash-sales-agent' element={<DashSalesAgent/>}/>
          <Route path='/dash-messages' element={<DashMessages/>}/>
          <Route path='/dash-my-profile' element={<DashMyProfile/>}/>
          <Route path='/dash-post-company' element={<PostCompany/>}/>
          <Route path='/dash-product-category' element={<Product_Type/>}/>
          <Route path='/dash-post-product' element={<PostProduct/>}/>
          <Route path='/dash-edit-product/:prodId' element={<EditProduct/>}/>
          <Route path='/dash-post-product-category' element={<DashPostProductCategory/>}/>
          <Route path='/dash-manage-product' element={<ManageProduct/>}/>
          <Route path='/dash-edit-product-category/:prodCategoryId' element={<Edit_product_category/>}/>
          <Route path='/dash-post-company-type' element={<DashPostCompanyType/>}/>
          <Route path='/dash-edit-company-type/:companyTypeId' element={<DashCompanyType/>}/>
          <Route path='/dash-edit-deal/:dealId' element={<DashEditDeal/>}/>
          <Route path='/dash-post-deal' element={<PostDeal/>}/>
          <Route path='/dash-manage-task' element={<ManageTask/>}/>
          
         
          <Route path='/dash-create-user' element={<CreateUser/>}/>
          <Route path='/dash-manage-user' element={<ManageUsers/>}/>
          <Route path='/dash-edit-user/:userId' element={<EditUser/>}/>
          
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
