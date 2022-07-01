import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className=' lg:mx-10 m-10 '>

            <div className="navbar biller-bar-font rounded bg-slate-700 flex justify-between lg:flex-row flex-col gap-4">
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


        </div>
    );
};

export default Home;