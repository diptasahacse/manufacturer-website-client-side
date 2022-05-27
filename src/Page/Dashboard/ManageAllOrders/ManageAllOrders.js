import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ManageAllOrderDeleteModal from './ManageAllOrderDeleteModal/ManageAllOrderDeleteModal';
import ManageAllOrderTableRow from './ManageAllOrderTableRow/ManageAllOrderTableRow';

const ManageAllOrders = () => {
    const [selectedOrder, setSelectedOrder] = useState({})
    const { isLoading, data, refetch } = useQuery(['allOrders'], () =>
        fetch(`http://localhost:5000/orders`, {
            method: "GET",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }

        }).then(res =>
            res.json()
        )
    )
    const cancelOrderHandler = (id) =>{
        const select = data.find(order => order._id === id);
        setSelectedOrder(select)

    }

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
                                data.map((order,index) => <ManageAllOrderTableRow cancelOrderHandler={cancelOrderHandler} index={index} key={order._id} order={order}></ManageAllOrderTableRow>)
                            }

                        </tbody>
                    </table>
                    <div>
                        {
                            Object.keys(selectedOrder).length > 0 && <ManageAllOrderDeleteModal refetch={refetch} setSelectedOrder={setSelectedOrder} selectedOrder={selectedOrder}></ManageAllOrderDeleteModal>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageAllOrders;