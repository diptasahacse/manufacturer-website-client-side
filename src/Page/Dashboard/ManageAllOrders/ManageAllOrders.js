import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ManageAllOrderDeleteModal from './ManageAllOrderDeleteModal/ManageAllOrderDeleteModal';
import ManageAllOrderShippedModal from './ManageAllOrderShippedModal/ManageAllOrderShippedModal';
import ManageAllOrderTableRow from './ManageAllOrderTableRow/ManageAllOrderTableRow';

const ManageAllOrders = () => {
    const [selectedOrder, setSelectedOrder] = useState({})
    const [selectedOrderForShipped, setSelectedOrderForShipped] = useState({})
    const { isLoading, data, refetch } = useQuery(['allOrders'], () =>
        fetch(`${process.env.REACT_APP_SERVER_API_KEY}/orders`, {
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
    const shippedOrderHandler = (id) =>{
        const select = data.find(order => order._id === id);
        setSelectedOrderForShipped(select)

    }

    if (isLoading) {
        return <Loading></Loading>
    }
    
    return (
        <div className='p-7 rounded-2xl' style={{ backgroundColor: "#FFFFFF" }}>
            <h3 className='text-3xl font-semibold text-primary'>Manage All Orders</h3>

            <div className='mt-5'>
                <div className="overflow-x-auto">
                    <table className="table w-full">

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
                                data.map((order,index) => <ManageAllOrderTableRow shippedOrderHandler={shippedOrderHandler} cancelOrderHandler={cancelOrderHandler} index={index} key={order._id} order={order}></ManageAllOrderTableRow>)
                            }

                        </tbody>
                    </table>
                    <div>
                        {
                            Object.keys(selectedOrder).length > 0 && <ManageAllOrderDeleteModal refetch={refetch} setSelectedOrder={setSelectedOrder} selectedOrder={selectedOrder}></ManageAllOrderDeleteModal>
                        }
                        {
                            Object.keys(selectedOrderForShipped).length > 0 && <ManageAllOrderShippedModal refetch={refetch} setSelectedOrderForShipped={setSelectedOrderForShipped} selectedOrderForShipped={selectedOrderForShipped}></ManageAllOrderShippedModal>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageAllOrders;