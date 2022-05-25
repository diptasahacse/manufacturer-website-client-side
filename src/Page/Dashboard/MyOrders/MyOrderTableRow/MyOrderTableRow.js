import React from 'react';
import { Link } from 'react-router-dom';

const MyOrderTableRow = ({ order, index }) => {
    const { address, customerEmail, productName, phone, quantity, totalPrice,_id } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{customerEmail}</td>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>${totalPrice}</td>
            <td>{address}</td>
            <td>{phone}</td>
            <td>{order.paymentStatus? <div class="badge badge-success text-white">paid</div> : <Link className='btn btn-xs btn-info' to={`/dashboard/payment/${_id}`}>Pay</Link> }</td>
            <td><button class="btn btn-error btn-xs text-white">Cancel</button></td>
        </tr>
    );
};

export default MyOrderTableRow;