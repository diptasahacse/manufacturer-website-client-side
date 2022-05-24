import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);

    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.email}`, {
            method: "GET",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        })
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [user])
    // console.log(userInfo, user)


    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className='p-7 rounded-2xl' style={{ backgroundColor: "#FFFFFF" }}>
                <div className='grid grid-cols-3'>
                    <div className=''>
                        <div className='avatar online'>
                            <div class="w-40 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=28212" />
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

        </div>
    );
};

export default MyProfile;