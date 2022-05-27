import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderTableRow = ({ order, index, deleteOrderHandler }) => {
    const { address, customerEmail, productName, phone, quantity, totalPrice, _id } = order;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{customerEmail}</td>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>${totalPrice}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>
                {
                    order?.paymentStatus ?
                        <div class="badge badge-success text-white">{order?.paymentStatus}</div>
                        :
                        <Link className='btn btn-xs btn-info' to={`/dashboard/payment/${_id}`}>Pay</Link>
                }
            </td>
            <td>{order?.paymentStatus ? <></> : <label onClick={() => deleteOrderHandler(_id)} for="order-delete-modal" class="btn btn-error btn-xs">Cancel</label>}</td>
        </tr>
        // 

    );
};

export default MyOrderTableRow;