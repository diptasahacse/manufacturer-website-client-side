import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../../Shared/Loading/Loading';

const ManageAllOrderShippedModal = ({ refetch, setSelectedOrderForShipped, selectedOrderForShipped }) => {
    const { _id, quantity, productName, productId } = selectedOrderForShipped;
    const { isLoading, data } = useQuery(['singleProductForShippedModal'], () =>
        fetch(`http://localhost:5000/products/${productId}`, {
            method: "GET",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }

        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>

    }
    const shippedHandleListener = () => {
        const updateAvailableQuantity = data?.availableQuantity - quantity;
        fetch(`http://localhost:5000/orders/payment/${_id}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({ productId, updateAvailableQuantity })


        })
            .then(res => res.json())
            .then(data => {
                if (data?.orderResult?.acknowledged) {
                    toast('Successfully Shipped');
                    setSelectedOrderForShipped({})
                    refetch()

                }
                else {
                    setSelectedOrderForShipped({})
                    toast.error('Something went wrong');

                }
            })



    }

    return (
        <div>
            <input type="checkbox" id="manage-all-orders-shipped-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="manage-all-orders-shipped-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold text-primary">Is this Order ready to ship..?</h3>
                    <p class="py-4">If your click <span className='text-primary'>'YES'</span> then the available quantity will decrease by <span className='text-primary'>{quantity}</span> from <span className='text-primary'>{productName} </span>product. </p>
                    <div>
                        <p>Before Available Quantity: <span className='text-primary'>{data?.availableQuantity}</span> </p>
                        <p>After Available Quantity: <span className='text-primary'>{data?.availableQuantity - quantity}</span> </p>
                    </div>
                    <div className='text-right mt-4'>
                        <button disabled={data?.availableQuantity - quantity < 0} onClick={shippedHandleListener} className='btn btn-sm btn-primary'>{data?.availableQuantity - quantity < 0 ? "Please Update Available Quantity First" : "Yes"}</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageAllOrderShippedModal;