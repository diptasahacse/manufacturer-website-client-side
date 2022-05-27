import React from 'react';

const ManageAllOrderTableRow = ({ index, order, cancelOrderHandler }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order?.productName}</td>
            <td>{order?.customerName}</td>
            <td>${order?.totalPrice}</td>
            <td>{order?.transactionId}</td>
            <td>
                {
                    order?.paymentStatus ? <div class="badge badge-info">{order?.paymentStatus}</div> : <div class="badge badge-error">unpaid</div>
                }
            </td>
            <td>
                {
                    order?.paymentStatus ? <button className='btn btn-success btn-xs'>Shipped</button> : <label onClick={()=>cancelOrderHandler(order?._id)} for="manage-all-orders-delete-modal" class="btn btn-xs btn-error">Cancel</label>

                    
                }
            </td>
        </tr>
    );
};

export default ManageAllOrderTableRow;