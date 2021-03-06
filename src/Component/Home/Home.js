import React from 'react';
import BillerInfo from './BillerInfo/BillerInfo';
import AddBillerInfo from './AddBillerInfo/AddBillerInfo';
import './Home.css'




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

                    {/*                     
                   

                    {/* //modal  */}
                    <div>
                        {/* <!-- The button to open modal --> */}
                        <label htmlFor="booking-modal" className="btn modal-button">Add New Biller </label>

                        {/* <!-- Put this part before </body> tag-- > */}
                        <input type="checkbox" id="booking-modal" className="modal-toggle" />
                        <div className="modal modal-bottom md:modal-middle">
                            <div className="modal-box">

                                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                                <AddBillerInfo></AddBillerInfo>

                            </div>
                        </div>

                    </div >

                </div>
            </div>


            <BillerInfo />

        </div>
    );
};

export default Home;