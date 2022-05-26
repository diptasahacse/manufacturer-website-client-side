import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);

    const [userInfo, setUserInfo] = useState({})

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
                {/* <p>Name: {user?.displayName}</p>
                <p>Email: {user?.email}</p>
                <p>Role: {userInfo?.role ? userInfo.role : "Customer"}</p>
                <p>Last Login: {userInfo?.lastLoginTime}</p> */}

            </div>
            <div className='p-7 mt-5 rounded-2xl' style={{ backgroundColor: "#FFFFFF" }}>
                <h3 className='text-xl font-semibold text-primary'>Update Your Info</h3>

            </div>

        </div>
    );
};

export default MyProfile;