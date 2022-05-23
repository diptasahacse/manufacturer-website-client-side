import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Home/Home';
import Footer from './Page/Shared/Footer/Footer';
import Header from './Page/Shared/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
