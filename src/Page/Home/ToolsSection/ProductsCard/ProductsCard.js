import React from 'react';

const ProductsCard = ({ tool }) => {
    const { availableQuantity, des, img, minOrderQuantity, name, price } = tool;
    return (
        <div class="card bg-base-100 shadow-xl">
            <figure><img className='h-3/4' src={img} alt={name} /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{des.length > 50 ? des.slice(0, 50) + ".." : des}</p>
                <div className='flex justify-between'>
                    <p className='font-light text-sm'>Available Quantity:</p>
                    <p className='font-semibold text-sm text-right'>{availableQuantity} piece</p>
                </div>
                <div className='flex justify-between'>
                    <p className='font-light text-sm'>Min. Order Quantity:</p>
                    <p className='font-semibold text-sm text-right'>{minOrderQuantity} piece</p>
                </div>
                <div className='flex justify-between'>
                    <p className='font-light text-sm'>Price:</p>
                    <p className='font-semibold text-sm text-right'>${price}/piece</p>
                </div>
                <div class="card-actions mt-3 justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;