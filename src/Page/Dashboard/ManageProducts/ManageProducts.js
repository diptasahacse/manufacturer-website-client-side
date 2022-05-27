import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ProductDeleteModal from './ProductDeleteModal/ProductDeleteModal';
import ProductTableRow from './ProductTableRow/ProductTableRow';
import ProductUpdateModal from './ProductUpdateModal/ProductUpdateModal';

const ManageProducts = () => {
    const [selectedProduct, setSelectedProduct] = useState({})
    const [selectedProductForUpdate, setSelectedProductForUpdate] = useState({})

    const { isLoading, data, refetch } = useQuery(['allProducts'], () =>
        fetch(`http://localhost:5000/products`, {
            method: "GET",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }

        }).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    const productDeleteHandler = (id) => {

        const product = data.find(pro => pro._id === id);
        setSelectedProduct(product)
        refetch()


    }
    const productUpdateHandler = (id) => {

        const product = data.find(pro => pro._id === id);
        setSelectedProductForUpdate(product)
        refetch()


    }

    return (
        <div className='p-7 rounded-2xl' style={{ backgroundColor: "#FFFFFF" }}>
            <h3 className='text-3xl font-semibold text-primary'>Manage Products</h3>


            <div className='mt-5'>
                <div class="overflow-x-auto">
                    <table class="table w-full">

                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Action</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((product, index) => <ProductTableRow productUpdateHandler={productUpdateHandler} productDeleteHandler={productDeleteHandler} key={product._id} index={index} product={product}></ProductTableRow>)
                            }

                        </tbody>
                    </table>
                    <div>
                        {
                            Object.keys(selectedProduct).length > 0 && <ProductDeleteModal refetch={refetch} setSelectedProduct={setSelectedProduct} selectedProduct={selectedProduct}></ProductDeleteModal>
                        }
                        {
                            Object.keys(selectedProductForUpdate).length > 0 && <ProductUpdateModal refetch={refetch} setSelectedProductForUpdate={setSelectedProductForUpdate} selectedProductForUpdate={selectedProductForUpdate}></ProductUpdateModal>
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ManageProducts;