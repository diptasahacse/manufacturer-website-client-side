import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import MyOrderTableRow from './MyOrderTableRow/MyOrderTableRow';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${user?.email}`, {
            method: "GET",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => res.json())
            .then(data => {
                setMyOrders(data)
            })

    }, [user?.email])



    if (loading) {
        return <Loading></Loading>
    }


    console.log(myOrders)
    return (
        <div className='p-7 rounded-2xl' style={{ backgroundColor: "#FFFFFF" }}>
            <h3 className='text-3xl font-semibold text-primary'>My Orders</h3>

            <div className='mt-5'>
                <div class="overflow-x-auto">
                    <table class="table table-compact w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Total Price</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Payment Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myOrders.map((order, index) => <MyOrderTableRow index={index} order={order} key={order._id}></MyOrderTableRow>)
                            }


                        </tbody>

                    </table>
                </div>

            </div>
            {/* <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Payment Status</th>
                <th>Action</th>
            </tr> */}

        </div>
    );
};

export default MyOrders;