import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
const ProductUpdateModal = ({ selectedProductForUpdate, setSelectedProductForUpdate, refetch }) => {
    const { availableQuantity, name, price, minOrderQuantity, img } = selectedProductForUpdate;
    console.log(availableQuantity)
    return (
        <div>
            <input type="checkbox" id="product-update-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="product-update-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Update <span className='text-primary'>{name}</span> product</h3>
                    <div className='mt-3'>
                        <div className='mb-3'>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-primary font-semibold text-lg mr-4'>Price : </h3>
                                <div className='flex'>
                                    <div className='w-7 h-7 bg-green-600 rounded-full flex items-center justify-center hover:cursor-pointer mr-2'> <span className='text-white'><FontAwesomeIcon icon={faPlus} /></span> </div>
                                    <p>${price}</p>
                                    <div className='w-7 h-7 bg-red-600 rounded-full flex items-center justify-center hover:cursor-pointer ml-2'> <span className='text-white'><FontAwesomeIcon icon={faMinus} /></span> </div>
                                </div>
                            </div>
                            <hr className='mt-2' />
                        </div>
                        <div className='mb-3'>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-primary font-semibold text-lg mr-4'>Available Quantity : </h3>
                                <div className='flex'>
                                    <div className='w-7 h-7 bg-green-600 rounded-full flex items-center justify-center hover:cursor-pointer mr-2'> <span className='text-white'><FontAwesomeIcon icon={faPlus} /></span> </div>
                                    <p>{availableQuantity}</p>
                                    <div className='w-7 h-7 bg-red-600 rounded-full flex items-center justify-center hover:cursor-pointer ml-2'> <span className='text-white'><FontAwesomeIcon icon={faMinus} /></span> </div>
                                </div>
                            </div>
                            <hr className='mt-2' />
                        </div>
                        <div className='mb-3'>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-primary font-semibold text-lg mr-4'>Minimum quantity order : </h3>
                                <div className='flex'>
                                    <div className='w-7 h-7 bg-green-600 rounded-full flex items-center justify-center hover:cursor-pointer mr-2'> <span className='text-white'><FontAwesomeIcon icon={faPlus} /></span> </div>
                                    <p>{minOrderQuantity}</p>
                                    <div className='w-7 h-7 bg-red-600 rounded-full flex items-center justify-center hover:cursor-pointer ml-2'> <span className='text-white'><FontAwesomeIcon icon={faMinus} /></span> </div>
                                </div>
                            </div>
                            <hr className='mt-2' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductUpdateModal;