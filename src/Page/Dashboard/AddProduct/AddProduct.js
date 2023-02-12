import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imageStorageKey = '9cbe2f217d3063f88fac19b983e298e3';
    const [infoUploadLoading, setInfoUploadLoading] = useState(false)


    const OnProductSubmitListener = (data) => {
        
        setInfoUploadLoading(true)

        // Img Start
        const img = data.productImage[0];
        const formData = new FormData();
        

        const { price, availableQuantity, description, minQuantity, productName } = data;

        formData.append('image', img)
        

        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;

                    const productData = {
                        name: productName, img, minOrderQuantity: Number(minQuantity), availableQuantity: Number(availableQuantity), price: Number(price), des: description
                    }
                    

                    fetch(`http://localhost:5000/products`, {
                        method: "POST",
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(productData)

                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data?.acknowledged) {
                                toast('Successfully Uploaded')
                                setInfoUploadLoading(false)
                                reset()


                            }
                            else {
                                toast.error("Went Wrong")
                                setInfoUploadLoading(false)

                            }
                        })




                }
                else {
                    toast.error("Went Wrong")
                    setInfoUploadLoading(false)
                }
            })


    }
    if (infoUploadLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='p-7 rounded-2xl' style={{ backgroundColor: "#FFFFFF" }}>
            <h3 className='text-3xl font-semibold text-primary'>Add Product</h3>


            <div className='mt-5'>
                <form onSubmit={handleSubmit(OnProductSubmitListener)}>
                    {/* Product Image */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Product Image</span>
                        </label>
                        <input
                            {...register("productImage",
                                {
                                    required: {
                                        value: true,
                                        message: "Product Image is required"
                                    }
                                }
                            )}
                            type="file"
                            className="input input-bordered"
                        />
                        <label className="label">
                            {errors.productImage?.type === 'required' && <span className="label-text-alt text-red-600">{errors.productImage.message}</span>}

                        </label>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        {/* Product Name */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input
                                {...register("productName",
                                    {
                                        required: {
                                            value: true,
                                            message: "Product Name is required"
                                        }

                                    }
                                )}
                                type="text"
                                placeholder="Product Name"
                                className="input input-bordered w-full"
                            />
                            <label className="label">
                                {errors.productName?.type === 'required' && <span className="label-text-alt text-red-600">{errors.productName.message}</span>}
                            </label>
                        </div>
                        {/* Available Quantity */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <input
                                {...register("availableQuantity",
                                    {
                                        required: {
                                            value: true,
                                            message: "Available Quantity is required"
                                        }

                                    }
                                )}
                                type="number"
                                placeholder="Available Quantity"
                                className="input input-bordered w-full"
                            />
                            <label className="label">
                                {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-600">{errors.availableQuantity.message}</span>}
                            </label>
                        </div>
                        {/* Minimum Quantity */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Minimum Quantity </span>
                            </label>
                            <input
                                {...register("minQuantity",
                                    {
                                        required: {
                                            value: true,
                                            message: "Minimum Quantity  is required"
                                        }

                                    }
                                )}
                                type="number"
                                placeholder="Minimum Quantity "
                                className="input input-bordered w-full"
                            />
                            <label className="label">
                                {errors.minQuantity?.type === 'required' && <span className="label-text-alt text-red-600">{errors.minQuantity.message}</span>}
                            </label>
                        </div>
                        {/* Price */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input
                                {...register("price",
                                    {
                                        required: {
                                            value: true,
                                            message: "Price is required"
                                        }

                                    }
                                )}
                                type="number"
                                placeholder="Price"
                                className="input input-bordered w-full"
                            />
                            <label className="label">
                                {errors.Price?.type === 'required' && <span className="label-text-alt text-red-600">{errors.Price.message}</span>}
                            </label>
                        </div>
                        {/* Short Description */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <textarea {
                                ...register("description",
                                    {
                                        required: {
                                            value: true,
                                            message: "Short Description is required"
                                        }

                                    }
                                )
                            } placeholder='Short Description' className='border p-4 rounded-lg focus:outline focus:outline-2 focus:outline-primary focus:outline-offset-2' rows="5"></textarea>
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-red-600">{errors.description.message}</span>}

                            </label>
                        </div>
                    </div>
                    <input className='btn btn-primary btn-sm' type="submit" value='Upload' />
                </form>

            </div>

        </div>
    );
};

export default AddProduct;