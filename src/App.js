import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Page/Dashboard/Dashboard';
import Home from './Page/Home/Home';
import Purchase from './Page/Purchase/Purchase';
import ResetPassword from './Page/ResetPassword/ResetPassword';
import Footer from './Page/Shared/Footer/Footer';
import Header from './Page/Shared/Header/Header';
import RequireAuth from './Page/Shared/RequireAuth/RequireAuth';
import SignIn from './Page/SignIn/SignIn';
import SignUp from './Page/SignUp/SignUp';
import UserProfile from './Page/User/UserProfile/UserProfile';
import UserProfileSetting from './Page/User/UserProfileSetting/UserProfileSetting';

function App() {
  return (
    <div >
      {/* className='max-w-7xl mx-auto' */}
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/resetpassword' element={<ResetPassword></ResetPassword>}></Route>


        <Route path='/userprofile' element={
          <RequireAuth>
            <UserProfile></UserProfile>
          </RequireAuth>
        }></Route>

        <Route path='/profilesetting' element={
          <RequireAuth>
            <UserProfileSetting></UserProfileSetting>
          </RequireAuth>
        }></Route>



        {/* Start Dashboard */}
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }></Route>

        {/* End Dashboard */}





        <Route path='/purchase/:productId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>



      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
