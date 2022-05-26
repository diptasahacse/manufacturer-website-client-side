import React from 'react';

const OrderDeleteModal = ({ selectedOrders }) => {
    const { _id, productName } = selectedOrders;
    const cancleOrderHandler = () => {
        console.log(_id)

    }

    return (
        <div>
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="order-delete-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="order-delete-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Are you sure want to delete <span className='text-primary'>{productName}</span> order ..?</h3>
                    <p class="py-4">If you delete this order, you can not undo it later.</p>
                    <div className='text-right'>
                        <button onClick={cancleOrderHandler} className='btn text-white btn-error btn-sm'>Yes</button>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default OrderDeleteModal;