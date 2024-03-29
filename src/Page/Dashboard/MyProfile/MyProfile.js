import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import { useForm } from 'react-hook-form';
const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [shouldUpdate, setShouldUpdate] = useState(0)
    const [infoUploadLoading, setInfoUploadLoading] = useState(false)
    const [userInfo, setUserInfo] = useState({})
    const imageStorageKey = '109d0f5e631e791da81874122264ddf5';

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_API_KEY}/user/${user?.email}`, {
            method: "GET",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.message == 'Forbidden access') {
                    toast.error('Yor Session is Expired.. Please Login Again');
                    signOut(auth)


                }
                else {
                    setUserInfo(data)
                }
            })
    }, [user, shouldUpdate])
    


    const onInfoSubmitHandler = (data) => {
        setInfoUploadLoading(true)

        // Img Start
        const img = data.profileImage[0];
        const formData = new FormData();
       

        const { city, education, linkedin, phone } = data;

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

                    const userData = { img, city, education, linkedin, phone }

                    fetch(`${process.env.REACT_APP_SERVER_API_KEY}/user/info/${userInfo._id}`, {
                        method: "PUT",
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userData)

                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data?.acknowledged) {
                                toast('Successfully Uploaded')
                                setInfoUploadLoading(false)
                                reset()
                                setShouldUpdate(shouldUpdate + 1)

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



    if (loading || infoUploadLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className='p-3 lg:p-7  rounded-2xl' style={{ backgroundColor: "#FFFFFF" }}>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                    <div className='flex justify-center lg:justify-start items-center md:items-start'>
                        <div className='avatar online'>
                            <div className="w-40 ring-4 ring-primary rounded-full">
                                <img src={userInfo.img ? userInfo.img : 'https://i.ibb.co/6tx0kNh/user.png'} alt='' />
                            </div>
                        </div>

                    </div>
                    <div className='col-span-2'>
                        <div className='text-center lg:text-left'>
                            <h2 className='text-5xl font-semibold'>{user?.displayName}</h2>
                            <div className='mt-2'>
                                {
                                    userInfo?.role ?
                                        <p className='text-xl text-green-500 font-semibold'>Admin</p> :
                                        <p className='text-xl text-primary font-semibold'>Verified Customer
                                            <span className='ml-2'><FontAwesomeIcon icon={faCircleCheck} /></span>
                                        </p>
                                }

                            </div>
                            <p className='text-sm'>{user?.email}</p>
                            <p className='text-xs'>Last Login: {userInfo?.lastLoginTime}</p>


                        </div>

                        <div className='mt-4 border-2 p-2 rounded-xl border-primary'>
                            <p className='text-gray-700 font-semibold'>Education: {userInfo?.education ? <span className='font-normal text-orange-600'>{userInfo?.education}</span> : <span className='text-gray-400 font-normal'>Not Uploaded yet</span>}</p>

                            <p className='text-gray-700 font-semibold'>From: {userInfo?.city ? <span className='font-normal text-orange-600'>{userInfo?.city}</span> : <span className='text-gray-400 font-normal'>Not Uploaded yet</span>}</p>

                            <p className='text-gray-700 font-semibold'>Phone: {userInfo?.phone ? <span className='font-normal text-orange-600'>{userInfo?.phone}</span> : <span className='text-gray-400 font-normal'>Not Uploaded yet</span>}</p>

                            <p className='text-gray-700 font-semibold'>LinkedIn: {userInfo?.linkedin ? <span className='font-normal text-orange-600'>{userInfo?.linkedin}</span> : <span className='text-gray-400 font-normal'>Not Uploaded yet</span>}</p>


                        </div>



                    </div>


                </div>


            </div>


            <div className='p-3 lg:p-7 mt-5 rounded-2xl' style={{ backgroundColor: "#FFFFFF" }}>
                <h3 className='text-xl font-semibold text-primary'>Update Your Info</h3>

                <div className='mt-5 p-5 rounded-2xl' style={{ backgroundColor: "#F4F8FB" }}>
                    <h3>Upload Your Profile Picture</h3>
                    <form onSubmit={handleSubmit(onInfoSubmitHandler)}>
                        {/* Profile Picture */}
                        <div className="form-control">
                            <input
                                {...register("profileImage",
                                    {
                                        required: {
                                            value: true,
                                            message: "Image is required"
                                        }
                                    }
                                )}
                                type="file"
                                className="input input-bordered"
                            />
                            <label className="label">
                                {errors.profileImage?.type === 'required' && <span className="label-text-alt text-red-600">{errors.profileImage.message}</span>}

                            </label>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>

                            {/* Education */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Education</span>
                                </label>
                                <input
                                    {...register("education",
                                        {
                                            required: {
                                                value: true,
                                                message: "Education is required"
                                            }

                                        }
                                    )}
                                    type="text"
                                    placeholder="Education"
                                    className="input input-bordered w-full"
                                />
                                <label className="label">
                                    {errors.education?.type === 'required' && <span className="label-text-alt text-red-600">{errors.education.message}</span>}
                                </label>
                            </div>

                            {/* City */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">City</span>
                                </label>
                                <input
                                    {...register("city",
                                        {
                                            required: {
                                                value: true,
                                                message: "City is required"
                                            }

                                        }
                                    )}
                                    type="text"
                                    placeholder="City"
                                    className="input input-bordered w-full"
                                />
                                <label className="label">
                                    {errors.city?.type === 'required' && <span className="label-text-alt text-red-600">{errors.city.message}</span>}
                                </label>
                            </div>
                            {/* Phone */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input
                                    {...register("phone",
                                        {
                                            required: {
                                                value: true,
                                                message: "Phone is required"
                                            }

                                        }
                                    )}
                                    type="text"
                                    placeholder="Phone"
                                    className="input input-bordered w-full"
                                />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red-600">{errors.phone.message}</span>}
                                </label>
                            </div>
                            {/* Linkedin */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">LinkedIn</span>
                                </label>
                                <input
                                    {...register("linkedin",
                                        {
                                            required: {
                                                value: true,
                                                message: "Linked id is required"
                                            }

                                        }
                                    )}
                                    type="text"
                                    placeholder="Linkedin Link"
                                    className="input input-bordered w-full"
                                />
                                <label className="label">
                                    {errors.linkedin?.type === 'required' && <span className="label-text-alt text-red-600">{errors.linkedin.message}</span>}
                                </label>
                            </div>

                        </div>



                        <input className='btn btn-primary btn-sm' type="submit" value='Upload' />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default MyProfile;