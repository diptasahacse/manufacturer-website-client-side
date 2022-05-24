import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);

    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/user/${user?.email}`)
            .then(res => res.json())
            .then(data => setUserInfo(data))
    }, [user])
    console.log(userInfo, user)


    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <h3>My Profile</h3>
            <div>
                <p>Name: {user?.displayName}</p>
                <p>Email: {user?.email}</p>
                <p>Role: {userInfo?.role ? userInfo.role : "Customer"}</p>
                <p>Last Login: {userInfo?.lastLoginTime}</p>

            </div>

        </div>
    );
};

export default MyProfile;