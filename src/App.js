import './App.css';
import { Route, Routes } from 'react-router-dom';

// toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Component/Home/Home';
import NotFound from './Component/Shared/NotFound/NotFound';
import Navbar from './Component/Shared/Navbar/Navbar';
import Login from './Component/Login/Login';
import Registration from './Component/Login/Registration';
import AddBillerInfo from './Component/Home/AddBillerInfo/AddBillerInfo';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12 bg-slate-200' >

      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>

        <Route path='/login' element={<Login />}></Route>
        <Route path='/registration' element={<Registration />}></Route>


        <Route path='/addbillerinfo' element={<AddBillerInfo />}></Route>



        <Route path='*' element={<NotFound />}></Route>
      </Routes>

      <ToastContainer />

    </div>
  );
}

export default App;
