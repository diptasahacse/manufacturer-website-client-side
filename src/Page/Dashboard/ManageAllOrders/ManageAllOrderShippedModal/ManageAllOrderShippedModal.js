import React from 'react';

const ManageAllOrderShippedModal = ({ refetch, setSelectedOrderForShipped, selectedOrderForShipped }) => {
    const { _id, quantity, productName } = selectedOrderForShipped;
    const shippedHandleListener = () => {

    }
    return (
        <div>
            <input type="checkbox" id="manage-all-orders-shipped-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="manage-all-orders-shipped-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold text-primary">Is this Order ready to ship..?</h3>
                    <p class="py-4">If your click <span className='text-primary'>'YES'</span> then the available quantity will decrease by <span className='text-primary'>{quantity}</span> from <span className='text-primary'>{productName} </span>product. </p>
                    <div className='text-right'>
                        <button onClick={shippedHandleListener} className='btn btn-sm btn-primary'>yes</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageAllOrderShippedModal;