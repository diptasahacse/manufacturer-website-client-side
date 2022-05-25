import React from 'react';

const OrderDeleteModal = ({selectedOrders}) => {
    const {productName} = selectedOrders;
    
    return (
        <div>
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="order-delete-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="order-delete-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold text-error">Are you sure want to delete <span>{productName}</span> order ..?</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                </div>
            </div>

        </div >
    );
};

export default OrderDeleteModal;