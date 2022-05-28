
import React from 'react';

const ProductTableRow = ({ product, index, productDeleteHandler, }) => {
    const {  name } = product;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>

            <td>
                <div className="avatar">
                    <div className="w-24 rounded-xl">
                        <img src={product?.img} alt='' />
                    </div>
                </div>

            </td>
           
            <td>
                <label onClick={() => productDeleteHandler(product._id)} htmlFor="product-delete-modal" className="btn btn-sm bg-red-600 border-0 text-white">Delete</label>
            </td>
            
        </tr>
    );
};

export default ProductTableRow;