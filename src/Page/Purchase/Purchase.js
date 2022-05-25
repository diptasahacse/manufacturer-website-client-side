import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';

const Purchase = () => {
    const { productId } = useParams();
    const [productInfo, setProductInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        fetch(`http://localhost:5000/products/${productId}`, {
            method: "GET",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => res.json())
            .then(data => {
                setProductInfo(data);
                setIsLoading(false)

            })

    }, [productId])

    if (isLoading) {

        return <Loading></Loading>
    }
    console.log(productInfo)
    return (
        <div className='py-10'>
            <div className='px-5 lg:px-20 max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    <div className=''>
                        <div class="avatar flex justify-center">
                            <div class="w-9/12 lg:w-full rounded-xl">
                                <img src={productInfo?.img} alt={productInfo?.name} />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-1 lg:col-span-2'>

                        <div className='bg-accent p-5 rounded-2xl'>
                            <h2 className='text-3xl font-semibold text-primary'>{productInfo?.name}</h2>
                            <p className='mt-3 text-lg'>{productInfo?.des}</p>
                            <div className='flex flex-col lg:flex-row justify-between mt-5'>
                                <div>
                                    <p className='text-lg font-semibold'>Price</p>
                                    <p className='text-xl font-bold text-primary'>${productInfo?.price}<span className='text-xs font-normal'>/unit</span></p>
                                </div>
                                <div>
                                    <p className='text-lg font-semibold'>Minimum Quantity Order</p>
                                    <p className='text-xl font-bold text-primary'>{productInfo?.minOrderQuantity} <span className='text-sm font-normal'>piece</span> </p>
                                </div>
                                <div>
                                    <p className='text-lg font-semibold'>Available Quantity</p>
                                    <p className='text-xl font-bold text-primary'>{productInfo?.availableQuantity} <span className='text-sm font-normal'>piece</span> </p>
                                </div>
                            </div>
                            <div className='mt-10 flex items-center'>
                                <h2 className='text-4xl font-semibold text-primary'>Total: ${productInfo?.price * productInfo?.minOrderQuantity} </h2>
                                <span className='font-light text-sm ml-3'>( ${productInfo?.price} X {productInfo?.minOrderQuantity} )</span>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Purchase;