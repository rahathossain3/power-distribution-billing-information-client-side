import './App.css';
import { Route, Routes } from 'react-router-dom';

// toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Home/Home';
import NotFound from './Component/Shared/NotFound/NotFound';
import Navbar from './Component/Shared/Navbar/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12' >

      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>



        <Route path='*' element={<NotFound />}></Route>
      </Routes>

      <ToastContainer />

    </div>
  );
}

export default App;
