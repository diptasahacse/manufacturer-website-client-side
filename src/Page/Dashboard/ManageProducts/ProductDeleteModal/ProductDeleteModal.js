import React from 'react';
import { toast } from 'react-toastify';

const ProductDeleteModal = ({ selectedProduct, setSelectedProduct, refetch }) => {
    const { _id, name } = selectedProduct;


    const deleteListener = () => {



        fetch(`https://infinite-chamber-43931.herokuapp.com/products/${_id}`, {
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
            <input type="checkbox" id="product-delete-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label for="product-delete-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-red-600">Are you sure want to delete <span className='text-primary'>{name}</span> ..?</h3>
                    <p>After delete this product, you can not undo it.</p>
                    <div className='text-right'>
                        <button onClick={deleteListener} disabled className='btn btn-sm bg-red-600 border-0'>Yes</button>



                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDeleteModal;