import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ManageAllOrderTableRow from './ManageAllOrderTableRow/ManageAllOrderTableRow';

const ManageAllOrders = () => {
    const { isLoading, data, refetch } = useQuery(['allOrders'], () =>
        fetch(`http://localhost:5000/orders`, {
            method: "GET",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }

        }).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(data)
    return (
        <div className='p-7 rounded-2xl' style={{ backgroundColor: "#FFFFFF" }}>
            <h3 className='text-3xl font-semibold text-primary'>Manage All Orders</h3>

            <div className='mt-5'>
                <div class="overflow-x-auto">
                    <table class="table w-full">

                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Customer Name</th>
                                <th>Amount</th>
                                <th>Transaction ID</th>
                                <th>Payment Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((order,index) => <ManageAllOrderTableRow index={index} key={order._id} order={order}></ManageAllOrderTableRow>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageAllOrders;