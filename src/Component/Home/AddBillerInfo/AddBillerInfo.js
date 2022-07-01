import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';


// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
const AddBillerInfo = () => {



    // const [user] = useAuthState(auth)

    const { register, handleSubmit, reset } = useForm();


    const onSubmit = async (data) => {
        //  console.log(data);
        const url = `http://localhost:5000/add-billing`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast('Product Add successfully');
                reset();

            })
    };

    // const { _id, name, img, details, minimumQnt, availableQnt, unitPrice, email } = product;



    return (
        <div className=' w-full lg:p-5 flex justify-center flex-col'>
            <div>
                <h2 className='text-5xl mb-4 text-center mt-3'>Add Biller Info</h2>
                <hr style={{ color: 'goldenrod', border: '2px solid goldenrod' }} />
            </div>

            <form className='flex flex-col mb-5' onSubmit={handleSubmit(onSubmit)}>

                <label className='text-lg p-3 font-semibold' htmlFor="fullName">Biller Full Name</label>
                <input className='input input-bordered input-primary w-full mb-4 ' id='fullName' placeholder='Biller Full Name' {...register("fullName", { required: true, maxLength: 30 })} />


                <label className='text-lg p-3 font-semibold' htmlFor="email">Biller Email</label>
                <input className='input input-bordered input-primary w-full mb-4 ' id='email' placeholder='Biller Email' type="email" {...register("email", { required: true })} />


                <label className='text-lg p-3 font-semibold' htmlFor="phone">Biller Phone Number</label>
                <input className='input input-bordered input-primary w-full mb-4 ' id='phone' placeholder='Biller Phone Number' type="text" {...register("phone", { required: true })} />



                <label className='text-lg p-3 font-semibold' htmlFor="paidAmount">Paid Amount</label>
                <input className='input input-bordered input-primary w-full mb-4 ' id='paidAmount' placeholder='Paid Amount $' type="number" {...register("paidAmount", { required: true })} />



                <input className='btn  btn-info hover:btn-ghost w-1/2 mx-auto mt-2 mb-3' type='submit' value="Add Item" />

            </form>
            <ToastContainer />
        </div>
    );
};

export default AddBillerInfo;