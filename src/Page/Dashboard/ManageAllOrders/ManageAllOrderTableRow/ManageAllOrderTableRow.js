import React from 'react';

const ManageAllOrderTableRow = ({ index, order, cancelOrderHandler, shippedOrderHandler }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order?.productName}</td>
            <td>{order?.customerName}</td>
            <td>${order?.totalPrice}</td>
            <td>{order?.transactionId}</td>
            <td>
                {
                    order?.paymentStatus ? <div className="badge bg-green-600 text-white border-0">{order?.paymentStatus}</div> : <div className="badge bg-red-300 border-0 text-white">unpaid</div>
                }
            </td>
            <td>
                {
                    order?.paymentStatus ? (order?.paymentStatus == 'pending' ? <label onClick={() => shippedOrderHandler(order?._id)} htmlFor="manage-all-orders-shipped-modal" className="btn btn-xs bg-green-800 border-0 text-white">Shipped</label> : '') : <label onClick={() => cancelOrderHandler(order?._id)} htmlFor="manage-all-orders-delete-modal" className="btn btn-xs bg-red-600 border-0 text-white ">Cancel</label>


                }
            </td>
        </tr>
    );
};

export default ManageAllOrderTableRow;