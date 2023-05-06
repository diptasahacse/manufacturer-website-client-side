import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';
import Loading from '../../../Shared/Loading/Loading';

const UserRow = ({ index, singleUser, refetch }) => {
    const [user, loading, error] = useAuthState(auth);
    const { email } = singleUser;


    const createAdminHandler = (email) => {
        

        fetch(`${process.env.REACT_APP_SERVER_API_KEY}/admin/createadmin/${email}`, {
            method: "PUT",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }

        })
            .then(res => {
                
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                
                if (data.modifiedCount > 0) {
                    refetch()
                    toast(`Successfully made an admin for ${email}`)

                }

            })

    }
    const removeAdminHandler = (email) => {
        fetch(`${process.env.REACT_APP_SERVER_API_KEY}/admin/removeadmin/${email}`, {
            method: "PUT",
            headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }

        })
            .then(res => {
               
                if (res.status === 403) {
                    toast.error('Failed to remove an admin')
                }
                return res.json()
            })
            .then(data => {
               
                if (data.modifiedCount > 0) {
                    refetch()
                    toast(`Successfully remove an admin for ${email}`)

                }

            })

    }




    if (loading) {
        return <Loading></Loading>
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={singleUser?.img ? singleUser?.img : 'https://i.ibb.co/6tx0kNh/user.png'} alt='' />
                    </div>
                </div>
            </td>
            <td className={user.email === email && 'text-primary font-bold'}>{user.email === email ? email + " (You)" : email}  </td>
            <td><button onClick={() => { createAdminHandler(email) }} disabled={singleUser?.role} className="btn btn-xs bg-green-600 border-0 text-white">Make Admin</button></td>
            <td><button onClick={() => { removeAdminHandler(email) }} disabled={user.email === email || !singleUser?.role} className='btn btn-xs bg-red-600 border-0 text-white'>Remove Admin</button></td>
        </tr>
    );
};

export default UserRow;