
import React from 'react';

const ProductTableRow = ({ product, index, productDeleteHandler, }) => {
    const {  name } = product;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>

            <td>
                <div class="avatar">
                    <div class="w-24 rounded-xl">
                        <img src={product?.img} alt='' />
                    </div>
                </div>

            </td>
           
            <td>
                <label onClick={() => productDeleteHandler(product._id)} for="product-delete-modal" class="btn btn-sm bg-red-600 border-0 text-white">Delete</label>
            </td>
            
        </tr>
    );
};

export default ProductTableRow;