import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import useBillersInfo from '../../../hooks/useBillersInfo';


const Navbar = () => {


    // const [state, setState] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/billing-list')
    //         .then(res => res.json())
    //         .then(data => setState(data));
    // }, []);

    // // all billers

    // console.log(state)




    const signOut = <><Link to='/' className="btn text-white">Get started</Link></>
    const totalPaid = <><p className='btn btn-ghost mr-5 text-green-800 font-bold'>Total Paid:  </p></>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-1 shadow bg-base-100 rounded-box w-56">
                        <li>{totalPaid}</li>

                        <li> {signOut}</li>
                    </ul>

                </div>

                <Link to='/' className="btn btn-ghost normal-case text-xl text-green-800 font-bold hover:text-emerald-800 ">Power-Hack</Link>

            </div>


            <div className="navbar-end hidden lg:flex text-center">

                {totalPaid}
                {signOut}
            </div>

        </div>

    );
};
export default Navbar;