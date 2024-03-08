// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard';
import VerifyAdmin from './pages/verify-admin';
import SignUp from './pages/sign-up';
import Manage_Wallet from './pages/dash-manage-wallet';
import Create_wallet from './pages/dash-create-wallet';
import Fund_wallet from './pages/dash-fund-account';
// import Fund_wallet from './pages/dash-company-type';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/' element={<VerifyAdmin/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/dash-post-wallet' element={<Create_wallet/>}/>
          <Route path='/dash-fund-wallet' element={<Fund_wallet/>}/>
          <Route path='/dash-manage-wallet' element={<Manage_Wallet/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
