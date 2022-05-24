import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { productId } = useParams();
    console.log(productId)
    return (
        <div>

        </div>
    );
};

export default Purchase;