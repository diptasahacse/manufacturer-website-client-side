import React from 'react';
import { toast } from 'react-toastify';

const ProductDeleteModal = ({ selectedProduct, setSelectedProduct, refetch }) => {
    const { _id } = selectedProduct;
    console.log(_id)

    const deleteListener = () => {



        fetch(`http://localhost:5000/products/${_id}`, {
            method: "DELETE",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setSelectedProduct({})
                    toast("You have successfully deleted");
                    refetch()


                }


            })

    }
    return (
        <div>
            <input type="checkbox" id="product-delete-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="product-delete-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Are you sure want to delete..?</h3>
                    <div>
                        <button onClick={deleteListener} className='btn btn-error'>Yes</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDeleteModal;