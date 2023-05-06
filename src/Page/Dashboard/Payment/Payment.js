import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { loadStripe } from '@stripe/stripe-js';
import {
    CardElement,
    Elements,
    useStripe,
    useElements,
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import { useQuery } from 'react-query';
const stripePromise = loadStripe('pk_test_51L2GtBH4xRKtT9akcROYTxJculEA4djz5Nkl8BsEcEl1pZ7xpj59v4upPW1FucmR6WMBa5htyMeJI3gBZTLSnXNz005mbyDun0');
const Payment = () => {
    const [user, loading] = useAuthState(auth);
    const { id } = useParams();
    const { isLoading, error, data } = useQuery('repoData', () =>
        fetch(`${process.env.REACT_APP_SERVER_API_KEY}/order/${id}`, {
            method: "GET",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        }).then(res =>
            res.json()
        )
    )

    if (loading || isLoading) {
        return <Loading></Loading>

    }


    return (
        <div>
            <h3 className='text-4xl font-semibold text-primary'>Payment</h3>
            <div className='p-7 mt-5 rounded-2xl' style={{ backgroundColor: "#FFFFFF" }}>
                <h3 className='text-xl font-semibold'>Hi <span className='text-primary'>{user?.displayName}</span>,</h3>

                <p className='mt-1'>It is time to Pay for <span className='text-primary font-semibold'>{data?.productName}</span> tools.</p>

                <div className='mt-10'>
                    <h3 className='font-semibold text-primary text-center'>Please check billing details</h3>


                    <div>
                        <div className="overflow-x-auto">
                            <table className="table w-full">

                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <td>{data?.customerName}</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>{data?.customerEmail}</td>
                                    </tr>
                                    <tr>
                                        <th>Product Name</th>
                                        <td>{data?.productName}</td>
                                    </tr>
                                    <tr>
                                        <th>Product Quantity</th>
                                        <td>{data?.quantity}</td>
                                    </tr>
                                    <tr>
                                        <th>Total Price</th>
                                        <td>${data?.totalPrice}</td>
                                    </tr>
                                    <tr>
                                        <th>Phone</th>
                                        <td>{data?.phone}</td>
                                    </tr>
                                    <tr>
                                        <th>Address</th>
                                        <td>{data?.address}</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>

                </div>

            </div>

            <div className='p-7 mt-5 rounded-2xl' style={{ backgroundColor: "#FFFFFF" }}>

                <Elements stripe={stripePromise}>
                    <CheckoutForm orderInfo={data} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;