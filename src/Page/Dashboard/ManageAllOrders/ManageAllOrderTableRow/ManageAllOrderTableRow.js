import React from 'react';

const ManageAllOrderTableRow = ({ index, order }) => {
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
                    order?.paymentStatus ? <button className='btn btn-success btn-xs'>Shipped</button> : <button className='btn btn-xs btn-error'>Cancel</button>
                }
            </td>
        </tr>
    );
};

export default ManageAllOrderTableRow;