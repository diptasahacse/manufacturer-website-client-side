import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Home/Home';
import Footer from './Page/Shared/Footer/Footer';
import Header from './Page/Shared/Header/Header';
import SignIn from './Page/SignIn/SignIn';
import SignUp from './Page/SignUp/SignUp';

function App() {
  return (
    <div>
      {/* className='max-w-7xl mx-auto' */}
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
