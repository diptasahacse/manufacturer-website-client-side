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

    const [userInfo, setUserInfo] = useState({})
    const imageStorageKey = '7f72d87979e17c6504f5811b2f68d7d4';

    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.email}`, {
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
    }, [user])
    console.log(userInfo)

    // OnSubmit For Image Upload
    const onProfilePictureSubmitHandler = (event) => {
        // event.preventDefault()

    }
    // OnSubmit For Education Status upload
    const onEducationStatusSubmitHandler = (event) => {
        // event.preventDefault()

    }
    // OnSubmit For City Upload
    const onCitySubmitHandler = (event) => {
        // event.preventDefault()

    }
    // OnSubmit For Phone Upload
    const onPhoneSubmitHandler = (event) => {
        // event.preventDefault()

    }
    // OnSubmit For Phone Upload
    const onLinkedInSubmitHandler = (event) => {
        // event.preventDefault()

    }


    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className='p-7 rounded-2xl' style={{ backgroundColor: "#FFFFFF" }}>
                <div className='grid grid-cols-3'>
                    <div className=''>
                        <div className='avatar online'>
                            <div class="w-40 ring-4 ring-primary rounded-full">
                                <img src={userInfo.img ? userInfo.img : 'https://i.ibb.co/6tx0kNh/user.png'} alt='' />
                            </div>
                        </div>

                    </div>
                    <div className='col-span-2'>
                        <h2 className='text-5xl font-semibold'>{user?.displayName}</h2>
                        <div className='mt-2'>
                            {
                                userInfo?.role ?
                                    <p className='text-xl'>Admin</p> :
                                    <p className='text-xl text-primary font-semibold'>Verified Customer
                                        <span className='ml-2'><FontAwesomeIcon icon={faCircleCheck} /></span>
                                    </p>
                            }

                        </div>
                        <p className='text-xl'>Email: {user?.email}</p>
                        <p className='text-sm'>Last Login: {userInfo?.lastLoginTime}</p>



                    </div>


                </div>


            </div>


            <div className='p-7 mt-5 rounded-2xl' style={{ backgroundColor: "#FFFFFF" }}>
                <h3 className='text-xl font-semibold text-primary'>Update Your Info</h3>
                {/* Profile Picture */}
                <div className='mt-5 p-5 rounded-2xl' style={{ backgroundColor: "#F4F8FB" }}>
                    <h3>Upload Your Profile Picture</h3>
                    <form onSubmit={handleSubmit(onProfilePictureSubmitHandler)}>
                        <div className="form-control w-3/6">
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
                        <input className='btn btn-primary btn-sm' type="submit" value='Upload' />
                    </form>

                </div>
                {/* Education */}
                <div className='mt-5 p-5 rounded-2xl' style={{ backgroundColor: "#F4F8FB" }}>
                    <h3>Upload Your Profile Picture</h3>
                    <form onSubmit={handleSubmit(onEducationStatusSubmitHandler)}>
                        <div className="form-control w-3/6">
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
                        <input className='btn btn-primary btn-sm' type="submit" value='Upload' />
                    </form>

                </div>
                {/* Location */}
                <div className='mt-5 p-5 rounded-2xl' style={{ backgroundColor: "#F4F8FB" }}>
                    <h3>Upload Your Profile Picture</h3>
                    <form onSubmit={handleSubmit(onCitySubmitHandler)}>
                        <div className="form-control w-3/6">
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
                        <input className='btn btn-primary btn-sm' type="submit" value='Upload' />
                    </form>

                </div>
                {/* Phone */}
                <div className='mt-5 p-5 rounded-2xl' style={{ backgroundColor: "#F4F8FB" }}>
                    <h3>Upload Your Profile Picture</h3>
                    <form onSubmit={handleSubmit(onPhoneSubmitHandler)}>
                        <div className="form-control w-3/6">
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
                        <input className='btn btn-primary btn-sm' type="submit" value='Upload' />
                    </form>

                </div>
                {/* Phone */}
                <div className='mt-5 p-5 rounded-2xl' style={{ backgroundColor: "#F4F8FB" }}>
                    <h3>Upload Your Profile Picture</h3>
                    <form onSubmit={handleSubmit(onCitySubmitHandler)}>
                        <div className="form-control w-3/6">
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
                        <input className='btn btn-primary btn-sm' type="submit" value='Upload' />
                    </form>

                </div>



            </div>

        </div>
    );
};

export default MyProfile;