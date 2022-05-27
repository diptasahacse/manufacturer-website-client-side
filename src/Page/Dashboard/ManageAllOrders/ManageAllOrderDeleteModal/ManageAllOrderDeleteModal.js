import React from 'react';
import { toast } from 'react-toastify';

const ManageAllOrderDeleteModal = ({ refetch, setSelectedOrder, selectedOrder }) => {
    const { customerName, productName, totalPrice, _id } = selectedOrder;
    const orderDeleteHandler = () => {
        fetch(`http://localhost:5000/orders/${_id}`, {
            method: "DELETE",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setSelectedOrder({})
                    toast("You have successfully deleted");
                    refetch()


                }


            })

    }
    return (
        <div>
            <input type="checkbox" id="manage-all-orders-delete-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="manage-all-orders-delete-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Are you sure want to delete <span className='text-primary'>{customerName}</span>'s this order, product name <span className='text-primary'>{productName}</span> and total price <span className='text-primary'>${totalPrice}</span>? </h3>
                    <p class="py-4">You can't undo after delete this order.</p>
                    <div className='text-right'>
                        <button onClick={orderDeleteHandler} className='btn btn-sm btn-primary'>Yes</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageAllOrderDeleteModal;