import React from 'react';
import useBillersInfo from '../../../hooks/useBillersInfo';

const BillerInfo = () => {

    const [billersInfo] = useBillersInfo([]);


    const handleEditInfo = (id) => {
        console.log('edit info', id);
    }
    const handleDeleteInfo = () => {
        console.log('delete info')
    }



    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full border-separate border border-slate-400 bg-orange-400 rounded font-semibold">
                    <thead className='text-center bg-amber-500 '>
                        <tr >
                            <th className="border border-slate-30 bg-orange-300">Biller Id</th>
                            <th className="border border-slate-300 bg-orange-300">Biller Name</th>
                            <th className="border border-slate-300 bg-orange-300">Email</th>
                            <th className="border border-slate-300 bg-orange-300">Phone</th>
                            <th className="border border-slate-300 bg-orange-300">Paid Amount</th>
                            <th className="border border-slate-300 bg-red-300">Settings</th>

                        </tr>
                    </thead>
                    {
                        billersInfo.map(billerInfo =>
                            <tbody
                                key={billerInfo._id}>
                                <tr>
                                    <th className="border border-slate-300">{billerInfo._id}</th>
                                    <td className="border border-slate-300">{billerInfo.email}</td>
                                    <td className="border border-slate-300">{billerInfo.fullName}</td>
                                    <td className="border border-slate-300">{billerInfo.phone}</td>
                                    <td className="border border-slate-300 text-center">{billerInfo.paidAmount}</td>
                                    <td className='flex flex-row justify-between text border border-slate-300'>
                                        <div>
                                            <button onClick={() => handleEditInfo(billerInfo._id)} className='btn'>Edit Info</button>
                                        </div>

                                        <div>
                                            <button onClick={() => handleEditInfo(billerInfo._id)} className='btn'>Delete Info</button>
                                        </div>
                                    </td>

                                </tr>

                            </tbody>


                        )
                    }



                    {/* <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>company</th>
                            <th>location</th>
                            <th>Last Login</th>
                            <th>Favorite Color</th>
                        </tr>
                    </tfoot> */}
                </table>
            </div>





        </div>
    );
};

export default BillerInfo;