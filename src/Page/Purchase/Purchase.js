import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
    const { productId } = useParams();
    const [productInfo, setProductInfo] = useState({});
    const [orginalProductInfo, setOrginalProductInfo] = useState({});
    const [user, loading, error] = useAuthState(auth);
    const addressRef = useRef('')
    const phoneRef = useRef('')

    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true)
        fetch(`${process.env.REACT_APP_SERVER_API_KEY}/products/${productId}`, {
            method: "GET",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => res.json())
            .then(data => {
                setProductInfo(data);
                setOrginalProductInfo(data)
                setIsLoading(false)

            })

    }, [productId])
    const onQuantityChange = (event) => {

        const { minOrderQuantity, ...rest } = productInfo;
        const newQuantity = event.target.value;
        const newProductInfo = { minOrderQuantity: Number(newQuantity), ...rest }
        setProductInfo(newProductInfo)
    }

    const onPurchaseHandler = (event) => {
        event.preventDefault();
        const orders = {
            customerName: user?.displayName,
            customerEmail: user?.email,
            address: addressRef.current.value,
            phone: phoneRef.current.value,
            productId: orginalProductInfo?._id,
            productName: orginalProductInfo?.name,
            quantity: productInfo?.minOrderQuantity,
            totalPrice: productInfo?.minOrderQuantity * productInfo?.price

        }
        fetch('https://manufacturer-website-server-side-7dah.onrender.com/orders', {
            method: "POST",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'content-type': "application/json"
            },
            body: JSON.stringify(orders)

        })
            .then(res => res.json())
            .then(data => {
                if(data?.acknowledged){
                    toast("Your Order is successfully added.. please pay for this product in My Orders Page")

                }
            })
        

    }


    if (isLoading || loading) {

        return <Loading></Loading>
    }
    return (
        <div className='py-10'>
            <div className='px-5 lg:px-20 max-w-7xl mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    <div className='overflow-hidden purchase-product-image'>
                        <div className="avatar flex justify-center">
                            <div className="w-9/12 lg:w-full rounded-xl ">
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
                                <h2 className='text-3xl font-semibold text-primary'>Total: ${productInfo?.price * productInfo?.minOrderQuantity} </h2>
                                <span className='font-light text-sm ml-3'>( ${productInfo?.price} X {productInfo?.minOrderQuantity} )</span>

                            </div>
                            <div className='mt-10'>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text text-primary">How much you want..?</span>

                                    </label>
                                    <input onChange={onQuantityChange} type="number" value={productInfo?.minOrderQuantity} className="input input-bordered focus:outline-primary w-full max-w-xs" />
                                    <label className="label">
                                        {
                                            productInfo?.minOrderQuantity < orginalProductInfo?.minOrderQuantity && <span className="label-text-alt text-red-600">You have to purchase at least {orginalProductInfo?.minOrderQuantity} or more</span>
                                        }
                                        {
                                            productInfo?.minOrderQuantity > orginalProductInfo?.availableQuantity && <span className="label-text-alt text-red-600">You have to purchase at most {orginalProductInfo?.availableQuantity} or less</span>
                                        }
                                    </label>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div className='bg-accent mt-7 p-5 rounded-2xl'>
                    <div>
                        <div>
                            <h3 className='text-primary text-2xl font-bold'>Purchase</h3>
                        </div>
                        <form onSubmit={onPurchaseHandler}>
                            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-5'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" value={user?.displayName} disabled className="input focus:outline-primary input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" value={user?.email} disabled className="input focus:outline-primary input-bordered" />
                                </div>
                            </div>
                            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-5'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="tel" ref={phoneRef} required placeholder="Phone" className="input focus:outline-primary input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" ref={addressRef} required placeholder="Address" className="input focus:outline-primary input-bordered" />
                                </div>
                            </div>
                            <div className='mt-5 text-right'>
                                {
                                    (productInfo?.minOrderQuantity >= orginalProductInfo?.minOrderQuantity && productInfo?.minOrderQuantity <= orginalProductInfo?.availableQuantity) && <button type='submit' className="btn btn-primary">Purchase Now <span className='ml-2'><FontAwesomeIcon icon={faCartShopping} /></span></button>
                                }
                            </div>
                        </form>
                    </div>

                </div>




            </div>

        </div>
    );
};

export default Purchase;