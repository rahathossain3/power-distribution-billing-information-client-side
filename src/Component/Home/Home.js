import React from 'react';
import { Link } from 'react-router-dom';
import BillerInfo from './BillerInfo/BillerInfo';
import './Home.css'
// import useBillersInfo from '../../hooks/useBillersInfo';


const Home = () => {

    // const [billersInfo] = useBillersInfo([]);

    return (
        <div className=' lg:mx-10 m-10 '>

            <div className="navbar biller-bar-font rounded bg-slate-700 flex justify-between lg:flex-row flex-col gap-4 mb-10">
                <div className="text-white">
                    Biller Information
                </div>
                <div className="form-control ">
                    <input type="text" placeholder="Search Biller info" className="input input-bordered" />
                </div>
                <div className=" gap-2">
                    <Link to='/' className="btn border-rose-300 hover:bg-white hover:text-black btn-ghost text-white">Add New Biller</Link>

                </div>
            </div>



            <BillerInfo />

        </div>
    );
};

export default Home;