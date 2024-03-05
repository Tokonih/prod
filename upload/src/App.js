// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index from './pages';
import JobList from './pages/job-list';
import EmployerList from './pages/employer-list';
import About from './pages/about';
import Contact from './pages/contact';
import DashBookmark from './pages/dash-bookmark';
import DashCandidates from './pages/dash-candidates';
import DashChangePassword from './pages/dash-chnage-password';
import DashCompanyProfile from './pages/dash-company-profile';
import DashCreateCompany from './pages/dash-create-company';
import DashManageJob from './pages/dash-manage-job';
import DashManageCompany from './pages/dash-manage-company';
import DashMessages from './pages/dash-messages';
import DashMyProfile from './pages/dash-my-profile';
import DashPostJob from './pages/dash-post-job';
import Dashboard from './pages/dashboard';
import EmployerDetail from './pages/employer-detail';
import JobDetail from './pages/job-detail';
import EditCompany from './pages/dash-edit-company';
import EditJob from './pages/dash-edit-job';
import CreateUser from './pages/dash-create-user';
import ManageUsers from './pages/dash-manage-users';
import EditUser from './pages/dash-edit-user';
import ApplyJob from './pages/dash-apply-job';
import UserDashboard from './pages/candidate/user-dashboard';
import UserProfile from './pages/candidate/user-profile';
import UserResume from './pages/candidate/user-resume';
import UserApply from './pages/candidate/user-apply';
import CompanyDashboard from './pages/company/company-dashboard';
import CompanyProfile from './pages/company/company-profile';
import CompanyResume from './pages/company/company-resume';
import CompanyApply from './pages/company/company-apply';
import CompanyPostJob from './pages/company/company-post-job';
import CompanyEditJob from './pages/company/company-edit-job';
import CompanyManageJob from './pages/company/company-manage-job';
import ViewCandidate from './pages/view-candidate';
import UserChat from './pages/candidate/user-chat';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/job-list' element={<JobList/>}/>
          <Route path='/employer-list' element={<EmployerList/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/dash-bookmark' element={<DashBookmark/>}/>
          <Route path='/dash-candidate' element={<DashCandidates/>}/>
          <Route path='/dash-change-password' element={<DashChangePassword/>}/>
          <Route path='/dash-create-company' element={<DashCreateCompany/>}/>
          <Route path='/dash-company-profile' element={<DashCompanyProfile/>}/>
          <Route path='/dash-manage-job' element={<DashManageJob/>}/>
          <Route path='/dash-manage-company' element={<DashManageCompany/>}/>
          <Route path='/dash-messages' element={<DashMessages/>}/>
          <Route path='/dash-my-profile' element={<DashMyProfile/>}/>
          <Route path='/dash-post-job' element={<DashPostJob/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/employer-detail/:id' element={<EmployerDetail/>}/>
          <Route path='/job-detail/:id' element={<JobDetail/>}/>
          <Route path='/job-detail' element={<JobDetail/>}/>
          <Route path='/view-candidate/:id' element={<ViewCandidate/>}/>
          <Route path='/edit-company/:compId' element={<EditCompany/>}/>
          <Route path='/edit-job/:jobId' element={<EditJob/>}/>
          <Route path='/dash-create-user' element={<CreateUser/>}/>
          <Route path='/dash-manage-user' element={<ManageUsers/>}/>
          <Route path='/dash-edit-user/:userId' element={<EditUser/>}/>
          <Route path='/dash-apply' element={<ApplyJob/>}/>
          <Route path='/my-dashboard' element={<UserDashboard/>}/> 
          <Route path='/my-profile' element={<UserProfile/>}/> 
          <Route path='/my-resume' element={<UserResume/>}/> 
          <Route path='/my-application' element={<UserApply/>}/> 
          <Route path='/my-chat' element={<UserChat/>}/>

          <Route path='/com-dashboard' element={<CompanyDashboard/>}/> 
          <Route path='/com-profile' element={<CompanyProfile/>}/> 
          <Route path='/com-resume' element={<CompanyResume/>}/> 
          <Route path='/com-application' element={<CompanyApply/>}/> 
          <Route path='/com-jobs' element={<CompanyManageJob/>}/> 
          <Route path='/com-post-jobs' element={<CompanyPostJob/>}/> 
          <Route path='/com-edit-jobs/:jobId' element={<CompanyEditJob/>}/> 
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
