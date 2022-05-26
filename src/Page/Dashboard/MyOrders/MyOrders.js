import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import MyOrderTableRow from './MyOrderTableRow/MyOrderTableRow';
import OrderDeleteModal from './OrderDeleteModal/OrderDeleteModal';

const MyOrders = () => {
    // const [myOrders, setMyOrders] = useState([]);
    const [selectedOrders, setSelectedOrders] = useState({});
    const [user, loading] = useAuthState(auth);


    const { isLoading, error, data, refetch } = useQuery('myOrders', () =>
        fetch(`http://localhost:5000/orders/${user?.email}`, {
            method: "GET",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }

        }).then(res =>
            res.json()
        )
    )
    // useEffect(() => {
    //     fetch(`http://localhost:5000/orders/${user?.email}`, {
    //         method: "GET",
    //         headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             setMyOrders(data)
    //         })

    // }, [user?.email])

    const deleteOrderHandler = (id) => {
        const selected = data.find(order => order._id === id);
        setSelectedOrders(selected)
        refetch()

    }



    if (loading || isLoading) {
        return <Loading></Loading>
    }


    // console.log(myOrders)
    return (
        <div className='p-7 rounded-2xl' style={{ backgroundColor: "#FFFFFF" }}>
            <h3 className='text-3xl font-semibold text-primary'>My Orders</h3>

            <div className='mt-5'>
                {
                    data.length > 0 ? <>
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
                                        data.map((order, index) => <MyOrderTableRow deleteOrderHandler={deleteOrderHandler} index={index} order={order} key={order._id}></MyOrderTableRow>)
                                    }


                                </tbody>
                                {Object.keys(selectedOrders).length > 0 && <OrderDeleteModal refetch={refetch} setSelectedOrders={setSelectedOrders} selectedOrders={selectedOrders}></OrderDeleteModal>}

                            </table>
                        </div>
                    </>
                        :
                        <div>
                            <p className='text-center'>No orders available at this moment</p>

                        </div>
                }


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