import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Payment = () => {
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams();
    const [orderInfo, setOrderInfo] = useState({});



    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: "GET",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => res.json())
            .then(data => {
                setOrderInfo(data)
            })


    }, [id])

    if (loading) {
        return <Loading></Loading>

    }










    return (
        <div>
            <h3 className='text-4xl font-semibold text-primary'>Payment</h3>
            <div className='p-7 mt-5 rounded-2xl' style={{ backgroundColor: "#FFFFFF" }}>
                <h3 className='text-xl font-semibold'>Hi <span className='text-primary'>{user?.displayName}</span>,</h3>

                <p className='mt-1'>It is time to Pay for <span className='text-primary font-semibold'>{orderInfo?.productName}</span> tools.</p>

                <div className='mt-10'>
                    <h3 className='font-semibold text-primary text-center'>Please check order details</h3>


                    <div>
                        <div class="overflow-x-auto">
                            <table class="table w-full">

                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <td>{orderInfo?.customerName}</td>
                                    </tr>
                                    <tr>
                                        <th>Email</th>
                                        <td>{orderInfo?.customerEmail}</td>
                                    </tr>
                                    <tr>
                                        <th>Product Name</th>
                                        <td>{orderInfo?.productName}</td>
                                    </tr>
                                    <tr>
                                        <th>Product Quantity</th>
                                        <td>{orderInfo?.quantity}</td>
                                    </tr>
                                    <tr>
                                        <th>Total Price</th>
                                        <td>${orderInfo?.totalPrice}</td>
                                    </tr>
                                    <tr>
                                        <th>Phone</th>
                                        <td>{orderInfo?.phone}</td>
                                    </tr>
                                    <tr>
                                        <th>Address</th>
                                        <td>{orderInfo?.address}</td>
                                    </tr>
                                </tbody>
                                
                            </table>
                        </div>
                    </div>

                </div>

            </div>
            
            <div className='p-7 mt-5 rounded-2xl' style={{ backgroundColor: "#FFFFFF" }}>

            </div>
        </div>
    );
};

export default Payment;