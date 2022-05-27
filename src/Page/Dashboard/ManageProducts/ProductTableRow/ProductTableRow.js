import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
const ProductTableRow = ({ product, index, productDeleteHandler, productUpdateHandler }) => {
    const { availableQuantity, name, price, minOrderQuantity, img } = product;
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
            <td>
                <label onClick={() => productUpdateHandler(product._id)} for="product-update-modal" class="btn btn-sm bg-green-500 border-0 text-white">Update</label>
            </td>
        </tr>
    );
};

export default ProductTableRow;