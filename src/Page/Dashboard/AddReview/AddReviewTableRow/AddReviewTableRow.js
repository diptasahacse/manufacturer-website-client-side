import React from 'react';


const AddReviewTableRow = ({ index, order, addReviewHandlerListener, showReviewHandlerListener }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order?.customerName}</td>
            <td>{order?.productName}</td>
            <td>{order?.transactionId}</td>
            <td>
                {order.review ? <label onClick={() => showReviewHandlerListener(order._id)} for="show-review-modal" className='btn btn-xs btn-primary'>Show review</label> : <label onClick={() => addReviewHandlerListener(order._id)} for="add-review-modal" className='btn btn-xs btn-success'>Add Review</label>}
            </td>
        </tr>
    );
};

export default AddReviewTableRow;