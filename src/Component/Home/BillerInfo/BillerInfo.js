import React from 'react';
import useBillersInfo from '../../../hooks/useBillersInfo';

const BillerInfo = () => {

    const [billersInfo] = useBillersInfo([]);


    const handleEditInfo = () => {
        console.log('edit info')
    }
    const handleDeleteInfo = () => {
        console.log('delete info')
    }



    return (
        <div>
            <h2>This is biller INfo</h2>

            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr className='text-center border-separate border-spacing-2 border border-slate-400 '>
                            <th class="border border-slate-300" >Biller Id</th>
                            <th>Biller Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Paid Amount</th>
                            <th>Settings</th>

                        </tr>
                    </thead>
                    {
                        billersInfo.map(billerInfo =>
                            <tbody
                                key={billerInfo._id}>
                                <tr>
                                    <th>{billerInfo._id}</th>
                                    <td>{billerInfo.fullName}</td>
                                    <td>{billerInfo.email}</td>
                                    <td>{billerInfo.phone}</td>
                                    <td>{billerInfo.paidAmount}</td>
                                    <td className='flex flex-row text'>
                                        <div>
                                            <button className='btn '>Edit Info</button>
                                        </div>

                                        <div>
                                            <button className='btn '>Delete Info</button>
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